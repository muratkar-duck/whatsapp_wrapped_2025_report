"use client";

import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ProgressDots from "./ProgressDots";

interface WrappedShellProps {
  children: ReactNode;
  totalSections: number;
}

export default function WrappedShell({ children, totalSections }: WrappedShellProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = Array.from(
      container.querySelectorAll<HTMLElement>("[data-wrapped-section]")
    );

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target as HTMLElement);
            if (index >= 0) setActiveIndex(index);
          }
        });
      },
      {
        root: container,
        threshold: 0.55
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const blobVariants = useMemo(
    () =>
      prefersReducedMotion
        ? {}
        : {
            animate: {
              scale: [1, 1.08, 1],
              transition: {
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }
          },
    [prefersReducedMotion]
  );

  return (
    <div className="relative h-[100svh] overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="gradient-blob absolute -left-24 top-10 h-64 w-64 rounded-full bg-purple-500/50"
          variants={blobVariants}
          animate="animate"
        />
        <motion.div
          className="gradient-blob absolute right-0 top-40 h-72 w-72 rounded-full bg-cyan-400/50"
          variants={blobVariants}
          animate="animate"
        />
        <motion.div
          className="gradient-blob absolute bottom-24 left-10 h-72 w-72 rounded-full bg-lime-400/40"
          variants={blobVariants}
          animate="animate"
        />
        <motion.div
          className="gradient-blob absolute bottom-10 right-10 h-60 w-60 rounded-full bg-pink-500/40"
          variants={blobVariants}
          animate="animate"
        />
      </div>

      <div
        ref={containerRef}
        className="relative h-[100svh] w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth"
      >
        {children}
      </div>

      <ProgressDots total={totalSections} activeIndex={activeIndex} />
    </div>
  );
}
