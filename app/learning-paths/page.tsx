import { BlocksRenderer } from "@/components/strapi/blocks/blocks-renderer";
import { getLearningPathsPageData } from "@/data/queries";

export default async function LearningPathsPage() {
  const { data } = await getLearningPathsPageData();

  return (
    <>
      <BlocksRenderer blocks={data?.data.blocks ?? []} />
    </>
  );
}
