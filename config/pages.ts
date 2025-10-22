import { ValidPages } from "./constants";

type LocalizedText = {
  en: string;
  th: string;
};

type PagesConfig = {
  [key in ValidPages]: {
    title: LocalizedText;
    description: LocalizedText;
    metadata: {
      title: LocalizedText;
      description: LocalizedText;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: { en: "Home", th: "หน้าแรก" },
    description: {
      en: "Welcome to my portfolio website.",
      th: "ยินดีต้อนรับเข้าสู่เว็บไซต์พอร์ตโฟลิโอของฉัน",
    },
    metadata: {
      title: { en: "Home", th: "หน้าแรก" },
      description: {
        en: "Chanatip Sombatanurak's portfolio website.",
        th: "เว็บไซต์พอร์ตโฟลิโอของชนาธิป สมบัตินุรักษ์",
      },
    },
  },
  skills: {
    title: { en: "Skills", th: "ทักษะ" },
    description: {
      en: "Key skills that define my professional identity.",
      th: "ทักษะสำคัญที่สะท้อนความเป็นมืออาชีพของฉัน",
    },
    metadata: {
      title: { en: "Skills", th: "ทักษะ" },
      description: {
        en: "Chanatip Sombatanurak's key skills that define his professional identity.",
        th: "ทักษะสำคัญของชนาธิป สมบัตินุรักษ์ ที่แสดงถึงตัวตนในสายอาชีพ",
      },
    },
  },
  projects: {
    title: { en: "Projects", th: "ผลงาน" },
    description: {
      en: "Showcasing impactful projects and technical achievements.",
      th: "แสดงผลงานและความสำเร็จทางเทคนิคที่โดดเด่น",
    },
    metadata: {
      title: { en: "Projects", th: "ผลงาน" },
      description: {
        en: "Chanatip Sombatanurak's projects in building web applications.",
        th: "ผลงานของชนาธิป สมบัตินุรักษ์ในการพัฒนาเว็บแอปพลิเคชัน",
      },
    },
  },
  contact: {
    title: { en: "Contact", th: "ติดต่อ" },
    description: {
      en: "Let's connect and explore collaborations.",
      th: "มาทำความรู้จักและร่วมมือกันเถอะ",
    },
    metadata: {
      title: { en: "Contact", th: "ติดต่อ" },
      description: {
        en: "Contact Chanatip Sombatanurak.",
        th: "ติดต่อชนาธิป สมบัตินุรักษ์",
      },
    },
  },
  aboutme: {
    title: { en: "About Me", th: "เกี่ยวกับฉัน" },
    description: {
      en: "I’m a web developer who enjoys building useful applications, learning new skills, and growing through both work and personal interests.",
      th: "ฉันเป็นนักพัฒนาเว็บไซต์ที่ชอบสร้างแอปพลิเคชันที่เป็นประโยชน์ ชอบเรียนรู้สิ่งใหม่ ๆ และเติบโตจากทั้งงานและความสนใจส่วนตัว",
    },
    metadata: {
      title: { en: "About Me", th: "เกี่ยวกับฉัน" },
      description: {
        en: "Learn about Chanatip Sombatanurak’s journey — web development, education, soft skills, and personal interests.",
        th: "รู้จักเส้นทางของชนาธิป สมบัตินุรักษ์ — การพัฒนาเว็บ การศึกษา ทักษะ และความสนใจส่วนตัว",
      },
    },
  },
  resume: {
    title: { en: "Resume", th: "เรซูเม่" },
    description: {
      en: "Chanatip Sombatanurak resume.",
      th: "เรซูเม่ของชนาธิป สมบัตินุรักษ์",
    },
    metadata: {
      title: { en: "Resume", th: "เรซูเม่" },
      description: {
        en: "Chanatip Sombatanurak resume.",
        th: "เรซูเม่ของชนาธิป สมบัตินุรักษ์",
      },
    },
  },
  experience: {
    title: { en: "Experience", th: "ประสบการณ์" },
    description: {
      en: "Professional journey and career timeline.",
      th: "เส้นทางอาชีพและประสบการณ์การทำงาน",
    },
    metadata: {
      title: { en: "Experience", th: "ประสบการณ์" },
      description: {
        en: "Chanatip Sombatanurak's professional journey and experience timeline.",
        th: "เส้นทางอาชีพและประสบการณ์ของชนาธิป สมบัตินุรักษ์",
      },
    },
  },
};
