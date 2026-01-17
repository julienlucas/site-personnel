"use client";

import { useEffect } from "react";

export default function ScrollTopOnMount() {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return () => {
      root.style.scrollBehavior = previous;
    };
  }, []);

  return null;
}
