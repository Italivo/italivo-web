import { env } from "@/env";

export interface StrapiImage {
  /** Format: uuid */
  documentId: string;
  id: string | number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: unknown;
  hash: string;
  ext?: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: unknown;
  createdAt?: string;
  updatedAt?: string;
  /** @default 2026-02-05T21:56:14.457Z */
  publishedAt: string;
  related: unknown;
}

export type StrapiMedia = StrapiImage;

function toAbsoluteUrl(url?: string) {
  if (!url) return "";
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return new URL(url, env.STRAPI_MEDIA_URL).href;
}

export function getStrapiMediaUrl(media: StrapiMedia) {
  return toAbsoluteUrl(media.url);
}

export function getStrapiImageUrl(
  image: StrapiImage,
  format?: "large" | "medium" | "small" | "thumbnail",
): string {
  if (!format) return getStrapiMediaUrl(image);

  const formats = image.formats as Record<string, { url: string }> | undefined;
  const formatUrl = formats?.[format]?.url;

  return formatUrl ? toAbsoluteUrl(formatUrl) : getStrapiMediaUrl(image);
}
