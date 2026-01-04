import { Cta, CtaProps } from "@/components/shared/cta";
import { getStrapiMedia } from "@/lib/strapi/utils";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";

type HeroProps = {
  title: string;
  subtitle: string;
  backgroundImage: {
    alternativeText: string;
    url: string;
  };
  cta?: CtaProps;
};

export function Hero({ title, subtitle, backgroundImage, cta }: HeroProps) {
  return (
    <header
      className="relative w-full h-screen bg-cover bg-top"
      style={{ backgroundImage: `url(${getStrapiMedia(backgroundImage.url)})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-background">
          <h1 className={cn(typography({ variant: "display" }))}>{title}</h1>
          <p className={cn(typography({ variant: "lead" }))}>{subtitle}</p>
          {cta && <Cta {...cta} />}
        </div>
      </div>
    </header>
  );
}
