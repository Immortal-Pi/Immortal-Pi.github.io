import { Metadata } from "next";
import Timeline from "@/components/experience/Timeline";
import EducationCard from "@/components/experience/EducationCard";
import { education } from "@/data/education";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience and education of Amruth Pai Thukaram.",
};

export default function ExperiencePage() {
  return (
    <div className="relative z-10 pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          Work Experience
        </h1>
        <Timeline />

        <h2 className="text-3xl font-bold text-white mt-20 mb-10 text-center">
          Education
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu) => (
            <EducationCard key={edu.school} edu={edu} />
          ))}
        </div>
      </div>
    </div>
  );
}
