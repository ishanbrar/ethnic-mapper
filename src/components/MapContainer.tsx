'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import Map, {
  Layer,
  MapLayerMouseEvent,
  MapRef,
  Source
} from 'react-map-gl';
import type { GeoJSONSource } from 'mapbox-gl';
import { Ethnicity } from '@/types/ethnicity';
import ethnicData from '@/data/ethnic_data.geojson';
import { Region, regions, findRegionForCoordinates } from '@/data/regions';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

type MapContainerProps = {
  onSelectEthnicity: (ethnicities: Ethnicity[] | null) => void;
};

const clusterLayer: any = {
  id: 'clusters',
  type: 'circle',
  source: 'ethnicities',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': [
      'step',
      ['get', 'point_count'],
      '#22c55e',
      15,
      '#22c55e',
      50,
      '#16a34a'
    ],
    'circle-radius': ['step', ['get', 'point_count'], 16, 15, 22, 50, 30],
    'circle-stroke-width': 1.5,
    'circle-stroke-color': '#020617'
  }
};

const clusterCountLayer: any = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'ethnicities',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': ['get', 'point_count_abbreviated'],
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    'text-size': 12
  },
  paint: {
    'text-color': '#e5e7eb'
  }
};

const unclusteredPointLayer: any = {
  id: 'unclustered-point',
  type: 'circle',
  source: 'ethnicities',
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-color': '#22c55e',
    'circle-radius': 12,
    'circle-stroke-width': 2,
    'circle-stroke-color': '#0f172a'
  }
};

const MIN_BOX_SIZE = 1.0; // Minimum size in degrees for both width and height

function enforceMinimumSize(
  minLng: number,
  maxLng: number,
  minLat: number,
  maxLat: number
): { minLng: number; maxLng: number; minLat: number; maxLat: number } {
  const centerLng = (minLng + maxLng) / 2;
  const centerLat = (minLat + maxLat) / 2;
  const width = maxLng - minLng;
  const height = maxLat - minLat;

  const adjustedWidth = Math.max(width, MIN_BOX_SIZE);
  const adjustedHeight = Math.max(height, MIN_BOX_SIZE);

  return {
    minLng: centerLng - adjustedWidth / 2,
    maxLng: centerLng + adjustedWidth / 2,
    minLat: centerLat - adjustedHeight / 2,
    maxLat: centerLat + adjustedHeight / 2
  };
}

function createRegionHighlightFeature(region: Region | null) {
  if (!region) return null;
  let { minLng, maxLng, minLat, maxLat } = region.bounds;

  // Enforce minimum size
  const adjusted = enforceMinimumSize(minLng, maxLng, minLat, maxLat);
  minLng = adjusted.minLng;
  maxLng = adjusted.maxLng;
  minLat = adjusted.minLat;
  maxLat = adjusted.maxLat;

  return {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [minLng, minLat],
          [maxLng, minLat],
          [maxLng, maxLat],
          [minLng, maxLat],
          [minLng, minLat]
        ]
      ]
    },
    properties: {
      id: region.id,
      name: region.name
    }
  };
}

