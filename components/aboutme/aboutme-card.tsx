"use client";

import { Icons } from "@/components/common/icons";
import { AboutmeInterface } from "@/config/aboutme";
import { useLang } from "@/providers/lang-provider";

interface AboutmeCardProps {
  aboutmes: AboutmeInterface[];
}

export default function AboutmeCard({ aboutmes }: AboutmeCardProps) {
  const { lang } = useLang();

  return (
    <div className="mx-auto flex flex-col space-y-8 max-w-3xl">
      {aboutmes.map((aboutme, id) => {
        const desc = aboutme.description[lang];

        return (
          <div key={id} className="space-y-2">
            <h3 className="font-bold text-xl flex items-center space-x-2">
              {aboutme.icon === "user" && <Icons.user size={20} />}
              {aboutme.icon === "code" && <Icons.code size={20} />}
              {aboutme.icon === "book" && <Icons.book size={20} />}
              {aboutme.icon === "heart" && <Icons.heart size={20} />}
              <span>{aboutme.title[lang]}</span>
            </h3>

            {Array.isArray(desc) ? (
              <ul className="list-disc list-inside space-y-1 text-muted-foreground leading-relaxed">
                {desc.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
