import aboutImg from "@/assets/images/about.jpeg";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";
import { ImageContent } from "../image-content";

export function About() {
  return (
    <section id="about" className="about">
      <ImageContent
        imagePositionMobile="bottom"
        imagePositionDesktop="right"
        imageSrc={aboutImg}
        imageAlt=""
        backgroundColor="default"
        content={
          <div className="">
            <h2 className={cn(typography({ variant: "h2" }))}>Chi siamo</h2>
            <p className="">
              Italivo è una scuola online che unisce metodo comunicativo,
              mentoring personalizzato e immersione culturale. Aiutiamo studenti
              a parlare italiano con sicurezza.
            </p>
            <ul className="list-disc-primary">
              <li>Insegnanti qualificati e madrelingua</li>
              <li>Piani di studio personalizzati</li>
              <li>Supporto continuo tra le lezioni</li>
            </ul>
          </div>
        }
      />
    </section>
  );
}
