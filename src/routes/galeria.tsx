import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import heroFinca from "@/assets/hero-finca.jpg";
import espacio from "@/assets/espacio.jpg";
import animales from "@/assets/animales.jpg";
import fincafe from "@/assets/fincafe.jpg";
import escuela from "@/assets/escuela.jpg";
import kefir from "@/assets/kefir.jpg";
import huevos from "@/assets/huevos.jpg";
import huerto from "@/assets/huerto.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galería — Finca La Cruz" },
      { name: "description", content: "Fotografías de Finca La Cruz: instalaciones, cultivos, animales, productos, Fincafe y Escuela Granjera." },
      { property: "og:title", content: "Galería — Finca La Cruz" },
      { property: "og:description", content: "Un recorrido visual por nuestra granja orgánica en Navojoa, Sonora." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Galeria,
});

const photos = [
  { src: heroFinca, alt: "Cultivos e instalaciones de la finca al atardecer" },
  { src: animales, alt: "Gallinas y cabra en el corral" },
  { src: fincafe, alt: "Desayuno granjero en Fincafe" },
  { src: espacio, alt: "Área de descanso bajo la palapa" },
  { src: kefir, alt: "Kéfir artesanal" },
  { src: escuela, alt: "Niños sembrando en la Escuela Granjera" },
  { src: huerto, alt: "Huerto orgánico" },
  { src: huevos, alt: "Huevos orgánicos recién recolectados" },
];

function Galeria() {
  const [index, setIndex] = useState<number | null>(null);
  const close = () => setIndex(null);
  const move = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + photos.length) % photos.length)), []);

  useEffect(() => {
    if (index === null) return;
    const on = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", on);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", on);
      document.body.style.overflow = "";
    };
  }, [index, move]);

  return (
    <>
      <PageHero image={espacio} eyebrow="Galería" title="Momentos de la finca" />
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {photos.map((p, i) => (
            <Reveal key={p.alt} delay={(i % 3) * 100} className="mb-5 break-inside-avoid">
              <button type="button" onClick={() => setIndex(i)} className="group block w-full overflow-hidden rounded-3xl" aria-label={`Ampliar: ${p.alt}`}>
                <img src={p.src} alt={p.alt} loading="lazy" className="img-zoom w-full object-cover" />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {index !== null && (
        <div role="dialog" aria-modal="true" aria-label={photos[index].alt} className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/90 p-4" onClick={close}>
          <img src={photos[index].src} alt={photos[index].alt} className="max-h-[85vh] max-w-full rounded-2xl object-contain" onClick={(e) => e.stopPropagation()} />
          <p className="absolute bottom-6 left-0 right-0 text-center text-sm text-background">{photos[index].alt} · {index + 1}/{photos.length}</p>
          <button type="button" aria-label="Cerrar" onClick={close} className="absolute right-4 top-4 rounded-full bg-background/15 p-3 text-background hover:bg-background/30"><X /></button>
          <button type="button" aria-label="Anterior" onClick={(e) => { e.stopPropagation(); move(-1); }} className="absolute left-3 rounded-full bg-background/15 p-3 text-background hover:bg-background/30"><ChevronLeft /></button>
          <button type="button" aria-label="Siguiente" onClick={(e) => { e.stopPropagation(); move(1); }} className="absolute right-3 rounded-full bg-background/15 p-3 text-background hover:bg-background/30"><ChevronRight /></button>
        </div>
      )}
    </>
  );
}
