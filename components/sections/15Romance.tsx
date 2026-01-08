"use client";

import { motion, useReducedMotion } from "framer-motion";
import { wrapped2025 } from "@/lib/data";

export default function RomanceSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur"
      >
        <h2 className="text-3xl font-semibold">Romantik notlar</h2>
        <p className="mt-3 text-white/70">Küçük ama güçlü mesajlar.</p>
        <div className="mt-6 max-h-[50svh] space-y-3 overflow-y-auto pr-2">
          {wrapped2025.romanceQuotes.map((quote) => (
            <div key={quote} className="rounded-2xl bg-white/10 px-4 py-3 text-sm text-white/80">
              “{quote}”
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
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Mood</p>
          <h3 className="mt-3 text-2xl font-semibold">"Bugünün en iyi kısmı" teması.</h3>
          <p className="mt-3 text-white/70">Sık sık şükran ve takdir mesajı gönderdiniz.</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">En yoğun ay</p>
          <p className="mt-2 text-sm text-white/70">Şubat</p>
        </div>
      </motion.div>
    </div>
  );
}
