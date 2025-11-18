'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Ethnicity } from '@/types/ethnicity';
import SidebarPanel from '@/components/SidebarPanel';

const MapContainer = dynamic(() => import('@/components/MapContainer'), {
  ssr: false
});

export default function HomePage() {
  const [selectedEthnicities, setSelectedEthnicities] = useState<
    Ethnicity[] | null
  >(null);
  const [isMobilePanelOpen, setIsMobilePanelOpen] = useState(false);

  // Auto-open mobile panel when selection is made
  const handleSelectEthnicity = (ethnicities: Ethnicity[] | null) => {
    setSelectedEthnicities(ethnicities);
    if (ethnicities && ethnicities.length > 0) {
      setIsMobilePanelOpen(true);
    }
  };

  return (
    <main className="mx-auto flex min-h-[calc(100vh-64px)] max-w-6xl gap-4 px-2 py-2 md:px-4 md:py-4 lg:py-6">
      <section className="relative flex-1 overflow-hidden rounded-xl md:rounded-2xl border border-slate-800/70 bg-slate-950/80 shadow-soft">
        <MapContainer onSelectEthnicity={handleSelectEthnicity} />
      </section>
      
      {/* Desktop Sidebar */}
      <aside className="hidden w-full max-w-sm md:block">
        <SidebarPanel selectedEthnicities={selectedEthnicities} />
      </aside>

      {/* Mobile Bottom Sheet */}
      {selectedEthnicities && selectedEthnicities.length > 0 && (
        <>
          {/* Backdrop */}
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
          >
            {/* Drag Handle */}
            <div className="flex items-center justify-center border-b border-slate-800/70 bg-slate-900/50 p-2">
              <button
                onClick={() => setIsMobilePanelOpen(false)}
                className="flex h-1 w-12 rounded-full bg-slate-700/50"
                aria-label="Close panel"
              />
            </div>
            
            {/* Content */}
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(85vh - 48px)' }}>
              <SidebarPanel selectedEthnicities={selectedEthnicities} />
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
    </main>
  );
}



