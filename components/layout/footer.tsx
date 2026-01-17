export function Footer() {
  return (
    <footer className="bg-olive-900 text-white/70">
      <div className="container-fluid mx-auto px-(--section-padding-x) py-[calc(var(--section-padding-y)/2)]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 pb-[calc(var(--section-padding-y)/2)]">
          <div>
            <a
              href="#"
              className="font-serif text-[1.75rem] font-bold text-primary inline-block mb-4"
            >
              Italivo
            </a>
            <p className="text-[0.9375rem]">Learn Italian by living it.</p>
          </div>
          <div className="flex gap-10 justify-start md:justify-end">
            <div>
              <h4 className="font-sans text-sm font-semibold uppercase tracking-wide mb-6 text-white">
                Follow us
              </h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#about"
                    className="text-[0.9375rem]  hover:text-accent"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#method"
                    className="text-[0.9375rem] hover:text-accent"
                  >
                    Method
                  </a>
                </li>
                <li>
                  <a
                    href="#packages"
                    className="text-[0.9375rem] hover:text-accent"
                  >
                    Packages
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-[0.9375rem] hover:text-accent"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-sm font-semibold uppercase tracking-wide mb-6 text-white">
                Legal
              </h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#" className="text-[0.9375rem] hover:text-accent">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[0.9375rem] hover:text-accent">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@italivo.com"
                    className="text-[0.9375rem] hover:text-accent"
                  >
                    hello@italivo.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-[0.8125rem] text-center">
          &copy;2025-{new Date().getFullYear()} Italivo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
