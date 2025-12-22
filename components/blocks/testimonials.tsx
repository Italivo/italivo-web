import testimonial1 from "@/assets/images/testimonial1.jpeg";
import testimonial2 from "@/assets/images/testimonial2.jpeg";
import testimonial3 from "@/assets/images/testimonial3.jpeg";
import { TestimonialCard } from "@/components/testimonial-card";
import { typography } from "@/lib/variants";

const testimonials = [
  {
    quote:
      "Le lezioni con Italivo hanno trasformato il mio italiano. Finalmente parlo con sicurezza!",
    imageSrc: testimonial1,
    name: "Sarah M.",
    servicePackage: "Premium Student",
  },
  {
    quote:
      "Il metodo comunicativo funziona davvero. Ho fatto più progressi in 3 mesi che in anni di studio tradizionale.",
    imageSrc: testimonial2,
    name: "James T.",
    servicePackage: "VIP Intensive",
  },
  {
    quote:
      "I docenti sono fantastici e il supporto tra le lezioni fa la differenza. Consigliatissimo!",
    imageSrc: testimonial3,
    name: "Emma K.",
    servicePackage: "Light Student",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-card">
      <div className="container">
        <h2
          className={typography({ variant: "h2", class: "text-center mb-20" })}
        >
          Our students say it best
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
