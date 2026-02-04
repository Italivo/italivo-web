import { FreeCallCta } from "@/components/blocks-wip/free-call-cta";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getPackageCategories } from "@/data/queries";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

type PackagesPageProps = {
  background?: "transparent" | "secondary";
};

export default async function PackagesPage({
  background = "secondary",
}: PackagesPageProps) {
  const { data } = await getPackageCategories();
  console.log("data: ", data);
  const packageCategories = data?.data;

  if (packageCategories == null) {
    return notFound();
  }

  return (
    <div className={cn(background === "secondary" && "bg-secondary")}>
      <section className="container-fluid mx-auto px-(--section-padding-x) py-(--section-padding-y) flex flex-col gap-(--section-padding-y)">
        <header>
          <h2
            className={cn(
              typography({ variant: "h2", margin: true }),
              "text-center",
            )}
          >
            Choose your package
          </h2>
          <p
            className={cn(
              typography({ variant: "lead", margin: false }),
              "max-w-4xl mx-auto text-center",
            )}
          >
            Select the intensity level that fits your program
          </p>
          <p
            className={cn(
              typography({ variant: "body", margin: false }),
              "max-w-4xl mx-auto text-center",
            )}
          >
            All packages can be applied to any Italian program
          </p>
          <p
            className={cn(
              typography({ variant: "body", margin: false }),
              "max-w-4xl mx-auto text-center",
            )}
          >
            Packages define how intensively you study, not what you study
          </p>
        </header>

        <Tabs
          defaultValue={packageCategories[0].id.toString()}
          className="w-full gap-6"
        >
          <TabsList className="mx-auto w-fit">
            {packageCategories.map((pc) => (
              <TabsTrigger key={pc.id} value={pc.id.toString()}>
                {pc.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {packageCategories.map((pc) => (
            <TabsContent
              key={pc.id}
              value={pc.id.toString()}
              className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
            >
              {pc.packages &&
                pc.packages.map((pkg) => (
                  <Card
                    key={pkg.id}
                    className={cn(
                      "relative bg-beige-50 transition-all duration-250 hover:shadow-lg h-full gap-4 border-gray-200",
                    )}
                  >
                    <CardHeader className="pb-0 mb-0 gap-0">
                      <CardTitle
                        className={cn(
                          typography({ variant: "h3", margin: false }),
                          "text-[1.75rem]",
                        )}
                      >
                        {pkg.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="grow">
                      <MarkdownRenderer markdown={pkg.summary} />
                    </CardContent>

                    <CardFooter className="flex flex-col gap-4">
                      <div className="text-center">
                        <span className="font-serif text-[1.75rem] font-bold text-foreground">
                          &euro; {pkg.price}
                        </span>
                      </div>
                      <Button variant="accent" asChild className="w-fit">
                        <Link href={`/packages/${pkg.slug}`}>
                          Discover Details
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </section>
      <FreeCallCta
        title="Not Sure which option fits you?"
        buttonText="Book A free call"
      />
    </div>
  );
}

const allowedElements = ["ul", "li"] as const;

const components: Record<
  (typeof allowedElements)[number],
  React.ComponentType
> = {
  ul: (props: React.ComponentProps<"ul">) => <ul {...props} />,
  li: (props: React.ComponentProps<"li">) => (
    <li
      className="py-2 border-b border-gray-100 text-[0.9375rem] text-muted-foreground last:border-b-0"
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
