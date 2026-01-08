"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ClosingSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex min-h-[70svh] flex-col justify-center">
      <motion.h2
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold"
      >
        2025 biriktirdiklerinizi kutlayın.
      </motion.h2>
      <motion.p
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 max-w-xl text-lg text-white/80"
      >
        Sohbetlerinizin ritmini, kahkahasını ve küçük detaylarını sakladık. Yeni yılda daha
        fazlası için hazır mısınız?
      </motion.p>
    </div>
  );
}
