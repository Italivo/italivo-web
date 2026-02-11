import { ContactForm } from "./contact-form";
import { Content } from "./content";
import { ContentWithImage } from "./content-with-image";
import { FeatureList } from "./feature-list";
import { Hero } from "./hero";
import { LearningPaths } from "./learning-paths";
import { Packages } from "./packages";
import { ProcessSteps } from "./process-steps";
import { Testimonials } from "./testimonials";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const componentsMap: Record<string, React.ComponentType<any>> = {
  "blocks.hero": Hero,
  "blocks.content": Content,
  "blocks.content-with-image": ContentWithImage,
  "blocks.testimonials": Testimonials,
  "blocks.feature-list": FeatureList,
  "blocks.process-steps": ProcessSteps,
  "blocks.learning-paths": LearningPaths,
  "blocks.packages": Packages,
  "blocks.contact-form": ContactForm,
};

type BlockData = {
  id: string | number;
  __component: string;
  [key: string]: unknown;
};

function isValidBlock(block: unknown): block is BlockData {
  return (
    typeof block === "object" &&
    block !== null &&
    "__component" in block &&
    typeof block.__component === "string" &&
    "id" in block
  );
}

export function BlocksRenderer({ blocks }: { blocks: unknown[] }) {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  return (
    <>
      {blocks.map((block, index) => {
        if (!isValidBlock(block)) {
          if (process.env.NODE_ENV === "development") {
            console.warn("Invalid block structure at index", index, block);
          }
          return null;
        }

        const { id, __component: component, ...componentProps } = block;

        const Component =
          componentsMap[component as keyof typeof componentsMap];

        if (!Component) {
          if (process.env.NODE_ENV === "development") {
            console.warn(
              `Block type "${component}" not found in componentsMap`,
            );
          }
          return null;
        }

        return (
          <Component key={`${index}-${component}-${id}`} {...componentProps} />
        );
      })}
    </>
  );
}
