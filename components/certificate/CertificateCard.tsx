"use client";
import { useLang } from "@/providers/lang-provider";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  title: string;
  image: string;
  description?: string;
  onOpen?: (src: string, title?: string) => void;
}

export default function CertificateCard({
  id,
  title,
  image,
  description,
  onOpen,
}: Props) {
  const { lang } = useLang();

  return (
    <div
      className="
      rounded-2xl overflow-hidden backdrop-blur-xl 
      bg-white/30 dark:bg-slate-800/30 
      border border-white/40 shadow-lg 
      hover:shadow-2xl transition-all 
      duration-300 hover:-translate-y-1
    "
    >
      <div
        className="relative h-44 sm:h-56 md:h-48 cursor-pointer group"
        onClick={() => onOpen?.(image, title)}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
          className="transition-all duration-300 group-hover:scale-105"
        />
        <div
          className="
            absolute inset-0 bg-black/20 opacity-0 
            group-hover:opacity-100 transition-all 
            duration-300 flex items-center 
            justify-center text-white text-sm tracking-wide
          "
        >
          {lang === "th" ? "คลิกเพื่อดูรูป" : "Click to Zoom"}
        </div>
      </div>

      <div className="p-4">
        <h4 className="font-semibold text-lg mb-1">{title}</h4>

        {description && (
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
            {description}
          </p>
        )}
        <Link
          href={`/certificate/${id}`}
          className="
    text-sm text-indigo-600 dark:text-indigo-300 
    font-medium hover:underline
  "
        >
          {lang === "th" ? "ดูรายละเอียด →" : "View Details →"}
        </Link>
      </div>
    </div>
  );
}
