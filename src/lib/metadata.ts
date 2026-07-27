import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scassellati.com";

const defaultImage = "/images/home/hero-header.jpeg";

export function buildMetadata({
  path,
  title,
  description,
  image = defaultImage,
  noIndex = false,
}: {
  path: string;
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: "website",
      locale: "it_IT",
      siteName: "Scassellati",
      title,
      description,
      url: path,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
