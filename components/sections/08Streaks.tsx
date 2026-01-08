"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function StreaksSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur"
      >
        <h2 className="text-3xl font-semibold">Seriler</h2>
        <p className="mt-3 text-white/70">Arka arkaya mesaj günleri.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">En uzun seri</p>
            <p className="mt-2 text-2xl font-semibold">42 gün</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">En yoğun hafta</p>
            <p className="mt-2 text-2xl font-semibold">8,140 mesaj</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col justify-between rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">En tatlı seri</p>
          <h3 className="mt-3 text-2xl font-semibold">"Günaydın" 29 gün üst üste.</h3>
          <p className="mt-3 text-white/70">Sabah rutini hiç şaşmadı.</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">Not</p>
          <p className="mt-2 text-sm text-white/70">Bu seri Mayıs ayında yaşandı.</p>
        </div>
      </motion.div>
    </div>
  );
}
