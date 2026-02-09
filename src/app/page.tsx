
"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { useReveal } from "@/hooks/use-reveal";

export default function Home() {
  const revealRef = useReveal();

  return (
    <div ref={revealRef} className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
