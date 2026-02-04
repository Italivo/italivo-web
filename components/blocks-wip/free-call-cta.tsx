import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";
import { CalMeetingButton } from "../shared/cal-meeting-button";

type CTASectionProps = {
  background?: "transparent" | "secondary";
  title: string;
  subtitle?: string;
  buttonText: string;
  disclaimer?: string;
};

export function FreeCallCta({
  background,
  title,
  subtitle,
  buttonText,
  disclaimer,
}: CTASectionProps) {
  return (
    <section className={cn(background === "secondary" && "bg-secondary")}>
      <div className="container-fluid mx-auto px-(--section-padding-x) py-(--section-padding-y) flex flex-col items-center gap-4">
        <h2 className={cn(typography({ variant: "h2", margin: false }))}>
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              typography({ variant: "lead", margin: false }),
              "max-w-4xl",
            )}
          >
            {subtitle}
          </p>
        )}
        <CalMeetingButton calMeetingLink="https://cal.eu/italivointernational/free-intro-call">
          {buttonText}
        </CalMeetingButton>
        <p
          className={cn(
            typography({ variant: "small", margin: false }),
            "max-w-4xl",
          )}
        >
          {disclaimer}
        </p>
      </div>
    </section>
  );
}
