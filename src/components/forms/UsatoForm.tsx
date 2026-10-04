"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

type Errors = Partial<Record<"marca" | "modello" | "privacy", string>>;

const inputClass = (hasError: boolean) =>
  `w-full border rounded-sm px-4 py-3 text-sm ${
    hasError ? "border-red-600" : "border-gray/60"
  }`;

export default function UsatoForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [serverError, setServerError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const marca = (form.elements.namedItem("marca") as HTMLInputElement).value.trim();
    const modello = (
      form.elements.namedItem("modello") as HTMLInputElement
    ).value.trim();
    const privacy = (form.elements.namedItem("privacy") as HTMLInputElement).checked;

    const nextErrors: Errors = {};
    if (!marca) nextErrors.marca = "Inserisci la marca della macchina.";
    if (!modello) nextErrors.modello = "Inserisci il modello della macchina.";
    if (!privacy)
      nextErrors.privacy = "Devi accettare la Privacy Policy per continuare.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstErrorField = form.elements.namedItem(
        Object.keys(nextErrors)[0]
      ) as HTMLElement | null;
      firstErrorField?.focus();
      return;
    }

    setStatus("submitting");
    setServerError(null);

    try {
      const formData = new FormData(form);
      formData.set("privacy", privacy ? "true" : "false");

      const res = await fetch("/api/usato", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error ?? "Impossibile inviare la richiesta. Riprova più tardi.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setServerError("Impossibile inviare la richiesta. Controlla la connessione e riprova.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-gray/60 rounded-lg bg-offwhite p-8"
      >
        <h3 className="font-heading font-bold uppercase text-lg text-dgray mb-2">
          Richiesta inviata correttamente
        </h3>
        <p className="text-dgray/70">
          Grazie, abbiamo ricevuto i dati della tua macchina. Ti
          ricontatteremo per la valutazione il prima possibile.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="marca" className="sr-only">
          Marca
        </label>
        <input
          id="marca"
          name="marca"
          type="text"
          required
          placeholder="Marca *"
          aria-invalid={!!errors.marca}
          aria-describedby={errors.marca ? "marca-error" : undefined}
          className={inputClass(!!errors.marca)}
        />
        {errors.marca && (
          <p id="marca-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.marca}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="modello" className="sr-only">
          Modello
        </label>
        <input
          id="modello"
          name="modello"
          type="text"
          required
          placeholder="Modello *"
          aria-invalid={!!errors.modello}
          aria-describedby={errors.modello ? "modello-error" : undefined}
          className={inputClass(!!errors.modello)}
        />
        {errors.modello && (
          <p id="modello-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.modello}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="anno" className="sr-only">
          Anno
        </label>
        <input
          id="anno"
          name="anno"
          type="text"
          placeholder="Anno"
          className={inputClass(false)}
        />
      </div>

      <div>
        <label htmlFor="note" className="sr-only">
          Stato e note
        </label>
        <textarea
          id="note"
          name="note"
          placeholder="Stato e note"
          rows={4}
          className={inputClass(false)}
        />
      </div>

      <label className="block">
        <span className="block text-sm text-dgray/70 mb-2">
          Foto della macchina (opzionale, max 5 file, 8MB ciascuno)
        </span>
        <input
          name="foto"
          type="file"
          accept="image/*"
          multiple
          className="w-full border border-gray/60 rounded-sm px-4 py-3 text-sm file:mr-4 file:rounded-sm file:border-0 file:bg-dgray file:px-4 file:py-2 file:text-sm file:text-offwhite file:cursor-pointer"
        />
      </label>

      <div>
        <div className="flex items-start gap-2.5">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            required
            aria-invalid={!!errors.privacy}
            aria-describedby={errors.privacy ? "privacy-error" : undefined}
            className="mt-1 h-4 w-4 shrink-0 accent-bronze"
          />
          <label htmlFor="privacy" className="text-sm text-dgray/70">
            Ho letto e accetto la{" "}
            <Link
              href="/privacy"
              target="_blank"
              className="text-dgray underline hover:text-bronze transition-colors"
            >
              Privacy Policy
            </Link>
            . *
          </label>
        </div>
        {errors.privacy && (
          <p id="privacy-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.privacy}
          </p>
        )}
      </div>

      <p className="text-sm text-dgray/65">* Campi obbligatori</p>

      {status === "error" && serverError && (
        <p role="alert" className="text-sm text-red-600">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-dgray text-offwhite px-6 py-3 rounded-sm hover:bg-dgray/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Invio in corso…" : "Invia il modulo"}
      </button>
    </form>
  );
}
