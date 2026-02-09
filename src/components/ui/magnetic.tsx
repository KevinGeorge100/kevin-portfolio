
"use client";

import React, { useRef, useState, useEffect } from "react";

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
}

export const Magnetic = ({ children, strength = 0.3 }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      const distance = Math.sqrt(x * x + y * y);
      
      // Magnetic pull radius: 100px
      if (distance < 100) {
        setPosition({ x: x * strength, y: y * strength });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [strength]);

  return (
    <div
      ref={ref}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
      className="inline-block"
    >
      {children}
    </div>
  );
};
