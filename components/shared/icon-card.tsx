import { StrapiImage } from "@/lib/strapi/field-types";
import { getStrapiMedia } from "@/lib/strapi/utils";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Link, LinkProps } from "./link";

export type IconCardProps = {
  className?: string;
  title: string;
  description?: string;
  icon: StrapiImage;
  link?: LinkProps;
};

export function IconCard({
  title,
  description,
  icon,
  link,
  className,
}: IconCardProps) {
  const content = (
    <Card className="h-full gap-0">
      <CardHeader>
        <div className="w-12 h-12 mx-auto relative">
          <Image
            src={getStrapiMedia(icon.url)}
            alt=""
            fill
            sizes="48px"
            className="object-contain"
            aria-hidden="true"
          />
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <h3
          className={cn(
            typography({ variant: "h3", margin: false }),
            "text-olive-700 mb-2"
          )}
        >
          {title}
        </h3>
        {description && (
          <p
            className={cn(
              typography({ variant: "small", margin: false }),
              "text-muted-foreground"
            )}
          >
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );

  if (link) {
    return (
      <Link {...link} className={cn("block", className)}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
