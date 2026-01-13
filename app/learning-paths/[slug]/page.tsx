import { MarkdownRenderer } from "@/components/shared/markdown-renderer";
import { getLearningPathBySlug, getLearningPaths } from "@/lib/strapi/queries";
import { getStrapiMedia } from "@/lib/strapi/utils";
import { typography } from "@/lib/variants";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { data } = await getLearningPaths();
  const learningPaths = data?.data ?? [];
  return learningPaths?.map((lp) => ({ slug: lp.slug }));
}

export default async function LearningPathPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data } = await getLearningPathBySlug(slug);
  const learningPath = data?.data?.[0];

  if (!learningPath) {
    notFound();
  }

  return (
    <section className="bg-secondary">
      <div className="container-fluid mx-auto px-(--section-padding-x) py-(--section-padding-y)">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 md:gap-12">
          <div className="order-1 md:order-2">
            <Image
              src={getStrapiMedia(learningPath.image.url)}
              alt={learningPath.image.alternativeText ?? ""}
              aria-hidden={learningPath.image.alternativeText ? false : true}
              width={learningPath.image.width}
              height={learningPath.image.height}
              className="rounded-2xl shadow-md w-full h-auto"
            />
          </div>

          <div className="order-2 md:order-1">
            <h2 className={typography({ variant: "h2", margin: true })}>
              {learningPath?.title}
            </h2>
            <p className={typography({ variant: "lead", margin: true })}>
              {learningPath.tagline}
            </p>
            <MarkdownRenderer markdown={learningPath.content} />
          </div>
        </div>
      </div>
    </section>
  );
}
