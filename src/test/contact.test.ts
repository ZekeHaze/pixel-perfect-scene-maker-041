import { describe, expect, it } from "vitest";
import { validateContact } from "@/lib/contact";

const ok = { nombre: "Ana", telefono: "642 123 4567", correo: "ana@correo.mx", mensaje: "Quiero visitar la finca" };

describe("validateContact", () => {
  it("accepts a complete form", () => expect(validateContact(ok)).toEqual({}));
  it("rejects short phone", () => expect(validateContact({ ...ok, telefono: "12345" }).telefono).toBeDefined());
  it("rejects bad email", () => expect(validateContact({ ...ok, correo: "ana@" }).correo).toBeDefined());
});
