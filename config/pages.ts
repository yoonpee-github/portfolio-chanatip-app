import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Chanatip Sombatanurak's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Chanatip Sombatanurak's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description:
        "Chanatip Sombatanurak's projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Chanatip Sombatanurak.",
    },
  },
  aboutme: {
    title: "About Me",
    description:
      "I’m a web developer who enjoys building useful applications, learning new skills, and growing through both work and personal interests.",
    metadata: {
      title: "About Me",
      description:
        "Learn about Chanatip Sombatanurak’s journey — web development, education, soft skills, and personal interests.",
    },
  },
  resume: {
    title: "Resume",
    description: "Chanatip Sombatanurak resume.",
    metadata: {
      title: "Resume",
      description: "Chanatip Sombatanurak resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Chanatip Sombatanurak's professional journey and experience timeline.",
    },
  },
};
