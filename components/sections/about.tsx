import { typography } from "@/lib/variants";

export function AboutSection() {
  return (
    <section id="about" className="py-32">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="text-center md:text-left">
          <h2 className={typography({ variant: "h2", margin: true })}>
            Chi siamo
          </h2>
          <p className="text-[1.0625rem] text-muted-foreground mb-8 leading-relaxed">
            Italivo è una scuola online che unisce metodo comunicativo,
            mentoring personalizzato e immersione culturale. Aiutiamo studenti a
            parlare italiano con sicurezza.
          </p>
          <ul className="list-style-rust-bullet">
            <li>Insegnanti qualificati e madrelingua</li>
            <li>Piani di studio personalizzati</li>
            <li>Supporto continuo tra le lezioni</li>
          </ul>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=350&fit=crop"
            alt="Students learning together"
            className="rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
