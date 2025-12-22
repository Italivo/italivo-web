import { typography } from "@/lib/variants";

export function Footer() {
  return (
    <footer className="bg-muted pt-20">
      <div className="w-full max-w-300 mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 pb-20">
        <div>
          <a href="#" className={`inline-block mb-4 ${typography({ variant: "h2" })} text-secondary`}>
            Italivo
          </a>
          <p className={`${typography({ variant: "body", margin: false })} text-muted-foreground`}>
            Learn Italian by living it.
          </p>
        </div>
        <div className="flex gap-20 justify-center md:justify-end">
          <div>
            <h4 className={typography({ variant: "overline" })}>Navigation</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#about" className={`${typography({ variant: "body", margin: false })} text-muted-foreground hover:text-primary transition-colors duration-150`}>
                  About
                </a>
              </li>
              <li>
                <a href="#method" className={`${typography({ variant: "body", margin: false })} text-muted-foreground hover:text-primary transition-colors duration-150`}>
                  Method
                </a>
              </li>
              <li>
                <a href="#packages" className={`${typography({ variant: "body", margin: false })} text-muted-foreground hover:text-primary transition-colors duration-150`}>
                  Packages
                </a>
              </li>
              <li>
                <a href="#contact" className={`${typography({ variant: "body", margin: false })} text-muted-foreground hover:text-primary transition-colors duration-150`}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={typography({ variant: "overline" })}>Connect</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className={`${typography({ variant: "body", margin: false })} text-muted-foreground hover:text-primary transition-colors duration-150`}>
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className={`${typography({ variant: "body", margin: false })} text-muted-foreground hover:text-primary transition-colors duration-150`}>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:hello@italivo.com" className={`${typography({ variant: "body", margin: false })} text-muted-foreground hover:text-primary transition-colors duration-150`}>
                  hello@italivo.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6">
        <div className="w-full max-w-300 mx-auto px-6">
          <p className={`${typography({ variant: "caption", margin: false })} text-muted-foreground`}>
            &copy; 2024 Italivo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
