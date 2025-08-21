"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf( time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <>{children}</>;
};

export default SmoothScroll;
