"use client";

import { useEffect, useRef } from "react";
import { drawBars } from "@/lib/canvas/draw";
import { scaleCanvas } from "@/lib/canvas/scale";

interface CanvasBarMonthProps {
  data: number[];
}

export default function CanvasBarMonth({ data }: CanvasBarMonthProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (!width || !height) return;
        scaleCanvas(canvas, ctx, width, height);
        drawBars({
          ctx,
          data,
          width,
          height,
          barColor: "rgba(99,102,241,0.85)",
          gap: 6,
          radius: 8
        });
      }
    });

    observer.observe(canvas.parentElement as Element);
    return () => observer.disconnect();
  }, [data]);

  return <canvas ref={canvasRef} className="h-32 w-full" />;
}
