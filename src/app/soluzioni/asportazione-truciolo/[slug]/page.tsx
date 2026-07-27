import { notFound } from "next/navigation";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SolutionCta from "@/components/SolutionCta";
import { asportazionePages as pages } from "@/data/soluzioni";
import type { Metadata } from "next";
import { buildMetadata, siteUrl } from "@/lib/metadata";

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = pages[slug];
  if (!data) return {};
  return buildMetadata({
    path: `/soluzioni/asportazione-truciolo/${slug}`,
    title: data.title,
    description: data.subtitle,
    image: data.items[0]?.image,
  });
}

export default async function AsportazioneDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = pages[slug];
  if (!data) notFound();

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
      {
        "@type": "ListItem",
        position: 4,
        name: data.title,
        item: `${siteUrl}/soluzioni/asportazione-truciolo/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        eyebrow="Asportazione truciolo"
        title={data.title}
        subtitle={data.subtitle}
        backHref="/soluzioni/asportazione-truciolo"
        backLabel="Torna ad Asportazione truciolo"
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <div
              key={item.name}
              className="flex flex-col bg-offwhite border border-gray/60 rounded-lg overflow-hidden"
            >
              {item.image && (
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
              )}
              <div className="p-4 flex flex-col flex-1">
                <p className="text-dgray font-medium">{item.name}</p>
                <p className="mt-1 text-sm text-dgray/70">{item.description}</p>
                {item.brands && item.brands.length > 0 && (
                  <p className="mt-3 text-xs text-dgray/65">
                    {item.brands.length === 1 ? "Partner tecnologico: " : "Partner tecnologici: "}
                    {item.brands.map((brand, i) => (
                      <span key={brand.url}>
                        <a
                          href={brand.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-dgray/70 hover:text-bronze hover:underline"
                        >
                          {brand.name} ↗︎
                        </a>
                        {i < item.brands!.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        {data.items.length === 0 && (
          <div className="mx-auto max-w-7xl px-6 pb-16">
            <p className="text-sm text-dgray/65">
              Schede tecniche e foto di dettaglio in arrivo per questa sezione.
            </p>
          </div>
        )}
      </section>
      <SolutionCta />
    </>
  );
}
