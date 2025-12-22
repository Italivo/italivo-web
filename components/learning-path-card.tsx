import { typography } from "@/lib/variants";
import Image from "next/image";

interface LearningPathCardProps {
  title: string;
  description: string;
  iconSrc: string;
}

export function LearningPathCard({
  title,
  description,
  iconSrc,
}: LearningPathCardProps) {
  return (
    <div className="bg-cream p-8 rounded-2xl text-center transition-all duration-250 ease-in-out hover:-translate-y-1 hover:shadow-md">
      <div className="w-16 h-16 mx-auto mb-4 relative" aria-hidden="true">
        <Image
          src={iconSrc}
          alt=""
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
      <h3
        className={`${typography({
          variant: "h3",
          margin: false,
        })} text-green-dark mb-2`}
      >
        {title}
      </h3>
      <p
        className={`${typography({
          variant: "small",
          margin: false,
        })} text-text-light`}
      >
        {description}
      </p>
    </div>
  );
}
