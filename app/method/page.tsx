"use client";

import { FreeCallCta } from "@/components/blocks/free-call-cta";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";
import Image from "next/image";

// Learning paths data
const learningPaths = [
  {
    title: "Italian Art & Culture",
    icon: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=100&q=80",
  },
  {
    title: "Italian for Cinema",
    icon: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=100&q=80",
  },
  {
    title: "Italian for Cuisine",
    icon: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&q=80",
  },
  {
    title: "Italian for Music",
    icon: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&q=80",
  },
  {
    title: "Italian for Healthcare",
    icon: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=100&q=80",
  },
  {
    title: "Italian for Business",
    icon: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&q=80",
  },
];

export default function MethodPage() {
  // Duplicate learning paths for seamless infinite scroll
  const duplicatedPaths = [...learningPaths, ...learningPaths, ...learningPaths];

  return (
    <main>
      <style jsx global>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll-horizontal 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Block 1: Hero Section */}
      <header
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className={cn(typography({ variant: "display" }))}>
              OUR METHOD
            </h1>
            <p className={cn(typography({ variant: "lead", margin: false }))}>
              A personalized, culture-driven approach to learning italian online
            </p>
          </div>
        </div>
      </header>

      {/* Block 2: We Start From Your Needs */}
      <section className="bg-background">
        <div className="container-fluid mx-auto px-(--section-padding-x) py-(--section-padding-y)">
          <h2 className={cn(typography({ variant: "h2" }), "text-center mb-8")}>
            WE START FROM YOUR NEEDS
          </h2>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className={cn(typography({ variant: "h3" }), "italic mb-4")}>
              Learn Italian in the context that matters to you.
            </h3>
            <p className={cn(typography({ variant: "body" }))}>
              Whether you&apos;re passionate about art, exploring Italian cuisine,
              navigating healthcare, or handling daily bureaucracy—we create
              personalized learning paths tailored to your specific needs.
            </p>
            <p className={cn(typography({ variant: "body", margin: false }))}>
              Language and real-life context learned together, making every
              lesson immediately useful and naturally memorable.
            </p>
          </div>

          {/* Horizontal Ticker */}
          <div className="relative overflow-hidden py-8">
            <div className="flex gap-12 animate-scroll">
              {duplicatedPaths.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center shrink-0 w-32"
                >
                  <div className="w-20 h-20 mb-3 relative">
                    <Image
                      src={item.icon}
                      alt=""
                      fill
                      className="object-cover rounded-lg"
                      sizes="80px"
                      aria-hidden
                    />
                  </div>
                  <p className={cn(typography({ variant: "small", margin: false }), "text-center font-semibold")}>
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Personalized Lessons */}
      <section className="bg-secondary">
        <div className="container-fluid mx-auto px-(--section-padding-x) py-(--section-padding-y) flex flex-col gap-(--section-padding-y)">
          <div>
            <h2
              className={cn(
                typography({ variant: "h2", margin: true }),
                "text-center"
              )}
            >
              Personalized Lessons, Not Standard Courses
            </h2>
            <p
              className={cn(
                typography({ variant: "lead", margin: false }),
                "max-w-4xl mx-auto text-center"
              )}
            >
              We tailor every lesson to match your unique learning profile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full font-sans font-semibold text-base text-white bg-accent">
                1
              </span>
              <div>
                <h3
                  className={cn(
                    typography({ variant: "h3", margin: false }),
                    "text-olive-700 mb-2"
                  )}
                >
                  Your Level
                </h3>
                <p
                  className={cn(
                    typography({ variant: "small", margin: false }),
                    "text-muted-foreground"
                  )}
                >
                  We assess your current proficiency and build from there, ensuring you&apos;re always challenged but never overwhelmed.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full font-sans font-semibold text-base text-white bg-accent">
                2
              </span>
              <div>
                <h3
                  className={cn(
                    typography({ variant: "h3", margin: false }),
                    "text-olive-700 mb-2"
                  )}
                >
                  Your Goals
                </h3>
                <p
                  className={cn(
                    typography({ variant: "small", margin: false }),
                    "text-muted-foreground"
                  )}
                >
                  Whether you&apos;re preparing for a trip, advancing your career, or exploring Italian culture—your objectives shape the curriculum.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full font-sans font-semibold text-base text-white bg-accent">
                3
              </span>
              <div>
                <h3
                  className={cn(
                    typography({ variant: "h3", margin: false }),
                    "text-olive-700 mb-2"
                  )}
                >
                  Your Interests
                </h3>
                <p
                  className={cn(
                    typography({ variant: "small", margin: false }),
                    "text-muted-foreground"
                  )}
                >
                  Learn through topics you love—art, food, cinema, music, or whatever ignites your passion for Italian culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 4: How to Get Started */}
      <section className="bg-background">
        <div className="container-fluid mx-auto px-(--section-padding-x) py-(--section-padding-y) flex flex-col gap-(--section-padding-y)">
          <div>
            <h2
              className={cn(
                typography({ variant: "h2", margin: true }),
                "text-center italic"
              )}
            >
              HOW TO GET STARTED
            </h2>
            <p
              className={cn(
                typography({ variant: "lead", margin: false }),
                "max-w-3xl mx-auto text-center text-muted-foreground"
              )}
            >
              Five simple steps from first call to confident Italian speaker
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block" />

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="relative flex gap-6">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full font-sans font-semibold text-base bg-accent text-white relative z-10">
                  1
                </div>
                <div className="flex-1">
                  <h3
                    className={cn(
                      typography({ variant: "h3", margin: false }),
                      "text-olive-700 mb-2"
                    )}
                  >
                    Book Your Free Call
                  </h3>
                  <p
                    className={cn(
                      typography({ variant: "small", margin: false }),
                      "text-muted-foreground"
                    )}
                  >
                    Schedule a no-obligation 30-minute conversation with one of
                    our expert teachers to explore how we can help you.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex gap-6">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full font-sans font-semibold text-base bg-accent text-white relative z-10">
                  2
                </div>
                <div className="flex-1">
                  <h3
                    className={cn(
                      typography({ variant: "h3", margin: false }),
                      "text-olive-700 mb-2"
                    )}
                  >
                    Discuss Your Goals & Level
                  </h3>
                  <p
                    className={cn(
                      typography({ variant: "small", margin: false }),
                      "text-muted-foreground"
                    )}
                  >
                    Share your objectives and we&apos;ll assess your current Italian
                    proficiency to understand where you are and where you want to
                    go.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-6">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full font-sans font-semibold text-base bg-accent text-white relative z-10">
                  3
                </div>
                <div className="flex-1">
                  <h3
                    className={cn(
                      typography({ variant: "h3", margin: false }),
                      "text-olive-700 mb-2"
                    )}
                  >
                    Choose Your Learning Path
                  </h3>
                  <p
                    className={cn(
                      typography({ variant: "small", margin: false }),
                      "text-muted-foreground"
                    )}
                  >
                    Select the personalized program that fits your schedule,
                    budget, and learning style—whether it&apos;s intensive or casual.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex gap-6">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full font-sans font-semibold text-base bg-accent text-white relative z-10">
                  4
                </div>
                <div className="flex-1">
                  <h3
                    className={cn(
                      typography({ variant: "h3", margin: false }),
                      "text-olive-700 mb-2"
                    )}
                  >
                    Create Your Custom Plan
                  </h3>
                  <p
                    className={cn(
                      typography({ variant: "small", margin: false }),
                      "text-muted-foreground"
                    )}
                  >
                    We&apos;ll design a tailored curriculum based on your interests,
                    goals, and the real-life contexts you care about.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex gap-6">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full font-sans font-semibold text-base bg-accent text-white relative z-10">
                  5
                </div>
                <div className="flex-1">
                  <h3
                    className={cn(
                      typography({ variant: "h3", margin: false }),
                      "text-olive-700 mb-2"
                    )}
                  >
                    Start Learning
                  </h3>
                  <p
                    className={cn(
                      typography({ variant: "small", margin: false }),
                      "text-muted-foreground"
                    )}
                  >
                    Begin your journey with engaging, context-based lessons that
                    make Italian immediately useful and naturally memorable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 5: Final CTA */}
      <FreeCallCta background="secondary" />
    </main>
  );
}
