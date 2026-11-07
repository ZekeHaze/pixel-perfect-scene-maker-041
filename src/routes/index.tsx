import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import hero from "@/assets/hero-finca.jpg";
import espacio from "@/assets/espacio.jpg";
import animales from "@/assets/animales.jpg";
import fincafe from "@/assets/fincafe.jpg";
import escuela from "@/assets/escuela.jpg";
import kefir from "@/assets/kefir.jpg";
import huevos from "@/assets/huevos.jpg";
import huerto from "@/assets/huerto.jpg";
import { Reveal } from "@/components/site/Reveal";
import { MapEmbed } from "@/components/site/PageHero";
import { SITE, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Finca La Cruz — Granja Orgánica en Navojoa, Sonora" },
      { name: "description", content: "Una nueva alternativa para regresar a lo natural, a solo 5 km de Navojoa. Conoce nuestra finca, Fincafe y la Escuela Granjera." },
      { property: "og:title", content: "Finca La Cruz — Reviviendo lo Natural" },
      { property: "og:description", content: "Granja orgánica a 5 km de Navojoa: naturaleza, desayunos granjeros, kéfir artesanal y huevos orgánicos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const experiences = [
  { title: "Nuestra Finca", text: "Contacto con la naturaleza y un entorno rural para desconectarte del ruido cotidiano.", img: animales, to: "/nuestra-finca" as const },
  { title: "Fincafe", text: "Desayunos granjeros y bebidas artesanales en medio del campo.", img: fincafe, to: "/nuestra-finca" as const, hash: "fincafe" },
  { title: "Escuela Granjera", text: "Aprendizaje y actividades al aire libre para convivir con el campo.", img: escuela, to: "/escuela-granjera" as const },
];

function Index() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img src={hero} alt="Cultivos orgánicos de Finca La Cruz al atardecer" width={1920} height={1088} className="animate-slow-zoom absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-24">
          <p className="eyebrow text-mint-soft">Granja Orgánica · Navojoa, Sonora</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] text-primary-foreground md:text-7xl">Una nueva alternativa para regresar a lo natural.</h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/90">A solo 5 km de Navojoa, descubre un rincón orgánico diseñado para devolverle la salud a tu cuerpo y la paz a tu corazón.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/nuestra-finca" className="btn btn-light">Conoce nuestra finca</Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">Planea tu visita</a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:grid-cols-2 md:py-32">
        <Reveal>
          <div className="group overflow-hidden rounded-[2rem]">
            <img src={espacio} alt="Espacio de descanso bajo una palapa en la finca" width={1200} height={1504} loading="lazy" className="img-zoom aspect-[4/5] w-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p className="eyebrow">Conoce Finca La Cruz</p>
          <h2 className="mt-3 text-4xl leading-tight md:text-5xl">Cultivamos bienestar respetando los tiempos de la tierra.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Somos una granja orgánica familiar cerca de la ciudad, pensada para regresar a lo natural: alimentos sanos, tranquilidad y aire libre para compartir en familia.</p>
          <ul className="mt-8 space-y-4">
            {[
              ["Salud desde la raíz", "Alimentos naturales y productos artesanales, como el kéfir."],
              ["Paz y reconexión", "Un espacio natural para desconectarte del ruido cotidiano."],
              ["Comunidad y aprendizaje", "Un entorno familiar y educativo con la Escuela Granjera."],
            ].map(([t, d]) => (
              <li key={t} className="border-l-2 border-accent pl-4">
                <p className="font-serif text-xl text-primary">{t}</p>
                <p className="text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="grain bg-mint-soft py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="text-center">
            <p className="eyebrow">Vive la experiencia</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Tres maneras de disfrutar la finca</h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {experiences.map((e, i) => (
              <Reveal key={e.title} delay={i * 120}>
                <Link to={e.to} hash={e.hash} className="card-soft group block h-full">
                  <div className="overflow-hidden"><img src={e.img} alt={e.title} loading="lazy" width={1200} height={900} className="img-zoom aspect-[4/3] w-full object-cover" /></div>
                  <div className="p-7">
                    <h3 className="text-2xl">{e.title}</h3>
                    <p className="mt-2 text-muted-foreground">{e.text}</p>
                    <span className="mt-5 inline-block text-sm font-semibold text-accent">Descubrir →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:py-32">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Productos de nuestra finca</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Hechos con amor y respeto por la tierra</h2>
          </div>
          <Link to="/ecotienda" className="btn btn-outline">Visita la Ecotienda</Link>
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {[
            { name: "Kéfir artesanal", img: kefir, text: "El buen inicio de nuestra salud empieza desde el cuidado de nuestra pancita." },
            { name: "Huevos orgánicos", img: huevos, text: "De gallinas criadas en libertad dentro de nuestra granja." },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <Link to="/ecotienda" className="card-soft group grid h-full sm:grid-cols-2">
                <div className="overflow-hidden"><img src={p.img} alt={p.name} loading="lazy" width={1024} height={1024} className="img-zoom aspect-square h-full w-full object-cover" /></div>
                <div className="flex flex-col justify-center p-8">
                  <h3 className="text-3xl">{p.name}</h3>
                  <p className="mt-3 text-muted-foreground">{p.text}</p>
                  <span className="mt-5 text-sm font-semibold text-accent">Conocer más →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-5">
          <Reveal className="md:col-span-2">
            <p className="eyebrow">Ubicación</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Muy cerca de la ciudad</h2>
            <p className="mt-5 flex gap-3 text-lg text-muted-foreground"><MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />{SITE.address}</p>
            <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">Cómo llegar</a>
          </Reveal>
          <Reveal className="md:col-span-3" delay={150}><MapEmbed src={SITE.mapEmbed} /></Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-32">
        <img src={huerto} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <Reveal className="relative mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-4xl leading-tight text-primary-foreground md:text-5xl">Ven a descubrir una forma diferente de conectar con la naturaleza.</h2>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-light mt-10">Planea tu visita</a>
        </Reveal>
      </section>
    </>
  );
}
