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
    <section className="bg-secondary">
      <div className="container-fluid mx-auto px-(--section-padding-x) py-(--section-padding-y)">
        {JSON.stringify(packageData)}
      </div>
    </section>
  );
}
