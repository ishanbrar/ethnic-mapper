import { Ethnicity } from '@/types/ethnicity';
import { Region } from '@/data/regions';
import { FilterState } from '@/components/FilterPanel';

// Helper function to categorize HDI values
export function categorizeHDI(hdi: string | undefined): string {
  if (!hdi) return 'unknown';
  
  const hdiLower = hdi.toLowerCase();
  
  if (hdiLower.includes('very high')) return 'very_high';
  if (hdiLower.includes('high')) return 'high';
  if (hdiLower.includes('medium')) return 'medium';
  if (hdiLower.includes('low')) return 'low';
  
  // Parse numeric HDI values if present
  const match = hdi.match(/\((\d+\.?\d*)\)/);
  if (match) {
    const value = parseFloat(match[1]);
    if (value >= 0.8) return 'very_high';
    if (value >= 0.7) return 'high';
    if (value >= 0.55) return 'medium';
    return 'low';
  }
  
  return 'unknown';
}

// Helper function to categorize religion
export function categorizeReligion(religion: string | undefined): string {
  if (!religion) return 'unknown';
  
  const religionLower = religion.toLowerCase();
  
  if (religionLower.includes('islam') || religionLower.includes('muslim')) return 'islam';
  if (religionLower.includes('christianity') || religionLower.includes('christian') || 
      religionLower.includes('catholic') || religionLower.includes('protestant') ||
      religionLower.includes('lutheran') || religionLower.includes('orthodox')) return 'christianity';
  if (religionLower.includes('judaism') || religionLower.includes('jewish')) return 'judaism';
  if (religionLower.includes('buddhism') || religionLower.includes('buddhist')) return 'buddhism';
  if (religionLower.includes('hinduism') || religionLower.includes('hindu')) return 'hinduism';
  if (religionLower.includes('sikhism') || religionLower.includes('sikh')) return 'sikhism';
  if (religionLower.includes('traditional') || religionLower.includes('folk') || 
      religionLower.includes('animist') || religionLower.includes('indigenous')) return 'traditional';
  
  return 'other';
}

// Helper function to categorize TFR values
export function categorizeTFR(tfr: string | undefined): string {
  if (!tfr) return 'unknown';
  
  // Extract numeric value from strings like "≈ 3.5", "3.2", "2.1-2.5", etc.
  const match = tfr.match(/(\d+\.?\d*)/);
  if (match) {
    const value = parseFloat(match[1]);
    if (value < 1.5) return 'very_low';
    if (value < 2.1) return 'low';
    if (value < 2.5) return 'replacement';
    if (value < 4.0) return 'high';
    return 'very_high';
  }
  
  return 'unknown';
}

// Check if an ethnicity matches the current filters
export function ethnicityMatchesFilters(ethnicity: Ethnicity, filters: FilterState): boolean {
  // If no filters are active, show everything
  if (filters.hdi.length === 0 && filters.religion.length === 0 && filters.tfr.length === 0) {
    return true;
  }
  
  let matches = true;
  
  // Check religion filter
  if (filters.religion.length > 0) {
    const religionCategory = categorizeReligion(ethnicity.dominantReligion);
    matches = matches && filters.religion.includes(religionCategory);
  }
  
  // Check TFR filter
  if (filters.tfr.length > 0) {
    const tfrCategory = categorizeTFR(ethnicity.totalFertilityRate);
    matches = matches && filters.tfr.includes(tfrCategory);
  }
  
  return matches;
}

// Check if a region matches the current filters
export function regionMatchesFilters(region: Region, filters: FilterState): boolean {
  // If no filters are active, show everything
  if (filters.hdi.length === 0 && filters.religion.length === 0 && filters.tfr.length === 0) {
    return true;
  }
  
  let matches = true;
  
  // Check HDI filter (regions have HDI, ethnicities don't directly)
  if (filters.hdi.length > 0) {
    const hdiCategory = categorizeHDI(region.hdi);
    matches = matches && filters.hdi.includes(hdiCategory);
  }
  
  // Check if any ethnicity in the region matches the other filters
  if (filters.religion.length > 0 || filters.tfr.length > 0) {
    const hasMatchingEthnicity = region.ethnicities.some(ethnicity => 
      ethnicityMatchesFilters(ethnicity, { ...filters, hdi: [] }) // Don't check HDI for individual ethnicities
    );
    matches = matches && hasMatchingEthnicity;
  }
  
  return matches;
}

// Filter regions based on current filter state
export function filterRegions(regions: Region[], filters: FilterState): Region[] {
  return regions.filter(region => regionMatchesFilters(region, filters));
}

// Filter ethnicities within a region based on current filter state
export function filterEthnicitiesInRegion(region: Region, filters: FilterState): Ethnicity[] {
  // If no religion/TFR filters are active, return all ethnicities
  if (filters.religion.length === 0 && filters.tfr.length === 0) {
    return region.ethnicities;
  }
  
  return region.ethnicities.filter(ethnicity => 
    ethnicityMatchesFilters(ethnicity, { ...filters, hdi: [] }) // Don't check HDI for individual ethnicities
  );
}

// Get filtered GeoJSON data for the map
export function getFilteredGeoJSONData(originalData: any, regions: Region[], filters: FilterState): any {
  if (filters.hdi.length === 0 && filters.religion.length === 0 && filters.tfr.length === 0) {
    return originalData;
  }
  
  const filteredRegions = filterRegions(regions, filters);
  const allowedRegionIds = new Set(filteredRegions.map(r => r.id));
  
  // Create a set of allowed ethnicity IDs from filtered regions
  const allowedEthnicityIds = new Set<string>();
  filteredRegions.forEach(region => {
    const filteredEthnicities = filterEthnicitiesInRegion(region, filters);
    filteredEthnicities.forEach(ethnicity => {
      allowedEthnicityIds.add(ethnicity.id);
    });
  });
  
  // Filter the GeoJSON features
  const filteredFeatures = originalData.features.filter((feature: any) => {
    const ethnicityId = feature.properties?.id;
    if (!ethnicityId) return false;
    
    // Check if this ethnicity is in an allowed region and matches filters
    return allowedEthnicityIds.has(ethnicityId);
  });
  
  return {
    ...originalData,
    features: filteredFeatures
  };
}

