"use client";

import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/projects/project-card";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { pagesConfig } from "@/config/pages";
import { Projects } from "@/config/projects";
import { useLang } from "@/providers/lang-provider";

const renderContent = (tabVal: string) => {
  let projectArr = Projects;
  if (tabVal === "internal") {
    projectArr = projectArr.filter((val) => val.type === "Internal Systems");
  } else if (tabVal === "external") {
    projectArr = projectArr.filter(
      (val) => val.type === "External Systems (Clients)"
    );
  }

  return (
    <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {projectArr.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};

export default function ProjectsPage() {
  const { lang } = useLang();

  const tabItems = [
    {
      value: "all",
      label: lang === "th" ? "ทั้งหมด" : "All",
      content: renderContent("all"),
    },
    {
      value: "internal",
      label: lang === "th" ? "ระบบภายใน" : "Internal Systems",
      content: renderContent("internal"),
    },
    {
      value: "external",
      label: lang === "th" ? "ระบบลูกค้า" : "External Systems (Clients)",
      content: renderContent("external"),
    },
  ];

  return (
    <PageContainer
      title={pagesConfig.projects.title?.[lang] || ""}
      description={pagesConfig.projects.description?.[lang] || ""}
    >
      <ResponsiveTabs items={tabItems} defaultValue="all" />
    </PageContainer>
  );
}
