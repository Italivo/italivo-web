import { env } from "@/env";

export function getStrapiMedia(url?: string | null) {
  if (!url) return "";
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return new URL(url, env.STRAPI_MEDIA_URL).href;
}
