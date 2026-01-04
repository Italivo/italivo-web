import { Button } from "../ui/button";
import { Link, LinkProps } from "./link";

export type CtaProps = {
  variant?: "primary" | "accent";
  link: LinkProps;
};

export function Cta({ variant = "primary", link }: CtaProps) {
  return (
    <Button
      asChild
      variant={variant === "primary" ? "default" : "accent"}
      size="lg"
    >
      <Link {...link} />
    </Button>
  );
}
