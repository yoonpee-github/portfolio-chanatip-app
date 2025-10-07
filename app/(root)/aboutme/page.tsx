import { Metadata } from "next";

import AboutmeCard from "@/components/aboutme/aboutme-card";
import PageContainer from "@/components/common/page-container";
import { aboutmeUnsorted } from "@/config/aboutme";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.aboutme.metadata.title,
  description: pagesConfig.aboutme.metadata.description,
};

export default function AboutmePage() {
  return (
    <PageContainer title="About Me" description="Get to know me better">
      <AboutmeCard aboutmes={aboutmeUnsorted} />
    </PageContainer>
  );
}
