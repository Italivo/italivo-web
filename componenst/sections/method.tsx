import { typography } from "@/lib/variants";

export function MethodSection() {
  return (
    <section id="method" className="py-32 bg-cream">
      <div className="container">
        <h2 className={typography({ variant: "h2", margin: true })}>
          Il nostro metodo
        </h2>
        <p className="max-w-175 mx-auto mb-20 text-center text-muted-foreground">
          Our approach combines personalized coaching with a supportive learning
          community. We focus on speaking from the first lesson and provide
          extra resources for independent study.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full font-sans font-semibold text-base text-white mb-4 bg-green-dark">
              1
            </span>
            <h3 className={typography({ variant: "h3", margin: true })}>
              Comunicazione prima di tutto
            </h3>
            <p className="text-muted-foreground text-[0.9375rem]">
              Conversazioni reali, e situazioni pratiche, contesti significativi
            </p>
          </div>
          <div className="p-8">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full font-sans font-semibold text-base text-white mb-4 bg-rust">
              2
            </span>
            <h3 className={typography({ variant: "h3", margin: true })}>
              Cultura & contesto
            </h3>
            <p className="text-muted-foreground text-[0.9375rem]">
              Lingua + comprensione di usi, costumi e vita italiana
              contemporanea
            </p>
          </div>
          <div className="p-8">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full font-sans font-semibold text-base text-white mb-4 bg-rust">
              3
            </span>
            <h3 className={typography({ variant: "h3", margin: true })}>
              Mentoring personalizzato
            </h3>
            <p className="text-muted-foreground text-[0.9375rem]">
              Piani individuali, feedback audio, e tracking dei progressi
            </p>
          </div>
        </div>

        <div className="max-w-150 mx-auto">
          <img
            className="rounded-2xl shadow-lg"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face"
            alt="Italian teacher in session"
          />
        </div>
      </div>
    </section>
  );
}
