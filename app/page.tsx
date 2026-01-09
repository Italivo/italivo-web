import { BlocksRenderer } from "@/components/blocks/blocks-renderer";
import { CTASection } from "@/components/blocks/cta-section";
import { MethodSection } from "@/components/blocks/method";
import { Packages } from "@/components/blocks/packages";
import { getHomepageData } from "@/lib/strapi/queries";

export default async function Home() {
  const { data } = await getHomepageData();

  return (
    <>
      <BlocksRenderer blocks={data?.data.blocks ?? []} />
      <MethodSection />
      <Packages />
      <CTASection />
    </>
  );
}
