import { getUserMe } from "@/features/auth/queries/get-user-me";
import { routes } from "@/lib/routes";
import { redirect } from "next/navigation";

export async function requireAuth() {
  const { data, error } = await getUserMe();
  if (error || !data) redirect(routes.signin);
  return data;
}
