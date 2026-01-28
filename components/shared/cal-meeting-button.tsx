import { Button } from "@/components/ui/button";

type BookCallButton = React.ComponentProps<typeof Button> & {
  calMeetingLink: string;
};

export function CalMeetingButton({
  calMeetingLink,
  children,
  variant = "accent",
  size = "lg",
  ...props
}: BookCallButton) {
  return (
    <Button asChild variant={variant} size={size} {...props}>
      <a href={calMeetingLink} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
}
