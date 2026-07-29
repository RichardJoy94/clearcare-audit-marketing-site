"use client";

import { useState } from "react";
import { siteContent } from "@/content/site-content";

export function SiteHeader() {
  const { nav } = siteContent;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[rgba(13,15,26,0.92)] backdrop-blur-md">
      <div className="shell flex h-[58px] items-center justify-between">
        <a href="#top" className="font-serif text-[1.05rem] font-medium text-[#c5cadc]" onClick={() => setMenuOpen(false)}>
          {nav.brand.name} <span className="hidden text-amber sm:inline">{nav.brand.accent}</span>
        </a>

        <nav aria-label="Primary">
          <ul className="hidden items-center gap-7 lg:flex">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.68rem] font-medium uppercase tracking-[0.08em] text-[#8b92ac] transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={nav.cta.href}
                className="rounded-[2px] bg-amber px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-slate transition hover:bg-amber-light"
              >
                {nav.cta.label}
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-[2px] border border-white/15 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#c5cadc] lg:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen ? (
        <nav id="mobile-menu" aria-label="Mobile primary" className="border-t border-white/5 bg-slate-4 lg:hidden">
          <ul className="shell space-y-1 py-4">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-[2px] px-3 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.08em] text-[#a7adc4] hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={nav.cta.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-[2px] bg-amber px-3 py-2.5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-slate"
              >
                {nav.cta.label}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
