"use client";

import { AnimatedSection } from "@/components/common/animated-section";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ChipContainer from "@/components/ui/chip-container";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { experiences } from "@/config/experience";
import { useLang } from "@/providers/lang-provider";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface ExperienceDetailPageProps {
  params: {
    expId: string;
  };
}

const getYearFromDate = (date: Date): string => {
  return new Date(date).getFullYear().toString();
};

const getDurationText = (
  startDate: Date,
  endDate: { en: string | Date; th: string | Date },
  lang: "en" | "th"
): string => {
  const startYear = getYearFromDate(startDate);
  const endValue = endDate[lang];
  const endYear =
    typeof endValue === "string" ? endValue : getYearFromDate(endValue);
  return `${startYear} - ${endYear}`;
};

export default function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const experience = experiences.find((c) => c.id === params.expId);

  if (!experience) {
    redirect("/experience");
  }

  const { lang } = useLang();

  const tabItems = [
    {
      value: "summary",
      label: lang === "th" ? "สรุป" : "Summary",
      content: (
        <AnimatedSection delay={0.3}>
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
              {lang === "th" ? "รายละเอียดบทบาท" : "Role Summary"}
            </h3>
            <ul className="space-y-3">
              {experience.description[lang].map((desc, idx) => (
                <li
                  key={idx}
                  className="text-base leading-relaxed flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      ),
    },
    {
      value: "achievements",
      label: lang === "th" ? "ผลงานเด่น" : "Achievements",
      content: (
        <AnimatedSection delay={0.3}>
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
              {lang === "th" ? "ผลงานสำคัญ" : "Key Achievements"}
            </h3>
            <ul className="space-y-3">
              {experience.achievements[lang].map((achievement, idx) => (
                <li
                  key={idx}
                  className="text-base leading-relaxed flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      ),
    },
    {
      value: "skills",
      label: lang === "th" ? "ทักษะ" : "Skills",
      content: (
        <AnimatedSection delay={0.3}>
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
              {lang === "th"
                ? "เทคโนโลยีและทักษะที่ใช้"
                : "Technologies & Skills"}
            </h3>
            <ChipContainer textArr={experience.skills} />
            <p className="mt-4 text-sm text-muted-foreground">
              {lang === "th"
                ? `เทคโนโลยีและทักษะหลักที่ใช้ในระหว่างทำงานที่ ${experience.company.th}`
                : `These are the primary technologies and skills utilized during my time at ${experience.company.en}`}
            </p>
          </div>
        </AnimatedSection>
      ),
    },
  ];

  return (
    <ClientPageWrapper>
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <AnimatedSection className="mb-6">
          <Button variant="ghost" size="sm" className="mb-4" asChild>
            <Link href="/experience">
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              {lang === "th" ? "ย้อนกลับ" : "Back to Experience"}
            </Link>
          </Button>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="overflow-hidden rounded-lg border bg-background p-2 transition-all duration-300">
            <CardHeader className="pb-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    {experience.logo && (
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg border-2 border-border overflow-hidden bg-white flex-shrink-0">
                        <Image
                          src={experience.logo}
                          alt={experience.company[lang]}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                    )}
                    <div className="flex-1 text-center sm:text-left">
                      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                        {experience.position[lang]}
                      </h1>
                      <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                        <span className="text-md font-medium text-muted-foreground">
                          {experience.company[lang]}
                        </span>
                        {experience.companyUrl && (
                          <a
                            href={experience.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Icons.externalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <p className="text-muted-foreground">
                        {experience.location[lang]}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center sm:justify-end">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                      {getDurationText(
                        experience.startDate,
                        experience.endDate,
                        lang
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <ResponsiveTabs items={tabItems} defaultValue="summary" />
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="flex justify-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/experience">
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              {lang === "th" ? "ดูประสบการณ์ทั้งหมด" : "View All Experience"}
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </ClientPageWrapper>
  );
}
