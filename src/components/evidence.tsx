import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site-content";

export function Evidence() {
  const { evidence } = siteContent;

  return (
    <section id="evidence" className="bg-paper">
      <div className="bg-slate py-20 lg:py-24">
        <div className="shell">
          <SectionHeading tag={evidence.tag} title={evidence.title} intro={evidence.intro} dark />

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div className="grid gap-3 sm:grid-cols-2">
              {evidence.properties.map((property) => (
                <article key={property.tag} className="rounded-[3px] border border-white/10 bg-slate-2 p-6">
                  <span className="font-mono text-[0.56rem] uppercase tracking-[0.14em] text-amber">
                    {property.tag}
                  </span>
                  <h3 className="mt-3 text-[1.12rem] font-medium leading-6 text-[#d3d6e6]">{property.title}</h3>
                  <p className="mt-3 text-[0.76rem] font-light leading-6 text-[#8d94af]">{property.body}</p>
                </article>
              ))}
            </div>

            <aside className="overflow-hidden rounded-[3px] border border-white/10 bg-slate-4">
              <div className="border-b border-white/10 px-5 py-4">
                <span className="font-mono text-[0.57rem] uppercase tracking-[0.13em] text-[#8991aa]">
                  Illustrative design-partner deliverables
                </span>
              </div>

              {evidence.artifacts.map((artifact) => (
                <div key={artifact.label} className="flex gap-4 border-b border-white/10 px-5 py-5 last:border-b-0">
                  <div className="pt-0.5 font-mono text-[0.58rem] text-amber">{artifact.label}</div>
                  <div>
                    <h3 className="text-[0.86rem] font-medium text-[#c6cadc]">{artifact.title}</h3>
                    <p className="mt-1 text-[0.72rem] font-light leading-6 text-[#7f87a3]">{artifact.body}</p>
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </div>

      <div className="border-y border-rule bg-paper-alt py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            tag="Engagement Boundaries"
            title={evidence.boundariesTitle}
            intro={evidence.boundariesIntro}
          />

          <div className="mt-12 grid gap-px overflow-hidden rounded-[3px] border border-rule bg-rule md:grid-cols-2 lg:grid-cols-3">
            {evidence.boundaries.map((boundary, index) => (
              <article key={boundary.title} className="bg-paper p-7">
                <div className="font-mono text-[0.56rem] uppercase tracking-[0.16em] text-amber">
                  Boundary {`${index + 1}`.padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-[1.2rem] font-medium text-ink">{boundary.title}</h3>
                <p className="mt-3 text-[0.78rem] font-light leading-6 text-ink-mid">{boundary.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
