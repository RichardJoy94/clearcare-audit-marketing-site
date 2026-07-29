import { siteContent } from "@/content/site-content";

export function Problem() {
  const { problem } = siteContent;

  return (
    <section id="problem" className="bg-paper py-20 lg:py-24">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className="section-tag">{problem.tag}</span>
            <h2 className="section-title mt-4 max-w-[17ch]">{problem.title}</h2>
            <p className="mt-6 max-w-[37rem] text-[0.9rem] font-light leading-8 text-ink-mid">{problem.intro}</p>
            <p className="mt-6 max-w-[37rem] text-[0.82rem] font-light leading-7 text-ink-mid">
              {problem.questionsIntro}
            </p>
          </div>

          <ol className="border-l border-rule">
            {problem.questions.map((item) => (
              <li key={item.id} className="grid gap-3 border-b border-rule-light px-6 py-6 sm:grid-cols-[2rem_1fr] lg:px-7">
                <span className="pt-1 font-mono text-[0.58rem] text-amber">{item.id}</span>
                <div>
                  <h3 className="text-[1.25rem] font-medium leading-6 text-ink">{item.question}</h3>
                  <p className="mt-2 text-[0.77rem] font-light leading-6 text-ink-mid">{item.answer}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 grid overflow-hidden rounded-[3px] border border-rule bg-rule shadow-panel lg:grid-cols-2 lg:gap-px">
          <div className="bg-paper p-7 lg:p-9">
            <div className="mb-7 flex items-center gap-3">
              <span className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-red/80">
                {problem.comparison.beforeLabel}
              </span>
              <span className="h-px flex-1 bg-red/20" />
            </div>
            <div className="space-y-5">
              {problem.comparison.before.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="mt-0.5 font-mono text-[0.75rem] text-red" aria-hidden="true">
                    x
                  </span>
                  <p className="text-[0.79rem] font-light leading-6 text-ink-mid">
                    <strong className="font-semibold text-ink">{item.title}.</strong> {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-paper-alt p-7 lg:p-9">
            <div className="mb-7 flex items-center gap-3">
              <span className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-amber">
                {problem.comparison.afterLabel}
              </span>
              <span className="h-px flex-1 bg-amber/25" />
            </div>
            <div className="space-y-5">
              {problem.comparison.after.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="mt-0.5 font-mono text-[0.75rem] text-amber" aria-hidden="true">
                    +
                  </span>
                  <p className="text-[0.79rem] font-light leading-6 text-ink-mid">
                    <strong className="font-semibold text-ink">{item.title}.</strong> {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
