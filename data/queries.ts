import "server-only";
import { client } from "./client";

const BLOCKS_POPULATE = {
  blocks: {
    on: {
      "blocks.hero": {
        populate: {
          imageMobile: true,
          imageDesktop: true,
          buttonLink: {
            populate: {
              link: true,
            },
          },
        },
      },
      "blocks.content": {
        populate: {
          buttonLink: {
            populate: {
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
      "blocks.process-steps": {
        populate: {
          steps: true,
        },
      },
      "blocks.learning-paths": true,
      "blocks.packages": true,
    },
  },
} as const;

export async function getHomepageData() {
  return await client.GET("/home-page", {
    params: {
      query: {
        //@ts-expect-error Strapi typing mismatch for blocks.populate
        populate: {
          ...BLOCKS_POPULATE,
        },
      },
    },
  });
}

export async function getPackagesPageData() {
  return await client.GET("/packages-page", {
    params: {
      query: {
        //@ts-expect-error Strapi typing mismatch for blocks.populate
        populate: {
          ...BLOCKS_POPULATE,
        },
      },
    },
  });
}

export async function getMethodPageData() {
  return await client.GET("/method-page", {
    params: {
      query: {
        //@ts-expect-error Strapi typing mismatch for blocks.populate
        populate: {
          ...BLOCKS_POPULATE,
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
        populate: ["package_category"],
      },
    },
  });
}
