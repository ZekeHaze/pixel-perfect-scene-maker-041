export function PageHero({ image, eyebrow, title, subtitle }: { image: string; eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden">
      <img src={image} alt="" className="animate-slow-zoom absolute inset-0 h-full w-full object-cover" />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32">
        <p className="eyebrow text-mint-soft">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-tight text-primary-foreground md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90">{subtitle}</p>}
      </div>
    </section>
  );
}

export function MapEmbed({ src, title = "Mapa de ubicación de Finca La Cruz" }: { src: string; title?: string }) {
  return (
    <div className="overflow-hidden rounded-3xl shadow-soft">
      <iframe src={src} title={title} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[380px] w-full border-0" />
    </div>
  );
}
