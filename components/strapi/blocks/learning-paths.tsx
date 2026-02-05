import { getLearningPaths } from "@/data/queries";
import { routes } from "@/lib/routes";
import { StrapiImage } from "@/lib/strapi/field-types";
import { getStrapiMedia } from "@/lib/strapi/utils";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "../../ui/card";
type LearningPathsProps = {
  title: string;
  background?: "transparent" | "secondary";
};

export async function LearningPaths({ title, background }: LearningPathsProps) {
  const { data } = await getLearningPaths();
  const learningPaths = data?.data ?? [];

  return (
    <section className={cn(background === "secondary" && "bg-secondary")}>
      <div className="container-fluid mx-auto px-(--section-padding-x) py-(--section-padding-y)">
        {title && (
          <h2 className={cn(typography({ variant: "h2" }), "text-center")}>
            {title}
          </h2>
        )}

        {learningPaths && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {learningPaths.map((lp, index) => (
              <IconCard
                key={index}
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
          </div>
        )}
      </div>
    </section>
  );
}

export type IconCardProps = {
  className?: string;
  title: string;
  description?: string;
  icon: StrapiImage;
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
            <Image
              src={getStrapiMedia(icon.url)}
              alt=""
              fill
              sizes="48px"
              className="object-contain"
              aria-hidden="true"
            />
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <h3
            className={cn(
              typography({ variant: "h3", margin: false }),
              "text-olive-700 mb-2",
            )}
          >
            {title}
          </h3>
          {description && (
            <p
              className={cn(
                typography({ variant: "small", margin: false }),
                "text-muted-foreground",
              )}
            >
              {description}
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
