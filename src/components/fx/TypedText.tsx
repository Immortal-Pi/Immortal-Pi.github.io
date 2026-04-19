"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  showCaret?: boolean;
};

export default function TypedText({ text, className, speed = 28, delay = 0, showCaret = true }: Props) {
  const reduced = useReducedMotion();
  const [out, setOut] = useState(reduced ? text : "");
  const [done, setDone] = useState(reduced);

  useEffect(() => {
    if (reduced) return;
    let i = 0;
    let interval: ReturnType<typeof setInterval> | null = null;
    const kickoff = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) {
          if (interval) clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, delay);
    return () => {
      clearTimeout(kickoff);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, delay, reduced]);

  return (
    <span className={cn(showCaret && !done && "typed-caret", className)}>
      {out}
    </span>
  );
}
