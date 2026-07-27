import Image from "next/image";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/chi-siamo",
  title: "Chi siamo",
  description:
    "Dal 1962 affianchiamo l'industria manifatturiera italiana. Storia, mission, vision e certificazione di qualità UNI EN ISO 9001 di F. Scassellati S.r.l.",
  image: "/images/chi-siamo/team-evento-2025.jpg",
});

export default function ChiSiamoPage() {
  return (
    <>
      <PageHero
        eyebrow="Chi siamo"
        title="La nostra storia, la nostra visione"
        subtitle="Da oltre 60 anni affianchiamo l'industria manifatturiera italiana nella scelta delle migliori tecnologie per produrre con efficienza, qualità e visione."
        backHref="/"
        backLabel="Torna alla Home"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 space-y-16">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-bronze mb-3">
              La nostra storia
            </p>
            <p className="text-dgray/70 mb-4">
              Dal 1962 mettiamo la nostra esperienza al servizio
              dell&apos;industria manifatturiera.
            </p>
            <p className="text-dgray/70 mb-4">
              In oltre sei decenni abbiamo accompagnato migliaia di
              progetti, seguendo l&apos;evoluzione della produzione
              meccanica e selezionando tecnologie sempre più performanti per
              macchine utensili, lavorazione della lamiera, metrologia,
              software CAD/CAM e automazione.
            </p>
            <p className="text-dgray/70">
              Oggi Scassellati continua a essere un punto di incontro tra
              costruttori di eccellenza e aziende che desiderano investire in
              produttività, qualità e innovazione.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-bronze mb-3">
                Mission
              </p>
              <p className="text-dgray/70">
                Aiutiamo le imprese manifatturiere a migliorare
                competitività, produttività e qualità attraverso tecnologie,
                competenze e supporto continuo.
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-bronze mb-3">
                Vision
              </p>
              <p className="text-dgray/70">
                Diventare il partner di riferimento per l&apos;industria
                manifatturiera italiana, accompagnando ogni cliente
                nell&apos;evoluzione dei propri processi produttivi.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-bronze mb-3">
              Il team
            </p>
            <p className="text-dgray/70 mb-6">
              Dietro ogni progetto ci sono professionisti con esperienza
              diretta nel mondo della produzione meccanica. Affianchiamo
              ogni giorno le aziende manifatturiere con competenze
              tecniche, formazione e supporto operativo, costruendo
              relazioni basate su fiducia, disponibilità e risultati
              concreti.
            </p>
            <div className="relative w-full aspect-[3/1] rounded-lg overflow-hidden">
              <Image
                src="/images/chi-siamo/team-evento-2025.jpg"
                alt="Il team Scassellati"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 896px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-offwhite border-t border-gray/60">
        <div className="mx-auto max-w-7xl px-6 py-[calc(5rem-2cm)] grid gap-12 md:grid-cols-[1fr_1fr] items-center">
          <div>
            <h2 className="font-heading font-extrabold uppercase text-2xl md:text-3xl text-dgray mb-4">
              Qualità certificata
            </h2>
            <p className="text-dgray/70 max-w-xl">
              Operiamo secondo un Sistema di Gestione della Qualità
              certificato UNI EN ISO 9001, a conferma dell&apos;impegno
              costante verso organizzazione, affidabilità e miglioramento
              continuo. Un approccio che guida ogni fase del nostro lavoro:
              dalla consulenza tecnica alla fornitura di tecnologie, fino
              all&apos;assistenza e alla formazione.
            </p>
          </div>
          <div className="w-full max-w-[320px] md:justify-self-end md:mr-[2cm]">
            <a
              href="/images/chi-siamo/certificato-iso-9001.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray/60 rounded-lg overflow-hidden hover:border-bronze transition-colors"
            >
              <div className="relative aspect-[3/4] w-full bg-white">
                <Image
                  src="/images/chi-siamo/certificato-iso-9001.jpg"
                  alt="Certificato ISO 9001 Scassellati"
                  fill
                  sizes="(min-width: 768px) 320px, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
