import { StrapiImage } from "@/components/strapi-image";
import { StrapiImage as StrapiImageType } from "@/lib/strapi/media";
import { cn } from "@/lib/utils";

type FeatureListProps = {
  title: string;
  subtitle?: string;
  image?: StrapiImageType;
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
          <h2 className={cn("txt-h2", !!subtitle && "m-0", "text-center")}>
            {title}
          </h2>
          {subtitle && (
            <p className="txt-lead m-0 max-w-4xl mx-auto text-center">
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
                <h3 className="text-h3 m-0 text-olive-700 mb-2">
                  {feature.title}
                </h3>
                <p className="txt-small m-0 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {image && (
          <div className="w-full max-w-150 mx-auto">
            <StrapiImage
              image={image}
              format="medium"
              className="rounded-2xl shadow-lg object-contain w-full h-auto md:hidden"
            />
            <StrapiImage
              image={image}
              format="large"
              className="rounded-2xl shadow-lg object-contain w-full h-auto max-md:hidden"
            />
          </div>
        )}
      </div>
    </section>
  );
}
