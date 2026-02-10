
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { BlurText } from "@/components/ui/blur-text";
import { MoveRight, FileDown, Briefcase } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function Hero() {
  const portrait = PlaceHolderImages.find(img => img.id === "hero-portrait");
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      <AuroraBackground className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div />
      </AuroraBackground>

      <div className="absolute right-0 top-0 w-1/2 h-full -z-0 opacity-80 pointer-events-none">
        <svg viewBox="0 0 800 1000" fill="none" className="w-full h-full text-primary/20">
          <path d="M400 0L800 400L600 600L200 200L0 400L200 600L400 400" fill="currentColor" opacity="0.5" />
          <path d="M600 200L1000 600L800 800L400 400L200 600L400 800L600 600" fill="currentColor" opacity="0.3" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          
          <div className="flex flex-col space-y-8 text-center lg:text-left lg:max-w-xl">
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <span className="flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-black uppercase tracking-widest text-primary animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Available for Hire
                </span>
              </div>
              <span className="text-primary text-lg font-black uppercase tracking-widest block">Hello, I&apos;m</span>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
                <span className="text-white block">Kevin</span>
                <span className="text-white block">George</span>
              </h1>
              <span className="text-accent text-2xl md:text-4xl font-black tracking-tight block mt-2">DevOps Engineer</span>
            </div>

            <div className="max-w-md mx-auto lg:mx-0">
              <BlurText 
                text="I specialize in cloud automation, infrastructure as code, and building highly resilient site reliability frameworks."
                className="text-base md:text-lg text-white/60 leading-relaxed font-medium"
                delay={0.03}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link 
                href="#contact" 
                className="group relative h-14 px-8 rounded-full bg-primary text-black font-bold text-base flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-primary/20"
              >
                <Briefcase className="w-4 h-4" />
                <span>Hire Me</span>
                <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="https://drive.google.com/file/d/1pajAscnxoslBCxL6eP3C479IV5HQ9mD7/view?usp=sharing" 
                target="_blank"
                className="group relative h-14 px-8 rounded-full bg-white/5 border border-white/10 text-white font-bold text-base flex items-center gap-3 hover:bg-white/10 hover:scale-105 transition-all"
              >
                <FileDown className="w-4 h-4 group-hover:animate-bounce" />
                <span>Get Resume</span>
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full max-w-[300px] flex-shrink-0">
            <div className="absolute -inset-12 -z-10 pointer-events-none">
              <svg viewBox="0 0 500 500" className="w-full h-full text-primary fill-current opacity-90 rotate-[-10deg]">
                 <path d="M100,250 L200,350 L450,100 L400,50 L200,250 L150,200 Z" />
              </svg>
            </div>

            <div className="relative w-full h-full rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group shadow-[0_0_50px_rgba(var(--primary),0.2)] border-2 border-white/20">
              <Image
                src={portrait?.imageUrl || "https://picsum.photos/seed/kevin/800/1000"}
                alt="Kevin George"
                fill
                className="object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700"
                priority
              />
              <div className="absolute bottom-6 right-6 w-20 h-20 bg-white rounded-full p-1 shadow-2xl animate-spin-slow flex items-center justify-center border-4 border-primary z-20">
                <div className="text-[7px] font-black text-black text-center uppercase tracking-widest leading-tight">
                  DevOps • Cloud • Infra • K8s
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-accent/20 blur-[80px] rounded-full -z-20 opacity-40"></div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.02] select-none pointer-events-none">
        <h2 className="text-[18vw] font-black leading-none uppercase">
          DEVOPS ENGINEER KEVIN GEORGE
        </h2>
      </div>
    </section>
  );
}
