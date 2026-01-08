"use client";

import { motion, useReducedMotion } from "framer-motion";
import { wrapped2025 } from "@/lib/data/wrapped2025";

export default function CallsMediaSection() {
  const prefersReducedMotion = useReducedMotion();
  const { whatsapp, media, gsmInsights } = wrapped2025.callsMedia;

  return (
    <div className="space-y-6">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur"
      >
        <h2 className="text-3xl font-semibold">Aramalar & Medya</h2>
        <p className="mt-3 text-white/70">WhatsApp tarafındaki paylaşım hacmi.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {whatsapp.map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {media.map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">{item.label}</p>
              <p className="mt-2 text-lg font-semibold">{item.value}</p>
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
        <h3 className="text-2xl font-semibold">GSM Alo Insights</h3>
        <p className="mt-2 text-white/70">WhatsApp dışındaki arama özetleri.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InsightCard label="Toplam arama" value={`${gsmInsights.callCount}`} />
          <InsightCard label="Toplam süre" value={gsmInsights.totalDuration} />
          <InsightCard label="Ortalama süre" value={gsmInsights.avgDuration} />
          <InsightCard label="Medyan süre" value={gsmInsights.medianDuration} />
          <InsightCard label="En uzun" value={gsmInsights.longestCall} />
          <InsightCard label="En kısa" value={gsmInsights.shortestCall} />
          <InsightCard label="Peak hour" value={gsmInsights.peakHourByDuration} />
          <InsightCard label="Peak weekday" value={gsmInsights.peakWeekdayByDuration} />
          <InsightCard label="Peak month" value={gsmInsights.peakMonthByDuration} />
        </div>
      </motion.div>
    </div>
  );
}

function InsightCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-white/60">{label}</p>
      <p className="mt-2 text-sm font-semibold text-white/90">{value}</p>
    </div>
  );
}
