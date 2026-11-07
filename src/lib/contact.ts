export type ContactValues = { nombre: string; telefono: string; correo: string; mensaje: string };
export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export function validateContact(v: ContactValues): ContactErrors {
  const e: ContactErrors = {};
  if (v.nombre.trim().length < 2) e.nombre = "Escribe tu nombre.";
  const digits = v.telefono.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) e.telefono = "Escribe un teléfono válido de 10 dígitos.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.correo.trim())) e.correo = "Escribe un correo electrónico válido.";
  if (v.mensaje.trim().length < 10) e.mensaje = "Tu mensaje debe tener al menos 10 caracteres.";
  return e;
}
