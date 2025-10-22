import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";
import { useLang } from "@/providers/lang-provider";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { lang } = useLang();
  return (
    <div className="relative p-6 max-w-sm bg-background border border-border rounded-lg">
      <div className="relative w-full h-[200px]">
        <Image
          className="rounded-lg border border-border object-cover"
          src={project.companyLogoImg}
          alt="img"
          fill
        />
      </div>
      <div className="pt-5 space-y-3">
        <h5 className="text-2xl font-bold tracking-tight text-foreground">
          {project.companyName[lang]}
        </h5>
        <p className="line-clamp-3 font-normal text-muted-foreground">
          {project.shortDescription[lang]}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>
        <Link href={`/projects/${project.id}`}>
          <Button variant={"default"} className="mt-2">
            {lang === "th" ? "อ่านเพิ่มเติม" : "Read more"}
            <Icons.chevronRight className="w-4 ml-1" />
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-4 right-4 p-3 rounded-full bg-background border border-border">
        {project.type === "External Systems (Clients)" ? (
          <Icons.userFill className="h-4 w-4" />
        ) : (
          <Icons.work className="h-4 w-4" />
        )}
      </div>
    </div>
  );
}
