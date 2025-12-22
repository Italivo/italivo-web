"use client";

import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "../link";
import { Button } from "../ui/button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#method", label: "Method" },
  { href: "#packages", label: "Packages" },
  { href: "#contact", label: "Contact" },
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
        open &&
          isMobile &&
          "fixed inset-0 h-screen flex flex-col justify-start items-center"
      )}
    >
      {/* B */}
      <div className="flex justify-between items-center max-md:w-full">
        <Link
          href="/"
          className={cn(
            typography({ variant: "h2", margin: false }),
            "font-bold text-secondary py-2 px-4 -ml-4"
          )}
        >
          Italivo
        </Link>
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
      <ul
        id="navbarSupportedContent"
        className={cn(
          "hidden flex-col items-center md:flex md:flex-row md:absolute md:left-1/2 md:-translate-x-1/2",
          open && "max-md:flex max-md:mt-auto max-md:mb-4"
        )}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="inline-block p-2">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <Button
        className={cn(
          "max-md:hidden",
          open && "max-md:inline-flex max-md:mb-auto"
        )}
      >
        Book your free trial Session
      </Button>
    </nav>
  );
}
