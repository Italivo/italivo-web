import { AboutSection } from "@/components/blocks/about";
import { BlocksRenderer } from "@/components/blocks/blocks-renderer";
import { CTASection } from "@/components/blocks/cta-section";
import { FeatureSection } from "@/components/blocks/features";
import { LearningPaths } from "@/components/blocks/learning-paths";
import { MethodSection } from "@/components/blocks/method";
import { Packages } from "@/components/blocks/packages";
import { Testimonials } from "@/components/blocks/testimonials";
import { getHomepageData } from "@/lib/strapi/queries";

export default async function Home() {
  const { data, error } = await getHomepageData();

  return (
    <>
      <BlocksRenderer blocks={data?.data.blocks ?? []} />
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
