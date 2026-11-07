import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "bg-background/95 shadow-soft backdrop-blur" : "bg-background/70 backdrop-blur-sm",
      )}
    >
      <div className={cn("mx-auto flex max-w-7xl items-center justify-between px-5 transition-all", scrolled ? "py-2" : "py-3")}>
        <Link to="/" className="flex items-center gap-3" aria-label="Finca La Cruz, inicio" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="Logotipo Finca La Cruz" width={64} height={64} className={cn("rounded-full transition-all", scrolled ? "h-12 w-12" : "h-14 w-14")} />
          <span className="hidden font-serif text-lg font-semibold text-primary sm:block">Finca La Cruz</span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.to} className={cn(item.to === "/nuestra-finca" && "group relative")}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: true }}
                  className="rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                  activeProps={{ className: "text-primary font-semibold" }}
                >
                  {item.label}
                </Link>
                {item.to === "/nuestra-finca" && (
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <Link to="/nuestra-finca" hash="fincafe" className="block whitespace-nowrap rounded-xl bg-card px-5 py-3 text-sm shadow-soft hover:text-accent">
                      ☕ Fincafe
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-primary lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav aria-label="Móvil" className="border-t border-border lg:hidden">
          <ul className="flex flex-col px-5 py-4">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} onClick={() => setOpen(false)} className="block py-3 font-serif text-xl text-primary" activeOptions={{ exact: true }} activeProps={{ className: "text-accent" }}>
                  {item.label}
                </Link>
                {item.to === "/nuestra-finca" && (
                  <Link to="/nuestra-finca" hash="fincafe" onClick={() => setOpen(false)} className="block pb-3 pl-4 text-sm text-muted-foreground">
                    — Fincafe
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
