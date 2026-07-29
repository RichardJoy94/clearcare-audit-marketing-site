import { siteContent } from "@/content/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-slate-4 py-7">
      <div className="shell flex flex-col items-center justify-between gap-3 text-center lg:flex-row lg:text-left">
        <div className="font-serif text-[0.95rem] font-medium text-[#7f87a1]">
          ClearCare <span className="text-amber/70">Readiness &amp; Proof</span>
        </div>
        <p className="max-w-[46rem] text-[0.64rem] font-light leading-5 text-[#686f89] lg:text-right">
          {siteContent.footer}
        </p>
      </div>
    </footer>
  );
}
