import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site-content";

export function HowItWorks() {
  const { howItWorks } = siteContent;

  return (
    <section id="how-it-works" className="bg-slate py-20 lg:py-24">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <SectionHeading tag={howItWorks.tag} title={howItWorks.title} intro={howItWorks.intro} dark />

          <aside className="rounded-[3px] border border-amber/30 bg-amber/5 p-6">
            <div className="font-mono text-[0.59rem] uppercase tracking-[0.16em] text-amber-light">
              {howItWorks.scopeTitle}
            </div>
            <p className="mt-3 text-[0.79rem] font-light leading-7 text-[#a0a7c0]">{howItWorks.scopeBody}</p>
          </aside>
        </div>

        <ol className="mt-14 grid overflow-hidden rounded-[3px] border border-white/15 bg-white/15 md:grid-cols-2 md:gap-px xl:grid-cols-4">
          {howItWorks.phases.map((phase) => (
            <li key={phase.days} className="flex flex-col bg-slate-2 p-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[0.59rem] uppercase tracking-[0.13em] text-amber-light">
                  {phase.days}
                </span>
                <span className="h-px flex-1 bg-white/15" />
              </div>

              <h3 className="mt-5 text-[1.4rem] font-medium leading-tight text-[#e0e3ef]">{phase.title}</h3>
              <p className="mt-3 text-[0.77rem] font-light leading-6 text-[#9299b3]">{phase.body}</p>

              <ul className="mt-8 space-y-2 border-t border-white/10 pt-5 md:mt-auto">
                {phase.outputs.map((output) => (
                  <li key={output} className="flex gap-2 text-[0.69rem] leading-5 text-[#bac0d4]">
                    <span className="text-amber-light" aria-hidden="true">
                      +
                    </span>
                    <span>{output}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-5 flex flex-col gap-3 rounded-[3px] border border-amber/30 bg-amber/5 px-5 py-4 md:flex-row">
          <span className="shrink-0 font-mono text-[0.58rem] uppercase tracking-[0.15em] text-amber-light">
            Decision point
          </span>
          <p className="text-[0.78rem] font-light leading-6 text-[#a0a7c0]">{howItWorks.outcome}</p>
        </div>
      </div>
    </section>
  );
}
