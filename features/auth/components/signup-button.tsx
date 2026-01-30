import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import Link from "next/link";

export function SignupButton() {
  return (
    <Button asChild>
      <Link href={routes.signup}>Sign up</Link>
    </Button>
  );
}
