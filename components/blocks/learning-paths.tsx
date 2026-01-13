import { getLearningPaths } from "@/lib/strapi/queries";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";
import { IconCard } from "../shared/icon-card";

type LearningPathsProps = {
  title: string;
  background?: "transparent" | "secondary";
};

export async function LearningPaths({ title, background }: LearningPathsProps) {
  const { data } = await getLearningPaths();
  const learningPaths = data?.data ?? [];

  return (
    <section className={cn(background === "secondary" && "bg-secondary")}>
      <div className="container-fluid mx-auto px-(--section-padding-x) py-(--section-padding-y)">
        {title && (
          <h2 className={cn(typography({ variant: "h2" }), "text-center")}>
            {title}
          </h2>
        )}

        {learningPaths && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {learningPaths.map((lp, index) => (
              <IconCard
                key={index}
                className="items-stretch"
                title={lp.title}
                description={lp.tagline}
                icon={lp.icon}
                link={{
                  type: "internal",
                  label: `Read more about the learning path ${lp.title}`,
                  page: `learning-paths/${lp.slug}`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
