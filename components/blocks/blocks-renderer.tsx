import { Hero } from "@/components/blocks/hero";
import { IconCards } from "./icon-cards";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const componentsMap: Record<string, React.ComponentType<any>> = {
  "blocks.hero": Hero,
  "blocks.icon-cards": IconCards,
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
              `Block type "${component}" not found in componentsMap`
            );
          }
          return null;
        }

        return <Component key={id} {...componentProps} />;
      })}
    </>
  );
}
