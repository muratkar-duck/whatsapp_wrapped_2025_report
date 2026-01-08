"use client";

import { useEffect, useRef } from "react";
import { drawHistogram } from "@/lib/canvas/draw";
import { scaleCanvas } from "@/lib/canvas/scale";

interface CanvasHistogramProps {
  data: number[];
}

export default function CanvasHistogram({ data }: CanvasHistogramProps) {
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
        drawHistogram({
          ctx,
          data,
          width,
          height,
          barColor: "rgba(132,204,22,0.85)",
          gap: 4
        });
      }
    });

    observer.observe(canvas.parentElement as Element);
    return () => observer.disconnect();
  }, [data]);

  return <canvas ref={canvasRef} className="h-32 w-full" />;
}
