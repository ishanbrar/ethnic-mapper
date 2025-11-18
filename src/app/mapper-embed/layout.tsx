import '../globals.css';
import './embed-layout.css';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapperEmbedLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 m-0 p-0 overflow-hidden">
        {children}
      </body>
    </html>
  );
}

