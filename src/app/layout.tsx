import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const archivo = localFont({
  variable: "--font-body",
  src: [
    { path: "../fonts/archivo/Archivo-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/archivo/Archivo-Medium.ttf", weight: "500", style: "normal" },
  ],
});

const archivoHeading = localFont({
  variable: "--font-heading",
  src: [
    { path: "../fonts/archivo/Archivo_Condensed-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/archivo/Archivo_Condensed-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../fonts/archivo/Archivo_Condensed-Black.ttf", weight: "900", style: "normal" },
  ],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scassellati-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "F. Scassellati Srl — Dal 1962 affianchiamo l'industria meccanica",
    template: "%s | Scassellati",
  },
  description:
    "Macchine utensili, utensili, software, automazione e trattamenti superficiali. Partner tecnico dell'industria manifatturiera italiana dal 1962.",
  keywords: [
    "macchine utensili",
    "formazione controlli numerici",
    "corsi CNC",
    "utensili Sandvik Coromant",
    "utensili Schunk",
    "macchine utensili usate Lazio",
    "macchine utensili usate Umbria",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Scassellati",
    title: "F. Scassellati Srl — Dal 1962 affianchiamo l'industria meccanica",
    description:
      "Macchine utensili, utensili, software, automazione e trattamenti superficiali. Partner tecnico dell'industria manifatturiera italiana dal 1962.",
    images: ["/images/home/hero-header.jpeg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "F. Scassellati S.r.l.",
  url: siteUrl,
  telephone: "+39-06-93020906",
  email: "segreteria@scassellati.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via del Casale Ferranti, 85",
    addressLocality: "Roma",
    postalCode: "00173",
    addressCountry: "IT",
  },
  areaServed: [
    { "@type": "State", name: "Lazio" },
    { "@type": "State", name: "Umbria" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${archivo.variable} ${archivoHeading.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-dgray">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
