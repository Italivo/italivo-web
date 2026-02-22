import { StrapiImage } from "@/components/strapi-image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { getTestimonials } from "@/data/queries";
import { StrapiImage as StrapiImageType } from "@/lib/strapi/media";
import { cn } from "@/lib/utils";

interface TestimonialsProps {
  title?: string;
  background?: "transparent" | "secondary";
}

export async function Testimonials({
  title,
  background = "transparent",
}: TestimonialsProps) {
  const { data: testimonialsData } = await getTestimonials();
  const testimonials = testimonialsData?.data;

  return (
    <section className={cn(background === "secondary" && "bg-secondary")}>
      <div className="container-fluid mx-auto px-(--section-padding-x) py-(--section-padding-y)">
        {title && <h2 className="txt-h2 text-center mb-20">{title}</h2>}

        {testimonials && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export type TestimonialCardProps = {
  quote: string;
  name: string;
  avatar: StrapiImageType;
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
