import PageHero from "@/components/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/contatti",
  title: "Contatti",
  description:
    "Contatta F. Scassellati S.r.l. per informazioni tecniche, appuntamenti o richieste commerciali. Sede a Roma, via del Casale Ferranti 85.",
});

export default function ContattiPage() {
  return (
    <>
      <PageHero
        eyebrow="Contatti"
        title="Contattaci"
        subtitle="Vuoi ricevere informazioni, fissare un appuntamento o inviarci una richiesta tecnica? Siamo a tua disposizione."
        backHref="/"
        backLabel="Torna alla Home"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-16 md:grid-cols-2">
          <ContactForm />

          <div>
            <h3 className="font-heading font-bold uppercase text-lg text-dgray mb-4">
              F. SCASSELLATI S.r.l.
            </h3>
            <p className="text-dgray/70">Via del Casale Ferranti, 85</p>
            <p className="text-dgray/70 mb-4">00173 Roma</p>
            <p className="text-dgray/70">Tel: <a href="tel:+390693020906" className="underline underline-offset-4 hover:text-bronze transition-colors">+39 06 93020906</a></p>
            <p className="text-dgray/70">Email: <a href="mailto:segreteria@scassellati.com" className="underline underline-offset-4 hover:text-bronze transition-colors">segreteria@scassellati.com</a></p>
            <p className="text-dgray/70 mb-4">PEC: <a href="mailto:fscassellati@pec.it" className="underline underline-offset-4 hover:text-bronze transition-colors">fscassellati@pec.it</a></p>
            <p className="text-dgray/65 text-sm mb-8">
              Lun–Ven: 9:00–13:00, 14:00–17:00
            </p>
            <div className="rounded-lg overflow-hidden aspect-video border border-gray/60">
              <iframe
                src="https://www.google.com/maps?q=Via%20del%20Casale%20Ferranti%2C%2085%2C%2000173%20Roma&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa: F. Scassellati S.r.l., Via del Casale Ferranti 85, Roma"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
