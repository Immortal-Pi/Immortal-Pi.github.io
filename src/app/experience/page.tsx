import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import Timeline from "@/components/experience/Timeline";
import EducationCard from "@/components/experience/EducationCard";
import { education } from "@/data/education";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience and education of Amruth Pai Thukaram.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground mb-3">
            Experience
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Professional journey from software engineering to AI &amp; ML.
          </p>
        </div>
        <Separator className="mb-12" />

        <Timeline />

        <div className="flex items-center gap-4 mt-20 mb-10">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground whitespace-nowrap">
            Education
          </h2>
          <Separator className="flex-1" />
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {education.map((edu) => (
            <EducationCard key={edu.school} edu={edu} />
          ))}
        </div>
      </div>
    </div>
  );
}
