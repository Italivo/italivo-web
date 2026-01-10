import { BlocksRenderer } from "@/components/blocks/blocks-renderer";
import { CTASection } from "@/components/blocks/cta-section";
import { Packages } from "@/components/blocks/packages";
import { getHomepageData } from "@/lib/strapi/queries";

export default async function Home() {
  const { data } = await getHomepageData();

  console.log("blocks: ", data?.data.blocks);

  return (
    <>
      <BlocksRenderer blocks={data?.data.blocks ?? []} />
      <Packages />
      <CTASection />
    </>
  );
}
