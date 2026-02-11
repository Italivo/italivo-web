"use client";

import { Button } from "@/components/ui/button";
import { SigninButton } from "@/features/auth/components/signin-button";
import { SignupButton } from "@/features/auth/components/signup-button";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: routes.about, label: "About" },
  { href: routes.method, label: "Method" },
  { href: routes.packages.index, label: "Packages" },
  { href: routes.contact, label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const isMobile = useIsMobile();
  const trapRef = useFocusTrap<HTMLDivElement>(isMobile && open);
  useScrollLock(isMobile && open);

  const ToggleIcon = open ? XIcon : MenuIcon;

  return (
    /* A */
    <nav
      ref={trapRef}
      className={cn(
        "sticky top-0 z-10 bg-background shadow-sm md:flex md:flex-row md:justify-between md:items-center md:px-4",
        open && isMobile && "fixed inset-0 h-screen flex flex-col items-center",
      )}
    >
      {/* B */}
      <div className="flex justify-between items-center max-md:w-full">
        <a
          href={routes.home}
          className={cn(
            typography({ variant: "h2", margin: false }),
            "font-bold text-primary py-2 px-4 -ml-4 not-italic",
          )}
        >
          Italivo
        </a>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen((open) => !open)}
          aria-controls="navbarSupportedContent"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <ToggleIcon className="size-6" />
        </Button>
      </div>
      <div
        className={cn(
          "hidden md:contents",
          open &&
            "max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:flex-1 max-md:gap-8",
        )}
      >
        <ul
          id="navbarSupportedContent"
          className="flex flex-col items-center md:flex-row md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  typography({ variant: "small", margin: false }),
                  "inline-block p-2 transition-colors duration-150 ease-in-out hover:text-rust",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <SigninButton />
          <SignupButton />
        </div>
      </div>
    </nav>
  );
}
