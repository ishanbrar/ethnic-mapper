'use client';

import dynamic from 'next/dynamic';
import { useState, useRef, useEffect } from 'react';
import { Ethnicity } from '@/types/ethnicity';
import SidebarPanel from '@/components/SidebarPanel';
import FilterPanel, { FilterState } from '@/components/FilterPanel';

const MapContainer = dynamic(() => import('@/components/MapContainer'), {
  ssr: false
});

export default function HomePage() {
  const [selectedEthnicities, setSelectedEthnicities] = useState<
    Ethnicity[] | null
  >(null);
  const [selectedRegion, setSelectedRegion] = useState<any>(null);
  const [isMobilePanelOpen, setIsMobilePanelOpen] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [filters, setFilters] = useState<FilterState>({ hdi: [], religion: [], tfr: [] });
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-open mobile panel when selection is made
  const handleSelectEthnicity = (ethnicities: Ethnicity[] | null, region?: any) => {
    setSelectedEthnicities(ethnicities);
    setSelectedRegion(region);
    if (ethnicities && ethnicities.length > 0) {
      setIsMobilePanelOpen(true);
    }
  };

  // Check if scroll indicator should be shown
  useEffect(() => {
    if (!isMobilePanelOpen || !scrollContainerRef.current) {
      setShowScrollIndicator(false);
      return;
    }

    const checkScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const hasScroll = container.scrollHeight > container.clientHeight;
      const isAtBottom =
        container.scrollHeight - container.scrollTop <=
        container.clientHeight + 10; // 10px threshold

      setShowScrollIndicator(hasScroll && !isAtBottom);
    };

    // Check initially and on scroll
    checkScroll();
    const container = scrollContainerRef.current;
    container.addEventListener('scroll', checkScroll);
    
    // Also check when content changes
    const resizeObserver = new ResizeObserver(checkScroll);
    resizeObserver.observe(container);

    return () => {
      container.removeEventListener('scroll', checkScroll);
      resizeObserver.disconnect();
    };
  }, [isMobilePanelOpen, selectedEthnicities]);

  return (
    <div className="relative min-h-screen">
      <FilterPanel 
        filters={filters}
        onFiltersChange={setFilters}
        isOpen={isFilterPanelOpen}
        onToggle={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
      />
      <main 
        className={`flex min-h-screen gap-4 px-2 py-2 md:px-4 md:py-4 lg:py-6 transition-all duration-300 ${
          isFilterPanelOpen ? 'md:ml-80 ml-0' : 'ml-0'
        }`}
      >
        <section className="relative flex-1 overflow-hidden rounded-xl md:rounded-2xl border border-slate-800/70 bg-slate-950/80 shadow-soft">
          <MapContainer onSelectEthnicity={handleSelectEthnicity} filters={filters} />
        </section>
        
        {/* Desktop Sidebar */}
        <aside className="hidden w-full max-w-sm md:block">
          <SidebarPanel selectedEthnicities={selectedEthnicities} selectedRegion={selectedRegion} />
        </aside>
      </main>

      {/* Mobile Bottom Sheet */}
      {selectedEthnicities && selectedEthnicities.length > 0 && (
        <>
          {/* Backdrop - clickable to close */}
          <div
            className={`fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden ${
              isMobilePanelOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsMobilePanelOpen(false)}
          />
          
          {/* Bottom Sheet */}
          <div
            className={`fixed bottom-0 left-0 right-0 z-50 max-h-[85vh] overflow-hidden rounded-t-2xl border-t border-slate-800/70 bg-slate-950/95 backdrop-blur-xl transition-transform duration-300 ease-out md:hidden safe-area-inset-bottom ${
              isMobilePanelOpen
                ? 'translate-y-0'
                : 'translate-y-full'
            }`}
            style={{
              paddingBottom: 'env(safe-area-inset-bottom, 0)'
            }}
            onClick={(e) => {
              // Close when tapping on the backdrop area (outside the content)
              if (e.target === e.currentTarget) {
                setIsMobilePanelOpen(false);
              }
            }}
          >
            {/* Drag Handle */}
            <div className="flex items-center justify-center border-b border-slate-800/70 bg-slate-900/50 p-2">
              <button
                onClick={() => setIsMobilePanelOpen(false)}
                className="flex h-1 w-12 rounded-full bg-slate-700/50"
                aria-label="Close panel"
              />
            </div>
            
            {/* Content with scroll indicator */}
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="overflow-y-auto"
                style={{ maxHeight: 'calc(85vh - 48px)' }}
                onClick={(e) => e.stopPropagation()}
              >
                <SidebarPanel selectedEthnicities={selectedEthnicities} selectedRegion={selectedRegion} />
              </div>
              
              {/* Scroll Indicator - only on mobile when there's more content */}
              {showScrollIndicator && (
                <div className="absolute bottom-0 left-0 right-0 pointer-events-none md:hidden">
                  <div className="flex items-center justify-center bg-gradient-to-t from-slate-950/90 to-transparent py-4">
                    <div className="flex flex-col items-center gap-1 text-emerald-400/80">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 animate-bounce"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                      <span className="text-xs font-medium">Scroll for more</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Floating Info Button (when panel is closed) */}
          {!isMobilePanelOpen && (
            <button
              onClick={() => setIsMobilePanelOpen(true)}
              className="fixed bottom-4 right-4 z-30 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300 shadow-lg backdrop-blur-sm transition-all active:bg-emerald-500/20 md:hidden touch-manipulation"
              style={{
                bottom: 'calc(1rem + env(safe-area-inset-bottom, 0))'
              }}
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              View Info
            </button>
          )}
        </>
      )}
    </div>
  );
}



