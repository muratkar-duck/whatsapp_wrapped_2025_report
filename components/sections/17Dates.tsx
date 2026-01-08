"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function DatesSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur"
      >
        <h2 className="text-3xl font-semibold">Takvim anları</h2>
        <p className="mt-3 text-white/70">Tarihlere kazınan mesajlar.</p>
        <div className="mt-6 space-y-3">
          {[
            { date: "2025-02-14", note: "Valentine özel mesaj serisi" },
            { date: "2025-06-22", note: "GSM en uzun görüşme" },
            { date: "2025-10-14", note: "Yılın en yoğun sohbet günü" }
          ].map((item) => (
            <div key={item.date} className="rounded-2xl bg-white/10 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">{item.date}</p>
              <p className="mt-2 text-sm text-white/80">{item.note}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col justify-between rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Kilit tarih</p>
          <h3 className="mt-3 text-2xl font-semibold">2025-10-14 sizi çok konuşturdu.</h3>
          <p className="mt-3 text-white/70">O gün planlar ve sürprizler üst üste geldi.</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">İpucu</p>
          <p className="mt-2 text-sm text-white/70">Fotoğraf paylaşımı en çok bu haftada arttı.</p>
        </div>
      </motion.div>
    </div>
  );
}
