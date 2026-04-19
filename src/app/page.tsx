import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import LatestExperience from "@/components/home/LatestExperience";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import SkillsSection from "@/components/home/SkillsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <LatestExperience />
      <FeaturedProjects />
      <SkillsSection />
    </>
  );
}
