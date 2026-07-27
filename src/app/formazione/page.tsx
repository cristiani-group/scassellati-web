import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/formazione",
  title: "Corsi CNC e formazione controlli numerici a Roma",
  description:
    "Corsi CNC e formazione su programmazione dei controlli numerici, utensileria Sandvik Coromant e Schunk, metrologia e simulatore Hexagon Machine Trainer, a Roma per aziende del Lazio e Umbria.",
  image: "/images/formazione/hero-formazione.jpeg",
});

const trainingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Formazione tecnica su controlli numerici e utensili",
  description:
    "Corsi di formazione pratica su controlli numerici CNC, programmazione CAM e utensileria Sandvik Coromant e Schunk, anche in azienda.",
  provider: { "@type": "LocalBusiness", name: "F. Scassellati S.r.l." },
  areaServed: [
    { "@type": "State", name: "Lazio" },
    { "@type": "State", name: "Umbria" },
  ],
};

const beneficiHexagon = [
  {
    title: "Zero fermo produzione",
    description: "Si formano su una macchina virtuale, senza sottrarre un minuto a quella che sta lavorando in reparto.",
  },
  {
    title: "Formazione in totale sicurezza",
    description: "Collisioni, errori e arresti di emergenza si simulano e si correggono qui, non su un mandrino reale.",
  },
  {
    title: "Ambiente identico alla macchina reale",
    description: "Controlli reali HEIDENHAIN, SIEMENS e FANUC: stessi comandi, stessa logica di lavoro di macchina.",
  },
  {
    title: "Tempi e costi ridotti",
    description: "Si arriva operativi più in fretta, con meno ore di affiancamento necessarie sulla macchina vera.",
  },
];

const trainingAreas = [
  {
    title: "Tecnologia dell'asportazione di truciolo",
    audience: "Operatori CNC, tecnici e programmatori CAM",
    description: "Comprendere il processo di lavorazione per migliorare qualità, produttività e autonomia operativa.",
  },
  {
    title: "Programmazione CNC e Hexagon Machine Trainer",
    audience: "Operatori, programmatori, scuole e Academy",
    description: "Percorsi dedicati alla programmazione e all'utilizzo dei principali controlli numerici, anche in simulazione pratica sul simulatore Hexagon Machine Trainer.",
  },
  {
    title: "CAD/CAM",
    audience: "Ufficio tecnico e programmatori",
    description: "Formazione sull'utilizzo dei software CAM e sull'ottimizzazione delle strategie di lavorazione.",
  },
  {
    title: "Metrologia e controllo qualità",
    audience: "Tecnici qualità e operatori",
    description: "Percorsi dedicati al controllo dimensionale e alla qualità del processo produttivo.",
  },
];

export default function FormazionePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingJsonLd) }}
      />
      <PageHero
        eyebrow="Formazione"
        title="La nostra formazione nasce dall'esperienza in produzione."
        subtitle="Progettiamo percorsi formativi su controlli numerici (CNC), utensileria, CAD/CAM, metrologia e tecnologie di produzione, costruiti sulle reali esigenze delle aziende del Lazio, Umbria e di tutta Italia e orientati all'applicazione pratica."
        backHref="/servizi"
        backLabel="Torna a Servizi"
        image="/images/formazione/hero-formazione.jpeg"
      />

      {/* Hexagon Machine Trainer */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-bronze mb-4">
              Hexagon Machine Trainer
            </p>
            <h2 className="font-heading font-extrabold uppercase text-3xl text-dgray mb-4">
              La formazione pratica, senza occupare una macchina di produzione.
            </h2>
            <p className="text-xl md:text-2xl font-heading font-bold text-dgray border-l-4 border-bronze pl-5 my-10">
              Prima si impara sul simulatore.
              <br />
              Poi si lavora sulla macchina reale.
            </p>
            <p className="text-dgray/70 mb-8">
              Un ambiente identico alla macchina reale, dove errori e
              collisioni si sperimentano in totale sicurezza.
            </p>
            <div className="grid grid-cols-2 gap-px bg-gray/30">
              {beneficiHexagon.map((b) => (
                <div key={b.title} className="bg-white p-8 hover:bg-offwhite transition-colors">
                  <p className="text-dgray font-medium mb-1">{b.title}</p>
                  <p className="text-sm text-dgray/70">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/formazione/hxgn-machine-trainer.jpeg"
                alt="HxGN Machine Trainer, simulatore CNC Hexagon"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/formazione/hxgn-machine-trainer-2.jpeg"
                alt="Operatori in formazione su HxGN Machine Trainer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Percorsi formativi */}
      <section className="bg-dgray">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-bronze mb-4">
            Percorsi
          </p>
          <h2 className="font-heading font-extrabold uppercase text-3xl md:text-4xl text-offwhite mb-12 max-w-2xl">
            Percorsi formativi
          </h2>
          <div className="grid gap-px bg-white/10 md:grid-cols-2">
            {trainingAreas.map((area) => (
              <div
                key={area.title}
                className="bg-dgray p-8 hover:bg-white/[0.03] transition-colors"
              >
                <p className="text-[11px] uppercase tracking-wide text-bronze mb-3">
                  {area.audience}
                </p>
                <h3 className="font-heading font-bold uppercase text-xl text-offwhite mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-gray/70">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-bronze mb-4">
              Collaborazione
            </p>
            <h2 className="font-heading font-extrabold uppercase text-3xl text-dgray mb-6">
              Con ELIS, formiamo i tecnici di domani
            </h2>
            <p className="text-dgray/70 mb-4">
              Con ELIS abbiamo costruito <strong className="text-dgray">Tecnico CNC Junior</strong>,
              un percorso che unisce ricerca, selezione, formazione e
              inserimento in azienda di nuovi tecnici CNC.
            </p>
            <p className="text-dgray/70 mb-6">
              Oltre 200 ore tra disegno tecnico, programmazione CNC,
              utensileria, CAD/CAM, metrologia e project work in produzione,
              con il contributo di partner come Hexagon, Sandvik Coromant e
              Schunk.
            </p>
            <a
              href="https://elis.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-dgray hover:text-bronze hover:underline transition-colors"
            >
              Scopri ELIS ↗︎
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/formazione/elis-1.jpeg"
                alt="Formazione ELIS con visore VR su simulatore CNC"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/formazione/elis-2.jpeg"
                alt="Esercitazione pratica su utensileria e attrezzaggio"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/formazione/elis-3.jpeg"
                alt="Esercitazione di metrologia con micrometro"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/formazione/elis-4.jpeg"
                alt="Celebrazione del percorso Tecnico CNC Junior con ELIS"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-offwhite border-t border-gray/60">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="font-heading font-extrabold uppercase text-2xl md:text-3xl text-dgray mb-4">
            Costruiamo insieme il percorso formativo più adatto alla tua azienda.
          </h2>
          <p className="text-dgray/70 mb-8 max-w-xl mx-auto">
            Raccontaci il livello di partenza del tuo team e l&apos;obiettivo
            da raggiungere: troviamo insieme il percorso giusto, anche presso
            la vostra officina.
          </p>
          <Link
            href="/contatti"
            className="bg-dgray text-offwhite px-6 py-3 rounded-sm hover:text-bronze transition-colors inline-block"
          >
            Contattaci
          </Link>
        </div>
      </section>
    </>
  );
}
