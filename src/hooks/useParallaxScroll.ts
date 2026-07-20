"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger exactly once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxOptions {
  scale?: number;
  scrub?: number | boolean;
}

export function useParallaxScroll({
  scale = 0.95,
  scrub = 0.5,
}: ParallaxOptions = {}) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Desktop / Tablet: Apply the sticky parallax effect
        "(min-width: 768px)": () => {
          gsap.to(section, {
            scale: scale,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom top", // Pin for the exact height of this section
              scrub: scrub,
              pin: true,
              pinSpacing: false, // Allows the next section to slide over this one
            },
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, [scale, scrub]);

  return sectionRef;
}
