import Rating from "@/components/skills/rating";
import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div>
      {skills.map((skill, id) => (
        <div
          key={id}
          className="relative overflow-hidden rounded-lg border bg-background p-2"
        >
          <div className="flex h-[250px] flex-col justify-between rounded-md p-6 sm:h-[250px]">
            <skill.icon size={50} />
            <div className="space-y-2">
              <h3 className="font-bold">{skill.name}</h3>
              <p className="text-xs text-primary/60">{skill.category}</p> {/* แสดงประเภท */}
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
              <Rating stars={skill.rating} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
