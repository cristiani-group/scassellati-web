import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { siteUrl } from "@/lib/metadata";
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

const defaultTitle = "F. Scassellati Srl — Dal 1962 affianchiamo l'industria meccanica";
const defaultDescription =
  "Macchine utensili, utensili, software, automazione e trattamenti superficiali. Partner tecnico dell'industria manifatturiera italiana dal 1962.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Scassellati",
  },
  description: defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Scassellati",
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    images: ["/images/home/hero-header.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/images/home/hero-header.jpeg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "F. Scassellati S.r.l.",
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  image: `${siteUrl}/icon.png`,
  telephone: "+39-06-93020906",
  email: "segreteria@scassellati.com",
  vatID: "05309771003",
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
  sameAs: ["https://www.linkedin.com/company/106289290/"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "14:00",
      closes: "17:00",
    },
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