export default function MapContainer({ onSelectEthnicity }: MapContainerProps) {
  const mapRef = useRef<MapRef | null>(null);
  const [selectedRegionFeature, setSelectedRegionFeature] = useState<any | null>(
    null
  );
  const [hoveredRegionFeature, setHoveredRegionFeature] = useState<any | null>(
    null
  );

  const regionsCollection = useMemo(() => {
    const palette = ['#0f766e', '#1d4ed8', '#a855f7', '#f97316', '#22c55e'];
    const features = regions.map((region, index) => {
      const feature: any = createRegionHighlightFeature(region);
      if (!feature) return null;
      feature.properties = {
        ...feature.properties,
        fillColor: palette[index % palette.length],
        isPointBox: false
      };
      return feature;
    });

    // Add clickable boxes for each ethnicity point
    const ethnicFeatures = (ethnicData as any).features?.map((point: any) => {
      const [lng, lat] = point.geometry.coordinates;
      let boxSize = .5; // Create a 2.0 degree box around each point for easier clicking
      // Enforce minimum size
      boxSize = Math.max(boxSize, MIN_BOX_SIZE / 2); // boxSize is half-width, so divide by 2
      
      const minLng = lng - boxSize;
      const maxLng = lng + boxSize;
      const minLat = lat - boxSize;
      const maxLat = lat + boxSize;
      
      // Apply minimum size enforcement
      const adjusted = enforceMinimumSize(minLng, maxLng, minLat, maxLat);
      
      return {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [adjusted.minLng, adjusted.minLat],
              [adjusted.maxLng, adjusted.minLat],
              [adjusted.maxLng, adjusted.maxLat],
              [adjusted.minLng, adjusted.maxLat],
              [adjusted.minLng, adjusted.minLat]
            ]
          ]
        },
        properties: {
          id: `point_box_${point.properties.id}`,
          name: point.properties.ethnicityName,
          fillColor: '#22c55e',
          isPointBox: true,
          pointId: point.properties.id
        }
      };
    }) || [];

    return {
      type: 'FeatureCollection',
      features: [...features.filter(Boolean), ...ethnicFeatures]
    } as any;
  }, []);

  const handleClick = useCallback(
    (event: MapLayerMouseEvent) => {
      const feature = event.features?.[0];
      const { lng, lat } = event.lngLat;
      const currentRegionsCollection = regionsCollection;

      // 1) If we clicked on a cluster or point, preserve the high-precision behavior,
      //    but also resolve the broader region for extra context.
      if (feature && mapRef.current) {
        const mapboxMap = mapRef.current.getMap();
        const isCluster = feature.properties?.cluster;
        const isPointBox = feature.properties?.isPointBox;

        // Handle click on point box - find the corresponding ethnicity point
        if (isPointBox && feature.properties?.pointId) {
          const pointId = feature.properties.pointId;
          const ethnicFeature = (ethnicData as any).features?.find(
            (f: any) => f.properties.id === pointId
          );
          if (ethnicFeature) {
            const props = ethnicFeature.properties || {};
            // Use the original point coordinates for region lookup, not the click coordinates
            // This ensures we find the region even if clicking on expanded box edges
            const [pointLng, pointLat] = ethnicFeature.geometry.coordinates;
            const baseEthnicity: Ethnicity = {
              id: String(props.id ?? ''),
              ethnicityName: String(props.ethnicityName ?? 'Unknown group'),
              region: String(props.region ?? 'Unknown region'),
              fact1: String(props.fact1 ?? 'No fact available.'),
              fact2: String(props.fact2 ?? 'No additional fact available.'),
              population: props.population ? String(props.population) : undefined,
              dominantReligion: props.dominantReligion
                ? String(props.dominantReligion)
                : undefined,
              totalFertilityRate: props.totalFertilityRate
                ? String(props.totalFertilityRate)
                : undefined
            };
            // Use original point coordinates for region lookup
            const region = findRegionForCoordinates(pointLng, pointLat);
            if (region) {
              setSelectedRegionFeature(createRegionHighlightFeature(region));
              // Update region property to use the region's name
              const baseEthnicityWithRegion = {
                ...baseEthnicity,
                region: region.name
              };
              const merged = [
                baseEthnicityWithRegion,
                ...region.ethnicities
                  .filter((e) => e.id !== baseEthnicity.id)
                  .map((e) => ({ ...e, region: region.name }))
              ];
              onSelectEthnicity(merged);
            } else {
              setSelectedRegionFeature(null);
              onSelectEthnicity([baseEthnicity]);
            }
            return;
          }
        }

        if (isCluster) {
          const source = mapboxMap.getSource('ethnicities') as GeoJSONSource;
          const clusterId = feature.properties?.cluster_id;

          if (!source || clusterId === undefined) return;

          source.getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err) return;

            const geometry = feature.geometry as any;
            const [longitude, latitude] = (geometry.type === 'Point' 
              ? geometry.coordinates 
              : [0, 0]) as [number, number];

            mapboxMap.easeTo({
              center: [longitude, latitude],
              zoom,
              duration: 500
            });
          });

          return;
        }

        // Unclustered point: include both the specific feature and its enclosing region (if any)
        const props: any = feature.properties || {};
        const baseEthnicity: Ethnicity = {
          id: String(props.id ?? ''),
          ethnicityName: String(props.ethnicityName ?? 'Unknown group'),
          region: String(props.region ?? 'Unknown region'),
          fact1: String(props.fact1 ?? 'No fact available.'),
          fact2: String(props.fact2 ?? 'No additional fact available.'),
          population: props.population
            ? String(props.population)
            : undefined,
          dominantReligion: props.dominantReligion
            ? String(props.dominantReligion)
            : undefined,
          totalFertilityRate: props.totalFertilityRate
            ? String(props.totalFertilityRate)
            : undefined
        };

        const region = findRegionForCoordinates(lng, lat);
        if (region) {
          setSelectedRegionFeature(createRegionHighlightFeature(region));
          // Update region property to use the region's name
          const baseEthnicityWithRegion = {
            ...baseEthnicity,
            region: region.name
          };
          const merged = [
            baseEthnicityWithRegion,
            ...region.ethnicities
              .filter((e) => e.id !== baseEthnicity.id)
              .map((e) => ({ ...e, region: region.name }))
          ];
          onSelectEthnicity(merged);
        } else {
          setSelectedRegionFeature(null);
          onSelectEthnicity([baseEthnicity]);
        }
        return;
      }

      // 2) Otherwise, click fell on "empty" map space — map it to a broader region.
      // For region boxes that were expanded, we need to check if the click is within
      // the expanded bounds. Since we expanded boxes for display, we should still
      // be able to find regions even if clicking on expanded edges.
      const region = findRegionForCoordinates(lng, lat);
      if (region && region.ethnicities.length > 0) {
        setSelectedRegionFeature(createRegionHighlightFeature(region));
        // Update the region property of all ethnicities to use the region's name
        const ethnicitiesWithRegionName = region.ethnicities.map((ethnicity) => ({
          ...ethnicity,
          region: region.name
        }));
        onSelectEthnicity(ethnicitiesWithRegionName);
      } else {
        // If no region found, try to find a point box that might contain this click
        // This handles cases where we click on expanded point box edges
        const pointBoxFeature = (currentRegionsCollection as any).features?.find((f: any) => {
          if (!f.properties?.isPointBox) return false;
          if (f.geometry.type !== 'Polygon') return false;
          const coords = (f.geometry as any).coordinates?.[0];
          if (!coords || coords.length < 4) return false;
          const [minLng, minLat] = coords[0];
          const [maxLng, maxLat] = coords[2];
          return lng >= minLng && lng <= maxLng && lat >= minLat && lat <= maxLat;
        });
        
        if (pointBoxFeature?.properties?.pointId) {
          // Handle point box click directly (avoiding recursion)
          const pointId = pointBoxFeature.properties.pointId;
          const ethnicFeature = (ethnicData as any).features?.find(
            (f: any) => f.properties.id === pointId
          );
          if (ethnicFeature) {
            const props = ethnicFeature.properties || {};
            const [pointLng, pointLat] = ethnicFeature.geometry.coordinates;
            const baseEthnicity: Ethnicity = {
              id: String(props.id ?? ''),
              ethnicityName: String(props.ethnicityName ?? 'Unknown group'),
              region: String(props.region ?? 'Unknown region'),
              fact1: String(props.fact1 ?? 'No fact available.'),
              fact2: String(props.fact2 ?? 'No additional fact available.'),
              population: props.population ? String(props.population) : undefined,
              dominantReligion: props.dominantReligion
                ? String(props.dominantReligion)
                : undefined,
              totalFertilityRate: props.totalFertilityRate
                ? String(props.totalFertilityRate)
                : undefined
            };
            const region = findRegionForCoordinates(pointLng, pointLat);
            if (region) {
              setSelectedRegionFeature(createRegionHighlightFeature(region));
              const baseEthnicityWithRegion = {
                ...baseEthnicity,
                region: region.name
              };
              const merged = [
                baseEthnicityWithRegion,
                ...region.ethnicities
                  .filter((e) => e.id !== baseEthnicity.id)
                  .map((e) => ({ ...e, region: region.name }))
              ];
              onSelectEthnicity(merged);
            } else {
              setSelectedRegionFeature(null);
              onSelectEthnicity([baseEthnicity]);
            }
            return;
          }
        }
        
        setSelectedRegionFeature(null);
        onSelectEthnicity(null);
      }
    },
    [onSelectEthnicity, regionsCollection]
  );
  const handleMouseMove = useCallback(
    (event: MapLayerMouseEvent) => {
      const { lng, lat } = event.lngLat;
      const region = findRegionForCoordinates(lng, lat);
      setHoveredRegionFeature(createRegionHighlightFeature(region));
    },
    []
  );

  return (
    <div className="relative h-full w-full">
      {!MAPBOX_TOKEN && (
        <div className="pointer-events-none absolute inset-4 z-20 flex items-center justify-center rounded-xl border border-amber-500/40 bg-amber-950/40 text-center text-xs text-amber-100 backdrop-blur">
          <p>
            Set <span className="font-mono">NEXT_PUBLIC_MAPBOX_TOKEN</span> in
            <span className="font-mono"> .env.local </span>
            to load the interactive map.
          </p>
        </div>
      )}
      <Map
        ref={mapRef}
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          longitude: 10,
          latitude: 20,
          zoom: 1.2
        }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        interactiveLayerIds={['clusters', 'unclustered-point', 'point-boxes-fill', 'regions-fill']}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredRegionFeature(null)}
        style={{ width: '100%', height: '100%' }}
      >
        <Source id="regions" type="geojson" data={regionsCollection}>
          <Layer
            id="regions-fill"
            type="fill"
            filter={['!=', ['get', 'isPointBox'], true]}
            paint={{
              'fill-color': ['get', 'fillColor'],
              'fill-opacity': 0.12
            }}
          />
          <Layer
            id="regions-outline"
            type="line"
            filter={['!=', ['get', 'isPointBox'], true]}
            paint={{
              'line-color': '#38bdf8',
              'line-width': 1,
              'line-opacity': 0.6
            }}
          />
          <Layer
            id="point-boxes-fill"
            type="fill"
            filter={['==', ['get', 'isPointBox'], true]}
            paint={{
              'fill-color': '#22c55e',
              'fill-opacity': 0.03
            }}
          />
          <Layer
            id="point-boxes-outline"
            type="line"
            filter={['==', ['get', 'isPointBox'], true]}
            paint={{
              'line-color': '#22c55e',
              'line-width': 1,
              'line-opacity': 0.2
            }}
          />
        </Source>
        {hoveredRegionFeature && (
          <Source
            id="hovered-region"
            type="geojson"
            data={hoveredRegionFeature as any}
          >
            <Layer
              id="hovered-region-fill"
              type="fill"
              paint={{
                'fill-color': '#38bdf8',
                'fill-opacity': 0.1
              }}
            />
          </Source>
        )}
        {selectedRegionFeature && (
          <Source
            id="selected-region"
            type="geojson"
            data={selectedRegionFeature as any}
          >
            <Layer
              id="selected-region-fill"
              type="fill"
              paint={{
                'fill-color': '#22c55e',
                'fill-opacity': 0.18
              }}
            />
            <Layer
              id="selected-region-outline"
              type="line"
              paint={{
                'line-color': '#22c55e',
                'line-width': 1.5
              }}
            />
          </Source>
        )}
        <Source
          id="ethnicities"
          type="geojson"
          data={ethnicData as any}
          cluster
          clusterMaxZoom={8}
          clusterRadius={40}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>
      </Map>
    </div>
  );
}


