"use client";

import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  always?: boolean;
};

export default function GlitchText({ children, className, as: As = "span", always = false }: Props) {
  const Tag = As as "span";
  return (
    <Tag
      className={cn("glitch inline-block", className)}
      data-glitch={always ? "on" : undefined}
    >
      {children}
    </Tag>
  );
}
