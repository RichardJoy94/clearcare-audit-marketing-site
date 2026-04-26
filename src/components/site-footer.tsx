import { siteContent } from "@/content/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-slate-4 py-7">
      <div className="shell flex flex-col items-center justify-between gap-3 text-center lg:flex-row lg:text-left">
        <div className="font-serif text-[0.95rem] font-medium text-[rgba(180,184,204,0.16)]">
          ClearCare <span className="text-[rgba(184,114,30,0.34)]">Audit</span>
        </div>
        <p className="max-w-[44rem] text-[0.63rem] font-light leading-5 text-[rgba(180,184,204,0.12)] lg:text-right">
          {siteContent.footer}
        </p>
      </div>
    </footer>
  );
}
