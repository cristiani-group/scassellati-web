import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";
import { buildMetadata, siteUrl } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/soluzioni/asportazione-truciolo",
  title: "Macchine per asportazione truciolo",
  description:
    "Centri di lavoro verticali, orizzontali e a 5 assi, torni CNC, fantina mobile, plurimandrino, rettifiche e macchine da taglio.",
  image: "/images/soluzioni/asportazione-truciolo.jpeg",
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Soluzioni", item: `${siteUrl}/soluzioni` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Asportazione truciolo",
      item: `${siteUrl}/soluzioni/asportazione-truciolo`,
    },
  ],
};

const categories = [
  {
    slug: "fresatura",
    title: "Fresatura",
    description: "Centri di lavoro CNC verticali, orizzontali e a 5 assi.",
    image: "/images/soluzioni/fresatura.jpeg",
  },
  {
    slug: "tornitura",
    title: "Tornitura",
    description: "Torni CNC, fantina mobile, plurimandrino, alimentatori di barre.",
    image: "/images/soluzioni/tornitura.png",
  },
  {
    slug: "rettifica",
    title: "Rettifica",
    description: "Macchine per la rettifica di precisione.",
    image: "/images/soluzioni/rettifica.jpeg",
  },
  {
    slug: "macchine-da-taglio",
    title: "Macchine da taglio",
    description: "Macchine per il taglio dei metalli.",
    image: "/images/soluzioni/macchine-da-taglio.jpeg",
  },
];

export default function AsportazioneTrucioloPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        eyebrow="Soluzioni"
        title="Macchine per asportazione truciolo"
        subtitle="Centri di lavoro verticali, orizzontali e a 5 assi, torni CNC, fantina mobile, plurimandrino, lavorazioni piastre e compositi."
        backHref="/soluzioni"
        backLabel="Torna a Soluzioni"
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-6 md:grid-cols-2">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/soluzioni/asportazione-truciolo/${cat.slug}`}
              className="group bg-offwhite border border-gray/60 rounded-lg overflow-hidden hover:border-bronze transition-colors"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold uppercase text-lg text-dgray mb-2 group-hover:text-bronze transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-dgray/70">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
