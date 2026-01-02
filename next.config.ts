import { env } from "@/env";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `frame-ancestors 'self' ${env.STRAPI_URL}`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
