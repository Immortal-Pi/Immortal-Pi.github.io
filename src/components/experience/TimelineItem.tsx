import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Experience } from "@/lib/types";

export default function TimelineItem({ exp }: { exp: Experience }) {
  return (
    <div className="relative pl-8 pb-8 border-l border-border last:border-l-0 last:pb-0">
      <div className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-primary ring-4 ring-background animate-pulse-neon" />
      <Card className="bg-card border-border/50 hover:border-primary/30 transition-colors corner-brackets">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
            <CardTitle className="text-base">{exp.role}</CardTitle>
            <span className="font-heading text-xs text-primary whitespace-nowrap">
              {exp.startDate} &ndash; {exp.endDate}
            </span>
          </div>
          <CardDescription>
            {exp.company}
            {exp.location && `, ${exp.location}`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-2">
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                <span className="text-primary mt-1 shrink-0">&#9656;</span>
                {bullet}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
