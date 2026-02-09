"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 px-6 md:px-12 flex items-center justify-between",
        scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent"
      )}
    >
      <Link href="#home" className="text-lg font-bold tracking-tight hover:opacity-70 transition-opacity">
        Kevin George
      </Link>

      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-[13px] font-medium text-white/60 hover:text-white transition-colors"
          >
            ( {link.name} )
          </Link>
        ))}
      </div>
    </nav>
  );
}