"use client"

import { Icons } from "@/components/common/icons";
import Rating from "@/components/skills/rating";
import { skillsInterface } from "@/config/skills";
import { useLang } from "@/providers/lang-provider";

interface SkillsCardProps {
  skills: skillsInterface[];
}

const iconMap = {
  nextjs: Icons.nextjs,
  react: Icons.react,
  graphql: Icons.graphql,
  nodejs: Icons.nodejs,
  mongodb: Icons.mongodb,
  typescript: Icons.typescript,
  javascript: Icons.javascript,
  html5: Icons.html5,
  css3: Icons.css3,
  socketio: Icons.socketio,
  mariadb: Icons.mariadb,
  tailwindcss: Icons.tailwindcss,
  amazonaws: Icons.amazonaws,
  bootstrap: Icons.bootstrap,
  mysql: Icons.mysql,
  docker: Icons.docker,
  fastapi: Icons.fastapi,
  django: Icons.django,
  python: Icons.python,
  vuedotjs: Icons.vuedotjs,
  apacheairflow: Icons.apacheairflow,
  postgresql: Icons.postgresql,
  nginx: Icons.nginx,
  github: Icons.github,
  figma: Icons.figma,
  threedotjs: Icons.threedotjs,
  vercel: Icons.vercel,
  postman: Icons.postman,
  gitlab: Icons.gitlab,
  code: Icons.code,
  dotnet: Icons.dotnet,
  csharp: Icons.csharp,
  php: Icons.php,
  laravel: Icons.laravel,
};

export default function SkillsCard({ skills }: SkillsCardProps) {
  const { lang } = useLang();
  return (
    <>
      {skills.map((skill, id) => {
        const IconComponent =
          iconMap[skill.icon as keyof typeof iconMap] || Icons.code;
        return (
          <div
            key={id}
            className="relative overflow-hidden rounded-lg border bg-background p-2"
          >
            <div className="flex h-[250px] flex-col justify-between rounded-md p-6 sm:h-[250px]">
              <IconComponent size={50} />
              <div className="space-y-2">
                <h3 className="font-bold">{skill.name}</h3>
                <p className="text-xs text-primary/60">{skill.category}</p>
                <p className="text-sm text-muted-foreground">
                  {skill.description[lang]}
                </p>
                <Rating stars={skill.rating} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
