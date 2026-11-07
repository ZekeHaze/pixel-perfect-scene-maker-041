import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
import { NAV, SITE, whatsappLink } from "@/lib/site";
import { SocialLinks, WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo.url} alt="Logotipo Finca La Cruz" width={96} height={96} loading="lazy" className="h-24 w-24 rounded-full bg-background p-1" />
          <p className="mt-5 font-serif text-2xl text-primary-foreground">{SITE.slogan}</p>
          <p className="mt-2 max-w-sm text-sm text-primary-foreground/75">Granja orgánica en Navojoa, Sonora. Cultivamos bienestar respetando los tiempos de la tierra.</p>
        </div>
        <div>
          <p className="eyebrow text-secondary">Explora</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-primary-foreground/85 hover:text-primary-foreground">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-secondary">Visítanos</p>
          <p className="mt-4 text-sm text-primary-foreground/85">{SITE.address}</p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm underline underline-offset-4">Escríbenos por WhatsApp</a>
          <SocialLinks className="mt-5" itemClass="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" />
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Finca La Cruz · Granja Orgánica · Navojoa, Sonora
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft ring-4 ring-background/70 transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
