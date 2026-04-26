import { siteContent } from "@/content/site-content";

export function SiteHeader() {
  const { nav } = siteContent;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[rgba(13,15,26,0.92)] backdrop-blur-md">
      <div className="shell flex h-[58px] items-center justify-between">
        <a href="#top" className="font-serif text-[1.05rem] font-medium text-[#909ab8]">
          {nav.brand.name} <span className="text-amber">{nav.brand.accent}</span>
        </a>

        <nav aria-label="Primary">
          <ul className="hidden items-center gap-7 lg:flex">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.7rem] font-medium uppercase tracking-[0.09em] text-[#555a72] transition hover:text-[#8a8ea8]"
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

        <a
          href={nav.cta.href}
          className="rounded-[2px] border border-amber/35 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-amber lg:hidden"
        >
          Demo
        </a>
      </div>
    </header>
  );
}
