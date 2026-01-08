"use client";

import { motion, useReducedMotion } from "framer-motion";
import { wrapped2025 } from "@/lib/data";

export default function SummarySection() {
  const prefersReducedMotion = useReducedMotion();

  const items = [
    { label: "En yoğun ay", value: "Ekim" },
    { label: "En yoğun saat", value: "21:00" },
    { label: "Toplam konu", value: wrapped2025.topics.length }
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, x: -24 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur"
      >
        <h2 className="text-3xl font-semibold">Özet</h2>
        <p className="mt-4 text-white/80">
          Bu yıl toplam {wrapped2025.totalMessages.toLocaleString("tr-TR")} mesajla, birlikte
          {" "}
          {wrapped2025.activeDays} gün çevrimiçi kaldınız.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">{item.label}</p>
              <p className="mt-2 text-xl font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col justify-between gap-6 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Sürpriz</p>
          <h3 className="mt-3 text-2xl font-semibold">Gün içinde 21:00 sonrası temposu zirvede.</h3>
          <p className="mt-3 text-white/70">Gece kuşu modunuz 2025 boyunca hiç düşmedi.</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">Hızlı istatistik</p>
          <p className="mt-2 text-lg">Haftada ortalama 1460 mesaj</p>
        </div>
      </motion.div>
    </div>
  );
}
