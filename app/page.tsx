import { AboutSection } from "@/componenst/sections/about";
import { CTASection } from "@/componenst/sections/cta-section";
import { FeatureSection } from "@/componenst/sections/features";
import { Hero } from "@/componenst/sections/hero";
import { LearningPaths } from "@/componenst/sections/learning-paths";
import { MethodSection } from "@/componenst/sections/method";
import { Packages } from "@/componenst/sections/packages";
import { Testimonials } from "@/componenst/sections/testimonials";

export default function Home() {
  return (
    <main>
      {/* <!-- Mobile Menu --> */}
      <div className="mobile-menu">
        <div className="mobile-menu-content">
          <a href="#about">About</a>
          <a href="#method">Method</a>
          <a href="#packages">Packages</a>
          <a href="#contact">Contact</a>
          <a href="#contact" className="btn btn-primary">
            Book your free trial lesson
          </a>
        </div>
      </div>

      <Hero />
      <AboutSection />
      <MethodSection />
      <LearningPaths />
      <FeatureSection />
      <Packages />
      <Testimonials />
      <CTASection />
    </main>
  );
}
