import { StrapiImage } from "@/lib/strapi/field-types";
import { getStrapiMedia } from "@/lib/strapi/utils";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";
import Image from "next/image";
import { Markdown } from "../fields/markdown";
import { ButtonLink, ButtonLinkProps } from "../shared/button-link";

type ContentWithImageProps = {
  title: string;
  subtitle?: string;
  content?: string;
  buttonLink: ButtonLinkProps;
  disclaimer?: string;
  image: StrapiImage;
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
            {/* image goes here */}
            <Image
              alt=""
              aria-hidden
              src={getStrapiMedia(image.url)}
              width={image.width}
              height={image.height}
              className="rounded-2xl shadow-md"
            />
          </div>
          {/* Title & Content */}
          <div
            className={cn(
              imagePositionMobile === "top" ? "order-2" : "order-1",
              imagePositionDesktop === "left" ? "md:order-2" : "md:order-1",
            )}
          >
            <h2 className={cn(typography({ variant: "h2" }))}>{title}</h2>
            {subtitle && (
              <p className={cn(typography({ variant: "lead", margin: false }))}>
                {subtitle}
              </p>
            )}
            {content && <Markdown markdown={content} />}
            {buttonLink && <ButtonLink {...buttonLink} />}
            {disclaimer && (
              <p className={cn(typography({ variant: "small", margin: false }))}>
                {disclaimer}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
