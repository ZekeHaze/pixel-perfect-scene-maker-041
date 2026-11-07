import { createFileRoute } from "@tanstack/react-router";
import { CalendarHeart } from "lucide-react";
import hero from "@/assets/escuela.jpg";
import huerto from "@/assets/huerto.jpg";
import animales from "@/assets/animales.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/escuela-granjera")({
  head: () => ({
    meta: [
      { title: "Escuela Granjera — Aprender en el campo | Finca La Cruz" },
      { name: "description", content: "Proyecto educativo de Finca La Cruz para que niñas y niños aprendan y convivan con la naturaleza mediante actividades al aire libre." },
      { property: "og:title", content: "Escuela Granjera — Finca La Cruz" },
      { property: "og:description", content: "Aprendizaje y actividades al aire libre en una granja orgánica de Navojoa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Escuela,
});

function Escuela() {
  const wa = whatsappLink("¡Hola! Me gustaría recibir información sobre la Escuela Granjera.");
  return (
    <>
      <PageHero image={hero} eyebrow="Escuela Granjera" title="Aprender con las manos en la tierra" subtitle="Un espacio para que los niños descubran, convivan y crezcan junto a la naturaleza." />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Filosofía educativa</p>
          <h2 className="mt-3 text-4xl md:text-5xl">El campo como salón de clases</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Creemos que el contacto directo con la naturaleza despierta la curiosidad, el respeto por el medio ambiente y el gusto por los alimentos sanos. En la Escuela Granjera, el aprendizaje sucede al aire libre, en un entorno familiar y seguro.</p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">El programa reúne actividades en contacto con el campo: conocer los cultivos, convivir con los animales de la granja y entender de dónde vienen nuestros alimentos.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-9">Solicitar información</a>
        </Reveal>
        <Reveal delay={150} className="grid grid-cols-2 gap-5">
          <img src={huerto} alt="Huerto donde aprenden los niños" loading="lazy" className="aspect-[3/4] w-full rounded-3xl object-cover" />
          <img src={animales} alt="Animales de la granja" loading="lazy" className="mt-10 aspect-[3/4] w-full rounded-3xl object-cover" />
        </Reveal>
      </section>

      <section className="grain bg-mint-soft py-24">
        <Reveal className="mx-auto max-w-3xl px-5 text-center">
          <CalendarHeart className="mx-auto h-10 w-10 text-accent" />
          <p className="eyebrow mt-4">Próximas actividades</p>
          <h2 className="mt-3 text-4xl">Muy pronto compartiremos nuevas fechas</h2>
          <p className="mt-4 text-lg text-muted-foreground">Escríbenos y te avisaremos cuando abramos las próximas actividades de la Escuela Granjera.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">Quiero que me avisen</a>
        </Reveal>
      </section>
    </>
  );
}
