import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";

interface Package {
  id: string;
  name: string;
  variant: "light" | "premium" | "vip";
  features: string[];
  priceRange: string;
  badge?: string;
  ctaLabel: string;
  ctaHref: string;
}

const packages: Package[] = [
  {
    id: "light",
    name: "Light",
    variant: "light",
    features: [
      "2 live lessons/month",
      "Light support between lessons",
      "1 task/month",
      "Basic resources",
    ],
    priceRange: "€90–€110",
    ctaLabel: "Get started",
    ctaHref: "#contact",
  },
  {
    id: "premium",
    name: "Premium",
    variant: "premium",
    badge: "Most popular",
    features: [
      "4 live lessons/month",
      "Full support between lessons",
      "Chat + 1 task/week",
      "Personalized resources",
      "Weekly feedback",
    ],
    priceRange: "€250–€300",
    ctaLabel: "Get started",
    ctaHref: "#contact",
  },
  {
    id: "vip",
    name: "VIP Intensive",
    variant: "vip",
    features: [
      "8 live lessons/month",
      "Continuous support",
      "Priority chat + 1 audio/day",
      "Unlimited text/email correction",
      "Exclusive resources",
      "2 weekly challenges",
    ],
    priceRange: "€450–€550",
    ctaLabel: "Get started",
    ctaHref: "#contact",
  },
];

export function Packages() {
  return (
    <section id="packages" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-300">
        <h2 className={cn(typography({ variant: "h2" }), "text-center mb-20")}>
          Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={cn(
                "relative bg-white border rounded-2xl p-12 transition-all duration-250",
                "hover:shadow-lg",
                pkg.variant === "premium"
                  ? "border-2 border-gold bg-cream"
                  : "border-gray-200",
              )}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-foreground px-4 py-1 rounded-sm text-xs font-semibold uppercase tracking-wider">
                  {pkg.badge}
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={cn(
                    typography({ variant: "h3" }),
                    "text-[1.75rem]",
                    pkg.variant === "vip" && "text-rust",
                  )}
                >
                  {pkg.name}
                </h3>
              </div>

              <ul className="mb-8">
                {pkg.features.map((feature, index) => (
                  <li
                    key={index}
                    className="py-2 border-b border-gray-100 text-[0.9375rem] text-muted-foreground last:border-b-0"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mb-6">
                <span className="font-serif text-[1.75rem] font-bold text-foreground">
                  {pkg.priceRange}
                </span>
                <span className="text-[0.9375rem] text-muted-foreground">
                  /month
                </span>
              </div>

              <a
                href={pkg.ctaHref}
                className={cn(
                  "w-full inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-sans font-semibold text-sm transition-all duration-250",
                  pkg.variant === "light" &&
                    "bg-transparent text-green border-2 border-green hover:bg-green hover:text-white",
                  (pkg.variant === "premium" || pkg.variant === "vip") &&
                    "bg-rust text-white hover:bg-rust-dark",
                )}
              >
                {pkg.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
