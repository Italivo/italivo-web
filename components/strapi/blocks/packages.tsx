import { MarkdownRenderer } from "@/components/markdown/markdown-renderer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getPackageCategoriesWithPackages } from "@/data/queries";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonLink, ButtonLinkProps } from "../shared/button-link";

type PackagesProps = {
  title: string;
  subtitle: string;
  content: string;
  buttonLink?: ButtonLinkProps;
  disclaimer?: string;
  background?: "transparent" | "secondary";
};

export async function Packages({
  title,
  subtitle,
  content,
  buttonLink,
  disclaimer,
  background = "transparent",
}: PackagesProps) {
  const { data } = await getPackageCategoriesWithPackages();
  const packageCategories = data?.data;

  if (packageCategories == null) {
    return null;
  }

  return (
    <div className={cn(background === "secondary" && "bg-secondary")}>
      <section className="container-fluid mx-auto px-(--section-padding-x) py-(--section-padding-y) flex flex-col gap-(--section-padding-y)">
        <div>
          <header className="mb-6">
            <h2 className="txt-h2 m-0 text-center">{title}</h2>
            {subtitle && (
              <p className="txt-lead m-0 max-w-4xl mx-auto text-center">
                {subtitle}
              </p>
            )}
          </header>
          {content && (
            <div className="prose text-center">
              <MarkdownRenderer>{content}</MarkdownRenderer>
            </div>
          )}
        </div>
        <Tabs
          defaultValue={packageCategories[0].id.toString()}
          className="w-full gap-12"
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
                pc.packages
                  .sort((a, b) => a.order - b.order)
                  .map((pkg) => (
                    <Card
                      key={pkg.id}
                      className={cn(
                        "relative bg-beige-50 transition-all duration-250 hover:shadow-lg h-full gap-4",
                        pkg.hasBadge
                          ? "border-2 border-gold scale-105"
                          : "border-gray-200",
                      )}
                    >
                      {pkg.hasBadge && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-foreground px-4 py-1 rounded-sm text-xs font-semibold uppercase tracking-wider">
                          {pkg.badgeLabel}
                        </div>
                      )}
                      <CardHeader className="pb-0 mb-0 gap-0">
                        <CardTitle className="txt-h3 text-[1.75rem] m-0">
                          {pkg.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="prose grow">
                        <MarkdownRenderer>{pkg.summary}</MarkdownRenderer>
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
        {buttonLink && <ButtonLink {...buttonLink} />}
        {disclaimer && (
          <p className="txt-small m-0 max-w-4xl mx-auto text-center">
            {disclaimer}
          </p>
        )}
      </section>
    </div>
  );
}
