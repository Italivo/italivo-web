import { env } from "@/env";
import { draftMode } from "next/headers";
import createClient, { Middleware } from "openapi-fetch";
import qs from "qs";
import type { paths } from "./types";

export const client = createClient<paths>({
  baseUrl: new URL("/api", env.STRAPI_URL).href,
  headers: {
    Accept: "application/json",
  },
  querySerializer: (params) => {
    return qs.stringify(params, {
      encodeValuesOnly: true,
      arrayFormat: "indices",
    });
  },
});

const draftPreviewMiddleware: Middleware = {
  async onRequest({ request }) {
    const { isEnabled: isDraftMode } = await draftMode();
    if (isDraftMode) {
      const url = new URL(request.url);
      url.searchParams.set("status", "draft");
      return new Request(url, request);
    }
    return request;
  },
};

client.use(draftPreviewMiddleware);
