"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ArchiveReadySection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex min-h-[70svh] flex-col justify-center">
      <motion.p
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm uppercase tracking-[0.3em] text-white/50"
      >
        Wrapped hazır
      </motion.p>
      <motion.h2
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 text-4xl font-semibold"
      >
        Arşiviniz 2025'e hazır.
      </motion.h2>
      <motion.p
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 max-w-xl text-lg text-white/80"
      >
        Yeni veri geldiğinde sadece lib/data/wrapped2025.ts dosyasını güncellemeniz yeterli.
      </motion.p>
    </div>
  );
}
