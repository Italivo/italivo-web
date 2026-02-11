export const routes = {
  home: "/",
  signin: "/signin",
  signup: "/signup",
  learningPaths: {
    index: "/learning-paths",
    bySlug: (slug: string) => `/learning-paths/${slug}`,
  },
  method: "/method",
  about: "/about",
  packages: {
    index: "/packages",
    bySlug: (slug: string) => `/packages/${slug}`,
  },
  contact: "/contact",
} as const;
