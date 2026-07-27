import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";
import { buildMetadata, siteUrl } from "@/lib/metadata";
import {
  Code2,
  Settings2,
  Timer,
  PackagePlus,
  BarChart3,
  HardHat,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  path: "/servizi/consulenza-tecnica",
  title: "Consulenza tecnica",
  description:
    "Analizziamo il processo produttivo, sviluppiamo strategie di lavorazione e affianchiamo il reparto tecnico per aumentare produttività, qualità ed efficienza.",
  image: "/images/servizi/consulenza-tecnica-hero.png",
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Servizi", item: `${siteUrl}/servizi` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Consulenza tecnica",
      item: `${siteUrl}/servizi/consulenza-tecnica`,
    },
  ],
};

const attivita = [
  {
    Icon: Code2,
    title: "Programmazione CAM",
    description: "Percorsi utensile generati e ottimizzati per ogni lavorazione.",
  },
  {
    Icon: Settings2,
    title: "Ottimizzazione strategie utensile",
    description: "Strategie di lavorazione più efficienti a parità di macchina.",
  },
  {
    Icon: Timer,
    title: "Riduzione tempi ciclo",
    description: "Meno tempo macchina per pezzo, a parità di qualità.",
  },
  {
    Icon: PackagePlus,
    title: "Industrializzazione nuovi componenti",
    description: "Dal disegno al primo pezzo conforme in produzione.",
  },
  {
    Icon: BarChart3,
    title: "Analisi del processo produttivo",
    description: "Individuiamo i colli di bottiglia del reparto.",
  },
  {
    Icon: HardHat,
    title: "Affiancamento tecnico in officina",
    description: "Presenza diretta accanto ai vostri operatori.",
  },
];

const dopoConsulenza = [
  { title: "Corsi in officina", description: "Formazione pratica sulle vostre macchine." },
  { title: "Academy", description: "Percorsi di crescita personalizzati." },
  { title: "Hexagon Machine Trainer", description: "Simulatore CNC per formare senza fermare la produzione." },
  { title: "Percorsi personalizzati", description: "Costruiti sulle esigenze reali del reparto." },
];

export default function ConsulenzaTecnicaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        eyebrow="Servizi"
        title="Ottimizziamo il tuo processo produttivo"
        subtitle="Analizziamo il processo produttivo, sviluppiamo strategie di lavorazione e affianchiamo il reparto tecnico per aumentare produttività, qualità ed efficienza."
        backHref="/servizi"
        backLabel="Torna a Servizi"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-16">
          <div className="relative aspect-[21/9] rounded-lg overflow-hidden">
            <Image
              src="/images/servizi/consulenza-tecnica-hero.png"
              alt="Tecnico Scassellati al lavoro su un progetto CAD/CAM"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Cosa possiamo fare */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-heading font-extrabold uppercase text-2xl md:text-3xl text-dgray mb-10">
            Cosa possiamo fare
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {attivita.map((a) => (
              <div
                key={a.title}
                className="bg-offwhite border border-gray/60 rounded-lg p-6"
              >
                <a.Icon strokeWidth={1.5} className="w-7 h-7 text-bronze mb-4" />
                <h3 className="font-heading font-bold uppercase text-base text-dgray mb-2">
                  {a.title}
                </h3>
                <p className="text-sm text-dgray/70">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dalla consulenza alla formazione */}
      <section className="bg-dgray">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-bronze mb-4">
            Il passo successivo
          </p>
          <h2 className="font-heading font-extrabold uppercase text-3xl text-offwhite mb-6 max-w-2xl">
            Dalla consulenza alla formazione
          </h2>
          <p className="text-gray/80 max-w-2xl mb-12">
            Una volta ottimizzato il processo, possiamo formare i vostri
            operatori perché il metodo resti in reparto anche dopo che ce ne
            siamo andati.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-10">
            {dopoConsulenza.map((d) => (
              <div key={d.title}>
                <p className="text-offwhite font-medium mb-2">{d.title}</p>
                <p className="text-sm text-gray/70">{d.description}</p>
              </div>
            ))}
          </div>
          <Link
            href="/formazione"
            className="text-sm text-offwhite hover:text-bronze hover:underline transition-colors"
          >
            Scopri la formazione →︎
          </Link>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-offwhite border-t border-gray/60">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="font-heading font-extrabold uppercase text-2xl md:text-3xl text-dgray mb-8">
            Analizziamo insieme la tua lavorazione.
          </h2>
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
