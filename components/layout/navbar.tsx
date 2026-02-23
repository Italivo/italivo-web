"use client";

import { Button } from "@/components/ui/button";
import { SigninButton } from "@/features/auth/components/signin-button";
import { SignupButton } from "@/features/auth/components/signup-button";
import { UserMenu } from "@/features/auth/components/user-menu";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: routes.about, label: "About" },
  { href: routes.method, label: "Method" },
  { href: routes.learningPaths.index, label: "Programs" },
  { href: routes.packages.index, label: "Packages" },
  { href: routes.contact, label: "Contact" },
];

type NavbarProps = {
  user?: { username: string; email: string } | null;
};

export function Navbar({ user }: NavbarProps) {
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
        "sticky top-0 z-10 bg-background shadow-sm",
        open && isMobile && "fixed inset-0 h-screen flex flex-col",
      )}
    >
      <div className="container-fluid mx-auto px-4 flex flex-col md:flex-row md:items-center">
        {/* B */}
        <div className="flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden -ml-2"
            onClick={() => setOpen((open) => !open)}
            aria-controls="navbarSupportedContent"
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            <ToggleIcon className="size-6" />
          </Button>
          <a
            href={routes.home}
            className={cn(
              "font-serif text-primary font-bold leading-tight",
              "text-3xl md:text-4xl",
              "py-2 px-4",
            )}
          >
            Italivo
          </a>
          <div className="flex gap-2 md:hidden">
            {user ? (
              <UserMenu user={user} />
            ) : (
              <>
                <SigninButton />
                <SignupButton />
              </>
            )}
          </div>
        </div>
        <div
          className={cn(
            "hidden md:contents",
            open &&
              "max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:flex-1",
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
                  className="font-sans text-sm leading-normal inline-block p-2 transition-colors duration-150 ease-in-out hover:text-rust"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex gap-2 md:ml-auto">
            {user ? (
              <UserMenu user={user} />
            ) : (
              <>
                <SigninButton />
                <SignupButton />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
