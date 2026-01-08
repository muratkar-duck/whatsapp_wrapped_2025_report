"use client";

import { motion, useReducedMotion } from "framer-motion";
import { wrapped2025 } from "@/lib/data/wrapped2025";

export default function TopicsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur"
      >
        <h2 className="text-3xl font-semibold">Konular</h2>
        <p className="mt-3 text-white/70">2025 boyunca konuştuğunuz başlıklar.</p>
        <div className="mt-4 max-h-[50svh] space-y-3 overflow-y-auto pr-2">
          {wrapped2025.topics.map((topic) => (
            <div key={topic} className="rounded-2xl bg-white/10 px-4 py-3">
              <p className="text-sm font-medium">{topic}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"
      >
        <h3 className="text-2xl font-semibold">Topic Samples</h3>
        <p className="mt-2 text-white/70">Biraz nostalji.</p>
        <div className="mt-4 space-y-4">
          {wrapped2025.topicSamples.map((sample) => (
            <div key={sample.topic} className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">{sample.topic}</p>
              <p className="mt-2 text-sm text-white/80">{sample.sample}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
