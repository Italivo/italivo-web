"use server";

import { authClient } from "@/lib/strapi/auth-client";

export async function getUserMe() {
  const user = await authClient.GET("/users/me");
  return user;
}
