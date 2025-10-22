"use client";

import { Icons } from "@/components/common/icons";
import PageContainer from "@/components/common/page-container";
import SkillsCard from "@/components/skills/skills-card";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { pagesConfig } from "@/config/pages";
import { skills } from "@/config/skills";
import { useLang } from "@/providers/lang-provider";

const renderContent = (tabVal: string) => {
  let skillArr = skills;
  if (tabVal === "Frontend") {
    skillArr = skillArr.filter((val) => val.category === "Frontend");
  } else if (tabVal === "Backend") {
    skillArr = skillArr.filter((val) => val.category === "Backend");
  } else if (tabVal === "Database") {
    skillArr = skillArr.filter((val) => val.category === "Database");
  } else if (tabVal === "Cloud") {
    skillArr = skillArr.filter((val) => val.category === "Cloud");
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
  const { lang } = useLang();
  const tabItems = [
    {
      value: "all",
      label: (
        <>
          <Icons.call className="mr-2 h-4 w-4" />
          {lang === "th" ? "ทั้งหมด" : "All"}
        </>
      ),
      content: renderContent("all"),
    },
    {
      value: "Frontend",
      label: (
        <>
          <Icons.react className="mr-2 h-4 w-4" />
          {lang === "th" ? "เฟรมเวิร์กฝั่งผู้ใช้" : "Frontend Development"}
        </>
      ),
      content: renderContent("Frontend"),
    },
    {
      value: "Backend",
      label: (
        <>
          <Icons.python className="mr-2 h-4 w-4" />
          {lang === "th" ? "เฟรมเวิร์กฝั่งเซิร์ฟเวอร์" : "Backend Development"}
        </>
      ),
      content: renderContent("Backend"),
    },
    {
      value: "Database",
      label: (
        <>
          <Icons.postgresql className="mr-2 h-4 w-4" />
          {lang === "th" ? "ฐานข้อมูล" : "Database"}
        </>
      ),
      content: renderContent("Database"),
    },
    {
      value: "Cloud",
      label: (
        <>
          <Icons.amazonaws className="mr-2 h-4 w-4" />
          {lang === "th" ? "คลาวด์และ DevOps" : "Cloud & DevOps"}
        </>
      ),
      content: renderContent("Cloud"),
    },
    {
      value: "Tool",
      label: (
        <>
          <Icons.code className="mr-2 h-4 w-4" />
          {lang === "th" ? "เครื่องมือ" : "Tools"}
        </>
      ),
      content: renderContent("Tool"),
    },
  ];

  return (
    <PageContainer
      title={pagesConfig.skills.title[lang]}
      description={pagesConfig.skills.description[lang]}
    >
      <ResponsiveTabs items={tabItems} defaultValue="all" />
    </PageContainer>
  );
}
