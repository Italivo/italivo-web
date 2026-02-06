import { BlocksRenderer } from "@/components/strapi/blocks/blocks-renderer";
import { getPackagesPageData } from "@/data/queries";

export default async function PackagesPage() {
  const { data } = await getPackagesPageData();

  return (
    <>
      <BlocksRenderer blocks={data?.data.blocks ?? []} />
    </>
  );
}
