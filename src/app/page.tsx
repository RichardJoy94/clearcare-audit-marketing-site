import { Audience } from "@/components/audience";
import { Boundaries } from "@/components/boundaries";
import { CTA } from "@/components/cta";
import { Evidence } from "@/components/evidence";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Problem } from "@/components/problem";
import { Workbench } from "@/components/workbench";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Workbench />
      <Problem />
      <HowItWorks />
      <Evidence />
      <Audience />
      <Boundaries />
      <CTA />
    </main>
  );
}
