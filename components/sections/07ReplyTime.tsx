"use client";

import { motion, useReducedMotion } from "framer-motion";
import CanvasHistogram from "@/components/charts/CanvasHistogram";
import { wrapped2025 } from "@/lib/data/wrapped2025";

const formatWait = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  const parts = [];
  if (hours) parts.push(`${hours}s`);
  if (minutes) parts.push(`${minutes}dk`);
  if (secs) parts.push(`${secs}sn`);
  return parts.join(" ");
};

export default function ReplyTimeSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur"
      >
        <h2 className="text-3xl font-semibold">Cevap süresi</h2>
        <p className="mt-3 text-white/70">Bekleme sürelerinin dağılımı.</p>
        <div className="mt-6 rounded-2xl bg-white/5 p-4">
          <CanvasHistogram data={wrapped2025.replyHistogram} />
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">Ortalama</p>
            <p className="mt-2 text-xl font-semibold">
              {formatWait(wrapped2025.replyMeanSeconds)}
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">Medyan</p>
            <p className="mt-2 text-xl font-semibold">
              {formatWait(wrapped2025.replyMedianSeconds)}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"
      >
        <h3 className="text-2xl font-semibold">Top Waits</h3>
        <p className="mt-2 text-white/70">5 unutulmaz bekleme anı.</p>
        <div className="mt-4 max-h-[52svh] space-y-4 overflow-y-auto pr-2">
          {wrapped2025.replyWaits.map((wait) => (
            <div key={wait.timestamp} className="rounded-2xl bg-white/10 p-4">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/60">
                <span>{wait.senderBefore} → {wait.senderAfter}</span>
                <span>{formatWait(wait.waitSeconds)}</span>
              </div>
              <p className="mt-2 text-xs text-white/50">{wait.timestamp}</p>
              <div className="mt-4 space-y-2">
                {wait.beforeMessages.map((msg, index) => (
                  <div
                    key={`before-${index}-${msg.ts}`}
                    className={`flex ${msg.sender === wrapped2025.personA ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                        msg.sender === wrapped2025.personA
                          ? "bg-white/15 text-white"
                          : "bg-emerald-400/20 text-white"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p className="mt-1 text-[10px] text-white/50">{msg.ts}</p>
                    </div>
                  </div>
                ))}
                <div className="h-4" />
                {wait.afterMessages.map((msg, index) => (
                  <div
                    key={`after-${index}-${msg.ts}`}
                    className={`flex ${msg.sender === wrapped2025.personA ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                        msg.sender === wrapped2025.personA
                          ? "bg-white/15 text-white"
                          : "bg-emerald-400/20 text-white"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p className="mt-1 text-[10px] text-white/50">{msg.ts}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
