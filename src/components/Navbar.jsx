import { useState } from "react";
import { navLinks } from "../data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <nav className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-black/40 px-5 py-2 shadow-2xl shadow-black/20 backdrop-blur-xl">
        {" "}
        <div className="flex items-center justify-between">
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-2.5"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-0.5 shadow-md shadow-white/20 transition-transform duration-300 group-hover:scale-105">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Vasudevan Logo"
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-base font-bold tracking-tight text-white">
              Vasudevan<span className="text-indigo-400">.</span>
            </span>
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm text-[#9494a8] transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-full border border-indigo-400/30 bg-indigo-500/10 px-5 py-2 text-sm font-medium text-indigo-300 transition hover:bg-indigo-500/20 hover:text-white md:block"
          >
            Let&apos;s Talk
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 md:hidden"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-white transition ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center rounded-xl px-4 py-3 text-sm text-[#9494a8] hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl border border-indigo-400/30 bg-indigo-500/10 px-4 py-3 text-center text-sm font-medium text-indigo-300 hover:bg-indigo-500/20 hover:text-white"
              >
                Let&apos;s Talk
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
