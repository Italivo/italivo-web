"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SigninFieldValues, signinSchema } from "../schema";

export function useSigninForm() {
  return useForm<SigninFieldValues>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });
}
