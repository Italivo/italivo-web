import { AboutSection } from "@/components/sections/about";
import { CTASection } from "@/components/sections/cta-section";
import { FeatureSection } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { LearningPaths } from "@/components/sections/learning-paths";
import { MethodSection } from "@/components/sections/method";
import { Packages } from "@/components/sections/packages";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <MethodSection />
      <LearningPaths />
      <FeatureSection />
      <Packages />
      <Testimonials />
      <CTASection />
    </>
  );
}
