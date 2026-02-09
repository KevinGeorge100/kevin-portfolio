"use client";

import React, { useRef, useEffect } from "react";

interface WavesProps {
  lineColor?: string;
  backgroundColor?: string;
  waveSpeedX?: number;
  waveSpeedY?: number;
  waveAmpX?: number;
  waveAmpY?: number;
  count?: number;
  className?: string;
}

/**
 * Optimized Waves - High-performance background with reduced line count and cleaner draw loop.
 */
export function Waves({
  backgroundColor = "transparent",
  waveSpeedX = 0.008,
  waveSpeedY = 0.008,
  waveAmpX = 60,
  waveAmpY = 30,
  count = 40,
  className,
}: WavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
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

    // Cache primary color to avoid repeated DOM lookups in render loop
    const primaryHSL = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim() || "210 100% 66%";

    const draw = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      if (backgroundColor !== "transparent") {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.save();
      ctx.lineWidth = 1;

      for (let i = 0; i < count; i++) {
        ctx.beginPath();
        const opacity = 0.02 + (i / count) * 0.08;
        ctx.strokeStyle = `hsla(${primaryHSL}, ${opacity})`;
        
        for (let x = 0; x < width + 80; x += 80) {
          const y =
            height / 2 +
            Math.sin(x * waveSpeedX + time + i * 0.1) * waveAmpX +
            Math.cos(x * waveSpeedY + time * 0.5 + i * 0.2) * waveAmpY +
            (i - count / 2) * 12;
          
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

  return <canvas ref={canvasRef} className={className} style={{ pointerEvents: 'none' }} />;
}