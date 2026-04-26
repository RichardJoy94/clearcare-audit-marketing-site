import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site-content";

function WindowChrome({ title }: { title: string }) {
  return (
    <div className="mb-3 flex items-center gap-1.5 border-b border-white/5 pb-3">
      <span className="h-2 w-2 rounded-full bg-[#c0392b]" />
      <span className="h-2 w-2 rounded-full bg-[#f39c12]" />
      <span className="h-2 w-2 rounded-full bg-[#27ae60]" />
      <span className="ml-1 font-mono text-[0.56rem] uppercase tracking-[0.1em] text-[rgba(180,184,204,0.22)]">
        {title}
      </span>
    </div>
  );
}

export function HowItWorks() {
  const { howItWorks } = siteContent;

  return (
    <section id="how-it-works" className="bg-slate py-20 lg:py-24">
      <div className="shell">
        <SectionHeading tag={howItWorks.tag} title={howItWorks.title} intro={howItWorks.intro} dark />

        <div className="mt-14 space-y-2">
          {howItWorks.steps.map((step) => (
            <article
              key={step.id}
              className="grid overflow-hidden rounded-[3px] border border-white/5 lg:grid-cols-[72px_1fr_1.15fr]"
            >
              <div className="flex items-center justify-center border-b border-white/5 bg-slate-3 py-5 lg:border-b-0 lg:border-r">
                <div className="flex flex-col items-center gap-1">
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-amber">{step.id}</span>
                  <span className="h-5 w-px bg-amber/25" />
                </div>
              </div>

              <div className="border-b border-white/5 px-6 py-6 lg:border-b-0 lg:border-r lg:px-7">
                <span className="font-mono text-[0.57rem] uppercase tracking-[0.14em] text-[rgba(180,184,204,0.28)]">
                  {step.label}
                </span>
                <h3 className="mt-2 text-[1.35rem] font-medium text-[#cdd0e2]">{step.title}</h3>
                <p className="mt-3 text-[0.79rem] font-light leading-7 text-[#4b5069]">{step.body}</p>
              </div>

              <div className="bg-slate-4 px-5 py-5">
                <div className="rounded-[2px] border border-white/5 bg-transparent p-3 font-mono text-[0.64rem]">
                  <WindowChrome
                    title={"mock" in step ? step.mock.title : `${step.label.toLowerCase()} · session-preview`}
                  />

                  {"mock" in step ? (
                    <div className="space-y-1.5">
                      {step.mock.rows.map(([label, value]) => (
                        <div
                          key={label}
                          className="flex items-baseline gap-2 border-b border-white/5 py-1.5 last:border-b-0"
                        >
                          <span className="w-28 shrink-0 text-[0.58rem] text-[rgba(180,184,204,0.28)]">{label}</span>
                          <span className="text-[0.65rem] text-[#afb4cc]">{value}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {"findings" in step ? (
                    <div className="space-y-2">
                      {step.findings.map((finding, index) => (
                        <div key={finding} className="rounded-[2px] border border-white/5 p-2.5">
                          <div className="text-[0.54rem] uppercase tracking-[0.08em] text-amber/70">
                            Finding {index + 1}
                          </div>
                          <div className="mt-1 text-[0.58rem] leading-5 text-[#8d94b0]">{finding}</div>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {"diff" in step ? (
                    <div className="space-y-3">
                      <div className="text-[0.56rem] uppercase tracking-[0.08em] text-[rgba(180,184,204,0.22)]">
                        billing_code_type · 99213
                      </div>
                      <div className="grid gap-2 sm:grid-cols-2">
                        <div className="rounded-[2px] border border-red/20 bg-red/10 p-2 text-[0.6rem] leading-5 text-[rgba(200,100,80,0.8)]">
                          <span className="mb-1 block text-[0.52rem] uppercase tracking-[0.08em] text-[rgba(180,184,204,0.22)]">
                            Before
                          </span>
                          {step.diff.before}
                        </div>
                        <div className="rounded-[2px] border border-green/20 bg-green/10 p-2 text-[0.6rem] leading-5 text-[rgba(110,185,132,0.9)]">
                          <span className="mb-1 block text-[0.52rem] uppercase tracking-[0.08em] text-[rgba(180,184,204,0.22)]">
                            After
                          </span>
                          {step.diff.after}
                        </div>
                      </div>
                      <div className="rounded-[2px] border border-amber/20 bg-amber/5 p-2.5">
                        <div className="text-[0.54rem] uppercase tracking-[0.12em] text-amber/60">
                          Authorization required
                        </div>
                        <div className="mt-1 text-[0.64rem] text-[#9fa7c0]">{step.diff.approver}</div>
                        <div className="text-[0.56rem] text-[rgba(180,184,204,0.28)]">{step.diff.timestamp}</div>
                      </div>
                    </div>
                  ) : null}

                  {"bundle" in step ? (
                    <div className="space-y-1.5">
                      {step.bundle.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 border-b border-white/5 py-1.5 last:border-b-0"
                        >
                          <span className="flex h-6 w-6 items-center justify-center rounded-[2px] border border-amber/20 bg-amber/10 text-amber">
                            +
                          </span>
                          <span className="flex-1 text-[0.62rem] text-[#9ea5be]">{item}</span>
                          <span className="text-[0.56rem] uppercase tracking-[0.08em] text-[rgba(110,185,132,0.9)]">
                            verified
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-y border-rule bg-paper-alt py-16 text-ink">
          <div className="px-6 lg:px-8">
            <SectionHeading
              tag="Time to Value"
              title={howItWorks.timeline.title}
              intro={howItWorks.timeline.intro}
            />

            <div className="mt-10 grid gap-px overflow-hidden rounded-[3px] border border-rule bg-rule lg:grid-cols-4">
              {howItWorks.timeline.items.map(([day, title, body]) => (
                <div key={day} className="bg-paper p-6">
                  <div className="font-mono text-[0.56rem] uppercase tracking-[0.16em] text-amber">{day}</div>
                  <h3 className="mt-2 text-[1.15rem] font-medium text-ink">{title}</h3>
                  <p className="mt-2 text-[0.76rem] font-light leading-6 text-ink-mid">{body}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 rounded-[3px] border border-rule bg-paper px-5 py-4 lg:flex-row lg:items-start">
              <span className="shrink-0 font-mono text-[0.57rem] uppercase tracking-[0.14em] text-amber">
                After 7 days
              </span>
              <p className="text-[0.82rem] font-light leading-7 text-ink-mid">
                <strong className="font-medium text-ink">{howItWorks.timeline.outcome}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
