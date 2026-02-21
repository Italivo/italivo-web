"use server";

import { cookies } from "next/headers";

export type LogoutState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function logout(_prevState: LogoutState): Promise<LogoutState> {
  (await cookies()).delete("jwt");
  return {
    status: "success",
  };
}
