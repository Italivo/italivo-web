import { MarkdownRenderer } from "@/components/markdown/markdown-renderer";
import { Badge } from "@/components/ui/badge";
import { getPackageBySlug, getPackages } from "@/data/queries";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { data } = await getPackages();
  const packages = data?.data ?? [];
  return packages?.map((p) => ({ slug: p.slug }));
}

export default async function PackagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data } = await getPackageBySlug(slug);
  const packageData = data?.data?.[0];

  if (!packageData) {
    notFound();
  }

  return (
    <>
      <section>
        <div className="container-fluid mx-auto px-(--section-padding-x) py-(--section-padding-y)">
          <header className="relative w-fit pr-2">
            <h2 className="txt-h1 relative">{packageData.title}</h2>
            <Badge className="absolute top-0 left-full">
              {packageData.package_category?.title}
            </Badge>
          </header>
          <div className="prose">
            <MarkdownRenderer>{packageData.content}</MarkdownRenderer>
          </div>
        </div>
      </section>
    </>
  );
}
