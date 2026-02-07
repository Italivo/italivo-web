import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";
import { Markdown } from "../fields/markdown";

type ProcessStepsProps = {
  title: string;
  subtitle?: string;
  content?: string;
  steps?: { title: string; description?: string }[];
  background?: "transparent" | "secondary";
};

export function ProcessSteps({
  title,
  subtitle,
  content,
  steps,
}: ProcessStepsProps) {
  return (
    <section className="bg-background">
      <div className="container-fluid mx-auto px-(--section-padding-x) py-(--section-padding-y) flex flex-col gap-(--section-padding-y)">
        <header>
          <h2
            className={cn(
              typography({ variant: "h2", margin: true }),
              "text-center italic",
            )}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={cn(
                typography({ variant: "lead", margin: false }),
                "max-w-3xl mx-auto text-center text-muted-foreground",
              )}
            >
              {subtitle}
            </p>
          )}
        </header>
        {content && (
          <div>
            <Markdown markdown={content} />
          </div>
        )}

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line - centered on numbered circles */}
          <div className="absolute left-[19px] top-5 bottom-5 w-0.5 bg-accent/30" />

          {steps && steps.length > 0 && (
            <div className="space-y-8">
              {steps.map((step, index) => (
                <ProcessStep
                  key={index}
                  title={step.title}
                  description={step.description}
                  stepNum={index + 1}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

type ProcessStepProps = React.ComponentProps<"div"> & {
  title: string;
  description?: string;
  stepNum: number;
};

function ProcessStep({
  title,
  description,
  stepNum,
  ...props
}: ProcessStepProps) {
  return (
    <div className="relative flex gap-6" {...props}>
      <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full font-sans font-semibold text-base bg-accent text-white">
        {stepNum}
      </div>
      <div className="flex-1">
        <h3
          className={cn(
            typography({ variant: "h3", margin: false }),
            "text-olive-700 mb-2",
          )}
        >
          {title}
        </h3>
        {description && (
          <p
            className={cn(
              typography({ variant: "small", margin: false }),
              "text-muted-foreground",
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
