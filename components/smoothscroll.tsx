"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll(): null {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return null;
}
