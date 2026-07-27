import type { MetadataRoute } from "next";
import { soluzioniPages, asportazionePages } from "@/data/soluzioni";
import { siteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/soluzioni",
    "/soluzioni/asportazione-truciolo",
    "/aziende",
    "/servizi",
    "/servizi/consulenza-tecnica",
    "/formazione",
    "/usato",
    "/chi-siamo",
    "/contatti",
    "/lavora-con-noi",
  ];

  const soluzioniRoutes = Object.keys(soluzioniPages).map(
    (slug) => `/soluzioni/${slug}`
  );

  const asportazioneRoutes = Object.keys(asportazionePages).map(
    (slug) => `/soluzioni/asportazione-truciolo/${slug}`
  );

  const allRoutes = [...staticRoutes, ...soluzioniRoutes, ...asportazioneRoutes];

  return allRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
