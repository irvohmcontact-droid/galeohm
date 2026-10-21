"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type TextBlurRevealBy = "words" | "letters";
export type TextBlurRevealDirection = "top" | "bottom";
export interface TextBlurRevealProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: TextBlurRevealBy;
  direction?: TextBlurRevealDirection;
  threshold?: number;
  rootMargin?: string;
  onAnimationComplete?: () => void;
  stepDuration?: number;
  startOnView?: boolean;
  as?: keyof React.JSX.IntrinsicElements;
}

/** Visible in server HTML; a short, once-only headline reveal enhances it after hydration. */
export function TextBlurReveal({
  text = "", delay = 50, className, animateBy = "words", direction = "top",
  threshold = .1, rootMargin = "0px", onAnimationComplete, stepDuration = .14,
  startOnView = true, as = "p",
}: TextBlurRevealProps) {
  const ref = React.useRef<HTMLElement>(null);
  const Tag = as as unknown as React.ComponentType<
    React.HTMLAttributes<HTMLElement> & {ref?: React.Ref<HTMLElement | null>}
  >;
  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let disposed = false;
    let played = false;
    const animations: Animation[] = [];
    const cancel = () => { if (preference.matches) animations.forEach(a => a.cancel()); };
    preference.addEventListener("change", cancel);
    function reveal() {
      if (played || disposed) return;
      played = true;
      if (preference.matches || !node || !node.animate) {
        onAnimationComplete?.();
        return;
      }
      const segments = node.querySelectorAll<HTMLElement>("[data-reveal-segment]");
      segments.forEach((segment, index) => {
        animations.push(segment.animate([
          {opacity: 0, transform: `translateY(${direction === "top" ? -8 : 8}px)`, filter: "blur(2px)"},
          {opacity: 1, transform: "translateY(0)", filter: "blur(0px)"},
        ], {
          duration: Math.min(400, Math.max(160, stepDuration * 2000)),
          delay: Math.min(index * Math.min(Math.max(delay, 0), 60), 240),
          easing: "cubic-bezier(0.23, 1, 0.32, 1)",
          fill: "backwards",
        }));
      });
      Promise.all(animations.map(a => a.finished)).then(() => {
        if (!disposed) onAnimationComplete?.();
      }).catch(() => { /* Preference changes and unmounts cancel decorative motion. */ });
    }
    let observer: IntersectionObserver | undefined;
    if (!startOnView || !("IntersectionObserver" in window)) reveal();
    else {
      observer = new IntersectionObserver(entries => {
        if (entries.some(e => e.isIntersecting)) { reveal(); observer?.disconnect(); }
      }, {threshold, rootMargin});
      observer.observe(node);
    }
    return () => {
      disposed = true;
      observer?.disconnect();
      animations.forEach(a => a.cancel());
      preference.removeEventListener("change", cancel);
    };
  }, [text, delay, animateBy, direction, threshold, rootMargin, onAnimationComplete, stepDuration, startOnView]);

  const words = text.split(" ");
  return <Tag ref={ref} className={cn("flex flex-wrap", className)}>
    <span className="sr-only">{text}</span>
    {words.map((word, i) => <span className="inline-flex whitespace-nowrap" aria-hidden="true" key={i}>
      {animateBy === "letters" ? Array.from(word).map((letter, j) =>
        <span className="inline-block" data-reveal-segment key={j}>{letter}</span>
      ) : <span className="inline-block" data-reveal-segment>{word}</span>}
      {i < words.length - 1 ? "\u00a0" : null}
    </span>)}
  </Tag>;
}
