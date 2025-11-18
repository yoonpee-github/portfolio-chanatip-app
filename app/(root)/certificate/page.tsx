"use client";

import CarouselCertificates from "@/components/certificate/CarouselCertificates";
import CertificateCard from "@/components/certificate/CertificateCard";
import ModalZoom from "@/components/certificate/ModalZoom";
import PageContainer from "@/components/common/page-container";
import { certificates } from "@/config/certificate";
import { pagesConfig } from "@/config/pages";
import { useLang } from "@/providers/lang-provider";
import { useState } from "react";

export default function CertificatePage() {
  const { lang } = useLang();

  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | undefined>();
  const [title, setTitle] = useState<string | undefined>();

  function handleOpen(s: string, t?: string) {
    setSrc(s);
    setTitle(t);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setSrc(undefined);
    setTitle(undefined);
  }

  return (
    <PageContainer
      title={pagesConfig.certificate.title[lang]}
      description={pagesConfig.certificate.description[lang]}
    >
      <section className="mb-10">
        <CarouselCertificates
          items={certificates.map((c) => ({
            id: c.id,
            title: c.title[lang],
            image: c.image,
          }))}
          onOpen={(src, title) => handleOpen(src, title)}
        />
      </section>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((c) => (
            <CertificateCard
              key={c.id}
              id={c.id}
              title={c.title[lang]}
              image={c.image}
              description={c.description?.[lang]}
              onOpen={() => handleOpen(c.image, c.title[lang])}
            />
          ))}
        </div>
      </section>
      <ModalZoom open={open} onClose={handleClose} src={src} title={title} />
    </PageContainer>
  );
}
