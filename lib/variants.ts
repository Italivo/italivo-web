import { cva } from "class-variance-authority";

export const typography = cva("", {
  variants: {
    variant: {
      // Headings (Serif - Playfair Display)
      display:
        "font-serif font-normal text-4xl md:text-5xl lg:text-6xl leading-tight",
      h1: "font-serif font-normal text-4xl md:text-5xl leading-tight",
      h2: "font-serif font-normal text-3xl md:text-4xl leading-tight italic",
      h3: "font-serif font-bold text-xl leading-tight",

      // Body Text (Sans - Inter)
      body: "font-sans text-base leading-relaxed",
      lead: "font-sans text-lg leading-relaxed",
      small: "font-sans text-sm leading-normal",

      // UI Elements (Sans - Inter)
      label: "font-sans text-sm font-medium",
      caption: "font-sans text-xs",
      overline: "font-sans text-xs font-semibold uppercase tracking-wide",
    },
    margin: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    // Heading margins
    { variant: "display", margin: true, class: "mb-8 md:mb-10 lg:mb-12" },
    { variant: "h1", margin: true, class: "mb-6 md:mb-8" },
    { variant: "h2", margin: true, class: "mb-6" },
    { variant: "h3", margin: true, class: "mb-4" },

    // Body text margins
    { variant: "body", margin: true, class: "mb-4" },
    { variant: "lead", margin: true, class: "mb-6" },
    { variant: "small", margin: true, class: "mb-3" },

    // UI margins
    { variant: "label", margin: true, class: "mb-2" },
    { variant: "caption", margin: true, class: "mb-1" },
    { variant: "overline", margin: true, class: "mb-2" },
  ],
  defaultVariants: {
    variant: "body",
    margin: true,
  },
});
