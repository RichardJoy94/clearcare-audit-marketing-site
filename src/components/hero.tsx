import { siteContent } from "@/content/site-content";

function ReadinessSummary() {
  const { summary } = siteContent.hero;

  return (
    <aside
      aria-label="Illustrative workbench readiness summary using synthetic representative data"
      className="overflow-hidden rounded-[4px] border border-white/15 bg-slate-4 shadow-[0_32px_90px_rgba(0,0,0,0.38)]"
    >
      <div className="flex flex-col gap-1 border-b border-white/10 bg-[#12141f] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#9aa1b9]">
          {summary.label}
        </span>
        <span className="font-mono text-[0.6rem] text-[#747c98]">{summary.qualifier}</span>
      </div>

      <div className="border-b border-white/10 px-5 py-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="break-all font-mono text-[0.76rem] font-medium text-[#d8dbea]">
              {summary.fileName}
            </div>
            <div className="mt-2 font-mono text-[0.62rem] leading-5 text-[#747c98]">{summary.fileMeta}</div>
          </div>
          <span className="w-fit shrink-0 rounded-[2px] border border-amber/45 px-2 py-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-amber-light">
            {summary.status}
          </span>
        </div>
        <div className="mt-3 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-[#7f87a3]">
          {summary.cycle}
        </div>
      </div>

      <div className="grid grid-cols-2 border-b border-white/10">
        {summary.metrics.map((metric, index) => (
          <div key={metric.label} className={`px-5 py-4 ${index === 0 ? "border-r border-white/10" : ""}`}>
            <div className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-[#7f87a3]">
              {metric.label}
            </div>
            <div className="mt-1 font-serif text-[1.2rem] font-medium text-[#e4e6f4]">{metric.value}</div>
          </div>
        ))}
      </div>

      <div className="space-y-3 px-5 py-5">
        <div className="font-mono text-[0.58rem] uppercase tracking-[0.13em] text-[#7f87a3]">
          Representative work queue
        </div>
        {summary.blockers.map((blocker) => (
          <div
            key={blocker.title}
            className={`border-l-2 pl-3 ${
              blocker.tone === "critical" ? "border-red/80" : "border-amber/70"
            }`}
          >
            <div className="text-[0.75rem] font-medium leading-5 text-[#c9cddd]">{blocker.title}</div>
            <div className="mt-0.5 font-mono text-[0.59rem] leading-4 text-[#7f87a3]">{blocker.detail}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 border-t border-white/10 px-5 py-4 font-mono text-[0.57rem] leading-4 text-[#858da8] sm:flex-row sm:justify-between">
        <span>{summary.footerLeft}</span>
        <span>{summary.footerRight}</span>
      </div>
    </aside>
  );
}

export function Hero() {
  const { hero } = siteContent;

  return (
    <section id="top" className="relative overflow-hidden bg-slate pt-[58px]">
      <div className="hero-grid absolute inset-0" />
      <div className="hero-glow absolute -right-28 -top-48 h-[760px] w-[760px]" />

      <div className="shell relative z-10 grid gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-[88px]">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-[2px] border border-amber/35 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-light" />
            <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-amber-light">
              {hero.eyebrow}
            </span>
          </div>

          <h1 className="max-w-[650px] text-[3rem] font-medium leading-[1.02] text-[#f1f3fb] sm:text-[3.8rem] lg:text-[4rem]">
            {hero.title} <em className="font-normal italic text-amber-light">{hero.emphasized}</em>
          </h1>

          <p className="prose-balance mt-6 max-w-[590px] text-[1rem] font-light leading-[1.9] text-[#aeb4ca]">
            {hero.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {hero.actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className={
                  action.kind === "primary"
                    ? "rounded-[2px] bg-amber px-7 py-3.5 text-center text-[0.75rem] font-semibold uppercase tracking-[0.07em] text-slate-4 transition hover:bg-amber-light"
                    : "rounded-[2px] border border-white/20 px-6 py-3.5 text-center text-[0.75rem] font-medium uppercase tracking-[0.07em] text-[#aeb4ca] transition hover:border-white/35 hover:text-white"
                }
              >
                {action.label}
              </a>
            ))}
          </div>

          <p className="mt-7 max-w-[600px] font-mono text-[0.61rem] uppercase leading-5 tracking-[0.09em] text-[#9b8069]">
            {hero.note}
          </p>
        </div>

        <ReadinessSummary />
      </div>
    </section>
  );
}
