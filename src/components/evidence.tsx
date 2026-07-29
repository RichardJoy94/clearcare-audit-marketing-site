import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site-content";

export function Evidence() {
  const { evidence } = siteContent;

  return (
    <section id="evidence" className="bg-paper py-20 lg:py-24">
      <div className="shell">
        <SectionHeading tag={evidence.tag} title={evidence.title} intro={evidence.intro} />

        <ol className="mt-12 grid overflow-hidden rounded-[3px] border border-rule bg-rule md:grid-cols-2 md:gap-px xl:grid-cols-4">
          {evidence.deliverables.map((deliverable) => (
            <li key={deliverable.label} className="flex flex-col bg-paper p-7">
              <div className="font-mono text-[0.6rem] text-amber">{deliverable.label}</div>
              <h3 className="mt-4 text-[1.25rem] font-medium leading-tight text-ink">{deliverable.title}</h3>
              <p className="mt-3 text-[0.77rem] font-light leading-6 text-ink-mid">{deliverable.body}</p>
              <div className="mt-6 font-mono text-[0.56rem] uppercase leading-5 tracking-[0.12em] text-ink-soft md:mt-auto md:pt-6">
                For {deliverable.audience}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
