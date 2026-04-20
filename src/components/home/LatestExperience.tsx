import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { experiences } from "@/data/experience";
import TimelineItem from "@/components/experience/TimelineItem";
import SectionHeader from "@/components/fx/SectionHeader";
import { Reveal } from "@/components/fx/Reveal";

export default function LatestExperience() {
  const latest = experiences.slice(0, 2);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Latest Experience" />

        <Reveal>
          {latest.map((exp) => (
            <TimelineItem key={exp.company + exp.startDate} exp={exp} />
          ))}
        </Reveal>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" nativeButton={false} render={<Link href="/experience" />}>
              View All Experience
              <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </section>
  );
}
