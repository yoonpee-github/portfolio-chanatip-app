export interface aboutmeInterface {
  title: string;
  description: string | string[];
  icon?: string;
}

export const aboutmeUnsorted: aboutmeInterface[] = [
  {
    title: "About Me",
    description:
      "I am a passionate web developer who loves building modern, user-friendly applications. I enjoy solving problems, exploring creative solutions, and continuously learning new technologies. Experienced in website development and internal system development within organizations, collaborating closely with the IT team to implement and enhance internal systems through various software solutions.",
    icon: "user",
  },
  {
    title: "Education",
    description: [
      "Wat Phutthabucha School (2017 - 2020) — Science and Mathematics, GPA: 3.78",
      "King Mongkut’s University of Technology Thonburi (2020 - 2024) — Automotive Parts Manufacturing Engineering, GPA: 2.99",
    ],
    icon: "book",
  },
  {
    title: "Soft Skills",
    description: [
      "Effective communication",
      "Active listening",
      "Strong problem-solving skills",
      "Ability to work well under pressure",
      "Proactive and self-initiative",
      "Continuous learner with growth mindset",
    ],
    icon: "code",
  },
  {
    title: "Hobbies",
    description: [
      "Reading articles and watching YouTube about the latest tech trends",
      "Traveling and photography",
      "Exploring self-development resources to cultivate a growth mindset",
    ],
    icon: "heart",
  },
];

export const featuredAboutme: aboutmeInterface[] = aboutmeUnsorted.slice(0, 3);
