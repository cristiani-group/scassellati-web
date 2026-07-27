import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/servizi",
  title: "Servizi",
  description:
    "Consulenza tecnica, formazione e assistenza: non ci limitiamo a vendere macchine, supportiamo ogni fase del tuo processo produttivo.",
  image: "/images/servizi/consulenza-tecnica-hero.png",
});

const services = [
  {
    title: "Consulenza tecnica",
    description:
      "Analizziamo lavorazioni, strategie CAM, utensili e tempi ciclo per migliorare produttività, qualità ed efficienza.",
    href: "/servizi/consulenza-tecnica",
    cta: "Scopri il servizio",
    image: "/images/servizi/consulenza-tecnica.png",
  },
  {
    title: "Formazione",
    description:
      "Corsi tecnici per operatori macchina, programmatori CAM, responsabili produzione e qualità. Formazione pratica con simulatori CNC, ambienti virtuali e casi reali, anche presso la tua azienda.",
    href: "/formazione",
    cta: "Scopri la formazione",
    image: "/images/servizi/formazione.jpeg",
  },
  {
    title: "Assistenza e manutenzione",
    description:
      "Affiancamento post-vendita, manutenzione ordinaria e straordinaria, fornitura ricambi. Collaboriamo con costruttori e tecnici autorizzati per garantire continuità e rapidità d'intervento.",
    href: "/contatti",
    cta: "Contattaci",
    image: "/images/servizi/assistenza-manutenzione.jpeg",
  },
];

export default function ServiziPage() {
  return (
    <>
      <PageHero
        eyebrow="Servizi"
        title="I nostri servizi"
        subtitle="Non ci limitiamo a vendere macchine. Offriamo consulenza, formazione e assistenza tecnica per supportare ogni fase del tuo processo produttivo."
        backHref="/"
        backLabel="Torna alla Home"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-offwhite border border-gray/60 rounded-lg overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-heading font-bold uppercase text-xl text-dgray mb-4">
                  {service.title}
                </h3>
                <p className="text-sm text-dgray/70 flex-1">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 text-bronze text-sm font-medium hover:underline"
                >
                  {service.cta} →︎
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-dgray">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="font-heading font-extrabold uppercase text-2xl md:text-3xl text-offwhite mb-4">
            Vuoi ricevere supporto tecnico o organizzare un percorso
            formativo personalizzato?
          </h2>
          <p className="text-gray mb-8">Siamo a tua disposizione.</p>
          <Link
            href="/contatti"
            className="border border-gray/40 text-offwhite px-6 py-3 rounded-sm hover:border-bronze hover:text-bronze transition-colors inline-block font-medium"
          >
            Contattaci
          </Link>
        </div>
      </section>
    </>
  );
}
