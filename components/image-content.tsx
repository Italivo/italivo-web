import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface ImageContentProps {
  imagePositionMobile?: "top" | "bottom";
  imagePositionDesktop?: "left" | "right";
  imageSrc: string | StaticImageData;
  imageAlt: string;
  content: ReactNode;
  backgroundColor?: "default" | "cream";
}

export function ImageContent({
  imagePositionMobile = "top",
  imagePositionDesktop = "right",
  imageSrc,
  imageAlt,
  backgroundColor = "default",
  content,
}: ImageContentProps) {
  return (
    <div
      className={cn(
        "w-full max-w-7xl mx-auto px-6",
        backgroundColor === "cream" && "bg-card"
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image */}
        <div
          className={cn(
            "relative w-full aspect-video md:aspect-square",
            imagePositionMobile === "top" ? "max-md:order-1" : "max-md:order-2",
            imagePositionDesktop === "right" ? "md:order-2" : "md:order-1"
          )}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
        {/* Content */}
        <div
          className={cn(
            imagePositionMobile === "top" ? "max-md:order-2" : "max-md:order-1",
            imagePositionDesktop === "right" ? "md:order-1" : "md:order-2"
          )}
        >
          {content}
        </div>
      </div>
    </div>
  );
}
