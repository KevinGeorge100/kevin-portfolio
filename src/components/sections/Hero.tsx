"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { BlurText } from "@/components/ui/blur-text";

export function Hero() {
  const portrait = PlaceHolderImages.find(img => img.id === "hero-portrait");

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center bg-black">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Top Text Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 items-end mb-4">
          <div className="md:col-start-1 text-center md:text-left">
            <h2 className="text-6xl md:text-[140px] font-black leading-[0.8] tracking-tighter uppercase mb-2">
              HELLO
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <span className="text-4xl md:text-6xl font-bold italic text-white/40">I'M</span>
              <span className="text-4xl md:text-[140px] font-black text-primary leading-[0.8] tracking-tighter uppercase">
                KEVIN
              </span>
            </div>
          </div>
        </div>

        {/* Central Graphic Area */}
        <div className="relative w-full max-w-4xl flex justify-center items-center py-10">
          {/* Portrait Container */}
          <div className="relative z-20 w-72 h-72 md:w-[450px] md:h-[450px] overflow-visible group">
            <div className="absolute inset-0 bg-accent rounded-[3rem] rotate-3 scale-95 blur-sm opacity-50 transition-transform group-hover:rotate-6"></div>
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-2 border-white/20 bg-zinc-900 purple-glow">
              <Image
                src={portrait?.imageUrl || "https://picsum.photos/seed/kevin/800/800"}
                alt="Kevin George"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>
            
            {/* SVG Bolt / Sticker Decor */}
            <div className="absolute -top-10 -right-10 w-32 h-32 text-primary pointer-events-none rotate-12 drop-shadow-2xl">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
          </div>

          {/* Right Side Overlay Text */}
          <div className="absolute right-0 top-1/2 md:-right-20 pointer-events-none z-30 hidden lg:block">
            <h1 className="text-[180px] font-black leading-none text-white tracking-tighter uppercase">
              GEORGE
            </h1>
            <p className="text-primary text-4xl font-black -mt-8 ml-40 lowercase italic opacity-80">
              DevOps Engineer!
            </p>
          </div>
        </div>

        {/* Description Footer */}
        <div className="w-full max-w-3xl mt-12 text-center md:text-left flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-1">
            <p className="text-xl md:text-2xl font-medium text-white/80 leading-relaxed max-w-xl">
              A DevOps Engineer specialized in digital infrastructure design with a focus on cloud automation. Currently living in <span className="text-primary">Kerala, India.</span>
            </p>
          </div>
          <div className="hidden md:block w-32 h-32 rounded-full border border-white/20 flex items-center justify-center p-4 animate-spin-slow">
            <div className="text-[10px] text-center uppercase tracking-widest font-bold text-white/40">
              Cloud native infra architecture
            </div>
          </div>
        </div>

      </div>
      
      {/* Decorative Blur */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] opacity-20"></div>
    </section>
  );
}