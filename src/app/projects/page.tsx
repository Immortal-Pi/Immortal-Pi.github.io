import { Metadata } from "next";
import ProjectsPageClient from "@/components/projects/ProjectsPageClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI, ML, and data engineering projects by Amruth Pai Thukaram.",
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
