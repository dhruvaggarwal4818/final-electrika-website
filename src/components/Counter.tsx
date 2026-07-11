"use client";

import React, { useEffect, useState, useRef } from "react";

interface CounterProps {
  target: number;
  duration?: number; // optional overrides
  suffix?: string;
}

export default function Counter({ target, duration, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  // Dynamically scale duration based on target size to keep animations feeling snappy and consistent
  // Small numbers (e.g. 15, 25) get ~1000ms, large numbers (500) get ~1800ms
  const animDuration = duration || Math.min(1000 + (target * 1.5), 1800);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsVisible(true);
          
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / animDuration, 1);
            
            // easeOutQuart easing function for smooth deceleration
            const easedProgress = 1 - Math.pow(1 - progress, 4);
            
            setCount(Math.floor(easedProgress * target));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target, animDuration]);

  return (
    <span 
      ref={elementRef}
      style={{
        display: "inline-block",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(15px)",
        transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform, opacity"
      }}
    >
      {count}
      {suffix}
    </span>
  );
}
