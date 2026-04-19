"use client";

import { Separator } from "@/components/ui/separator";
import ScrambleText from "@/components/fx/ScrambleText";

export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-14">
      <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground whitespace-nowrap">
        <span className="text-matrix mr-2">//</span>
        <ScrambleText text={title} />
      </h2>
      <Separator className="flex-1" />
    </div>
  );
}
