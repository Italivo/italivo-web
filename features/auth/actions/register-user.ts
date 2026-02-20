"use server";
import { client } from "@/lib/strapi/client";
import { cookies } from "next/headers";
import { registerUserSchema } from "../schema";

export type RegisterUserState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function registerUser(
  prevState: RegisterUserState,
  formData: FormData,
): Promise<RegisterUserState> {
  const result = registerUserSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    return { status: "error", message: "Invalid form data" };
  }

  const { data, error } = await client.POST("/auth/local/register", {
    body: result.data,
  });

  if (error) {
    const message =
      (error as { error?: { message?: string } })?.error?.message ??
      "Something went wrong";
    return { status: "error", message };
  }

  if (!data || !("jwt" in data)) {
    return { status: "error", message: "Something went wrong" };
  }

  const cookieStore = await cookies();
  cookieStore.set("jwt", data.jwt, {
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return { status: "success" };
}
