import { skills } from "@/data/skills";
import SkillCategoryComponent from "@/components/skills/SkillCategory";

export default function SkillsSection() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          Skills & Interests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category) => (
            <SkillCategoryComponent key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
