import { MarkdownRenderer } from "@/components/markdown/markdown-renderer";
import { StrapiImage } from "@/components/strapi-image";
import { StrapiImage as StrapiImageType } from "@/lib/strapi/media";
import { cn } from "@/lib/utils";
import { ButtonLink, ButtonLinkProps } from "../shared/button-link";

type ContentWithImageProps = {
  title: string;
  subtitle?: string;
  content?: string;
  buttonLink: ButtonLinkProps;
  disclaimer?: string;
  image: StrapiImageType;
  imagePositionMobile?: "top" | "bottom";
  imagePositionDesktop?: "left" | "right";
  background?: "transparent" | "secondary";
};

export function ContentWithImage({
  title,
  subtitle,
  content,
  buttonLink,
  disclaimer,
  image,
  imagePositionMobile = "top",
  imagePositionDesktop = "right",
  background = "transparent",
}: ContentWithImageProps) {
  return (
    <section className={cn(background === "secondary" && "bg-secondary")}>
      <div className="container-fluid mx-auto px-(--section-padding-x) py-(--section-padding-y)">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12">
          {/* Image */}
          <div
            className={cn(
              imagePositionMobile === "top" ? "order-1" : "order-2",
              imagePositionDesktop === "left" ? "md:order-1" : "md:order-2",
            )}
          >
            <StrapiImage
              image={image}
              format="medium"
              className="rounded-2xl shadow-md md:hidden"
            />
            <StrapiImage
              image={image}
              format="large"
              className="rounded-2xl shadow-md max-md:hidden"
            />
          </div>
          {/* Title & Content */}
          <div
            className={cn(
              imagePositionMobile === "top" ? "order-2" : "order-1",
              imagePositionDesktop === "left" ? "md:order-2" : "md:order-1",
            )}
          >
            <h2 className="txt-h2">{title}</h2>
            {subtitle && <p className="txt-lead m-0">{subtitle}</p>}
            {content && (
              <div className="prose">
                <MarkdownRenderer>{content}</MarkdownRenderer>
              </div>
            )}
            {buttonLink && <ButtonLink {...buttonLink} />}
            {disclaimer && <p className="txt-small m-0">{disclaimer}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
