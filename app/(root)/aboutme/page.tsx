"use client";

import AboutmeCard from "@/components/aboutme/aboutme-card";
import PageContainer from "@/components/common/page-container";
import { aboutmeUnsorted } from "@/config/aboutme";
import { useLang } from "@/providers/lang-provider";

export default function AboutmePage() {
  const { lang } = useLang();

  return (
    <PageContainer
      title={lang === "th" ? "เกี่ยวกับฉัน" : "About Me"}
      description={
        lang === "th"
          ? "มาทำความรู้จักกับฉันให้มากขึ้น"
          : "Get to know me better"
      }
    >
      <AboutmeCard aboutmes={aboutmeUnsorted} />
    </PageContainer>
  );
}
