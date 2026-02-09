
"use client";

import React, { useRef, useEffect } from "react";

interface WavesProps {
  lineColor?: string;
  backgroundColor?: string;
  waveSpeedX?: number;
  waveSpeedY?: number;
  waveAmpX?: number;
  waveAmpY?: number;
  friction?: number;
  tension?: number;
  maxLines?: number;
  count?: number;
  className?: string;
}

/**
 * Waves - A high-performance Canvas-based background animation.
 * Inspired by ReactBits design patterns.
 */
export function Waves({
  lineColor = "rgba(var(--primary), 0.2)",
  backgroundColor = "transparent",
  waveSpeedX = 0.01,
  waveSpeedY = 0.01,
  waveAmpX = 60,
  waveAmpY = 30,
  friction = 0.9,
  tension = 0.01,
  maxLines = 100,
  count = 60,
  className,
}: WavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const updateSize = () => {
      width = (canvas.width = window.innerWidth);
      height = (canvas.height = window.innerHeight);
    };

    window.addEventListener("resize", updateSize);

    let animationId: number;
    let time = 0;

    const draw = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      if (backgroundColor !== "transparent") {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, width, height);
      }

      // Get primary color from CSS variables (HSL)
      const primaryHSL = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
      
      ctx.save();
      ctx.lineWidth = 1.5;

      for (let i = 0; i < count; i++) {
        ctx.beginPath();
        // Dynamic opacity based on line index for depth effect
        ctx.strokeStyle = `hsla(${primaryHSL}, ${0.03 + (i / count) * 0.1})`;
        
        for (let x = 0; x < width + 40; x += 40) {
          const y =
            height / 2 +
            Math.sin(x * waveSpeedX + time + i * 0.1) * waveAmpX +
            Math.cos(x * waveSpeedY + time * 0.5 + i * 0.2) * waveAmpY +
            (i - count / 2) * 15;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      ctx.restore();

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", updateSize);
      cancelAnimationFrame(animationId);
    };
  }, [backgroundColor, count, waveAmpX, waveAmpY, waveSpeedX, waveSpeedY]);

  return <canvas ref={canvasRef} className={className} />;
}
