import { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectGrid from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI, ML, and data engineering projects by Amruth Pai Thukaram.",
};

export default function ProjectsPage() {
  return (
    <div className="relative z-10 pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">
          Projects
        </h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A collection of ML, AI, and data engineering projects showcasing
          end-to-end pipelines, deep learning models, and intelligent applications.
        </p>
        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
}
