"use client";

import { motion, useReducedMotion } from "framer-motion";
import CanvasBarMonth from "@/components/charts/CanvasBarMonth";
import { wrapped2025 } from "@/lib/data";

export default function MonthlySection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur"
      >
        <h2 className="text-3xl font-semibold">Aylar</h2>
        <p className="mt-3 text-white/70">Her ayın mesaj yoğunluğu.</p>
        <div className="mt-6 rounded-2xl bg-white/5 p-4">
          <CanvasBarMonth data={wrapped2025.monthlyTotals} />
        </div>
      </motion.div>
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col justify-between rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Peak</p>
          <h3 className="mt-3 text-2xl font-semibold">Ekim ayında zirveye çıktınız.</h3>
          <p className="mt-3 text-white/70">Birlikte 5.6K mesajlık bir sprint.</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">Kısa not</p>
          <p className="mt-2 text-sm text-white/70">Kasım ayında tempo biraz sakinleşti.</p>
        </div>
      </motion.div>
    </div>
  );
}
