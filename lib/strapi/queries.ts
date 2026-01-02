import "server-only";
import { client } from "./client";

export async function getHomepageData() {
  return await client.GET("/home-page", {
    params: {
      query: {
        populate: {
          //@ts-expect-error Strapi typing mismatch for blocks.populate
          blocks: {
            populate: "*",
            on: {
              "blocks.hero": {
                populate: {
                  backgroundImage: true,
                  cta: {
                    populate: {
                      link: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
}
