"use client";

import { motion, useReducedMotion } from "framer-motion";
import { wrapped2025 } from "@/lib/data";

export default function EmojisStickersSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur"
      >
        <h2 className="text-3xl font-semibold">Emoji MVP</h2>
        <p className="mt-3 text-white/70">En çok kullanılan emojiler.</p>
        <div className="mt-6 grid gap-3">
          {wrapped2025.emojiTop.map((emoji) => (
            <div key={emoji.emoji} className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-2">
              <span className="text-2xl">{emoji.emoji}</span>
              <span className="text-sm text-white/60">{emoji.count}</span>
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
        <h3 className="text-2xl font-semibold">Sticker Spotlight</h3>
        <p className="mt-2 text-white/70">Top sticker koleksiyonunuz.</p>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {wrapped2025.stickers.map((sticker) => (
            <div
              key={sticker.id}
              className="flex flex-col items-center justify-center rounded-2xl bg-white/10 px-2 py-3 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/40 to-cyan-400/40 text-xs font-semibold">
                {sticker.label}
              </div>
              <p className="mt-2 text-xs text-white/70">{sticker.count} kez</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
