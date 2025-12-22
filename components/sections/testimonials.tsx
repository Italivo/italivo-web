import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";

interface TestimonialAuthor {
  name: string;
  title: string;
  avatarUrl: string;
}

interface Testimonial {
  id: string;
  quote: string;
  author: TestimonialAuthor;
}

const testimonials: Testimonial[] = [
  {
    id: "sarah-m",
    quote:
      "Le lezioni con Italivo hanno trasformato il mio italiano. Finalmente parlo con sicurezza!",
    author: {
      name: "Sarah M.",
      title: "Premium Student",
      avatarUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face",
    },
  },
  {
    id: "james-t",
    quote:
      "Il metodo comunicativo funziona davvero. Ho fatto più progressi in 3 mesi che in anni di studio tradizionale.",
    author: {
      name: "James T.",
      title: "VIP Intensive",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    },
  },
  {
    id: "emma-k",
    quote:
      "I docenti sono fantastici e il supporto tra le lezioni fa la differenza. Consigliatissimo!",
    author: {
      name: "Emma K.",
      title: "Light Student",
      avatarUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    },
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-cream">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2 className={cn(typography({ variant: "h2" }), "text-center mb-20")}>
          Our students say it best
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-12 rounded-2xl shadow-sm"
            >
              <p className="italic text-base text-foreground mb-8 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.author.avatarUrl}
                  alt={testimonial.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <strong className="block text-[0.9375rem] font-bold">
                    {testimonial.author.name}
                  </strong>
                  <span className="text-[0.8125rem] text-muted-foreground">
                    {testimonial.author.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
