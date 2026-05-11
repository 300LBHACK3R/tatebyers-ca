"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;

  /**
   * Preferred prop for new components.
   */
  delay?: number;

  /**
   * Backward-compatible prop used by older components.
   */
  delayMs?: number;

  /**
   * Allows tuning how early the reveal triggers.
   */
  threshold?: number;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  delayMs,
  threshold = 0.18,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const resolvedDelay = delayMs ?? delay;

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
      style={{
        transitionDelay: isVisible ? `${resolvedDelay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}