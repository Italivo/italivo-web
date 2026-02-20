"use client";
import { ControlledInput } from "@/components/forms/controlled-input";
import { FieldError, FieldGroup } from "@/components/ui/field";
import Link from "next/link";
import { useSignupForm } from "../hooks/use-signup-form";
import { RegisterUserFieldValues } from "../schema";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import { redirect } from "next/navigation";
import { useActionState, useEffect, useTransition } from "react";
import { registerUser, RegisterUserState } from "../actions/register-user";

export function SignupForm() {
  const [isPending, startTransition] = useTransition();
  const [serverState, formAction] = useActionState<RegisterUserState, FormData>(
    registerUser,
    { status: "idle" },
  );
  const form = useSignupForm();

  const onSubmit = (values: RegisterUserFieldValues) => {
    console.log("FE Validation Success");
    startTransition(() => {
      const formData = new FormData();
      formData.set("username", values.username);
      formData.set("email", values.email);
      formData.set("password", values.password);
      formAction(formData);
    });
  };

  useEffect(() => {
    if (serverState.status === "success") {
      redirect(routes.home); // TODO: redirect to Profile
    }
  }, [serverState]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md px-4">
        <Card>
          <CardHeader>
            <CardTitle className="txt-h3">Sign Up</CardTitle>
            <CardDescription>
              Enter your details to create a new account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form id="signupForm" onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup>
                <ControlledInput
                  name="username"
                  control={form.control}
                  placeholder="username"
                  label="Username"
                />
                <ControlledInput
                  name="email"
                  control={form.control}
                  type="email"
                  placeholder="name@example.com"
                  label="Email"
                />
                <ControlledInput
                  name="password"
                  control={form.control}
                  type="password"
                  placeholder="password"
                  label="Password"
                />
              </FieldGroup>
              {serverState.status === "error" && serverState.message && (
                <FieldError errors={[serverState]} />
              )}
            </form>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              form="signupForm"
              disabled={isPending}
              className="w-full"
            >
              Sign Up
            </Button>
          </CardFooter>
        </Card>
        <div className="txt-small mt-4 text-center">
          Have an account?
          <Link className="ml-2" href="/signin">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
