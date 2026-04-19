import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/data/skills";
import SkillCategoryComponent from "@/components/skills/SkillCategory";
import SectionHeader from "@/components/fx/SectionHeader";
import { Reveal } from "@/components/fx/Reveal";

export default function SkillsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Skills" />

        <Reveal>
        <Card className="bg-card border-border/50 corner-brackets">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((category) => (
                <SkillCategoryComponent key={category.name} category={category} />
              ))}
            </div>
          </CardContent>
        </Card>
        </Reveal>
      </div>
    </section>
  );
}
