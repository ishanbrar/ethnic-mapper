'use client';

import { Ethnicity } from '@/types/ethnicity';
import { Region } from '@/data/regions';

type SidebarPanelProps = {
  selectedEthnicities: Ethnicity[] | null;
  selectedRegion?: Region | null;
};

// Helper function to get religion emoji
function getReligionEmoji(religion: string | undefined): string {
  if (!religion) return '';
  
  const religionLower = religion.toLowerCase();
  
  if (religionLower.includes('islam') || religionLower.includes('muslim')) return '☪️';
  if (religionLower.includes('christianity') || religionLower.includes('christian') || religionLower.includes('catholic')) return '✝️';
  if (religionLower.includes('judaism') || religionLower.includes('jewish') || religionLower.includes('juda')) return '✡️';
  if (religionLower.includes('buddhism') || religionLower.includes('buddhist')) return '☸️';
  if (religionLower.includes('hinduism') || religionLower.includes('hindu')) return '🕉️';
  if (religionLower.includes('sikhism') || religionLower.includes('sikh')) return '☬';
  if (religionLower.includes('shinto')) return '⛩️';
  if (religionLower.includes('taoism') || religionLower.includes('tao')) return '☯️';
  if (religionLower.includes('traditional') || religionLower.includes('folk')) return '🪔';
  if (religionLower.includes('orthodox')) return '☦️';
  
  return '🕯️'; // Default/generic religion emoji
}

// Helper function to get HDI color based on level
function getHDIColor(hdi: string | undefined): string {
  if (!hdi) return 'text-gray-400';
  
  const hdiLower = hdi.toLowerCase();
  
  if (hdiLower.includes('very high')) return 'text-green-400';
  if (hdiLower.includes('high')) return 'text-blue-400';
  if (hdiLower.includes('medium')) return 'text-yellow-400';
  if (hdiLower.includes('low')) return 'text-red-400';
  
  return 'text-gray-400'; // Default
}

export default function SidebarPanel({
  selectedEthnicities,
  selectedRegion
}: SidebarPanelProps) {
  const hasSelection = Array.isArray(selectedEthnicities) && selectedEthnicities.length > 0;
  const primary = hasSelection ? selectedEthnicities[0] : null;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-800/70 bg-slate-950/80 p-4 shadow-soft transition-transform duration-300 md:translate-x-0">
      {!hasSelection && (
        <div className="mt-4 flex flex-1 flex-col items-start justify-center space-y-3 text-sm text-slate-400">
          <p className="text-slate-300">
            Click anywhere on the map to reveal major ethnic groups for that region.
          </p>
          <ul className="space-y-1 text-xs text-slate-400">
            <li>• Zoom into clusters to reveal individual communities.</li>
            <li>• Regions with multiple large groups will list each group.</li>
            <li>• Designed for fast exploration of dense global demographics.</li>
          </ul>
        </div>
      )}

      {hasSelection && primary && (
        <div className="flex-1 space-y-4 text-sm text-slate-200 transition-opacity duration-300">
          <div>
            <p className="text-lg font-bold text-slate-50">
              {primary.region}
            </p>
            {selectedRegion?.hdi && (
              <p className={`mt-2 text-sm font-semibold ${getHDIColor(selectedRegion.hdi)}`}>
                HDI: {selectedRegion.hdi}
              </p>
            )}
            {primary.regionFlags && (
              <p className="mt-1 text-lg leading-tight">{primary.regionFlags}</p>
            )}
          </div>

          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">
              Major Ethnic Groups
            </p>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-200">
              {selectedEthnicities
                .slice()
                .sort((a, b) => (b.share ?? 0) - (a.share ?? 0))
                .map((ethnicity) => (
                  <li
                    key={ethnicity.id}
                    className="rounded-xl border border-slate-800/60 bg-slate-900/60 p-3"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold text-slate-50">
                        {ethnicity.ethnicityName}
                      </p>
                      {typeof ethnicity.share === 'number' && (
                        <span className="text-base font-bold text-emerald-400">
                          ≈ {(ethnicity.share * 100).toFixed(0)}%
                        </span>
                      )}
                    </div>
                    <ul className="mt-2 space-y-1.5 text-xs text-slate-200">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-4 rounded-full bg-emerald-400/80" />
                        <span>{ethnicity.fact1}</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-4 rounded-full bg-emerald-400/50" />
                        <span>{ethnicity.fact2}</span>
                      </li>
                    </ul>
                    <div className="mt-3 space-y-1.5 border-t border-slate-800/60 pt-3">
                      <div className="text-sm">
                        <span className="font-bold text-slate-100">Population: </span>
                        <span className="font-semibold text-slate-200">
                          {ethnicity.population ?? 'varies / not specified'}
                        </span>
                      </div>
                      <div className="text-sm">
                        <span className="font-bold text-slate-100">Religion: </span>
                        <span className="font-semibold text-slate-200">
                          {ethnicity.dominantReligion ?? 'varies / not specified'}
                        </span>
                        {ethnicity.dominantReligion && (
                          <span className="ml-1.5 text-base">
                            {getReligionEmoji(ethnicity.dominantReligion)}
                          </span>
                        )}
                      </div>
                      <div className="text-sm">
                        <span className="font-bold text-slate-100">TFR: </span>
                        <span className="font-semibold text-slate-200">
                          {ethnicity.totalFertilityRate ?? 'varies / not specified'}
                        </span>
                      </div>
                      <div className="text-sm">
                        <span className="font-bold text-slate-100">Languages: </span>
                        <span className="font-semibold text-slate-200">
                          {ethnicity.languages ?? 'varies / not specified'}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}



