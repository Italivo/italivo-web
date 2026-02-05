import { Button } from "@/components/ui/button";
import { Link, LinkProps } from "./link";

export type ButtonLinkProps = Pick<
  React.ComponentProps<typeof Button>,
  "variant" | "size" | "className"
> & {
  link: LinkProps;
};

export function ButtonLink({
  variant,
  size = "lg",
  className,
  link,
}: ButtonLinkProps) {
  return (
    <Button variant={variant} size={size} className={className} asChild>
      <Link {...link} />
    </Button>
  );
}
