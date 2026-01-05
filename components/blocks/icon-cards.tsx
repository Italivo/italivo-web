import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";
import { IconCard, IconCardProps } from "../shared/icon-card";

type IconCardsProps = {
  title: string;
  iconCards: IconCardProps[];
  background?: "transparent" | "secondary";
};

export function IconCards({ title, iconCards, background }: IconCardsProps) {
  return (
    <section className={cn(background === "secondary" && "bg-secondary")}>
      <div className="container-fluid mx-auto p-(--section-padding)">
        {title && (
          <h2 className={cn(typography({ variant: "h2" }), "text-center")}>
            {title}
          </h2>
        )}

        {iconCards && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {iconCards.map((iconCard, index) => (
              <IconCard key={index} {...iconCard} className="items-stretch" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
