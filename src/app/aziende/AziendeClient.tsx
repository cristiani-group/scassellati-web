"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { areas, getSolutionBrands } from "@/data/soluzioni";

// Logo disponibili per i brand realmente citati nelle pagine Soluzioni.
// Se un brand non ha un logo qui, la card mostra il nome in forma testuale.
// "scale": fattore di ingrandimento rispetto al riferimento Belotti (1),
// per compensare i loghi con molto spazio bianco interno al file.
const logos: Record<string, { src: string; scale?: number }> = {
  "Sandvik Coromant": { src: "/logo/partner/sandvik-coromant.svg" },
  Schunk: { src: "/logo/partner/schunk.svg" },
  Hexagon: { src: "/logo/partner/hexagon.png", scale: 1.35 },
  "Vero Project Group": { src: "/logo/partner/veroprojectgroup.webp" },
  Pressix: { src: "/logo/partner/pressix.png" },
  LVD: { src: "/logo/partner/lvd.svg" },
  Flow: { src: "/logo/partner/flow.png", scale: 1.4 },
  Ficep: { src: "/logo/partner/ficep.png", scale: 1.3 },
  Icam: { src: "/logo/partner/icam.png" },
  "Precision Robotica": { src: "/logo/partner/precisionrobotica.png" },
  Tecnorobot: { src: "/logo/partner/tecnorobot.svg" },
  Engel: { src: "/logo/partner/engel.svg" },
  Frigel: { src: "/logo/partner/frigel.svg" },
  CMT: { src: "/logo/partner/cmt-mono.png", scale: 1.5 },
  "Virginio Nastri": { src: "/logo/partner/virginio.png" },
  Firbimatic: { src: "/logo/partner/firbimatic.svg" },
  Otec: { src: "/logo/partner/otec.svg" },
  "Ceia Power": { src: "/logo/partner/ceia.webp" },
  Nabertherm: { src: "/logo/partner/nabertherm.svg" },
  "United Machining": { src: "/logo/partner/unitedmachining.svg" },
  Emco: { src: "/logo/partner/emco.png" },
  MCM: { src: "/logo/partner/mcm-2024.png", scale: 1.1 },
  Belotti: { src: "/logo/partner/belotti.svg" },
  Pama: { src: "/logo/partner/pama.png", scale: 1.25 },
  Biglia: { src: "/logo/partner/biglia.png" },
  Tornos: { src: "/logo/partner/tornos.svg" },
  "Top Automazioni": { src: "/logo/partner/topautomazioni.png" },
  Fenix: { src: "/logo/partner/fenix.png" },
  Mar: { src: "/logo/partner/mar.png" },
  Bianco: { src: "/logo/partner/bianco.png" },
  Riboni: { src: "/logo/partner/riboni-2024.png", scale: 1.6 },
};

const brands = getSolutionBrands();
const filterCategories = areas.map((a) => a.title);

function BrandLogo({ name }: { name: string }) {
  const logo = logos[name];
  if (logo) {
    return (
      <div className="relative h-20 w-full">
        <Image
          src={logo.src}
          alt={name}
          fill
          className="object-contain object-center"
          style={{
            filter: "brightness(0) invert(16%)",
            transform: `scale(${logo.scale ?? 1})`,
          }}
          sizes="200px"
        />
      </div>
    );
  }
  return (
    <p className="font-heading font-bold uppercase text-lg text-dgray/70">
      {name}
    </p>
  );
}

export default function AziendeClient() {
  const [active, setActive] = useState<string>("Tutti");

  const filtered = useMemo(
    () =>
      active === "Tutti"
        ? brands
        : brands.filter((b) => b.categories.includes(active)),
    [active]
  );

  return (
    <>
      <PageHero
        eyebrow="Partner"
        title="I nostri partner tecnologici"
        subtitle="Collaboriamo con costruttori e aziende leader per offrire soluzioni complete per la produzione industriale."
        backHref="/"
        backLabel="Torna alla Home"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-wrap gap-2 mb-10">
            {["Tutti", ...filterCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs md:text-sm px-4 py-2 rounded-full border transition-colors ${
                  active === cat
                    ? "bg-dgray text-offwhite border-dgray"
                    : "border-gray/60 text-dgray/70 hover:border-bronze hover:text-bronze"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="text-sm text-dgray/65 mb-6">
            {filtered.length} partner
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col bg-offwhite border border-gray/60 rounded-lg p-6 h-full"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <BrandLogo name={brand.name} />
                </div>
                <div className="mt-auto pt-4 border-t border-gray/40">
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visita il sito ufficiale di ${brand.name}`}
                    className="inline-flex items-center gap-1 text-sm text-dgray hover:text-bronze hover:underline transition-colors"
                  >
                    Visita il sito ufficiale →︎
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
