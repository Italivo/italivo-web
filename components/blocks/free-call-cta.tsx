import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";
import { CalMeetingButton } from "../shared/cal-meeting-button";

type CTASectionProps = {
  background?: "transparent" | "secondary";
};

export function FreeCallCta({ background }: CTASectionProps) {
  return (
    <section className={cn(background === "secondary" && "bg-secondary")}>
      <div className="container-fluid mx-auto px-(--section-padding-x) py-(--section-padding-y) flex flex-col items-center gap-4">
        <h2 className={cn(typography({ variant: "h2", margin: false }))}>
          Ready to learn Italian in a different way?
        </h2>
        <p
          className={cn(
            typography({ variant: "lead", margin: false }),
            "max-w-4xl",
          )}
        >
          Book your free call and start your journey today
        </p>
        <CalMeetingButton calMeetingLink="https://cal.eu/italivointernational/free-intro-call">
          Schedule your free call now
        </CalMeetingButton>
        <p
          className={cn(
            typography({ variant: "small", margin: false }),
            "max-w-4xl",
          )}
        >
          No commitment just a conversation
        </p>
      </div>
    </section>
  );
}
