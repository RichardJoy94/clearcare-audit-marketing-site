import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site-content";

function QueuePanel({ panel }: { panel: (typeof siteContent.workbench.panels)[0] }) {
  if (!("items" in panel)) {
    return null;
  }

  return (
    <div className="space-y-3 p-5">
      {panel.items.map((item) => (
        <div key={item.title} className="flex items-start justify-between gap-4 rounded-[2px] border border-white/10 p-3.5">
          <div>
            <div className="text-[0.76rem] font-medium leading-5 text-[#d0d4e3]">{item.title}</div>
            <div className="mt-1 text-[0.66rem] leading-5 text-[#7f87a3]">{item.detail}</div>
          </div>
          <span className="shrink-0 font-mono text-[0.58rem] text-amber-light">{item.status}</span>
        </div>
      ))}
    </div>
  );
}

function LineagePanel({ panel }: { panel: (typeof siteContent.workbench.panels)[1] }) {
  if (!("items" in panel)) {
    return null;
  }

  return (
    <div className="space-y-0 p-5">
      {panel.items.map((item, index) => (
        <div key={item.title} className="relative flex gap-3 pb-5 last:pb-0">
          {index < panel.items.length - 1 ? (
            <span className="absolute left-[6px] top-4 h-[calc(100%-8px)] w-px bg-white/15" aria-hidden="true" />
          ) : null}
          <span
            className={`relative mt-1.5 h-3 w-3 shrink-0 rounded-full border ${
              index === panel.items.length - 1 ? "border-amber bg-amber" : "border-[#8991aa] bg-slate-4"
            }`}
            aria-hidden="true"
          />
          <div>
            <div className="text-[0.76rem] font-medium leading-5 text-[#d0d4e3]">{item.title}</div>
            <div className="mt-1 font-mono text-[0.58rem] leading-5 text-[#7f87a3]">{item.detail}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function VerificationPanel({ panel }: { panel: (typeof siteContent.workbench.panels)[2] }) {
  if (!("reviewedLabel" in panel)) {
    return null;
  }

  return (
    <div className="space-y-4 p-5">
      <div>
        <div className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-[#8991aa]">
          {panel.reviewedLabel}
        </div>
        <div className="mt-1 break-all font-mono text-[0.66rem] text-[#d0d4e3]">{panel.reviewedValue}</div>
      </div>
      <div>
        <div className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-[#8991aa]">
          {panel.publicLabel}
        </div>
        <div className="mt-1 text-[0.68rem] leading-5 text-[#d0d4e3]">{panel.publicValue}</div>
      </div>
      <div className="rounded-[2px] border border-amber/30 bg-amber/5 px-3 py-2.5 font-mono text-[0.6rem] text-amber-light">
        {panel.state}
      </div>
    </div>
  );
}

export function Workbench() {
  const { workbench } = siteContent;

  return (
    <section id="workbench" className="border-t border-white/10 bg-slate-4 py-20 lg:py-24">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <SectionHeading tag={workbench.tag} title={workbench.title} dark />
          <p className="max-w-[30rem] text-[0.84rem] font-light leading-7 text-[#9299b3] lg:justify-self-end">
            {workbench.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {workbench.panels.map((panel, index) => (
            <article key={panel.label} className="flex min-h-[320px] flex-col overflow-hidden rounded-[3px] border border-white/15 bg-slate">
              <div className="border-b border-white/10 px-5 py-4 font-mono text-[0.59rem] uppercase tracking-[0.13em] text-[#8991aa]">
                {panel.label}
              </div>

              <div className="flex-1">
                {index === 0 ? <QueuePanel panel={workbench.panels[0]} /> : null}
                {index === 1 ? <LineagePanel panel={workbench.panels[1]} /> : null}
                {index === 2 ? <VerificationPanel panel={workbench.panels[2]} /> : null}
              </div>

              <p className="border-t border-white/10 px-5 py-4 text-[0.7rem] font-light leading-5 text-[#7f87a3]">
                {panel.footer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
