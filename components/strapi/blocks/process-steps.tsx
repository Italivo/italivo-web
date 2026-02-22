import { MarkdownRenderer } from "@/components/markdown/markdown-renderer";

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
          <h2 className="txt-h2 text-center italic">{title}</h2>
          {subtitle && (
            <p className="txt-lead m-0 max-w-3xl mx-auto text-center text-muted-foreground">
              {subtitle}
            </p>
          )}
        </header>
        {content && (
          <div className="prose">
            <MarkdownRenderer>{content}</MarkdownRenderer>
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
        <h3 className="txt-h3 m-0 text-olive-700 mb-2">{title}</h3>
        {description && (
          <p className="txt-small m-0 text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}
