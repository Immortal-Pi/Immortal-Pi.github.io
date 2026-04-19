"use client";

import { useRef, useEffect, useCallback } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const setup = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return () => {};

    const ctx = canvas.getContext("2d");
    if (!ctx) return () => {};

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      canvas.style.background = "#000";
      return () => {};
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const katakana =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const symbols = "{}<>/=+$;:*#&%?!|\\[]()";
    const greek = "πλΣΩ∆∇∞";
    const words = ["Amruth Pai", "Immortal Pi", "Pai", "ML Engineer", "UT Dallas", "Texas"];

    const chars = [
      ...katakana.repeat(3),
      ...latin.repeat(2),
      ...nums.repeat(2),
      ...symbols.repeat(2),
      ...greek,
      ...words,
    ];

    const isMobile = window.innerWidth < 768;
    const fontNear = isMobile ? 20 : 14;
    const fontFar = isMobile ? 13 : 10;

    type Layer = {
      fontSize: number;
      columns: number;
      drops: number[];
      speed: number;
      trailColor: string;
      headAlpha: number;
    };

    const buildLayer = (fontSize: number, speed: number, trailColor: string, headAlpha: number): Layer => {
      const columns = Math.floor(canvas.width / fontSize);
      return {
        fontSize,
        columns,
        drops: Array.from({ length: columns }, () => Math.floor(Math.random() * (canvas.height / fontSize))),
        speed,
        trailColor,
        headAlpha,
      };
    };

    let farLayer = buildLayer(fontFar, 0.55, "rgba(0, 180, 80, 0.55)", 0.55);
    let nearLayer = buildLayer(fontNear, 1, "#0f0", 1);

    const FRAME_INTERVAL = 55;
    let lastTime = 0;
    let rafId: number;

    const drawLayer = (layer: Layer, mostlyHead = true) => {
      ctx.font = `${layer.fontSize}px monospace`;
      for (let i = 0; i < layer.drops.length; i++) {
        const idx = Math.floor(Math.random() * chars.length);
        const text = chars[idx];
        const x = i * layer.fontSize;
        const y = layer.drops[i] * layer.fontSize;

        if (mostlyHead) {
          const r = Math.random();
          if (r < 0.06) {
            ctx.fillStyle = `oklch(0.7 0.15 310 / ${layer.headAlpha})`;
          } else if (r < 0.1) {
            ctx.fillStyle = `oklch(0.72 0.12 230 / ${layer.headAlpha})`;
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${layer.headAlpha})`;
          }
        } else {
          ctx.fillStyle = layer.trailColor;
        }
        ctx.fillText(text, x, y);

        if (layer.drops[i] - 1 > 0) {
          const tIdx = Math.floor(Math.random() * chars.length);
          ctx.fillStyle = layer.trailColor;
          ctx.fillText(chars[tIdx], x, y - layer.fontSize);
        }

        if (y > canvas.height && Math.random() > 0.975) {
          layer.drops[i] = 0;
        }
        layer.drops[i] += layer.speed;
      }
    };

    const draw = (timestamp: number) => {
      rafId = requestAnimationFrame(draw);
      if (timestamp - lastTime < FRAME_INTERVAL) return;
      lastTime = timestamp;

      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawLayer(farLayer);
      drawLayer(nearLayer);
    };

    rafId = requestAnimationFrame(draw);
    const onResize = () => {
      resize();
      farLayer = buildLayer(fontFar, 0.55, "rgba(0, 180, 80, 0.55)", 0.55);
      nearLayer = buildLayer(fontNear, 1, "#0f0", 1);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const cleanup = setup();
    return cleanup;
  }, [setup]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ willChange: "transform" }}
      aria-hidden="true"
    />
  );
}
