// Datos de contacto de Finca La Cruz.
// PENDIENTE: completar cuando el propietario los proporcione. No inventar valores.
export const SITE = {
  name: "Finca La Cruz",
  slogan: "Reviviendo lo Natural",
  /** Número de WhatsApp en formato internacional sin "+" ni espacios, ej. 52XXXXXXXXXX. PENDIENTE. */
  whatsappNumber: "",
  instagramUrl: "", // PENDIENTE
  facebookUrl: "", // PENDIENTE
  /** URL del servicio que recibirá el formulario de contacto (Formspree, etc.). PENDIENTE. */
  contactFormEndpoint: "",
  address: "Carretera Navojoa–Tesia, entrada a Sivacobe, a 5 km de Navojoa, Sonora, México",
  mapEmbed: "https://www.google.com/maps?q=Sivacobe,+Navojoa,+Sonora,+M%C3%A9xico&z=13&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Sivacobe+Navojoa+Sonora",
};

export function whatsappLink(message = "¡Hola! Me gustaría planear una visita a Finca La Cruz.") {
  const base = SITE.whatsappNumber ? `https://wa.me/${SITE.whatsappNumber}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/nuestra-finca", label: "Nuestra Finca" },
  { to: "/ecotienda", label: "Ecotienda" },
  { to: "/escuela-granjera", label: "Escuela Granjera" },
  { to: "/galeria", label: "Galería" },
  { to: "/contacto", label: "Contacto" },
] as const;
