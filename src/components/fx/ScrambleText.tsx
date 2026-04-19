"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*<>/{}";

type Props = {
  text: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  duration?: number;
  triggerOnView?: boolean;
};

export default function ScrambleText({
  text,
  className,
  as: As = "span",
  duration = 700,
  triggerOnView = true,
}: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number>(0);
  const [display, setDisplay] = useState(reduced ? text : "");

  useEffect(() => {
    if (reduced) {
      setDisplay(text);
      return;
    }

    const run = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      const start = performance.now();
      const chars = text.split("");

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const revealCount = Math.floor(t * chars.length);
        const out = chars
          .map((c, i) => {
            if (c === " ") return " ";
            if (i < revealCount) return c;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("");
        setDisplay(out);
        if (t < 1) rafRef.current = requestAnimationFrame(tick);
        else setDisplay(text);
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    if (!triggerOnView) {
      run();
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }

    const el = ref.current;
    if (!el) {
      run();
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }

    let wasOut = true;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            if (wasOut) {
              wasOut = false;
              run();
            }
          } else {
            wasOut = true;
          }
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [text, duration, triggerOnView, reduced]);

  const Tag = As as "span";
  return (
    <Tag ref={ref as React.Ref<HTMLSpanElement>} className={className}>
      {display || "\u00A0"}
    </Tag>
  );
}
