"use client";

import AboutmeCard from "@/components/aboutme/aboutme-card";
import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ExperienceCard from "@/components/experience/experience-card";
import { ContactForm } from "@/components/forms/contact-form";
// import Particles from "@/components/particles/particles";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredAboutme } from "@/config/aboutme";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";
import { useLang } from "@/providers/lang-provider";
import profileImg from "@/public/profile-img.jpg";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { TypeAnimation } from "react-type-animation";

export default function IndexPage() {
  const { lang } = useLang();
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Full Stack Developer",
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Next.js Portfolio",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  return (
    <ClientPageWrapper>
      {/* <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={1000}
      /> */}
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center mt-20">
          <Image
            src={profileImg}
            height={100}
            width={100}
            sizes="100vw"
            className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary"
            alt="Chanatip Sombatanurak - Full Stack Developer Portfolio"
            priority
          />
          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {lang === "th" ? "ชนาธิป สมบัติอนุรักษ์" : "Chanatip Sombatanurak"}
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.4}
            className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl"
          >
            {lang === "th"
              ? "นักพัฒนาซอฟต์แวร์ครบวงจร"
              : "Full Stack Developer"}
            {/* <TypeAnimation
              key={lang}
              sequence={
                lang === "th"
                  ? ["นักพัฒนาซอฟต์แวร์ครบวงจร", 2000, "", 500]
                  : ["Full Stack Developer", 2000, "", 500]
              }
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              speed={50}
              deletionSpeed={70}
            /> */}
          </AnimatedText>
          {/* <div className="mt-4 max-w-[42rem] text-center">
            <p className="leading-normal text-muted-foreground text-sm sm:text-base">
              {lang === "th"
                ? "นักพัฒนาซอฟต์แวร์ครบวงจร ที่หลงใหลในการสร้างเว็บแอปพลิเคชันที่ทันสมัย ยืดหยุ่นได้ดี และมอบประสบการณ์การใช้งานที่ยอดเยี่ยมแก่ผู้ใช้"
                : "A passionate full stack developer specializing in building modern, scalable, and user-focused web applications."}
            </p>
          </div> */}

          <div className="mt-4 max-w-[42rem] text-center">
            <p className="leading-normal text-muted-foreground text-sm sm:text-base">
              <TypeAnimation
                key={lang}
                sequence={
                  lang === "th"
                    ? [
                        "นักพัฒนาซอฟต์แวร์ครบวงจร ที่หลงใหลในการสร้างเว็บแอปพลิเคชันที่ทันสมัย ยืดหยุ่นได้ดี และมอบประสบการณ์การใช้งานที่ยอดเยี่ยมแก่ผู้ใช้",
                        3000,
                        "",
                        800,
                      ]
                    : [
                        "A passionate full stack developer specializing in building modern, scalable, and user-focused web applications.",
                        3000,
                        "",
                        800,
                      ]
                }
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                speed={45}
                deletionSpeed={60}
              />
            </p>
          </div>

          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <AnimatedText delay={0.6}>
              <Link
                href={"https://github.com/yoonpee-github"}
                target="_blank"
                className={cn(buttonVariants({ size: "lg" }))}
                aria-label="View Chanatip Sombatanurak's GitHub profile"
              >
                <Icons.gitHub className="w-4 h-4 mr-2" /> GitHub
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8}>
              <Link
                href={"/contact"}
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })
                )}
                aria-label="Contact Chanatip Sombatanurak"
              >
                <Icons.contact className="w-4 h-4 mr-2" />
                {lang === "th" ? "ติดต่อ" : "Contact"}
              </Link>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <Icons.chevronDown className="h-6 w-6 mt-10" />
          </AnimatedText>
        </div>
      </section>
      <AnimatedSection
        direction="down"
        className="container space-y-6 bg-muted py-10 my-14"
        id="aboutme"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.aboutme.title[lang]}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.aboutme.description[lang]}
          </AnimatedText>
        </div>

        <div className="mx-auto justify-center gap-6 md:w-full lg:grid-cols-3">
          <AboutmeCard aboutmes={featuredAboutme} />
        </div>

        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/aboutme">
            <Button variant="outline" className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" />
              {lang === "th" ? "ดูเกี่ยวกับฉันทั้งหมด" : "View Full About Me"}
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="left"
        className="container space-y-6 py-10 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.experience.title[lang]}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.experience.description[lang]}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {experiences.slice(0, 3).map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" />
              {lang === "th" ? "ดูประสบการณ์ทั้งหมด" : "View All Experience"}
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        className="container space-y-6 bg-muted py-10"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.skills.title[lang]}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.skills.description[lang]}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <SkillsCard skills={featuredSkills} />
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" />
              {lang === "th" ? "ดูทักษะทั้งหมด" : "View All Skills"}
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection
        direction="right"
        className="container space-y-6 py-10 my-14"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.projects.title[lang]}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.projects.description[lang]}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {featuredProjects.map((exp, index) => (
            <AnimatedSection
              key={exp.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ProjectCard project={exp} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" />
              {lang === "th" ? "ดูผลงานทั้งหมด" : "View All Projects"}
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="down"
        className="container space-y-6 bg-muted py-10 my-14"
        id="resume"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.resume.title[lang]}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.resume.description[lang]}
          </AnimatedText>
        </div>
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
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/resume">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" />
              {lang === "th" ? "ดูผลประวัติย่อทั้งหมด" : "View All Projects"}
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="right"
        className="container space-y-6 py-10 my-14"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.contact.title[lang]}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.contact.description[lang]}
          </AnimatedText>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <ContactForm />
          </div>
          {/* <div className="flex-1 flex justify-center ">
            <GithubRedirectCard />
          </div> */}
        </div>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
