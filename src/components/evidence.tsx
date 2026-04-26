import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site-content";

export function Evidence() {
  const { evidence } = siteContent;

  return (
    <section id="evidence" className="bg-paper">
      <div className="bg-slate py-20 lg:py-24">
        <div className="shell">
          <SectionHeading tag={evidence.tag} title={evidence.title} intro={evidence.intro} dark />

          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <div className="space-y-4">
                {evidence.properties.map((property) => (
                  <article key={property.tag} className="rounded-[3px] border border-white/5 bg-slate-2 p-5">
                    <span className="font-mono text-[0.56rem] uppercase tracking-[0.14em] text-amber">{property.tag}</span>
                    <h3 className="mt-2 text-[0.92rem] font-medium text-[#b0b4cc]">{property.title}</h3>
                    <p className="mt-2 text-[0.75rem] font-light leading-6 text-[#50556f]">{property.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="overflow-hidden rounded-[3px] border border-white/10">
              <div className="flex items-center gap-2 border-b border-white/5 bg-slate-3 px-5 py-4">
                <span className="h-2 w-2 rounded-full bg-[#c0392b]" />
                <span className="h-2 w-2 rounded-full bg-[#f39c12]" />
                <span className="h-2 w-2 rounded-full bg-[#27ae60]" />
                <span className="ml-1 font-mono text-[0.57rem] uppercase tracking-[0.1em] text-[rgba(180,184,204,0.24)]">
                  audit_evidence_bundle · bundle-0091 · session-7741
                </span>
              </div>

              <div className="bg-slate-4">
                {evidence.artifacts.map((artifact, index) => (
                  <div key={artifact} className="flex gap-4 border-b border-white/5 px-5 py-4 last:border-b-0">
                    <div className="w-6 pt-0.5 font-mono text-[0.56rem] text-amber/50">{`${index + 1}`.padStart(2, "0")}</div>
                    <div>
                      <div className="text-[0.8rem] font-medium text-[#9da3bc]">{artifact}</div>
                      <div className="mt-1 text-[0.72rem] font-light leading-6 text-[#49506a]">
                        Structured, linked evidence preserved as part of the compliance session.
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>

      <div className="border-y border-rule bg-paper-alt py-20 lg:py-[88px]">
        <div className="shell">
          <SectionHeading tag="vs. Alternatives" title={evidence.alternativesTitle} intro={evidence.alternativesIntro} />

          <div className="mt-12 grid gap-px overflow-hidden rounded-[3px] border border-rule bg-rule lg:grid-cols-3">
            {evidence.alternatives.map((option) => (
              <article key={option.title} className="bg-paper p-7">
                <span className="font-mono text-[0.57rem] uppercase tracking-[0.16em] text-ink-soft">{option.label}</span>
                <h3 className="mt-3 text-[1.25rem] font-medium text-ink">{option.title}</h3>

                <div className="mt-5 border-b border-rule pb-5">
                  <div className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.06em] text-ink-soft">The problem</div>
                  <ul className="space-y-2">
                    {option.problems.map((problem) => (
                      <li key={problem} className="flex gap-2 text-[0.77rem] font-light leading-6 text-ink-mid">
                        <span className="text-red/50">—</span>
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <div className="mb-3 font-mono text-[0.56rem] uppercase tracking-[0.14em] text-amber">
                    ClearCare Audit instead
                  </div>
                  <ul className="space-y-2">
                    {option.replacement.map((item) => (
                      <li key={item} className="flex gap-2 text-[0.77rem] leading-6 text-ink">
                        <span className="text-amber">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
