import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/huerto.jpg";
import espacio from "@/assets/espacio.jpg";
import animales from "@/assets/animales.jpg";
import heroFinca from "@/assets/hero-finca.jpg";
import fincafe from "@/assets/fincafe.jpg";
import kefir from "@/assets/kefir.jpg";
import huevos from "@/assets/huevos.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/nuestra-finca")({
  head: () => ({
    meta: [
      { title: "Nuestra Finca y Fincafe — Finca La Cruz" },
      { name: "description", content: "Conoce el entorno, la filosofía y la experiencia de visitar Finca La Cruz, y disfruta Fincafe: desayunos granjeros en medio de la naturaleza." },
      { property: "og:title", content: "Nuestra Finca y Fincafe — Finca La Cruz" },
      { property: "og:description", content: "Naturaleza, tranquilidad y desayunos granjeros a 5 km de Navojoa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NuestraFinca,
});

function NuestraFinca() {
  return (
    <>
      <PageHero image={hero} eyebrow="Nuestra Finca" title="Un rincón orgánico para reconectar" subtitle="Tierra viva, aire limpio y la calma del campo sonorense." />

      <section className="mx-auto max-w-4xl px-5 py-24 text-center">
        <Reveal>
          <p className="eyebrow">Filosofía y propósito</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Regresar a lo natural, a la salud y a la tranquilidad</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Finca La Cruz nace del deseo de ofrecer una alternativa para volver a lo esencial. Cultivamos bienestar respetando los tiempos de la tierra y el medio ambiente, y abrimos nuestras puertas para que familias y visitantes vivan el campo de cerca.</p>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-3">
        {[heroFinca, animales, espacio].map((img, i) => (
          <Reveal key={i} delay={i * 120} className={i === 1 ? "md:translate-y-12" : ""}>
            <div className="group overflow-hidden rounded-[2rem]"><img src={img} alt="Entorno natural de la finca" loading="lazy" className="img-zoom aspect-[3/4] w-full object-cover" /></div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-28 md:grid-cols-3">
        {[
          ["Contacto con la naturaleza", "Recorre cultivos y vegetación, y conoce a los animales que forman parte de la vida diaria de la granja."],
          ["Tranquilidad cerca de la ciudad", "A solo 5 km de Navojoa, un espacio para desconectarte del ruido cotidiano."],
          ["Experiencia familiar", "Un ambiente cálido para convivir, aprender y disfrutar juntos del campo."],
        ].map(([t, d], i) => (
          <Reveal key={t} delay={i * 100}>
            <div className="h-full rounded-3xl border border-border bg-card p-8">
              <span className="font-serif text-4xl text-secondary">0{i + 1}</span>
              <h3 className="mt-3 text-2xl">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section id="fincafe" className="scroll-mt-24 bg-primary py-24 text-primary-foreground md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-secondary">Dentro de Nuestra Finca</p>
            <h2 className="mt-3 text-5xl text-primary-foreground md:text-6xl">Fincafe</h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/85">Un espacio donde puedes disfrutar desayunos granjeros, alimentos artesanales y bebidas calientes o frías, rodeado de naturaleza. Sabores sencillos y honestos, preparados con lo que nos da la tierra.</p>
            <a href={whatsappLink("¡Hola! Me gustaría conocer Fincafe.")} target="_blank" rel="noopener noreferrer" className="btn btn-light mt-9">Ven a conocer Fincafe</a>
          </Reveal>
          <Reveal delay={150}>
            <div className="group overflow-hidden rounded-[2rem]"><img src={fincafe} alt="Desayuno granjero en Fincafe" loading="lazy" width={1200} height={912} className="img-zoom aspect-[4/3] w-full object-cover" /></div>
          </Reveal>
        </div>
        <div className="mx-auto mt-6 grid max-w-7xl grid-cols-2 gap-6 px-5">
          {[kefir, huevos].map((img, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="group overflow-hidden rounded-[2rem]"><img src={img} alt="Alimentos artesanales de la finca" loading="lazy" className="img-zoom aspect-[16/10] w-full object-cover" /></div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
