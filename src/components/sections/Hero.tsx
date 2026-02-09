
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const portrait = PlaceHolderImages.find(img => img.id === "hero-portrait");

  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left reveal-on-scroll">
            <h2 className="text-accent font-semibold tracking-wider uppercase mb-4 text-sm md:text-base">
              Cloud & Infrastructure
            </h2>
            <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-foreground leading-tight mb-6">
              I'm <span className="text-primary">Kevin George</span>, a <span className="text-primary">DevOps Engineer</span>.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
              CS Undergraduate student passionate about automating infrastructure, streamlining deployments, and building robust cloud-native systems.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
                <Link href="#projects">
                  View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="flex items-center gap-4 ml-0 sm:ml-4 mt-4 sm:mt-0">
                <Link href="https://github.com" className="p-2 rounded-full hover:bg-secondary transition-colors" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="https://linkedin.com" className="p-2 rounded-full hover:bg-secondary transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com" className="p-2 rounded-full hover:bg-secondary transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 relative reveal-on-scroll delay-200">
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-6 -z-10"></div>
              <div className="absolute inset-0 bg-accent/10 rounded-3xl -rotate-3 -z-10"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
                <Image
                  src={portrait?.imageUrl || "https://picsum.photos/seed/kevin/600/600"}
                  alt="Kevin George"
                  fill
                  className="object-cover"
                  priority
                  data-ai-hint="young professional"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
