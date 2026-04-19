import { Metadata } from "next";
import ExperiencePageClient from "@/components/experience/ExperiencePageClient";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience and education of Amruth Pai Thukaram.",
};

export default function ExperiencePage() {
  return <ExperiencePageClient />;
}
