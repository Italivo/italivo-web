import heroImage from "@/assets/images/hero.jpeg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";
import Image from "next/image";

export function Hero() {
  return (
    <header className="">
      <div className="relative w-full h-screen">
        <Image
          src={heroImage}
          alt="Happy Italian student"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-background">
            <h1 className={cn(typography({ variant: "display" }))}>
              Learn Italian by Living It
            </h1>
            <p className={cn(typography({ variant: "lead" }))}>
              At Italivo, we don&apos;t just teach italian &mdash; we nep you
              experience it.
            </p>
            <Button>Book your free Trial Lesson</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
