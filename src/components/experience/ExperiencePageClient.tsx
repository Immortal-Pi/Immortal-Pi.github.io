"use client";

import { Separator } from "@/components/ui/separator";
import Timeline from "@/components/experience/Timeline";
import EducationCard from "@/components/experience/EducationCard";
import { education } from "@/data/education";
import GlitchText from "@/components/fx/GlitchText";
import TypedText from "@/components/fx/TypedText";
import { Reveal } from "@/components/fx/Reveal";
import SectionHeader from "@/components/fx/SectionHeader";

export default function ExperiencePageClient() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <h1
            className="matrix-veil font-heading text-4xl font-bold tracking-tight text-foreground mb-3 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <GlitchText as="span" always>Experience</GlitchText>
          </h1>
          <p
            className="matrix-veil text-muted-foreground text-lg leading-relaxed opacity-0 animate-fade-in min-h-[3.5rem]"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <TypedText
              text="Professional journey from software engineering to AI & ML."
              delay={500}
              speed={22}
            />
          </p>
        </div>
        <Separator className="mb-12" />

        <Reveal>
          <Timeline />
        </Reveal>

        <div className="mt-20">
          <SectionHeader title="Education" />
          <Reveal>
            <div className="max-w-3xl mx-auto flex flex-col gap-6">
              {education.map((edu) => (
                <EducationCard key={edu.school} edu={edu} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
