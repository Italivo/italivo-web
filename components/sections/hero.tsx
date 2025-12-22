import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";

export function Hero() {
  return (
    <header className="relative w-full h-screen bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=700&fit=crop&crop=face')] bg-cover bg-top">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-background">
          <h1 className={cn(typography({ variant: "display" }))}>
            Learn Italian by Living It
          </h1>
          <p className={cn(typography({ variant: "lead" }))}>
            At Italivo, we don&apos;t just teach italian &mdash; we nep you
            experience it.
          </p>
          <a
            href="mailto:hello@italivo.com"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-rust text-white rounded-lg transition-all duration-250 hover:bg-rust-dark hover:-translate-y-0.5 hover:shadow-md"
          >
            Book your free trial lesson
          </a>
        </div>
      </div>
    </header>
  );
}
