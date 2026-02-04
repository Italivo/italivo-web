import "server-only";
import { client } from "./client";

export async function getHomepageData() {
  return await client.GET("/home-page", {
    params: {
      query: {
        populate: {
          //@ts-expect-error Strapi typing mismatch for blocks.populate
          blocks: {
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
              "blocks.icon-cards": {
                populate: {
                  iconCards: {
                    populate: {
                      icon: true,
                      link: true,
                    },
                  },
                },
              },
              "blocks.content-with-image": {
                populate: {
                  image: true,
                },
              },
              "blocks.testimonials": true,
              "blocks.feature-list": {
                populate: {
                  image: true,
                  features: true,
                },
              },
              "blocks.learning-paths": true,
              "blocks.packages": true,
            },
          },
        },
      },
    },
  });
}

export async function getTestimonials() {
  return await client.GET("/testimonials", {
    params: {
      query: {
        populate: ["avatar"],
      },
    },
  });
}

export async function getLearningPaths() {
  return await client.GET("/learning-paths", {
    params: {
      query: {
        populate: ["icon", "image"],
      },
    },
  });
}

export async function getLearningPathBySlug(slug: string) {
  return await client.GET("/learning-paths", {
    params: {
      query: {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        populate: ["icon", "image"],
      },
    },
  });
}

export async function getPackageCategories() {
  return await client.GET("/package-categories", {
    params: {
      query: {
        populate: ["packages"],
        sort: ["order"],
      },
    },
  });
}

export async function getPackages() {
  return await client.GET("/packages");
}

export async function getPackageBySlug(slug: string) {
  return await client.GET("/packages", {
    params: {
      query: {
        filters: {
          slug: {
            $eq: slug,
          },
        },
      },
    },
  });
}
