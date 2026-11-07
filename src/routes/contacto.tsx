import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin } from "lucide-react";
import hero from "@/assets/hero-finca.jpg";
import { MapEmbed, PageHero } from "@/components/site/PageHero";
import { SocialLinks, WhatsAppIcon } from "@/components/site/icons";
import { Reveal } from "@/components/site/Reveal";
import { SITE, whatsappLink } from "@/lib/site";
import { validateContact, type ContactErrors, type ContactValues } from "@/lib/contact";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Visita Finca La Cruz" },
      { name: "description", content: "Planea tu visita a Finca La Cruz: carretera Navojoa–Tesia, entrada a Sivacobe. Escríbenos por WhatsApp o envíanos un mensaje." },
      { property: "og:title", content: "Contacto — Finca La Cruz" },
      { property: "og:description", content: "Ubicación, mapa y contacto para planear tu visita a la finca." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contacto,
});

const empty: ContactValues = { nombre: "", telefono: "", correo: "", mensaje: "" };
type Status = { kind: "idle" | "sending" | "ok" | "error" | "unconfigured" };

function Contacto() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validateContact(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    if (!SITE.contactFormEndpoint) {
      setStatus({ kind: "unconfigured" });
      return;
    }
    setStatus({ kind: "sending" });
    try {
      const res = await fetch(SITE.contactFormEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(values) });
      if (!res.ok) throw new Error(String(res.status));
      setStatus({ kind: "ok" });
      setValues(empty);
    } catch {
      setStatus({ kind: "error" });
    }
  }

  const field = (name: keyof ContactValues, label: string, type = "text") => (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-primary">{label}</label>
      {name === "mensaje" ? (
        <textarea id={name} rows={5} value={values[name]} onChange={(e) => setValues({ ...values, [name]: e.target.value })} aria-invalid={!!errors[name]} aria-describedby={`${name}-err`} className="w-full rounded-2xl border border-input bg-card px-4 py-3 outline-none focus:border-primary" />
      ) : (
        <input id={name} type={type} value={values[name]} onChange={(e) => setValues({ ...values, [name]: e.target.value })} aria-invalid={!!errors[name]} aria-describedby={`${name}-err`} className="w-full rounded-full border border-input bg-card px-5 py-3 outline-none focus:border-primary" />
      )}
      {errors[name] && <p id={`${name}-err`} className="mt-1 text-sm text-destructive">{errors[name]}</p>}
    </div>
  );

  return (
    <>
      <PageHero image={hero} eyebrow="Contacto" title="Planea tu visita" subtitle="Estaremos felices de recibirte en la finca." />
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:grid-cols-2">
        <Reveal>
          <h2 className="text-4xl">¿Dónde estamos?</h2>
          <p className="mt-4 flex gap-3 text-lg text-muted-foreground"><MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />{SITE.address}</p>
          <div className="mt-8"><MapEmbed src={SITE.mapEmbed} /></div>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><WhatsAppIcon className="h-5 w-5" />Escríbenos por WhatsApp</a>
            <SocialLinks itemClass="border-primary/30 text-primary hover:bg-mint-soft" />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-[2rem] bg-mint-soft p-8 md:p-10">
            <h2 className="text-3xl">Envíanos un mensaje</h2>
            {field("nombre", "Nombre")}
            {field("telefono", "Teléfono", "tel")}
            {field("correo", "Correo electrónico", "email")}
            {field("mensaje", "Mensaje")}
            <button type="submit" disabled={status.kind === "sending"} className="btn btn-primary w-full disabled:opacity-60">
              {status.kind === "sending" ? "Enviando…" : "Enviar mensaje"}
            </button>
            <div aria-live="polite" className="text-sm">
              {status.kind === "ok" && <p className="text-primary">¡Gracias! Recibimos tu mensaje y te responderemos pronto.</p>}
              {status.kind === "error" && <p className="text-destructive">No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.</p>}
              {status.kind === "unconfigured" && (
                <p className="text-foreground">El envío por formulario aún no está disponible. Por ahora, <a className="font-semibold underline" href={whatsappLink(`Hola, soy ${values.nombre}. ${values.mensaje}`)} target="_blank" rel="noopener noreferrer">envíanos tu mensaje por WhatsApp</a>.</p>
              )}
            </div>
          </form>
        </Reveal>
      </section>
    </>
  );
}
