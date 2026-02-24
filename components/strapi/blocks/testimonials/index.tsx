import { getTestimonials } from "@/data/queries";
import { cn } from "@/lib/utils";
import { TestimonialCard } from "./components/testimonial-card";
import { TestimonialCarousel } from "./components/testimonial-carousel";

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
          <TestimonialCarousel>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                className="h-full"
              />
            ))}
          </TestimonialCarousel>
        )}
      </div>
    </section>
  );
}
