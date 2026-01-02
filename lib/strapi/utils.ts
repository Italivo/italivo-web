import { env } from "@/env";

export function getStrapiMedia(url?: string | null) {
  if (!url) return url;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return new URL(url, env.STRAPI_URL).href;
}
