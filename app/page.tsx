import { BlocksRenderer } from "@/components/blocks/blocks-renderer";
import { FreeCallCta } from "@/components/blocks/free-call-cta";
import { getHomepageData } from "@/data/queries";

export default async function Home() {
  const { data } = await getHomepageData();

  return (
    <>
      <BlocksRenderer blocks={data?.data.blocks ?? []} />
      <FreeCallCta />
    </>
  );
}
