import { siteContent } from "@/content/site-content";

export function Boundaries() {
  const { boundaries } = siteContent;

  return (
    <section className="border-t border-rule bg-paper py-20 lg:py-24">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div className="space-y-4">
            <span className="section-tag">{boundaries.tag}</span>
            <h2 className="section-title max-w-[16ch]">{boundaries.title}</h2>
          </div>
          <p className="max-w-[28rem] text-[0.84rem] font-light leading-7 text-ink-mid lg:justify-self-end">
            {boundaries.intro}
          </p>
        </div>

        <ol className="mt-10 grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
          {boundaries.items.map((item) => (
            <li key={item.number} className="flex gap-3 border-b border-rule-light py-5">
              <span className="mt-1 shrink-0 font-mono text-[0.58rem] text-amber">{item.number}</span>
              <p className="text-[0.79rem] font-light leading-6 text-ink-mid">
                <strong className="font-semibold text-ink">{item.title}.</strong> {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
