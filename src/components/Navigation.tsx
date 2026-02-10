"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
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
    <nav className={cn(
      "nav-pill px-4 md:px-6",
      scrolled ? "bg-black/80 scale-95 backdrop-blur-xl" : "bg-white/5"
    )}>
      <div className="flex items-center gap-8">
        <Link href="#home" className="flex items-center">
          <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-black uppercase tracking-widest text-white/50 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Vertical separator and Hire Me button removed for a cleaner look */}
      </div>
    </nav>
  );
}
