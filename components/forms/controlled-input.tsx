"use client";

import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type ControlledInputProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
  description?: string;
} & Omit<
  React.ComponentProps<typeof Input>,
  keyof ControllerRenderProps | "id" | "aria-invalid"
>;

export function ControlledInput<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  description,
  ...inputProps
}: ControlledInputProps<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          {label && <FieldLabel htmlFor={field.name}>{label}</FieldLabel>}
          <Input
            {...inputProps}
            {...field}
            id={field.name}
            aria-invalid={fieldState.invalid}
          />
          {description && <FieldDescription>{description}</FieldDescription>}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
