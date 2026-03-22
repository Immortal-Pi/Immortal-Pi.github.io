import { SkillCategory as SkillCategoryType } from "@/lib/types";

export default function SkillCategory({ category }: { category: SkillCategoryType }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-3">{category.name}</h4>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs bg-green-500/10 text-green-400 px-3 py-1 rounded-full border border-green-500/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
