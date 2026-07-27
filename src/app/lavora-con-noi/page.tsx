import Link from "next/link";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/lavora-con-noi",
  title: "Lavora con noi",
  description:
    "Siamo sempre alla ricerca di tecnici, ingegneri e formatori appassionati di meccanica industriale. Scopri le opportunità in Scassellati.",
});

export default function LavoraConNoiPage() {
  return (
    <>
      <PageHero
        eyebrow="Lavora con noi"
        title="Cresci con Scassellati"
        subtitle="Siamo sempre alla ricerca di tecnici, ingegneri e formatori appassionati di meccanica industriale."
        backHref="/"
        backLabel="Torna alla Home"
      />
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-dgray/70 mb-8">
            Invia la tua candidatura: raccontaci la tua esperienza e cosa
            vorresti portare in Scassellati.
          </p>
          <Link
            href="/contatti"
            className="bg-dgray text-offwhite px-6 py-3 rounded-sm hover:text-bronze transition-colors inline-block"
          >
            Invia candidatura
          </Link>
        </div>
      </section>
    </>
  );
}
