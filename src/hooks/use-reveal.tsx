
"use client";

import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      const elements = currentRef.querySelectorAll(".reveal-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (currentRef) {
        const elements = currentRef.querySelectorAll(".reveal-on-scroll");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return ref;
}
