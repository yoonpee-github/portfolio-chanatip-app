"use client";

import PageContainer from "@/components/common/page-container";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";
import { useLang } from "@/providers/lang-provider";

export default function ContactPage() {
  const { lang } = useLang();
  return (
    <PageContainer
      title={pagesConfig.contact.title[lang]}
      description={pagesConfig.contact.description[lang]}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <ContactForm />
        </div>
        {/* <div className="flex-1 flex justify-center ">
          <GithubRedirectCard />
        </div> */}
      </div>
    </PageContainer>
  );
}
