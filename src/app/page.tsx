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

  return (
    <main className="mx-auto flex min-h-[calc(100vh-64px)] max-w-6xl gap-4 px-4 py-4 lg:py-6">
      <section className="relative flex-1 overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-950/80 shadow-soft">
        <MapContainer onSelectEthnicity={setSelectedEthnicities} />
      </section>
      <aside className="hidden w-full max-w-sm md:block">
        <SidebarPanel selectedEthnicities={selectedEthnicities} />
      </aside>
    </main>
  );
}



