"use client";

import { useEffect, useRef } from "react";
import { drawWordCloud } from "@/lib/canvas/draw";
import { scaleCanvas } from "@/lib/canvas/scale";

interface CanvasWordCloudProps {
  data: { word: string; weight: number }[];
}

export default function CanvasWordCloud({ data }: CanvasWordCloudProps) {
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
        drawWordCloud({
          ctx,
          data,
          width,
          height,
          palette: ["#f472b6", "#a855f7", "#22d3ee", "#34d399", "#facc15"]
        });
      }
    });

    observer.observe(canvas.parentElement as Element);
    return () => observer.disconnect();
  }, [data]);

  return <canvas ref={canvasRef} className="h-44 w-full" />;
}
