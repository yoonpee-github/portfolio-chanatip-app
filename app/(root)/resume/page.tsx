import PageContainer from "@/components/common/page-container";
import { pagesConfig } from "@/config/pages";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: pagesConfig.resume.metadata.title,
  description: pagesConfig.resume.metadata.description,
};

export default function ResumePage() {
  return (
    <PageContainer
      title={pagesConfig.resume.title}
      description={pagesConfig.resume.description}
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
          Download Resume
        </a>
      </div>
    </PageContainer>
  );
}
