import { Audience } from "@/components/audience";
import { CTA } from "@/components/cta";
import { Evidence } from "@/components/evidence";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Problem } from "@/components/problem";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <Evidence />
      <Audience />
      <CTA />
    </main>
  );
}
