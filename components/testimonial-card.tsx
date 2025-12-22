import Image, { StaticImageData } from "next/image";

interface TestimonialCardProps {
  name: string;
  servicePackage: string;
  quote: string;
  imageSrc: string | StaticImageData;
}

export function TestimonialCard({
  quote,
  imageSrc,
  name,
  servicePackage,
}: TestimonialCardProps) {
  return (
    <div className="bg-background p-12 rounded-2xl shadow-sm">
      <p className="italic text-base text-foreground mb-8 leading-relaxed">
        &lquot;{quote}&rquot;
      </p>
      <div className="flex items-center gap-4">
        <Image
          src={imageSrc}
          alt={name}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <strong className="block text-sm">{name}</strong>
          <span className="text-xs text-muted-foreground">
            {servicePackage}
          </span>
        </div>
      </div>
    </div>
  );
}
