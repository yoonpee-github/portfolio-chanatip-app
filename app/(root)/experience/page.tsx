"use client";

import PageContainer from "@/components/common/page-container";
import Timeline from "@/components/experience/timeline";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { useLang } from "@/providers/lang-provider";

export default function ExperiencePage() {
  const { lang } = useLang();
  return (
    <PageContainer
      title={pagesConfig.experience.title[lang]}
      description={pagesConfig.experience.description[lang]}
    >
      <Timeline experiences={experiences} />
    </PageContainer>
  );
}
