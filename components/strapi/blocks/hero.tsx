import { StrapiImage } from "@/components/strapi-image";
import { StrapiImage as StrapiImageType } from "@/lib/strapi/media";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";
import { ButtonLink, ButtonLinkProps } from "../shared/button-link";

type HeroProps = {
  title: string;
  subtitle?: string;
  buttonLink?: ButtonLinkProps;
  imageDesktop: StrapiImageType;
  imageMobile: StrapiImageType;
};

export function Hero({
  title,
  subtitle,
  buttonLink,
  imageDesktop,
  imageMobile,
}: HeroProps) {
  return (
    <header className="relative w-screen h-screen">
      <div className="relative w-full h-full">
        <StrapiImage
          image={imageMobile}
          format="medium"
          fill
          className="object-cover object-top md:hidden"
          alt=""
          preload
        />
        <StrapiImage
          image={imageDesktop}
          format="large"
          fill
          className="object-cover object-top max-md:hidden"
          alt=""
          preload
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-(--section-padding-x) py-(--section-padding-y) gap-6">
        <div className="text-center text-background">
          <h1
            className={cn(
              typography({ variant: "display", margin: false }),
              "",
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p className={cn(typography({ variant: "lead", margin: false }))}>
              {subtitle}
            </p>
          )}
        </div>
        {buttonLink && <ButtonLink {...buttonLink} />}
      </div>
    </header>
  );
}
