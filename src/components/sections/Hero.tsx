"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { BlurText } from "@/components/ui/blur-text";
import { MoveRight } from "lucide-react";

export function Hero() {
  const portrait = PlaceHolderImages.find(img => img.id === "hero-portrait");

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Abstract Background Graphic (The Checkmark/Stripe) */}
      <div className="absolute right-0 top-0 w-1/2 h-full -z-0 opacity-80 pointer-events-none">
        <svg viewBox="0 0 800 1000" fill="none" className="w-full h-full text-primary/20">
          <path d="M400 0L800 400L600 600L200 200L0 400L200 600L400 400" fill="currentColor" opacity="0.5" />
          <path d="M600 200L1000 600L800 800L400 400L200 600L400 800L600 600" fill="currentColor" opacity="0.3" />
        </svg>
      </div>

      {/* Dot Grid Decors */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 -z-10 opacity-20 pointer-events-none">
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 right-1/3 w-32 h-32 -z-10 opacity-10 pointer-events-none">
        <div className="grid grid-cols-8 gap-3">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-primary" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-2">
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.9]">
                <span className="text-primary block">Kevin</span>
                <span className="text-white block">George</span>
              </h1>
            </div>

            <div className="max-w-md">
              <BlurText 
                text="I'm a computer science undergraduate and DevOps Engineer specializing in cloud automation, infrastructure as code, and site reliability."
                className="text-lg md:text-xl text-white/60 leading-relaxed font-medium"
                delay={0.03}
              />
            </div>

            <button className="group relative w-fit h-16 px-8 rounded-full bg-primary text-black font-bold text-lg flex items-center gap-4 hover:scale-105 transition-all">
              <div className="flex items-center gap-1">
                <MoveRight className="w-5 h-5" />
                <MoveRight className="w-5 h-5 opacity-60" />
                <MoveRight className="w-5 h-5 opacity-30" />
              </div>
              <span>Get In Touch</span>
            </button>
          </div>

          {/* Right Content - The Portrait */}
          <div className="relative aspect-[4/5] w-full max-w-2xl mx-auto lg:ml-auto">
            {/* The Big Lime Checkmark Behind Portrait */}
            <div className="absolute -inset-20 -z-10 pointer-events-none">
              <svg viewBox="0 0 500 500" className="w-full h-full text-primary fill-current opacity-90 rotate-[-15deg]">
                 <path d="M100,250 L200,350 L450,100 L400,50 L200,250 L150,200 Z" />
              </svg>
            </div>

            <div className="relative w-full h-full rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group">
              <Image
                src={portrait?.imageUrl || "https://picsum.photos/seed/kevin/800/1000"}
                alt="Kevin George"
                fill
                className="object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700"
                priority
              />
              {/* Badge/Sticker Overlay */}
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full p-1 shadow-2xl animate-spin-slow flex items-center justify-center border-4 border-primary">
                <div className="text-[10px] font-black text-black text-center uppercase tracking-widest leading-tight">
                  DevOps • Cloud • Infra • Kubernetes
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Ghost Text Background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[20vw] font-black leading-none uppercase">
          DEVOPS ENGINEER KEVIN GEORGE
        </h2>
      </div>
    </section>
  );
}
