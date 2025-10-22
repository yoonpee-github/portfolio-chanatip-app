"use client";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { ExperienceInterface } from "@/config/experience";
import { useLang } from "@/providers/lang-provider";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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

interface ExperienceCardProps {
  experience: ExperienceInterface;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { lang } = useLang();

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background p-4 sm:p-6 transition-all duration-300">
      <div className="flex items-start gap-3 sm:gap-4">
        {experience.logo && (
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-border overflow-hidden bg-white flex-shrink-0">
            <Image
              src={experience.logo}
              alt={experience.company[lang]}
              width={48}
              height={48}
              className="w-full h-full object-contain p-2"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-1 sm:gap-2">
            <div className="flex items-start sm:items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-foreground line-clamp-2 sm:line-clamp-1">
                {experience.position[lang]}
              </h3>
              {experience.companyUrl && (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 mt-0.5 sm:mt-0"
                >
                  <Icons.externalLink className="w-4 h-4" />
                </a>
              )}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-muted-foreground">
              <span className="font-medium">{experience.company[lang]}</span>
              <span className="hidden sm:inline">•</span>
              <span>{experience.location[lang]}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                {getDurationText(
                  experience.startDate,
                  experience.endDate,
                  lang
                )}
              </span>
            </div>
          </div>
          <p className="mt-2 sm:mt-3 text-sm text-muted-foreground line-clamp-2">
            {experience.description[lang][0]}
          </p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1">
            {experience.skills.slice(0, 2).map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground"
              >
                {skill}
              </span>
            ))}
            {experience.skills.length > 2 && (
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                +{experience.skills.length - 2}{" "}
                {lang === "th" ? "เพิ่มเติม" : "more"}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="mt-3 sm:mt-4 flex justify-end">
        <Button
          variant="outline"
          size="sm"
          className="rounded-lg w-full sm:w-auto"
          asChild
        >
          <Link href={`/experience/${experience.id}`}>
            {lang === "th" ? "ดูรายละเอียด" : "View Details"}
            <Icons.chevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ExperienceCard;
