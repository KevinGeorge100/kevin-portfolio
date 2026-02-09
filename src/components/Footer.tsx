
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Alex Rivera. All rights reserved.
        </p>
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
