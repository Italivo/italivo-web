import { BlocksRenderer } from "@/components/strapi/blocks/blocks-renderer";
import { getContactPageData } from "@/data/queries";

export default async function ContactPage() {
  const response = await getContactPageData();

  return (
    <>
      <BlocksRenderer blocks={response.data?.data.blocks ?? []} />
    </>
  );
}
