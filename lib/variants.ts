import { cva } from "class-variance-authority";

export const typography = cva("", {
  variants: {
    variant: {
      display:
        "font-serif font-normal text-4xl md:text-5xl leading-tight italic",
      h1: "font-serif font-normal text-3xl md:text-4xl leading-tight italic",
      h2: "font-serif font-normal text-3xl md:text-4xl leading-tight italic",
      h3: "font-sans text-base font-semibold",
      body: "font-sans text-base leading-relaxed",
      lead: "font-sans text-lg leading-relaxed",
      label: "font-sans text-lg font-medium",
      small: "font-sans text-sm",
      caption: "font-sans text-xs",
      overline: "font-sans text-xs font-semibold uppercase tracking-wide",
    },
    margin: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    { variant: "display", margin: true, class: "mb-8 md:mb-10 lg:mb-12" },
    { variant: "h1", margin: true, class: "mb-6 md:mb-8" },
    { variant: "h2", margin: true, class: "mb-4 md:mb-5" },
    { variant: "h3", margin: true, class: "mb-3" },
    { variant: "body", margin: true, class: "mb-4" },
    { variant: "lead", margin: true, class: "mb-5 md:mb-6" },
    { variant: "label", margin: true, class: "mb-2" },
    { variant: "small", margin: true, class: "mb-2" },
    { variant: "caption", margin: true, class: "mb-1" },
    { variant: "overline", margin: true, class: "mb-2" },
  ],
  defaultVariants: {
    variant: "body",
    margin: true,
  },
});
