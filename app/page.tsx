import { BlocksRenderer } from "@/components/strapi/blocks/blocks-renderer";
import { getHomepageData } from "@/data/queries";

export default async function Home() {
  const { data } = await getHomepageData();

  return (
    <>
      <BlocksRenderer blocks={data?.data.blocks ?? []} />
    </>
  );
}
