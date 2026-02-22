import { MarkdownRenderer } from "@/components/markdown/markdown-renderer";
import { StrapiImage } from "@/components/strapi-image";
import { getLearningPathBySlug, getLearningPaths } from "@/data/queries";
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
            <StrapiImage
              image={learningPath.image}
              format="medium"
              className="rounded-2xl shadow-md w-full h-auto md:hidden"
            />
            <StrapiImage
              image={learningPath.image}
              format="large"
              className="rounded-2xl shadow-md w-full h-auto max-md:hidden"
            />
          </div>

          <div className="order-2 md:order-1">
            <h2 className="txt-h2">{learningPath?.title}</h2>
            <p className="txt-lead">{learningPath.tagline}</p>
            {learningPath.content && (
              <div className="prose">
                <MarkdownRenderer>{learningPath.content}</MarkdownRenderer>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
