export const routes = {
  home: "/",
  signin: "/signin",
  signup: "/signup",
  learningPaths: {
    index: "/learning-paths",
    bySlug: (slug: string) => `/learning-paths/${slug}`,
  },
} as const;
