import { StrapiImage } from "@/lib/strapi/field-types";
import { getStrapiMedia } from "@/lib/strapi/utils";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";
import Image from "next/image";
import { ButtonLink, ButtonLinkProps } from "../shared/button-link";

type HeroProps = {
  title: string;
  subtitle?: string;
  buttonLink?: ButtonLinkProps;
  imageDesktop: StrapiImage;
  imageMobile: StrapiImage;
};

export function Hero({
  title,
  subtitle,
  buttonLink,
  imageDesktop,
  imageMobile,
}: HeroProps) {
  console.log("buttonLink: ", buttonLink);
  return (
    <header className="relative w-screen h-screen">
      <div className="relative w-full h-full">
        <Image
          fill
          className="object-cover md:hidden"
          src={getStrapiMedia(imageMobile.url)}
          alt=""
          sizes="100vw"
          priority
        />
        <Image
          fill
          className="object-cover max-md:hidden"
          src={getStrapiMedia(imageDesktop.url)}
          alt=""
          sizes="100vw"
          priority
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
