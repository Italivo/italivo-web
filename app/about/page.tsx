import { BlocksRenderer } from "@/components/strapi/blocks/blocks-renderer";
import { getAboutPageData } from "@/data/queries";

export default async function Home() {
  const { data } = await getAboutPageData();

  return (
    <>
      <BlocksRenderer blocks={data?.data.blocks ?? []} />
    </>
  );
}
