import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    STRAPI_URL: z.url(),
    PREVIEW_SECRET: z.string().min(1),
  },
  runtimeEnv: {
    STRAPI_URL: process.env.STRAPI_URL,
    PREVIEW_SECRET: process.env.PREVIEW_SECRET,
  },
});
