import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import SkillsCard from "@/components/skills/skills-card";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { pagesConfig } from "@/config/pages";
import { skills } from "@/config/skills";

export const metadata: Metadata = {
  title: pagesConfig.skills.metadata.title,
  description: pagesConfig.skills.metadata.description,
};

const renderContent = (tabVal: string) => {
  let skillArr = skills;
  if (tabVal === "Frontend") {
    skillArr = skillArr.filter((val) => val.category === "Frontend");
  } else if (tabVal === "Backend") {
    skillArr = skillArr.filter((val) => val.category === "Backend");
  } else if (tabVal === "Database") {
    skillArr = skillArr.filter((val) => val.category === "Database");
  } else if (tabVal === "Tool") {
    skillArr = skillArr.filter((val) => val.category === "Tool");
  }

  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skillArr.map((skill) => (
        <SkillsCard skills={[skill]} key={skill.name} />
      ))}
    </div>
  );
};

export default function SkillsPage() {
  const tabItems = [
    {
      value: "all",
      label: "All",
      content: renderContent("all"),
    },
    {
      value: "Frontend",
      label: "Frontend",
      content: renderContent("Frontend"),
    },
    {
      value: "Backend",
      label: "Backend",
      content: renderContent("Backend"),
    },
    {
      value: "Database",
      label: "Database",
      content: renderContent("Database"),
    },
    {
      value: "Tool",
      label: "Tool",
      content: renderContent("Tool"),
    },
  ];

  return (
    <PageContainer
      title={pagesConfig.skills.title}
      description={pagesConfig.skills.description}
    >
      {/* <SkillsCard skills={skills} /> */}
      <ResponsiveTabs items={tabItems} defaultValue="all" />
    </PageContainer>
  );
}
