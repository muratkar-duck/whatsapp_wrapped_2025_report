"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function BusiestCalmestSection() {
  const prefersReducedMotion = useReducedMotion();

  const cards = [
    { title: "En yoğun gün", value: "2025-10-14", detail: "1,482 mesaj" },
    { title: "En sakin gün", value: "2025-02-02", detail: "48 mesaj" }
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">{card.title}</p>
          <h3 className="mt-4 text-3xl font-semibold">{card.value}</h3>
          <p className="mt-2 text-white/70">{card.detail}</p>
        </motion.div>
      ))}
    </div>
  );
}
