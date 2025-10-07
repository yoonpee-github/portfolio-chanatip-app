import { Icons } from "@/components/common/icons";
import { aboutmeInterface } from "@/config/aboutme";

interface AboutmeCardProps {
  aboutmes: aboutmeInterface[];
}

export default function AboutmeCard({ aboutmes }: AboutmeCardProps) {
  return (
    <div className="mx-auto flex flex-col space-y-8 max-w-3xl">
      {aboutmes.map((aboutme, id) => (
        <div key={id} className="space-y-2">
          <h3 className="font-bold text-xl flex items-center space-x-2">
            {aboutme.icon === "user" && <Icons.user size={20} />}
            {aboutme.icon === "code" && <Icons.code size={20} />}
            {aboutme.icon === "book" && <Icons.book size={20} />}
            {aboutme.icon === "heart" && <Icons.heart size={20} />}
            <span>{aboutme.title}</span>
          </h3>
          {Array.isArray(aboutme.description) ? (
            <ul className="list-disc list-inside space-y-1 text-muted-foreground leading-relaxed">
              {aboutme.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground leading-relaxed">
              {aboutme.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
