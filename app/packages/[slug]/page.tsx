import { Badge } from "@/components/ui/badge";
import { getPackageBySlug, getPackages } from "@/data/queries";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

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
            <h2
              className={cn(
                typography({ variant: "h1", margin: true }),
                "relative",
              )}
            >
              {packageData.title}
            </h2>
            <Badge className="absolute top-0 left-full">
              {packageData.package_category?.title}
            </Badge>
          </header>
          <MarkdownRenderer markdown={packageData.content} />
        </div>
      </section>
    </>
  );
}

const allowedElements = ["h2", "h3", "p", "ul", "li"] as const;

const components: Record<
  (typeof allowedElements)[number],
  React.ComponentType
> = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2
      className={cn(typography({ variant: "h2", margin: true }))}
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3
      className={cn(typography({ variant: "h3", margin: true }))}
      {...props}
    />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p
      className={cn(typography({ variant: "body", margin: true }))}
      {...props}
    />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul
      className={cn(
        typography({ variant: "body", margin: true }),
        "list-disc list-outside ml-6 space-y-2",
      )}
      {...props}
    />
  ),
  li: (props: React.ComponentProps<"li">) => (
    <li
      className={cn(typography({ variant: "body", margin: false }))}
      {...props}
    />
  ),
};

function MarkdownRenderer({ markdown }: { markdown?: string }) {
  if (!markdown) return null;
  return (
    <ReactMarkdown allowedElements={allowedElements} components={components}>
      {markdown}
    </ReactMarkdown>
  );
}
