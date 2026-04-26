import { siteContent } from "@/content/site-content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <>
      <section
        id="top"
        className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate px-0 pt-[58px]"
      >
        <div className="hero-grid absolute inset-0" />
        <div className="hero-glow absolute -right-20 -top-44 h-[700px] w-[700px]" />

        <div className="shell relative z-10 py-20 lg:py-28">
          <div className="mb-9 inline-flex items-center gap-2 rounded-[2px] border border-amber/30 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-amber">
              {hero.eyebrow}
            </span>
          </div>

          <h1 className="max-w-[820px] text-[3rem] font-medium leading-[0.98] text-[#eaedf8] sm:text-[4.1rem] lg:text-[5.6rem]">
            {hero.title[0]}
            <br />
            files will <em className="font-normal italic text-amber">{hero.emphasized}</em>
            <br />
            <span className="text-[#6d7289]">{hero.title[2]}</span>
          </h1>

          <p className="prose-balance mt-7 max-w-[520px] text-base font-light leading-8 text-[#616684]">
            {hero.description}
          </p>
          <p className="mt-4 max-w-[620px] font-mono text-[0.64rem] uppercase tracking-[0.1em] text-[rgba(180,105,68,0.72)]">
            {hero.note}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {hero.actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className={
                  action.kind === "primary"
                    ? "rounded-[2px] bg-amber px-7 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-slate transition hover:bg-amber-light"
                    : "rounded-[2px] border border-white/10 px-6 py-3 text-[0.78rem] font-medium uppercase tracking-[0.07em] text-[#747996] transition hover:border-white/20 hover:text-[#a0a4be]"
                }
              >
                {action.label}
              </a>
            ))}
          </div>

          <div className="mt-14 grid gap-6 border-t border-white/5 pt-6 md:grid-cols-3 md:gap-10">
            {hero.stats.map((stat) => (
              <div key={stat.value} className="border-b border-white/5 pb-5 last:border-b-0 md:border-b-0 md:border-r md:border-white/5 md:pb-0">
                <div className="font-serif text-[2.5rem] font-medium leading-none text-amber">{stat.value}</div>
                <p className="mt-2 max-w-[17rem] text-[0.76rem] font-light leading-6 text-[#59607a]">{stat.detail}</p>
                <p className="mt-1 font-mono text-[0.58rem] text-[#3b4057]">{stat.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-y border-white/5 bg-slate-4 py-4">
        <div className="shell flex flex-wrap items-center justify-center gap-5 lg:gap-10">
          {hero.credibility.map((item, index) => (
            <div key={item} className="flex items-center gap-5">
              <div className="flex items-center gap-2.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[rgba(180,184,204,0.22)]">
                <span className="h-1 w-1 rounded-full bg-amber/40" />
                {item}
              </div>
              {index < hero.credibility.length - 1 ? <span className="hidden h-4 w-px bg-white/5 lg:block" /> : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
