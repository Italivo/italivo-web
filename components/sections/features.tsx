import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";

export function FeatureSection() {
  return (
    <section className="py-32 bg-cream">
      <div className="container mx-auto px-6 max-w-300 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="text-center md:text-left">
          <h2 className={cn(typography({ variant: "h2" }))}>
            More than just lessons
          </h2>
          <ul
            className={cn(
              "list-style-checkmark flex flex-col gap-6 text-green-dark",
              typography({ variant: "lead", margin: false })
            )}
          >
            <li>Real-life simulations</li>
            <li>Personalized materials</li>
            <li>On-demand support</li>
            <li>Cultural immersion</li>
            <li>Clear, structured programs</li>
          </ul>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=400&fit=crop"
            alt="Student reading"
            className="rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
