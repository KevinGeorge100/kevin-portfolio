
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Magnetic } from "@/components/ui/magnetic";
import { BlurText } from "@/components/ui/blur-text";
import LiquidEther from "@/components/ui/liquid-ether";

export function Hero() {
  const portrait = PlaceHolderImages.find(img => img.id === "hero-portrait");

  return (
    <AuroraBackground className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen relative">
      {/* Liquid Ether Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
          mouseForce={20}
          cursorSize={150}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#5227FF"
          color1="#FF9FFC"
          color2="#B19EEF"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left reveal-on-scroll">
            <div className="inline-block px-4 py-1.5 clay mb-6 text-sm font-bold text-accent uppercase tracking-widest animate-blur-in opacity-0">
              Cloud & Infrastructure
            </div>
            
            <h1 className="text-4xl md:text-7xl font-headline font-extrabold text-foreground leading-tight mb-6 flex flex-wrap justify-center md:justify-start">
              <BlurText text="I'm" baseDelay={0.2} />
              <BlurText text="Kevin George," className="text-primary ml-2" baseDelay={0.4} />
              <BlurText text="a" className="ml-2" baseDelay={0.8} />
              <BlurText text="DevOps Engineer." className="text-primary ml-2" baseDelay={1.0} />
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto md:mx-0 reveal-on-scroll delay-700">
              CS Undergraduate student passionate about automating infrastructure, streamlining deployments, and building robust cloud-native systems.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start reveal-on-scroll delay-1000">
              <Magnetic strength={0.2}>
                <Button asChild size="lg" className="clay-primary h-14 px-10 text-lg hover:scale-105 transition-transform">
                  <Link href="#projects">
                    View My Projects <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </Magnetic>
              <div className="flex items-center gap-4">
                <Magnetic strength={0.4}>
                  <Link href="https://github.com" className="p-3 clay hover:bg-white/50 transition-all text-primary" aria-label="GitHub">
                    <Github className="h-6 w-6" />
                  </Link>
                </Magnetic>
                <Magnetic strength={0.4}>
                  <Link href="https://linkedin.com" className="p-3 clay hover:bg-white/50 transition-all text-primary" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                </Magnetic>
                <Magnetic strength={0.4}>
                  <Link href="https://twitter.com" className="p-3 clay hover:bg-white/50 transition-all text-primary" aria-label="Twitter">
                    <Twitter className="h-6 w-6" />
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>
          <div className="flex-1 relative reveal-on-scroll delay-500">
            <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem] mx-auto">
              <div className="absolute inset-0 bg-primary/10 rounded-[3rem] rotate-6 scale-105 blur-2xl"></div>
              <div className="absolute inset-0 bg-accent/10 rounded-[3rem] -rotate-3 scale-105 blur-2xl"></div>
              <div className="relative w-full h-full clay p-4 overflow-hidden group">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white/50">
                  <Image
                    src={portrait?.imageUrl || "https://picsum.photos/seed/kevin/600/600"}
                    alt="Kevin George"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                    data-ai-hint="young professional"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
