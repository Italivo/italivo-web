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
  cta?: {
    variant: "primary" | "accent";
    link: {
      label: string;
      type: "external" | "internal";
      externalUrl?: string;
      page?: string;
      target: "_self" | "_blank";
    };
  };
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
          {cta && (
            <a
              href={cta.link.externalUrl || cta.link.page}
              target={cta.link.target}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-rust text-white rounded-lg transition-all duration-250 hover:bg-rust-dark hover:-translate-y-0.5 hover:shadow-md"
            >
              {cta.link.label}
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
