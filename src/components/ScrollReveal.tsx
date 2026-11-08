"use client";

import { useEffect } from "react";
import styles from "./ScrollReveal.module.css";

const REVEAL_MS = 700;
const STAGGER_MS = 90;
const MAX_STAGGER_MS = 270;

interface ScrollRevealProps {
  /** CSS selectors for the elements that should fade up each time they scroll into view. */
  selectors: string[];
}

/**
 * Replays a fade-up whenever an element scrolls back into view, in either direction.
 * Elements only reset once fully off-screen, and the server HTML stays fully
 * visible for search engines and if JS fails.
 */
export default function ScrollReveal({ selectors }: ScrollRevealProps) {
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const targets = Array.from(document.querySelectorAll<HTMLElement>(selectors.join(",")));
    const timers = new Map<HTMLElement, number>();

    const clearReveal = (el: HTMLElement) => {
      window.clearTimeout(timers.get(el));
      timers.delete(el);
      el.classList.remove(styles.shown);
      el.style.removeProperty("--reveal-delay");
    };

    const showObserver = new IntersectionObserver(
      (entries) => {
        const shownPerParent = new Map<Element | null, number>();

        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (!entry.isIntersecting || !el.classList.contains(styles.hidden)) continue;

          // Cards arriving together in the same row appear one after another.
          const position = shownPerParent.get(el.parentElement) ?? 0;
          shownPerParent.set(el.parentElement, position + 1);
          const delay = Math.min(position * STAGGER_MS, MAX_STAGGER_MS);

          el.style.setProperty("--reveal-delay", `${delay}ms`);
          el.classList.add(styles.shown);
          el.classList.remove(styles.hidden);

          // Remove our styles afterwards so the element's own hover effects are untouched.
          timers.set(
            el,
            window.setTimeout(() => clearReveal(el), REVEAL_MS + delay + 50)
          );
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    // The margin must exceed the 24px fade-up offset so a reset element can't
    // shift back into range and flicker.
    const resetObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          clearReveal(el);
          el.classList.add(styles.hidden);
        }
      },
      { rootMargin: "60px 0px 60px 0px" }
    );

    for (const el of targets) {
      if (el.getBoundingClientRect().top >= window.innerHeight) {
        el.classList.add(styles.hidden);
      }
      showObserver.observe(el);
      resetObserver.observe(el);
    }

    return () => {
      showObserver.disconnect();
      resetObserver.disconnect();
      for (const el of targets) {
        clearReveal(el);
        el.classList.remove(styles.hidden);
      }
    };
  }, [selectors]);

  return null;
}
