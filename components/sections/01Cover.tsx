"use client";

import { motion, useReducedMotion } from "framer-motion";
import { wrapped2025 } from "@/lib/data/wrapped2025";

export default function CoverSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex min-h-[70svh] flex-col justify-center">
      <motion.span
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm uppercase tracking-[0.3em] text-white/60"
      >
        WhatsApp Wrapped
      </motion.span>
      <motion.h1
        initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl"
      >
        {wrapped2025.personA} &amp; {wrapped2025.personB}
      </motion.h1>
      <motion.p
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-4 max-w-md text-lg text-white/80"
      >
        2025 boyunca sohbetinizin ritmi, kahkahası ve küçük detayları burada.
      </motion.p>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          { label: "Mesaj", value: wrapped2025.totalMessages.toLocaleString("tr-TR") },
          { label: "Kelime", value: wrapped2025.totalWords.toLocaleString("tr-TR") },
          { label: "Aktif gün", value: wrapped2025.activeDays }
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-glow backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
