
"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
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
        "fixed top-4 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "px-4 md:px-10" : "px-4 md:px-6"
      )}
    >
      <div 
        className={cn(
          "container mx-auto px-6 h-20 flex items-center justify-between transition-all duration-500",
          scrolled 
            ? "clay bg-white/80 scale-95 shadow-xl" 
            : "bg-transparent border-transparent"
        )}
      >
        <Link href="#home" className="text-2xl font-headline font-black text-primary hover:scale-105 transition-transform">
          Kevin<span className="text-accent">.</span>G
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-black text-muted-foreground hover:text-primary transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-accent rounded-full transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Button asChild className="clay-primary px-8 h-12 text-sm font-bold hover:scale-105 transition-transform">
            <Link href="#contact">Hire Me</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-3 clay text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute top-24 left-4 right-4 clay p-6 transition-all duration-500 ease-in-out overflow-hidden",
          isOpen ? "max-h-[500px] opacity-100 shadow-2xl" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xl font-bold text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full clay-primary h-14 text-lg">
            <Link href="#contact" onClick={() => setIsOpen(false)}>Hire Me</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
