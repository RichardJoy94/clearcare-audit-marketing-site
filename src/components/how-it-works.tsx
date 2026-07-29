import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site-content";

export function HowItWorks() {
  const { howItWorks } = siteContent;

  return (
    <section id="how-it-works" className="bg-slate py-20 lg:py-24">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <SectionHeading tag={howItWorks.tag} title={howItWorks.title} intro={howItWorks.intro} dark />

          <aside className="rounded-[3px] border border-amber/25 bg-amber/5 p-5">
            <div className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-amber">
              Fixed-scope design partnership
            </div>
            <p className="mt-2 text-[0.78rem] font-light leading-6 text-[#a0a7c0]">
              Pilot scope is confirmed against the supported capability, file, and data-handling envelope before
              intake begins.
            </p>
          </aside>
        </div>

        <ol className="mt-14 grid gap-3 lg:grid-cols-2">
          {howItWorks.steps.map((step) => (
            <li key={step.id}>
              <article className="h-full rounded-[3px] border border-white/10 bg-slate-2 p-6 lg:p-7">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[0.6rem] tracking-[0.16em] text-amber">{step.id}</span>
                  <span className="h-px flex-1 bg-white/10" />
                  <span className="font-mono text-[0.56rem] uppercase tracking-[0.14em] text-[#7c849f]">
                    {step.label}
                  </span>
                </div>

                <h3 className="mt-5 max-w-[28rem] text-[1.45rem] font-medium leading-tight text-[#d8dbea]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.8rem] font-light leading-7 text-[#8c93ad]">{step.body}</p>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="font-mono text-[0.54rem] uppercase tracking-[0.15em] text-[#737b98]">
                    Engagement outputs
                  </div>
                  <ul className="mt-3 space-y-2">
                    {step.outputs.map((output) => (
                      <li key={output} className="flex gap-2 text-[0.74rem] leading-6 text-[#b4bad0]">
                        <span className="text-amber" aria-hidden="true">
                          +
                        </span>
                        <span>{output}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>

        <div className="mt-16 rounded-[3px] border border-rule bg-paper-alt p-7 text-ink lg:p-10">
          <SectionHeading
            tag={howItWorks.timeline.tag}
            title={howItWorks.timeline.title}
            intro={howItWorks.timeline.intro}
          />

          <ol className="mt-10 grid gap-px overflow-hidden rounded-[3px] border border-rule bg-rule lg:grid-cols-4">
            {howItWorks.timeline.items.map(([phase, title, body]) => (
              <li key={phase} className="bg-paper p-6">
                <div className="font-mono text-[0.56rem] uppercase tracking-[0.16em] text-amber">{phase}</div>
                <h3 className="mt-2 text-[1.15rem] font-medium text-ink">{title}</h3>
                <p className="mt-2 text-[0.76rem] font-light leading-6 text-ink-mid">{body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-7 flex flex-col gap-3 rounded-[3px] border border-amber/25 bg-amber/5 px-5 py-4 lg:flex-row lg:items-start">
            <span className="shrink-0 font-mono text-[0.57rem] uppercase tracking-[0.14em] text-amber">
              {howItWorks.timeline.outcomeLabel}
            </span>
            <p className="text-[0.82rem] font-light leading-7 text-ink-mid">{howItWorks.timeline.outcome}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
