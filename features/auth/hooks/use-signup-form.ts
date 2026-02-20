"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterUserFieldValues, registerUserSchema } from "../schema";

export function useSignupForm() {
  return useForm<RegisterUserFieldValues>({
    resolver: zodResolver(registerUserSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
}
