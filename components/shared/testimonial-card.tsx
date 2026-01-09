import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { StrapiImage } from "@/lib/strapi/field-types";
import { getStrapiMedia } from "@/lib/strapi/utils";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";
import Image from "next/image";

export type TestimonialCardProps = {
  quote: string;
  name: string;
  avatar: StrapiImage;
  role: string;
};

export function TestimonialCard({
  quote,
  name,
  avatar,
  role,
}: TestimonialCardProps) {
  return (
    <Card className="gap-2">
      <CardContent>
        <p className={cn(typography({ variant: "body" }), "italic")}>
          &ldquo;{quote}&rdquo;
        </p>
      </CardContent>
      <CardFooter className="flex items-center gap-4">
        <Image
          className="w-12 h-12 rounded-full object-cover"
          alt=""
          aria-hidden
          src={getStrapiMedia(avatar.url)}
          width={48}
          height={48}
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
