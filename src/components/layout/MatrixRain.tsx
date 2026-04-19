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
    const words = ["Amruth Pai", "Immortal Pi", "Pai", "ML Engineer", "UT Dallas","AI Engineer", "Data Scientist"];

    const chars = [
      ...katakana.repeat(3),
      ...latin.repeat(3),
      ...nums.repeat(3),
      ...words,
    ];

    const fontSize = window.innerWidth < 768 ? 18 : 16;
    let columns = Math.floor(canvas.width / fontSize);
    let drops: number[] = Array.from({ length: columns }, () => 1);

    const FRAME_INTERVAL = 60;
    let lastTime = 0;
    let rafId: number;

    const draw = (timestamp: number) => {
      rafId = requestAnimationFrame(draw);
      if (timestamp - lastTime < FRAME_INTERVAL) return;
      lastTime = timestamp;

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    rafId = requestAnimationFrame(draw);

    const onResize = () => {
      resize();
      columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () => 1);
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
