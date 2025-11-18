import type { Metadata } from 'next';
import './globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';

export const metadata: Metadata = {
  title: 'EthnoMapper',
  description:
    'An interactive, high-performance global map visualizing ethnic groups with clustered insights.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-slate-100">
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <header className="border-b border-slate-800/70 bg-slate-950/70 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <div>
                <h1 className="text-lg font-semibold tracking-tight text-slate-50">
                  EthnoMapper
                </h1>
                <p className="text-xs text-slate-400">
                  Explore clustered ethnic groups worldwide. Click clusters to
                  zoom, points for context.
                </p>
              </div>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-emerald-300 shadow-soft">
                Elite Dark • High Performance
              </span>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}


