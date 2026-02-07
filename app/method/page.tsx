import { BlocksRenderer } from "@/components/strapi/blocks/blocks-renderer";
import { getMethodPageData } from "@/data/queries";

export default async function MethodPage() {
  const { data } = await getMethodPageData();

  return (
    <>
      <BlocksRenderer blocks={data?.data.blocks ?? []} />
    </>
  );
}
