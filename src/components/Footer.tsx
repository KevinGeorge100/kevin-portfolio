import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kevin George. All rights reserved.
          </p>
          <div className="flex gap-4 mt-1">
            <Link href="https://github.com/kevingeorge" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/kwingeorge/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-8 text-sm text-muted-foreground">
          <Link href="#home" className="hover:text-primary">Home</Link>
          <Link href="#about" className="hover:text-primary">About</Link>
          <Link href="#projects" className="hover:text-primary">Projects</Link>
          <Link href="#contact" className="hover:text-primary">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
