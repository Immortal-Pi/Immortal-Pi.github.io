import { Badge } from "@/components/ui/badge";
import { SkillCategory as SkillCategoryType } from "@/lib/types";

export default function SkillCategory({ category }: { category: SkillCategoryType }) {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="font-heading text-sm font-bold tracking-wide uppercase text-primary">
        {category.name}
      </h4>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
