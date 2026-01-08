"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function WeeklyHighlightsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur"
      >
        <h2 className="text-3xl font-semibold">Weekly Highlights</h2>
        <p className="mt-3 text-white/70">Her hafta bir hikaye.</p>
        <div className="mt-6 space-y-4">
          {[
            { title: "Hafta 12", note: "3 gün içinde 2200 mesaj" },
            { title: "Hafta 27", note: "Yeni proje planı + 8 video" },
            { title: "Hafta 41", note: "Tatlı bir sürpriz planlandı" }
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-white/10 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">{item.title}</p>
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
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Haftanın teması</p>
          <h3 className="mt-3 text-2xl font-semibold">"Planlar ve sürprizler"</h3>
          <p className="mt-3 text-white/70">En yoğun hafta, ortak planlarla doluydu.</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">Öne çıkan</p>
          <p className="mt-2 text-sm text-white/70">Haftalık medya paylaşımı 3 kat arttı.</p>
        </div>
      </motion.div>
    </div>
  );
}
