import { FreeCallCta } from "@/components/blocks-wip/free-call-cta";
import { BlocksRenderer } from "@/components/blocks/blocks-renderer";
import { getHomepageData } from "@/data/queries";

export default async function Home() {
  const { data } = await getHomepageData();

  return (
    <>
      <BlocksRenderer blocks={data?.data.blocks ?? []} />
      <FreeCallCta
        title="Ready to learn Italian in a different way?"
        subtitle="Book your free call and start your journey today"
        buttonText="Schedule your free call now"
        disclaimer="No commitment just a conversation"
      />
    </>
  );
}
