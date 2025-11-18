'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Ethnicity } from '@/types/ethnicity';
import SidebarPanel from '@/components/SidebarPanel';

const MapContainer = dynamic(() => import('@/components/MapContainer'), {
  ssr: false
});

export default function MapperEmbedPage() {
  const [selectedEthnicities, setSelectedEthnicities] = useState<
    Ethnicity[] | null
  >(null);

  return (
    <main className="flex h-screen w-screen gap-0">
      <section className="relative flex-1 overflow-hidden">
        <MapContainer onSelectEthnicity={setSelectedEthnicities} />
      </section>
      <aside className="hidden w-full max-w-sm md:block">
        <SidebarPanel selectedEthnicities={selectedEthnicities} />
      </aside>
    </main>
  );
}

