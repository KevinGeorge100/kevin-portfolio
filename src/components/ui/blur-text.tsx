"use client";

import { cn } from "@/lib/utils";

interface BlurTextProps {
  text: string;
  delay?: number;
  baseDelay?: number;
  className?: string;
}

/**
 * BlurText component that animates text with a staggered blur effect.
 * Inspired by ReactBits design patterns.
 */
export function BlurText({ text, delay = 0.08, baseDelay = 0, className }: BlurTextProps) {
  const words = text.split(" ");

  return (
    <span className={cn("inline-flex flex-wrap", className)}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block animate-blur-in opacity-0"
          style={{
            animationDelay: `${(baseDelay + i * delay).toFixed(2)}s`,
            marginRight: "0.25em",
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}