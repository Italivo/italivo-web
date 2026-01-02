import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";

export function LearningPaths() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={cn(typography({ variant: "h2" }), "text-center")}>
          Find the right path for you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-cream p-8 rounded-lg text-center transition-all duration-250 hover:-translate-y-1 hover:shadow-md">
            <div className="w-16 h-16 mx-auto mb-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z"
                  fill="#2D5A4A"
                />
                <path
                  d="M18 20c0-3.314 2.686-6 6-6s6 2.686 6 6"
                  stroke="#C25B3F"
                  strokeWidth="2"
                />
                <circle cx="24" cy="28" r="4" fill="#C25B3F" />
              </svg>
            </div>
            <h3
              className={cn(
                typography({ variant: "h3", margin: false }),
                "text-green-dark mb-2"
              )}
            >
              Italian Survival
            </h3>
            <p
              className={cn(
                typography({ variant: "small", margin: false }),
                "text-muted-foreground"
              )}
            >
              Essential phrases and functions for basic interactions
            </p>
          </div>
          <div className="bg-cream p-8 rounded-lg text-center transition-all duration-250 hover:-translate-y-1 hover:shadow-md">
            <div className="w-16 h-16 mx-auto mb-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 8l4 8 8 2-6 6 2 8-8-4-8 4 2-8-6-6 8-2z"
                  fill="#C25B3F"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="16"
                  stroke="#2D5A4A"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
            <h3
              className={cn(
                typography({ variant: "h3", margin: false }),
                "text-green-dark mb-2"
              )}
            >
              Italian for Art & Culture
            </h3>
            <p
              className={cn(
                typography({ variant: "small", margin: false }),
                "text-muted-foreground"
              )}
            >
              Explore Italy through art, history and traditions
            </p>
          </div>
          <div className="bg-cream p-8 rounded-lg text-center transition-all duration-250 hover:-translate-y-1 hover:shadow-md">
            <div className="w-16 h-16 mx-auto mb-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8"
                  y="12"
                  width="32"
                  height="24"
                  rx="2"
                  fill="#E8B84A"
                />
                <line
                  x1="8"
                  y1="20"
                  x2="40"
                  y2="20"
                  stroke="#2D5A4A"
                  strokeWidth="2"
                />
                <line
                  x1="8"
                  y1="28"
                  x2="40"
                  y2="28"
                  stroke="#2D5A4A"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3
              className={cn(
                typography({ variant: "h3", margin: false }),
                "text-green-dark mb-2"
              )}
            >
              Fast Conversation Italian
            </h3>
            <p
              className={cn(
                typography({ variant: "small", margin: false }),
                "text-muted-foreground"
              )}
            >
              Unlock your ability to converse naturally
            </p>
          </div>
          <div className="bg-cream p-8 rounded-lg text-center transition-all duration-250 hover:-translate-y-1 hover:shadow-md">
            <div className="w-16 h-16 mx-auto mb-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="10"
                  y="8"
                  width="28"
                  height="32"
                  rx="2"
                  fill="#F5E6D3"
                />
                <path
                  d="M16 16h16M16 24h16M16 32h10"
                  stroke="#C25B3F"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3
              className={cn(
                typography({ variant: "h3", margin: false }),
                "text-green-dark mb-2"
              )}
            >
              Italian for Storytellers
            </h3>
            <p
              className={cn(
                typography({ variant: "small", margin: false }),
                "text-muted-foreground"
              )}
            >
              Small steps lead to big dreams
            </p>
          </div>
          <div className="bg-cream p-8 rounded-lg text-center transition-all duration-250 hover:-translate-y-1 hover:shadow-md">
            <div className="w-16 h-16 mx-auto mb-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="16" r="8" fill="#C25B3F" />
                <path
                  d="M12 40c0-6.627 5.373-12 12-12s12 5.373 12 12"
                  fill="#2D5A4A"
                />
              </svg>
            </div>
            <h3
              className={cn(
                typography({ variant: "h3", margin: false }),
                "text-green-dark mb-2"
              )}
            >
              Italian for Medical & Nursing
            </h3>
            <p
              className={cn(
                typography({ variant: "small", margin: false }),
                "text-muted-foreground"
              )}
            >
              Terminology and communication for healthcare professionals
            </p>
          </div>
          <div className="bg-cream p-8 rounded-lg text-center transition-all duration-250 hover:-translate-y-1 hover:shadow-md">
            <div className="w-16 h-16 mx-auto mb-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="8" fill="#C25B3F" />
                <circle cx="28" cy="28" r="8" fill="#2D5A4A" />
              </svg>
            </div>
            <h3
              className={cn(
                typography({ variant: "h3", margin: false }),
                "text-green-dark mb-2"
              )}
            >
              Italian for Work & Business
            </h3>
            <p
              className={cn(
                typography({ variant: "small", margin: false }),
                "text-muted-foreground"
              )}
            >
              Professional communication and business Italian
            </p>
          </div>
          <div className="bg-cream p-8 rounded-lg text-center transition-all duration-250 hover:-translate-y-1 hover:shadow-md">
            <div className="w-16 h-16 mx-auto mb-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 8l8 16H16l8-16z" fill="#2D5A4A" />
                <path d="M16 28l8 12 8-12H16z" fill="#C25B3F" />
              </svg>
            </div>
            <h3
              className={cn(
                typography({ variant: "h3", margin: false }),
                "text-green-dark mb-2"
              )}
            >
              Exam Preparation
            </h3>
            <p
              className={cn(
                typography({ variant: "small", margin: false }),
                "text-muted-foreground"
              )}
            >
              CILS, CELI, PLIDA and other official certifications
            </p>
          </div>
          <div className="bg-cream p-8 rounded-lg text-center transition-all duration-250 hover:-translate-y-1 hover:shadow-md">
            <div className="w-16 h-16 mx-auto mb-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8"
                  y="16"
                  width="32"
                  height="20"
                  rx="2"
                  fill="#C25B3F"
                />
                <circle cx="24" cy="26" r="6" fill="#F5E6D3" />
              </svg>
            </div>
            <h3
              className={cn(
                typography({ variant: "h3", margin: false }),
                "text-green-dark mb-2"
              )}
            >
              Erasmus Preparation
            </h3>
            <p
              className={cn(
                typography({ variant: "small", margin: false }),
                "text-muted-foreground"
              )}
            >
              Get ready for your Italian adventure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
