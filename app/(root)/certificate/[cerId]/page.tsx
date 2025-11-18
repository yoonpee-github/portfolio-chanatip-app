"use client";

import ModalZoom from "@/components/certificate/ModalZoom";
import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import PageContainer from "@/components/common/page-container";
import { Button } from "@/components/ui/button";
import { certificates } from "@/config/certificate";
import { useLang } from "@/providers/lang-provider";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";

export default function CertificateDetailPage({
  params,
}: {
  params: { cerId: string };
}) {
  const { lang } = useLang();
  const certId = Number(params.cerId);

  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | undefined>(undefined);

  const certificate = certificates.find((c) => c.id === certId);

  if (!certificate) return notFound();

  function handleZoom() {
    setSrc(certificate!.image);
    setOpen(true);
  }

  return (
    <PageContainer
      title={certificate.title[lang]}
      description={certificate.description?.[lang] || ""}
    >
      <AnimatedSection>
        <Button variant="ghost" size="sm" className="mb-4" asChild>
          <Link href="/certificate">
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            {lang === "th" ? "ย้อนกลับ" : "Back to Certificate"}
          </Link>
        </Button>
      </AnimatedSection>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="backdrop-blur-xl bg-white/20 dark:bg-slate-900/20 border border-white/30 shadow-xl rounded-xl p-6">
          <h1 className="text-3xl font-bold mb-4">{certificate.title[lang]}</h1>
          <div
            className="relative w-full rounded-lg overflow-hidden shadow-xl cursor-pointer group"
            onClick={handleZoom}
          >
            <Image
              src={certificate.image}
              alt={certificate.title[lang]}
              width={1200}
              height={900}
              className="rounded-lg transition group-hover:scale-105 duration-300"
              style={{ objectFit: "contain", height: "auto" }}
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-lg font-medium">
              {lang === "th" ? "คลิกเพื่อขยาย" : "Click to Zoom"}
            </div>
          </div>
          {certificate.description?.[lang] && (
            <p className="text-slate-600 dark:text-slate-300 mt-4 mb-6">
              {certificate.description[lang]}
            </p>
          )}
          <div className="flex justify-end">
            <a
              href={certificate.image}
              download
              className="px-4 py-2 rounded-lg backdrop-blur-md bg-white/20 border border-white/30 text-sm text-slate-900 dark:text-white hover:bg-white/40 transition"
            >
              {lang === "th" ? "ดาวน์โหลดรูปภาพ" : "Download Image"}
            </a>
          </div>
        </div>
      </div>
      <ModalZoom
        open={open}
        src={src}
        title={certificate.title[lang]}
        onClose={() => setOpen(false)}
      />
    </PageContainer>
  );
}
