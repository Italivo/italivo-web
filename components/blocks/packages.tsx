import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

type PackagesProps = {
  title: string;
  background: "transparent" | "secondary";
};

export function Packages({ title, background }: PackagesProps) {
  return (
    <section className={cn(background === "secondary" && "bg-secondary")}>
      <div className="container-fluid max-w-300 mx-auto px-(--section-padding-x) py-(--section-padding-y)">
        <h2 className={cn(typography({ variant: "h2" }), "text-center mb-20")}>
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={cn(
                "relative bg-beige-50 transition-all duration-250 hover:shadow-lg h-full gap-4",
                pkg.variant === "premium"
                  ? "border-2 border-gold scale-105"
                  : "border-gray-200",
              )}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-foreground px-4 py-1 rounded-sm text-xs font-semibold uppercase tracking-wider">
                  {pkg.badge}
                </div>
              )}

              <CardHeader className="pb-0 mb-0 gap-0">
                <CardTitle
                  className={cn(
                    typography({ variant: "h3", margin: false }),
                    "text-[1.75rem]",
                    pkg.variant === "vip" && "text-rust",
                  )}
                >
                  {pkg.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="grow">
                <ul>
                  {pkg.features.map((feature, index) => (
                    <li
                      key={index}
                      className="py-2 border-b border-gray-100 text-[0.9375rem] text-muted-foreground last:border-b-0"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <div className="text-center">
                  <span className="font-serif text-[1.75rem] font-bold text-foreground">
                    {pkg.priceRange}
                  </span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
