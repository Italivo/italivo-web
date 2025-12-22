import { typography } from "@/lib/variants";
import Image from "next/image";

import ArtCultureIcon from "@/assets/icons/art-culture.svg";
import BusinessIcon from "@/assets/icons/business.svg";
import ConversationIcon from "@/assets/icons/conversation.svg";
import ErasmusIcon from "@/assets/icons/erasmus.svg";
import ExamIcon from "@/assets/icons/exam.svg";
import MedicalIcon from "@/assets/icons/medical.svg";
import StorytellingIcon from "@/assets/icons/storytelling.svg";
import SurvivalIcon from "@/assets/icons/survival.svg";

const learningPaths = [
  {
    icon: SurvivalIcon,
    title: "Italian Survival",
    description: "Essential phrases and functions for basic interactions",
  },
  {
    icon: ArtCultureIcon,
    title: "Italian for Art & Culture",
    description: "Explore Italy through art, history and traditions",
  },
  {
    icon: ConversationIcon,
    title: "Fast Conversation Italian",
    description: "Unlock your ability to converse naturally",
  },
  {
    icon: StorytellingIcon,
    title: "Italian for Storytellers",
    description: "Small steps lead to big dreams",
  },
  {
    icon: MedicalIcon,
    title: "Italian for Medical & Nursing",
    description: "Terminology and communication for healthcare professionals",
  },
  {
    icon: BusinessIcon,
    title: "Italian for Work & Business",
    description: "Professional communication and business Italian",
  },
  {
    icon: ExamIcon,
    title: "Exam Preparation",
    description: "CILS, CELI, PLIDA and other official certifications",
  },
  {
    icon: ErasmusIcon,
    title: "Erasmus Preparation",
    description: "Get ready for your Italian adventure",
  },
];

export function LearningPaths() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2
          className={`${typography({
            variant: "h2",
          })} text-center italic mb-12 md:mb-16`}
        >
          Find the right path for you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningPaths.map((path) => (
            <div
              key={path.title}
              className="bg-cream p-8 rounded-2xl text-center transition-all duration-250 ease-in-out hover:-translate-y-1 hover:shadow-md"
            >
              <div className="w-16 h-16 mx-auto mb-4">
                <Image
                  src={path.icon}
                  alt={path.title}
                  width={64}
                  height={64}
                />
              </div>
              <h3
                className={`${typography({
                  variant: "h3",
                  margin: false,
                })} text-green-dark mb-2`}
              >
                {path.title}
              </h3>
              <p
                className={`${typography({
                  variant: "small",
                  margin: false,
                })} text-text-light`}
              >
                {path.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
