import Link from "next/link";
import Image from "next/image";
import CookiePreferencesButton from "./CookiePreferencesButton";

export default function Footer() {
  return (
    <footer className="bg-dgray text-gray">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-20 md:pb-16 grid gap-10 md:gap-16 md:grid-cols-[1.2fr_1fr_1fr] text-left">
        <div>
          <Image
            src="/logo/scassellati-lockup-white.svg"
            alt="Scassellati"
            width={173}
            height={20}
            className="h-6 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-gray/80 max-w-xs">
            Dal 1962 affianchiamo l&apos;industria meccanica.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <span className="text-sm text-gray/80">Seguici su</span>
            <a
              href="https://www.linkedin.com/company/106289290/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Scassellati su LinkedIn"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray/30 text-gray/80 hover:border-bronze hover:text-bronze transition-colors duration-200"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="text-sm leading-relaxed">
          <p className="text-offwhite text-xs font-semibold uppercase tracking-[0.12em] mb-4">
            Contatti
          </p>
          <p className="text-gray/80">F. SCASSELLATI S.r.l.</p>
          <p className="text-gray/80">Via del Casale Ferranti, 85 — 00173 Roma</p>
          <p className="text-gray/80">P.IVA: 05309771003</p>
          <p className="text-gray/80">REA: RM875293</p>
          <p className="mt-3 text-gray/80">Tel: <a href="tel:+390693020906" className="underline underline-offset-4 hover:text-bronze transition-colors">+39 06 93020906</a></p>
          <p className="text-gray/80">Email: <a href="mailto:segreteria@scassellati.com" className="underline underline-offset-4 hover:text-bronze transition-colors">segreteria@scassellati.com</a></p>
          <p className="text-gray/80">PEC: <a href="mailto:fscassellati@pec.it" className="underline underline-offset-4 hover:text-bronze transition-colors">fscassellati@pec.it</a></p>
          <p className="mt-3 text-gray/65">Lun–Ven: 9:00–13:00, 14:00–17:00</p>
        </div>

        <div className="text-sm leading-relaxed">
          <p className="text-offwhite text-xs font-semibold uppercase tracking-[0.12em] mb-4">
            Link rapidi
          </p>
          <ul className="space-y-2.5">
            <li>
              <Link
                href="/usato"
                className="text-gray/80 hover:text-bronze transition-colors duration-200"
              >
                Richiedi valutazione usato
              </Link>
            </li>
            <li>
              <Link
                href="/lavora-con-noi"
                className="text-gray/80 hover:text-bronze transition-colors duration-200"
              >
                Lavora con noi
              </Link>
            </li>
            <li>
              <Link
                href="/contatti"
                className="text-gray/80 hover:text-bronze transition-colors duration-200"
              >
                Contattaci
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 text-center text-xs text-gray/65">
          <p>
            © {new Date().getFullYear()} F. Scassellati S.r.l. — Tutti i
            diritti riservati
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-bronze underline transition-colors"
            >
              Privacy Policy
            </Link>
            <CookiePreferencesButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
