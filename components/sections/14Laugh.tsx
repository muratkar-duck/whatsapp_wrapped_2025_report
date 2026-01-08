"use client";

import { motion, useReducedMotion } from "framer-motion";
import { wrapped2025 } from "@/lib/data/wrapped2025";

export default function LaughSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur"
      >
        <h2 className="text-3xl font-semibold">Kahkaha anları</h2>
        <p className="mt-3 text-white/70">Gülme krizlerini tetikleyen mesajlar.</p>
        <div className="mt-6 space-y-3">
          {wrapped2025.laughQuotes.map((quote) => (
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
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Emoji etkisi</p>
          <h3 className="mt-3 text-2xl font-semibold">😂 yılın maskotu oldu.</h3>
          <p className="mt-3 text-white/70">Her komik an mutlaka bir emojiyle taçlandı.</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">Not</p>
          <p className="mt-2 text-sm text-white/70">Kahkaha teması 42 kez geri döndü.</p>
        </div>
      </motion.div>
    </div>
  );
}
