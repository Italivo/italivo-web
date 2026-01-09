import { getTestimonials } from "@/lib/strapi/queries";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";
import { TestimonialCard } from "../shared/testimonial-card";

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
        {title && (
          <h2
            className={cn(typography({ variant: "h2" }), "text-center mb-20")}
          >
            {title}
          </h2>
        )}

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
