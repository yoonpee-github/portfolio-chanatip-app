export interface AboutmeInterface {
  title: { en: string; th: string };
  description: { en: string | string[]; th: string | string[] };
  icon?: string;
}

export const aboutmeUnsorted: AboutmeInterface[] = [
  {
    title: {
      en: "About Me",
      th: "เกี่ยวกับฉัน",
    },
    description: {
      en: "I am a passionate web developer who loves building modern, user-friendly applications. I enjoy solving problems, exploring creative solutions, and continuously learning new technologies. Experienced in website development and internal system development within organizations, collaborating closely with the IT team to implement and enhance internal systems through various software solutions.",
      th: "ฉันเป็นนักพัฒนาเว็บที่หลงใหลในการสร้างแอปพลิเคชันที่ทันสมัยและใช้งานง่าย สนุกกับการแก้ปัญหา คิดค้นแนวทางสร้างสรรค์ และเรียนรู้เทคโนโลยีใหม่ ๆ อย่างต่อเนื่อง มีประสบการณ์ในด้านการพัฒนาเว็บไซต์และระบบภายในองค์กร ร่วมมือกับทีม IT เพื่อปรับปรุงและพัฒนาระบบผ่านซอฟต์แวร์หลากหลายรูปแบบ",
    },
    icon: "user",
  },
  {
    title: {
      en: "Education",
      th: "การศึกษา",
    },
    description: {
      en: [
        "Wat Phutthabucha School (2017 - 2020) — Science and Mathematics, GPA: 3.78",
        "King Mongkut’s University of Technology Thonburi (2020 - 2024) — Automotive Parts Manufacturing Engineering, GPA: 2.99",
      ],
      th: [
        "โรงเรียนวัดพุทธบูชา (พ.ศ. 2560 - 2563) — สายวิทย์-คณิต, เกรดเฉลี่ย 3.78",
        "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (พ.ศ. 2563 - 2567) — วิศวกรรมการผลิตชิ้นส่วนยานยนต์, เกรดเฉลี่ย 2.99",
      ],
    },
    icon: "book",
  },
  {
    title: {
      en: "Soft Skills",
      th: "ทักษะอ่อน",
    },
    description: {
      en: [
        "Effective communication",
        "Active listening",
        "Strong problem-solving skills",
        "Ability to work well under pressure",
        "Proactive and self-initiative",
        "Continuous learner with growth mindset",
      ],
      th: [
        "การสื่อสารที่มีประสิทธิภาพ",
        "การฟังอย่างตั้งใจ",
        "ทักษะการแก้ปัญหาที่ดี",
        "สามารถทำงานภายใต้ความกดดันได้ดี",
        "มีความกระตือรือร้นและริเริ่มสิ่งใหม่",
        "เป็นผู้เรียนรู้ตลอดเวลาและมีทัศนคติเติบโต",
      ],
    },
    icon: "code",
  },
  {
    title: {
      en: "Hobbies",
      th: "งานอดิเรก",
    },
    description: {
      en: [
        "Reading articles and watching YouTube about the latest tech trends",
        "Traveling and photography",
        "Exploring self-development resources to cultivate a growth mindset",
      ],
      th: [
        "อ่านบทความและดู YouTube เกี่ยวกับเทคโนโลยีล่าสุด",
        "ท่องเที่ยวและถ่ายภาพ",
        "ศึกษาทรัพยากรพัฒนาตนเองเพื่อสร้างทัศนคติแห่งการเติบโต",
      ],
    },
    icon: "heart",
  },
];

export const featuredAboutme: AboutmeInterface[] = aboutmeUnsorted.slice(0, 3);
