"use client";

import { motion, useReducedMotion } from "framer-motion";
import CanvasBarWeekdays from "@/components/charts/CanvasBarWeekdays";
import { wrapped2025 } from "@/lib/data";

export default function WeekdaySection() {
  const prefersReducedMotion = useReducedMotion();

  const weekdays = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur"
      >
        <h2 className="text-3xl font-semibold">Haftalık tempo</h2>
        <p className="mt-3 text-white/70">Haftanın hangi günleri mesajlar artıyor?</p>
        <div className="mt-6 rounded-2xl bg-white/5 p-4">
          <CanvasBarWeekdays data={wrapped2025.weekdayTotals} />
          <div className="mt-4 flex justify-between text-xs uppercase tracking-[0.2em] text-white/50">
            {weekdays.map((day) => (
              <span key={day}>{day}</span>
            ))}
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
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Hafta sonu modu</p>
          <h3 className="mt-3 text-2xl font-semibold">Cumartesi sohbetler uzuyor.</h3>
          <p className="mt-3 text-white/70">Gündem: planlar, anılar, bolca meme.</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">Peak gün</p>
          <p className="mt-2 text-sm text-white/70">Cumartesi</p>
        </div>
      </motion.div>
    </div>
  );
}
