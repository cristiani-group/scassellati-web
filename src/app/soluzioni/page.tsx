import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { areas } from "@/data/soluzioni";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/soluzioni",
  title: "Soluzioni per l'industria meccanica",
  description:
    "Macchine per asportazione truciolo, lamiera, utensili, metrologia, software, automazione e finitura: soluzioni tecnologiche integrate per la produzione industriale.",
  image: "/images/soluzioni/asportazione-truciolo.jpeg",
});

export default function SoluzioniPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluzioni"
        title="Soluzioni per ogni esigenza produttiva"
        subtitle="Dall'asportazione truciolo alla lavorazione della lamiera, dall'automazione industriale ai trattamenti di finitura, proponiamo tecnologie integrate e supporto tecnico in ogni fase del processo produttivo."
        backHref="/"
        backLabel="Torna alla Home"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/soluzioni/${area.slug}`}
              className="group bg-offwhite border border-gray/60 rounded-lg overflow-hidden hover:border-bronze transition-colors"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold uppercase text-lg text-dgray mb-2 group-hover:text-bronze transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-dgray/70">{area.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-offwhite border-t border-gray/60">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="font-heading font-extrabold uppercase text-2xl md:text-3xl text-dgray mb-4">
            Non sai quale soluzione fa al caso tuo?
          </h2>
          <p className="text-dgray/70 mb-8">
            Raccontaci le tue esigenze: ti aiutiamo a scegliere la tecnologia
            giusta per la tua produzione.
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
