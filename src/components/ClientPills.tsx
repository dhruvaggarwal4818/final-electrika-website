"use client";

import React, { useRef, useEffect } from "react";
import styles from "../app/about-us/about.module.css";

interface ClientPillsProps {
  clients: string[];
}

export default function ClientPills({ clients }: ClientPillsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const radius = 150; // The hover radius in pixels

      pillsRef.current.forEach(pill => {
        if (!pill) return;
        const rect = pill.getBoundingClientRect();
        
        // Calculate distance from mouse to the center of the pill
        const pillCenterX = rect.left + rect.width / 2;
        const pillCenterY = rect.top + rect.height / 2;
        const distance = Math.hypot(mouseX - pillCenterX, mouseY - pillCenterY);

        if (distance < radius) {
          pill.classList.add(styles.activePill);
        } else {
          pill.classList.remove(styles.activePill);
        }
      });
    };

    const handleMouseLeave = () => {
      // Clear active classes when mouse leaves
      pillsRef.current.forEach(pill => {
        if (pill) pill.classList.remove(styles.activePill);
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
      
      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className={styles.clientsWrap} ref={containerRef}>
      {clients.map((name, idx) => (
        <div 
          key={idx} 
          className={styles.clientPill}
          ref={(el) => { pillsRef.current[idx] = el; }}
        >
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}
