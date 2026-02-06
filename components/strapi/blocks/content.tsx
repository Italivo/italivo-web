import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";
import { Markdown } from "../fields/markdown";
import { ButtonLink, ButtonLinkProps } from "../shared/button-link";

type ContentProps = {
  title: string;
  subtitle?: string;
  content?: string;
  buttonLink?: ButtonLinkProps;
  disclaimer?: string;
  background?: "transparent" | "secondary";
};

export function Content({
  title,
  subtitle,
  content,
  buttonLink,
  disclaimer,
  background = "transparent",
}: ContentProps) {
  return (
    <section className={cn(background === "secondary" && "bg-secondary")}>
      <div className="container-fluid mx-auto px-(--section-padding-x) py-(--section-padding-y) flex flex-col items-center gap-4">
        <header>
          <h2 className={cn(typography({ variant: "h2", margin: false }))}>
            {title}
          </h2>
          {subtitle && (
            <p
              className={cn(
                typography({ variant: "lead", margin: false }),
                "max-w-4xl",
              )}
            >
              {subtitle}
            </p>
          )}
        </header>
        <div>{content && <Markdown markdown={content} />}</div>

        {buttonLink && <ButtonLink {...buttonLink} />}
        {disclaimer && (
          <p
            className={cn(
              typography({ variant: "small", margin: false }),
              "max-w-4xl",
            )}
          >
            {disclaimer}
          </p>
        )}
      </div>
    </section>
  );
}
