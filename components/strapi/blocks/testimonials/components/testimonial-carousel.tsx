"use client";

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type TestimonialCarouselProps = {
  children: React.ReactNode;
};

export function TestimonialCarousel({ children }: TestimonialCarouselProps) {
  if (!Array.isArray(children)) return null;

  return (
    <Carousel
      className="w-full mb-8"
      orientation="horizontal"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="-ml-4">
        {children.map((child, index) => (
          <CarouselItem
            key={index}
            className="basis-full sm:basis-1/2 md:basis-1/3 pl-4"
          >
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="max-lg:hidden" />
      <CarouselNext className="max-lg:hidden" />
      <CarouselDots className="absolute -bottom-8 left-1/2 -translate-x-1/2" />
    </Carousel>
  );
}
