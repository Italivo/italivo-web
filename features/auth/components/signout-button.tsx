"use client";

import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import { redirect } from "next/navigation";
import { useActionState, useEffect } from "react";
import { logout, LogoutState } from "../actions/logout";

type SignoutButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  "type" | "children"
>;

export function SignoutButton({
  variant = "destructive",
  ...props
}: SignoutButtonProps) {
  const [actionState, dispatchLogout, isPending] = useActionState<LogoutState>(
    logout,
    {
      status: "idle",
    },
  );

  useEffect(() => {
    if (actionState.status === "success") {
      redirect(routes.signin);
    }
  }, [actionState]);

  return (
    <form action={dispatchLogout}>
      <Button type="submit" variant={variant} {...props} disabled={isPending}>
        Log Out
      </Button>
    </form>
  );
}
