// Type-safe block definitions matching Strapi component names

export interface BaseBlock {
  id: number;
  __component: string;
}

export interface HeroBlock extends BaseBlock {
  __component: "blocks.hero";
  title: string;
  subtitle: string;
  backgroundImage?: {
    url: string;
    alternativeText?: string;
  };
  ctaText?: string;
  ctaLink?: string;
}

export interface AboutBlock extends BaseBlock {
  __component: "blocks.about";
  title: string;
  content: string;
}

export interface MethodBlock extends BaseBlock {
  __component: "blocks.method";
  title: string;
  description: string;
}

export interface LearningPathsBlock extends BaseBlock {
  __component: "blocks.learning-paths";
  title: string;
  paths: unknown[];
}

export interface FeaturesBlock extends BaseBlock {
  __component: "blocks.features";
  title: string;
  features: unknown[];
}

export interface PackagesBlock extends BaseBlock {
  __component: "blocks.packages";
  title: string;
  packages: unknown[];
}

export interface TestimonialsBlock extends BaseBlock {
  __component: "blocks.testimonials";
  title: string;
  testimonials: unknown[];
}

export interface CtaSectionBlock extends BaseBlock {
  __component: "blocks.cta-section";
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
}

export type Block =
  | HeroBlock
  | AboutBlock
  | MethodBlock
  | LearningPathsBlock
  | FeaturesBlock
  | PackagesBlock
  | TestimonialsBlock
  | CtaSectionBlock;

// Type guard to check if block is valid
export function isValidBlock(block: unknown): block is Block {
  return (
    typeof block === "object" &&
    block !== null &&
    "__component" in block &&
    "id" in block
  );
}
