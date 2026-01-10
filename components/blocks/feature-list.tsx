import { StrapiImage } from "@/lib/strapi/field-types";
import { getStrapiMedia } from "@/lib/strapi/utils";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";
import Image from "next/image";

type FeatureListProps = {
  title: string;
  subtitle?: string;
  image?: StrapiImage;
  features: { title: string; description: string }[];
  background?: "transparent" | "secondary";
};

export function FeatureList({
  title,
  subtitle,
  image,
  features,
  background,
}: FeatureListProps) {
  return (
    <section className={cn(background === "secondary" && "bg-secondary")}>
      <div className="container-fluid mx-auto px-(--section-padding-x) py-(--section-padding-y) flex flex-col gap-(--section-padding-y)">
        <div>
          <h2
            className={cn(
              typography({ variant: "h2", margin: !!subtitle }),
              "text-center"
            )}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={cn(
                typography({ variant: "lead", margin: false }),
                "max-w-4xl mx-auto text-center"
              )}
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full font-sans font-semibold text-base text-white bg-accent">
                {index + 1}
              </span>
              <div>
                <h3
                  className={cn(
                    typography({ variant: "h3", margin: false }),
                    "text-olive-700 mb-2"
                  )}
                >
                  {feature.title}
                </h3>
                <p
                  className={cn(
                    typography({ variant: "small", margin: false }),
                    "text-muted-foreground"
                  )}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {image && (
          <div className="w-full max-w-150 mx-auto">
            <Image
              className="rounded-2xl shadow-lg object-contain w-full h-auto"
              src={getStrapiMedia(image.url)}
              alt={image.alternativeText ?? ""}
              aria-hidden={Boolean(image.alternativeText)}
              width={image.width}
              height={image.height}
              sizes="(max-width: 600px) 100vw, 600px"
            />
          </div>
        )}
      </div>
    </section>
  );
}
