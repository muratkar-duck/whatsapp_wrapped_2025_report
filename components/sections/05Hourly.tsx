"use client";

import { motion, useReducedMotion } from "framer-motion";
import CanvasBarHours from "@/components/charts/CanvasBarHours";
import { wrapped2025 } from "@/lib/data";

export default function HourlySection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur"
      >
        <h2 className="text-3xl font-semibold">Saatlere göre tempo</h2>
        <p className="mt-3 text-white/70">Günün hangi saatlerinde daha aktifsiniz?</p>
        <div className="mt-6 rounded-2xl bg-white/5 p-4">
          <CanvasBarHours data={wrapped2025.hourlyTotals} />
        </div>
      </motion.div>
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col justify-between rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Ritüel</p>
          <h3 className="mt-3 text-2xl font-semibold">21:00 sonrası mesaj fırtınası.</h3>
          <p className="mt-3 text-white/70">Akşam çayından sonra sohbet hep açılıyor.</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">En sakin aralık</p>
          <p className="mt-2 text-sm text-white/70">03:00 - 05:00</p>
        </div>
      </motion.div>
    </div>
  );
}
