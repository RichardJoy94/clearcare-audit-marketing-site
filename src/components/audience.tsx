import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site-content";

export function Audience() {
  const { audience } = siteContent;

  return (
    <section id="audience" className="border-t border-rule bg-paper py-20 lg:py-24">
      <div className="shell">
        <SectionHeading tag={audience.tag} title={audience.title} />

        <div className="mt-12 grid gap-px overflow-hidden rounded-[3px] border border-rule bg-rule lg:grid-cols-3">
          {audience.cards.map((card) => (
            <article key={card.title} className="bg-paper-alt p-8">
              <span className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-amber">{card.role}</span>
              <h3 className="mt-3 text-[1.5rem] font-medium leading-[1.1] text-ink">{card.title}</h3>
              <p className="mt-3 font-serif text-[0.8rem] italic leading-6 text-ink-soft">{card.concern}</p>

              <ul className="mt-6 space-y-4">
                {card.points.map((point) => (
                  <li key={point}>
                    <div className="text-[0.8rem] font-semibold text-ink">{point}</div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
