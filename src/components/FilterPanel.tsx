'use client';

import { useState, useEffect } from 'react';

export type FilterState = {
  hdi: string[];
  religion: string[];
  tfr: string[];
};

type FilterPanelProps = {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  isOpen: boolean;
  onToggle: () => void;
};

// Available filter options based on the data
const HDI_OPTIONS = [
  { value: 'very_high', label: 'Very High (0.8+)', color: 'text-green-400' },
  { value: 'high', label: 'High (0.7-0.8)', color: 'text-blue-400' },
  { value: 'medium', label: 'Medium (0.55-0.7)', color: 'text-yellow-400' },
  { value: 'low', label: 'Low (<0.55)', color: 'text-red-400' }
];

const RELIGION_OPTIONS = [
  { value: 'christianity', label: 'Christianity', emoji: '✝️' },
  { value: 'islam', label: 'Islam', emoji: '☪️' },
  { value: 'judaism', label: 'Judaism', emoji: '✡️' },
  { value: 'buddhism', label: 'Buddhism', emoji: '☸️' },
  { value: 'hinduism', label: 'Hinduism', emoji: '🕉️' },
  { value: 'sikhism', label: 'Sikhism', emoji: '☬' },
  { value: 'traditional', label: 'Traditional/Folk', emoji: '🪔' },
  { value: 'other', label: 'Other/Mixed', emoji: '🕯️' }
];

const TFR_OPTIONS = [
  { value: 'very_low', label: 'Very Low (<1.5)', color: 'text-red-400' },
  { value: 'low', label: 'Low (1.5-2.1)', color: 'text-yellow-400' },
  { value: 'replacement', label: 'Replacement (2.1-2.5)', color: 'text-green-400' },
  { value: 'high', label: 'High (2.5-4.0)', color: 'text-blue-400' },
  { value: 'very_high', label: 'Very High (4.0+)', color: 'text-purple-400' }
];

export default function FilterPanel({ filters, onFiltersChange, isOpen, onToggle }: FilterPanelProps) {
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);

  useEffect(() => {
    const count = filters.hdi.length + filters.religion.length + filters.tfr.length;
    setActiveFiltersCount(count);
  }, [filters]);

  const handleFilterChange = (category: keyof FilterState, value: string, checked: boolean) => {
    const newFilters = { ...filters };
    if (checked) {
      newFilters[category] = [...newFilters[category], value];
    } else {
      newFilters[category] = newFilters[category].filter(v => v !== value);
    }
    onFiltersChange(newFilters);
  };

  const clearAllFilters = () => {
    onFiltersChange({ hdi: [], religion: [], tfr: [] });
    // Auto-minimize when filters are cleared
    onToggle();
  };

  const hasActiveFilters = activeFiltersCount > 0;

  return (
    <>
      {/* Filter Toggle Button - only show when panel is closed */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className={`fixed top-4 left-4 z-40 flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium shadow-lg backdrop-blur-sm transition-all ${
            hasActiveFilters
              ? 'border-emerald-500/50 bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30'
              : 'border-slate-700/50 bg-slate-900/80 text-slate-300 hover:bg-slate-800/80'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
            />
          </svg>
          Filters
          {hasActiveFilters && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
              {activeFiltersCount}
            </span>
          )}
        </button>
      )}

      {/* Filter Side Panel */}
      <div
        className={`fixed left-0 top-0 bottom-0 z-30 w-80 border-r border-slate-800/70 bg-slate-950/95 shadow-xl backdrop-blur-xl transition-all duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Mobile backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden -z-10"
            onClick={onToggle}
          />
        )}
        <div className="flex items-center justify-between border-b border-slate-800/70 p-4">
          <h3 className="text-lg font-semibold text-slate-100">Filter Regions</h3>
          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Clear All
              </button>
            )}
            <button
              onClick={onToggle}
              className="p-1 text-slate-400 hover:text-slate-200 transition-colors"
              aria-label="Minimize filter panel"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-8rem)]">
          {/* HDI Filter */}
          <div className="border-b border-slate-800/50 p-4">
            <h4 className="mb-3 text-sm font-semibold text-slate-200">Human Development Index</h4>
            <div className="space-y-2">
              {HDI_OPTIONS.map((option) => (
                <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.hdi.includes(option.value)}
                    onChange={(e) => handleFilterChange('hdi', option.value, e.target.checked)}
                    className="h-4 w-4 rounded border-slate-600 bg-slate-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-0"
                  />
                  <span className={`text-sm ${option.color}`}>{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Religion Filter */}
          <div className="border-b border-slate-800/50 p-4">
            <h4 className="mb-3 text-sm font-semibold text-slate-200">Dominant Religion</h4>
            <div className="space-y-2">
              {RELIGION_OPTIONS.map((option) => (
                <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.religion.includes(option.value)}
                    onChange={(e) => handleFilterChange('religion', option.value, e.target.checked)}
                    className="h-4 w-4 rounded border-slate-600 bg-slate-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-0"
                  />
                  <span className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-base">{option.emoji}</span>
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* TFR Filter */}
          <div className="p-4">
            <h4 className="mb-3 text-sm font-semibold text-slate-200">Total Fertility Rate</h4>
            <div className="space-y-2">
              {TFR_OPTIONS.map((option) => (
                <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.tfr.includes(option.value)}
                    onChange={(e) => handleFilterChange('tfr', option.value, e.target.checked)}
                    className="h-4 w-4 rounded border-slate-600 bg-slate-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-0"
                  />
                  <span className={`text-sm ${option.color}`}>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

          {/* Active Filters Summary */}
          {hasActiveFilters && (
            <div className="border-t border-slate-800/70 bg-slate-900/50 p-3">
              <p className="text-xs text-slate-400">
                {activeFiltersCount} filter{activeFiltersCount !== 1 ? 's' : ''} active
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
