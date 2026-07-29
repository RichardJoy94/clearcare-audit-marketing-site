import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site-content";

export function Audience() {
  const { audience } = siteContent;

  return (
    <section id="audience" className="border-t border-rule-light bg-paper-alt py-20 lg:py-24">
      <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHeading tag={audience.tag} title={audience.title} intro={audience.intro} />

        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {audience.cards.map((card) => (
            <article key={card.title} className="border-t-2 border-ink pt-4">
              <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-amber">{card.role}</span>
              <h3 className="mt-2 text-[1.35rem] font-medium text-ink">{card.title}</h3>
              <p className="mt-2 font-serif text-[0.95rem] italic leading-6 text-ink-soft">{card.concern}</p>
              <p className="mt-3 text-[0.77rem] font-light leading-6 text-ink-mid">{card.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
