import { env } from "@/env";
import type { paths } from "@/lib/strapi/types.generated";
import { cookies } from "next/headers";
import createClient, { Middleware } from "openapi-fetch";
import qs from "qs";

export const authClient = createClient<paths>({
  baseUrl: new URL("/api", env.STRAPI_URL).href,
  headers: { Accept: "application/json" },
  querySerializer: (params) =>
    qs.stringify(params, { encodeValuesOnly: true, arrayFormat: "indices" }),
});

const authMiddleware: Middleware = {
  async onRequest({ request }) {
    const token = (await cookies()).get("jwt")?.value;
    if (token) request.headers.set("Authorization", `Bearer ${token}`);
    return request;
  },
};

authClient.use(authMiddleware);
