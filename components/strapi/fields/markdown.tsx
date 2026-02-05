import { typography } from "@/lib/variants";
import ReactMarkdown from "react-markdown";

const allowedElements = ["p", "ul", "ol", "li"] as const;

const components: Record<
  (typeof allowedElements)[number],
  React.ComponentType
> = {
  p: (props: React.ComponentProps<"p">) => (
    <p className={typography({ variant: "body" })} {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className={typography({ variant: "body" })} {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className={typography({ variant: "body" })} {...props} />
  ),
  li: (props: React.ComponentProps<"li">) => (
    <li className={typography({ variant: "body" })} {...props} />
  ),
};

export function Markdown({ markdown }: { markdown?: string }) {
  if (!markdown) return null;
  return (
    <ReactMarkdown allowedElements={allowedElements} components={components}>
      {markdown}
    </ReactMarkdown>
  );
}
