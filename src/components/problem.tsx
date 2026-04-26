import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site-content";

function ComparisonIcon({ good }: { good: boolean }) {
  return (
    <div
      className={`mt-1 flex h-[18px] w-[18px] items-center justify-center rounded-full border ${
        good ? "border-amber/40 text-amber" : "border-red/35 text-red"
      }`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 fill-none stroke-current stroke-[1.5]">
        <circle cx="7" cy="7" r="6" />
        {good ? (
          <polyline points="4.5,7 6.5,9 9.5,5" />
        ) : (
          <>
            <line x1="4.5" y1="4.5" x2="9.5" y2="9.5" />
            <line x1="9.5" y1="4.5" x2="4.5" y2="9.5" />
          </>
        )}
      </svg>
    </div>
  );
}

export function Problem() {
  const { problem } = siteContent;

  return (
    <section id="problem" className="bg-paper">
      <div className="border-y border-white/5 bg-slate-2 py-16 lg:py-[72px]">
        <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              tag="A Direct Question"
              title={problem.questionsTitle}
              intro={problem.questionsIntro}
              dark
            />
          </div>

          <div className="space-y-1.5">
            {problem.questions.map((item) => (
              <article key={item.id} className="rounded-[3px] border border-white/5 bg-slate p-5 lg:p-6">
                <span className="font-mono text-[0.54rem] uppercase tracking-[0.14em] text-amber/50">
                  Question {item.id}
                </span>
                <h3 className="mt-2 text-[1.12rem] font-medium leading-6 text-[#a0a4be]">{item.question}</h3>
                <p className="mt-2 text-[0.76rem] font-light leading-6 text-[#4d526c]">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="shell py-20 lg:py-24">
        <SectionHeading tag={problem.tag} title={problem.title} intro={problem.intro} />

        <div className="mt-12 grid overflow-hidden rounded-[3px] border border-rule bg-rule shadow-panel lg:grid-cols-2 lg:gap-px">
          <div className="bg-paper p-8 lg:p-10">
            <div className="mb-7 flex items-center gap-3">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-red/70">
                {problem.comparison.beforeLabel}
              </span>
              <span className="h-px flex-1 bg-red/15" />
            </div>

            <div className="space-y-5">
              {problem.comparison.before.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <ComparisonIcon good={false} />
                  <div>
                    <h3 className="text-[0.84rem] font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-[0.78rem] font-light leading-6 text-ink-mid">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-paper-alt p-8 lg:p-10">
            <div className="mb-7 flex items-center gap-3">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-amber">
                {problem.comparison.afterLabel}
              </span>
              <span className="h-px flex-1 bg-amber/20" />
            </div>

            <div className="space-y-5">
              {problem.comparison.after.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <ComparisonIcon good />
                  <div>
                    <h3 className="text-[0.84rem] font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-[0.78rem] font-light leading-6 text-ink-mid">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
