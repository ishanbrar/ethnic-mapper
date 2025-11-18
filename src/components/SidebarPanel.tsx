'use client';

import { Ethnicity } from '@/types/ethnicity';

type SidebarPanelProps = {
  selectedEthnicities: Ethnicity[] | null;
};

export default function SidebarPanel({
  selectedEthnicities
}: SidebarPanelProps) {
  const hasSelection = Array.isArray(selectedEthnicities) && selectedEthnicities.length > 0;
  const primary = hasSelection ? selectedEthnicities[0] : null;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-800/70 bg-slate-950/80 p-4 shadow-soft transition-transform duration-300 md:translate-x-0">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        Ethnicity Insight
      </h2>

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
        <div className="mt-2 flex-1 space-y-4 text-sm text-slate-200 transition-opacity duration-300">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">
              Region
            </p>
            <p className="mt-1 text-base font-semibold text-slate-50">
              {primary.region}
            </p>
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
                        <span className="text-[11px] font-medium uppercase tracking-wide text-emerald-400/80">
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
                      <li className="pt-1 text-[11px] text-slate-300">
                        <span className="font-semibold text-slate-200">
                          Demographics:
                        </span>{' '}
                        <span>
                          <span className="font-medium">Pop:</span>{' '}
                          {ethnicity.population ?? 'varies / not specified'}
                          {' · '}
                        </span>
                        <span>
                          <span className="font-medium">Religion:</span>{' '}
                          {ethnicity.dominantReligion ??
                            'varies / not specified'}
                          {' · '}
                        </span>
                        <span>
                          <span className="font-medium">TFR:</span>{' '}
                          {ethnicity.totalFertilityRate ??
                            'varies / not specified'}
                        </span>
                      </li>
                    </ul>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}



