export function Footer() {
  return (
    <footer className="bg-cream-dark pt-20">
      <div className="container mx-auto px-6 max-w-300">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 pb-10">
          <div>
            <a
              href="#"
              className="font-serif text-[1.75rem] font-bold text-green-dark inline-block mb-4"
            >
              Italivo
            </a>
            <p className="text-muted-foreground text-[0.9375rem]">
              Learn Italian by living it.
            </p>
          </div>
          <div className="flex gap-10 justify-start md:justify-end">
            <div>
              <h4 className="font-sans text-sm font-semibold uppercase tracking-wide mb-6 text-foreground">
                Navigation
              </h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#about"
                    className="text-[0.9375rem] text-muted-foreground hover:text-accent"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#method"
                    className="text-[0.9375rem] text-muted-foreground hover:text-accent"
                  >
                    Method
                  </a>
                </li>
                <li>
                  <a
                    href="#packages"
                    className="text-[0.9375rem] text-muted-foreground hover:text-accent"
                  >
                    Packages
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-[0.9375rem] text-muted-foreground hover:text-accent"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-sm font-semibold uppercase tracking-wide mb-6 text-foreground">
                Connect
              </h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#"
                    className="text-[0.9375rem] text-muted-foreground hover:text-accent"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[0.9375rem] text-muted-foreground hover:text-accent"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@italivo.com"
                    className="text-[0.9375rem] text-muted-foreground hover:text-accent"
                  >
                    hello@italivo.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#e5e5e5] py-4">
          <p className="text-[0.8125rem] text-muted-foreground">
            &copy; 2024 Italivo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
