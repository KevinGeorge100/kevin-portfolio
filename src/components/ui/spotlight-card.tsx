"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  style?: React.CSSProperties;
}

/**
 * Optimized SpotlightCard using CSS Variables to avoid frequent React re-renders.
 */
export const SpotlightCard = ({
  children,
  className,
  spotlightColor = "rgba(100, 150, 255, 0.15)",
  style,
}: SpotlightCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    containerRef.current.style.setProperty("--mouse-x", `${e.clientX - left}px`);
    containerRef.current.style.setProperty("--mouse-y", `${e.clientY - top}px`);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        ...style,
        position: 'relative',
      } as React.CSSProperties}
      className={cn(
        "group relative overflow-hidden h-full rounded-[2.5rem]",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  );
};