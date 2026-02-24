import { StrapiImage } from "@/components/strapi-image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { StrapiImage as StrapiImageType } from "@/lib/strapi/media";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  quote: string;
  name: string;
  avatar: StrapiImageType;
  role: string;
  className?: string;
};

export function TestimonialCard({
  quote,
  name,
  avatar,
  role,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn("justify-between gap-2", className)}>
      <CardContent>
        <p className="txt-body italic">&ldquo;{quote}&rdquo;</p>
      </CardContent>
      <CardFooter className="flex items-center gap-4">
        <StrapiImage
          image={avatar}
          format="small"
          className="w-12 h-12 rounded-full object-cover"
          alt=""
        />
        <p>
          <strong className="block text-[0.9375rem] font-bold">{name}</strong>
          <span className="block text-[0.8125rem] text-muted-foreground">
            {role}
          </span>
        </p>
      </CardFooter>
    </Card>
  );
}
