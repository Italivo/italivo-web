import { StrapiImage } from "@/components/strapi-image";
import { StrapiImage as StrapiImageType } from "@/lib/strapi/media";
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.4)_0%,transparent_70%)]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-(--section-padding-x) py-(--section-padding-y) gap-6">
        <div className="text-center text-background">
          <h1 className="font-serif font-normal text-4xl md:text-5xl lg:text-6xl leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="font-sans text-lg leading-relaxed">{subtitle}</p>
          )}
        </div>
        {buttonLink && <ButtonLink {...buttonLink} />}
      </div>
    </header>
  );
}
