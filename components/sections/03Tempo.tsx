"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function TempoSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur"
      >
        <h2 className="text-3xl font-semibold">Tempo</h2>
        <p className="mt-4 text-white/80">
          Gün içinde farklı ritimler, hafta sonunda ise zirve yapan uzun mesaj serileri.
        </p>
        <div className="mt-8 flex items-center gap-6">
          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">En uzun seri</p>
            <p className="mt-2 text-2xl font-semibold">2 saat 42 dk</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">Ortalama cevap</p>
            <p className="mt-2 text-2xl font-semibold">23 dk</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-3xl border border-white/15 bg-gradient-to-br from-white/15 to-white/5 p-6 backdrop-blur"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">Ritim kartı</p>
        <h3 className="mt-4 text-2xl font-semibold">"Gün ortası kısa ping, gece uzun sohbet"</h3>
        <p className="mt-3 text-white/70">
          2025 boyunca en yoğun sohbet aralığı 20:00-23:00 arasında.
        </p>
      </motion.div>
    </div>
  );
}
