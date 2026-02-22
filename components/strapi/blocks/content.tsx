import { MarkdownRenderer } from "@/components/markdown/markdown-renderer";
import { cn } from "@/lib/utils";
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
          <h2 className="txt-h2 m-0 text-center">{title}</h2>
          {subtitle && (
            <p className="txt-lead m-0 max-w-4xl text-center">{subtitle}</p>
          )}
        </header>
        {content && (
          <div className="prose">
            <MarkdownRenderer>{content}</MarkdownRenderer>
          </div>
        )}

        {buttonLink && <ButtonLink {...buttonLink} />}
        {disclaimer && (
          <p className="txt-small m-0 max-w-4xl text-center">{disclaimer}</p>
        )}
      </div>
    </section>
  );
}
