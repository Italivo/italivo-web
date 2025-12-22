export function CTASection() {
  return (
    <section
      id="contact"
      className="bg-green-dark py-16 md:py-24 lg:py-32 text-white"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl italic leading-tight mb-4">
              Ready to start?
            </h2>
            <p className="text-base md:text-lg opacity-90 mb-8 max-w-lg mx-auto md:mx-0">
              Book a trial lesson to find out which package is right for you and
              begin your Italian journey today.
            </p>
            <a
              href="mailto:hello@italivo.com"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-rust text-white rounded-lg transition-all duration-250 hover:bg-rust-dark hover:-translate-y-0.5 hover:shadow-md"
            >
              Book your free trial lesson
            </a>
          </div>

          {/* Italian Flag */}
          <div className="flex rounded-lg overflow-hidden shadow-md">
            <div className="w-10 h-20 bg-[#009246]" />
            <div className="w-10 h-20 bg-white" />
            <div className="w-10 h-20 bg-[#ce2b37]" />
          </div>
        </div>
      </div>
    </section>
  );
}
