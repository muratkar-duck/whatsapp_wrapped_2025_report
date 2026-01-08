"use client";

import { motion, useReducedMotion } from "framer-motion";
import CanvasWordCloud from "@/components/charts/CanvasWordCloud";
import { wrapped2025 } from "@/lib/data";

export default function WordCloudSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur"
      >
        <h2 className="text-3xl font-semibold">Word Cloud</h2>
        <p className="mt-3 text-white/70">Sizin kelimelerinizin görsel izi.</p>
        <div className="mt-6 rounded-2xl bg-white/5 p-4">
          <CanvasWordCloud data={wrapped2025.wordCloud} />
        </div>
      </motion.div>
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"
      >
        <h3 className="text-2xl font-semibold">Top Words</h3>
        <p className="mt-2 text-white/70">En çok kullandığınız kelimeler.</p>
        <div className="mt-4 max-h-[50svh] space-y-2 overflow-y-auto pr-2">
          {wrapped2025.topWords.map((word) => (
            <div key={word.word} className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-2">
              <span className="text-sm">{word.word}</span>
              <span className="text-sm text-white/60">{word.count}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
