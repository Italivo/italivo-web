import { StrapiImage } from "@/components/strapi-image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getPackageCategoriesWithLearningPaths } from "@/data/queries";
import { routes } from "@/lib/routes";
import { StrapiImage as StrapiImageType } from "@/lib/strapi/media";
import { cn } from "@/lib/utils";
import Link from "next/link";

type LearningPathsProps = {
  title: string;
  background?: "transparent" | "secondary";
};

export async function LearningPaths({ title, background }: LearningPathsProps) {
  const { data } = await getPackageCategoriesWithLearningPaths();
  const packageCategories = data?.data ?? [];

  return (
    <section className={cn(background === "secondary" && "bg-secondary")}>
      <div className="container-fluid mx-auto px-(--section-padding-x) py-(--section-padding-y) flex flex-col">
        <div>
          <header className="mb-8">
            <h2 className="txt-h2 m-0 text-center">{title}</h2>
          </header>
        </div>
        <Tabs
          defaultValue={packageCategories[0].id.toString()}
          className="w-full gap-8"
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
              className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {pc.learning_paths &&
                pc.learning_paths.map((lp) => (
                  <IconCard
                    key={lp.slug}
                    className="items-stretch"
                    title={lp.title}
                    description={lp.tagline}
                    icon={lp.icon}
                    link={{
                      label: `Read more about the learning path ${lp.title}`,
                      href: routes.learningPaths.bySlug(lp.slug),
                    }}
                  />
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

export type IconCardProps = {
  className?: string;
  title: string;
  description?: string;
  icon: StrapiImageType;
  link: {
    href: string;
    label: string;
  };
};

export function IconCard({
  title,
  description,
  icon,
  link,
  className,
}: IconCardProps) {
  return (
    <Link
      aria-label={link.label}
      href={link.href}
      className={cn("block", className)}
    >
      <Card className="h-full gap-0 ">
        <CardHeader>
          <div className="w-12 h-12 mx-auto relative">
            <StrapiImage
              image={icon}
              format="small"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <h3 className="txt-h3 m-0 text-olive-700 mb-2 ">{title}</h3>
          {description && (
            <p className="txt-small m-0 text-muted-foreground">{description}</p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
