"use client";

import PageContainer from "@/components/common/page-container";
import { pagesConfig } from "@/config/pages";
import { useLang } from "@/providers/lang-provider";
import Image from "next/image";

export default function ResumePage() {
  const { lang } = useLang();
  return (
    <PageContainer
      title={pagesConfig.resume.title[lang]}
      description={pagesConfig.resume.description[lang]}
    >
      <div className="flex flex-col items-center">
        <div className="w-full max-w-4xl shadow-lg rounded-lg overflow-hidden border">
          <Image
            src="/resume/resume.png"
            alt="Resume"
            width={1200}
            height={1600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
        <a
          href="/resume/resume.png"
          download
          className="inline-flex items-center px-6 py-3 mt-6 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-white/30 transition"
        >
          {lang === "th" ? "ดาวน์โหลด เรซูเม่" : "Download Resume"}
        </a>
      </div>
    </PageContainer>
  );
}
