"use client";

import { motion, useReducedMotion } from "framer-motion";
import { wrapped2025 } from "@/lib/data";

export default function TopPhrasesSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur"
      >
        <h2 className="text-3xl font-semibold">Top Phrases</h2>
        <p className="mt-3 text-white/70">Klasikleşmiş sözleriniz.</p>
        <div className="mt-6 space-y-3">
          {wrapped2025.topPhrases.map((phrase) => (
            <div key={phrase.phrase} className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
              <span className="text-sm">{phrase.phrase}</span>
              <span className="text-sm text-white/60">{phrase.count}</span>
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
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Klişe ama iyi</p>
          <h3 className="mt-3 text-2xl font-semibold">"Tamamdır" yılın favorisi.</h3>
          <p className="mt-3 text-white/70">Her plan, her sohbet burada bağlandı.</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">Bonus</p>
          <p className="mt-2 text-sm text-white/70">"Ben yoldayım" tam 182 kez yazıldı.</p>
        </div>
      </motion.div>
    </div>
  );
}
