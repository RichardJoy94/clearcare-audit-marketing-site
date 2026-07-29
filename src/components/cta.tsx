import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site-content";

export function CTA() {
  const { cta } = siteContent;

  return (
    <section id="cta" className="bg-slate py-20 lg:py-24">
      <div className="shell grid gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
        <div>
          <SectionHeading tag={cta.tag} title={cta.title} intro={cta.description} dark />

          <div className="mt-8 space-y-4">
            {cta.options.map((option, index) => (
              <article
                key={option.title}
                className={`rounded-[3px] border p-6 ${
                  index === 0 ? "border-amber/30 bg-amber/5" : "border-white/15 bg-white/[0.02]"
                }`}
              >
                <span className="font-mono text-[0.56rem] uppercase tracking-[0.14em] text-amber">{option.tag}</span>
                <h3 className="mt-2 text-[1.12rem] font-medium text-[#c8ccdd]">{option.title}</h3>
                <p className="mt-2 text-[0.76rem] font-light leading-6 text-[#8991aa]">{option.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
