import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/huevos.jpg";
import kefir from "@/assets/kefir.jpg";
import huevos from "@/assets/huevos.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/ecotienda")({
  head: () => ({
    meta: [
      { title: "Ecotienda — Kéfir artesanal y huevos orgánicos | Finca La Cruz" },
      { name: "description", content: "Productos naturales y artesanales de Finca La Cruz: kéfir artesanal y huevos orgánicos de nuestra granja." },
      { property: "og:title", content: "Ecotienda — Finca La Cruz" },
      { property: "og:description", content: "Kéfir artesanal y huevos orgánicos, hechos con amor y respeto por la tierra." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Ecotienda,
});

const products = [
  { name: "Kéfir artesanal", tag: "Producto estrella", img: kefir, text: "El buen inicio de nuestra salud empieza desde el cuidado de nuestra pancita. Descubre nuestro kéfir artesanal, elaborado con el amor y el respeto por la tierra que nos caracteriza." },
  { name: "Huevos orgánicos", tag: "De nuestra granja", img: huevos, text: "Huevos de gallinas que viven y se alimentan en nuestra finca, al aire libre y a su propio ritmo. Un alimento sencillo que refleja el cuidado con el que trabajamos la tierra." },
];

function Ecotienda() {
  return (
    <>
      <PageHero image={hero} eyebrow="Ecotienda" title="Productos naturales de nuestra finca" subtitle="Alimentos artesanales que nacen del cuidado de la tierra." />
      <section className="mx-auto max-w-6xl space-y-16 px-5 py-24">
        {products.map((p, i) => (
          <Reveal key={p.name}>
            <article className={`card-soft group grid md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="overflow-hidden"><img src={p.img} alt={p.name} loading="lazy" width={1024} height={1024} className="img-zoom aspect-square h-full w-full object-cover" /></div>
              <div className="flex flex-col justify-center p-10 md:p-14">
                <p className="eyebrow">{p.tag}</p>
                <h2 className="mt-3 text-4xl md:text-5xl">{p.name}</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{p.text}</p>
                <a href={whatsappLink(`¡Hola! Me interesa saber más sobre el ${p.name.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-8 self-start">Pregúntanos por WhatsApp</a>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
