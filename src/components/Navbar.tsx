"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { areas } from "@/data/soluzioni";

const links = [
  { href: "/aziende", label: "Partner" },
  { href: "/servizi", label: "Servizi" },
  { href: "/formazione", label: "Formazione" },
  { href: "/usato", label: "Usato" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/contatti", label: "Contatti" },
];

const solutionLinks = areas.map((area) => ({
  href: `/soluzioni/${area.slug}`,
  label: area.title,
}));

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    // Ignora il micro-scroll causato dall'inserimento del menu stesso
    // nel flusso della pagina: chiude solo su uno scroll reale dell'utente.
    const startY = window.scrollY;
    const handleScroll = () => {
      if (Math.abs(window.scrollY - startY) > 8) setOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-dgray text-offwhite">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Torna alla home" className="group relative block h-6">
          <Image
            src="/logo/scassellati-lockup-white.svg"
            alt="Scassellati"
            width={173}
            height={20}
            className="h-6 w-auto transition-opacity duration-200 group-hover:opacity-0"
            priority
          />
          <Image
            src="/logo/scassellati-lockup-bronze.svg"
            alt=""
            aria-hidden="true"
            width={173}
            height={20}
            className="absolute inset-0 h-6 w-auto opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          <div className="group relative py-4 -my-4">
            <Link
              href="/soluzioni"
              className="text-gray/90 transition-colors hover:text-bronze"
            >
              Soluzioni
            </Link>
            <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-lg border border-white/10 bg-dgray p-3 shadow-lg">
                {solutionLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-sm px-3 py-2 text-sm text-gray/90 transition-colors hover:bg-white/5 hover:text-bronze"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/soluzioni"
                  className="mt-1 block rounded-sm px-3 py-2 text-sm font-medium text-bronze hover:bg-white/5"
                >
                  Vedi tutte le soluzioni →︎
                </Link>
              </div>
            </div>
          </div>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray/90 transition-colors hover:text-bronze"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-offwhite"
          aria-label="Apri menu"
        >
          <span className="block h-0.5 w-6 bg-current mb-1.5" />
          <span className="block h-0.5 w-6 bg-current mb-1.5" />
          <span className="block h-0.5 w-6 bg-current" />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden flex flex-col gap-1 border-t border-white/10 px-6 py-4">
          <Link
            href="/soluzioni"
            onClick={() => setOpen(false)}
            className="py-2 text-sm text-gray/90 hover:text-bronze"
          >
            Soluzioni
          </Link>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-gray/90 hover:text-bronze"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
