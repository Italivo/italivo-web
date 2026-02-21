"use client";
import { ControlledInput } from "@/components/forms/controlled-input";
import { FieldError, FieldGroup } from "@/components/ui/field";
import Link from "next/link";
import { useSigninForm } from "../hooks/use-signin-form";
import { SigninFieldValues } from "../schema";

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
import { signinUser, signinUserState } from "../actions/signin";

export function SigninForm() {
  const [isPending, startTransition] = useTransition();
  const [serverState, formAction] = useActionState<signinUserState, FormData>(
    signinUser,
    { status: "idle" },
  );
  const form = useSigninForm();

  const onSubmit = (values: SigninFieldValues) => {
    startTransition(() => {
      const formData = new FormData();
      formData.set("identifier", values.identifier);
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
          <CardHeader className="space-y-1">
            <CardTitle className="txt-h3">Sign In</CardTitle>
            <CardDescription>
              Enter your details to sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form id="signinForm" onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup>
                <ControlledInput
                  name="identifier"
                  control={form.control}
                  type="text"
                  placeholder="username or email"
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
              form="signinForm"
              disabled={isPending}
              className="w-full"
            >
              Sign In
            </Button>
          </CardFooter>
        </Card>
        <div className="txt-small mt-4 text-center">
          Don&apos;t have an account?
          <Link className="ml-2" href="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
