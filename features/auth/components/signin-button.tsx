import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import Link from "next/link";

export function SigninButton() {
  return (
    <Button asChild variant="outline">
      <Link href={routes.signin}>Log in</Link>
    </Button>
  );
}
