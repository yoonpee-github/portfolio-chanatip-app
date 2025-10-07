import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "plusdentalclinic",
    position: "Software Engineer",
    company: "Plusdentalclinic Co., Ltd.",
    location: "Bangkok, Thailand",
    startDate: new Date("2024-08-01"),
    endDate: "Present",
    description: [
      "Developed web-based digital platforms using Vue.js and Next.js to replace manual, paper-based workflows, including customer data management, file uploads, and image storage, integrated with MySQL databases using Python.",
      "Created and maintained real-time data visualization dashboards to support business analysis and provide actionable insights for executives and strategic decision-making.",
      "Designed and deployed the company’s official website, enhancing online presence and allowing customers to access key corporate information easily.",
    ],
    achievements: [
      "Digitized manual workflows into web-based systems, significantly improving efficiency in customer data handling and operational processes.",
      "Delivered real-time dashboards that empowered executives with actionable insights for strategic planning and business growth.",
      "Successfully launched the company’s official website, strengthening brand presence and customer accessibility.",
    ],
    skills: [
      "Typescript",
      "React",
      "React Native",
      "Next.js",
      "Vue.js",
      "Node.js",
      "Javascript",
      "Django",
      "FastAPI",
      "Python",
      "AWS",
      "MySQL",
      "Docker",
      "Git",
      "Apache Airflow",
      "Socket.io",
      "Three.js",
    ],
    companyUrl: "https://plusdentalbooking.com/plusdentalclinic/",
    logo: "/experience/Plus_Dental_clinic.png",
  },
  {
    id: "denso",
    position: "Production Engineer Intern",
    company: "Denso (Thailand) Co., Ltd.",
    location: "Chonburi, Thailand",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-05-30"),
    description: [
      "Developed a real-time data logging system using Raspberry Pi to collect machine data and store it in a PostgreSQL database, replacing manual paper-based workflows.",
      "Built an interactive data visualization dashboard using Next.js, TypeScript, and React to display key production metrics and support data-driven analysis.",
    ],
    achievements: [
      "Automated machine data collection with a Raspberry Pi–PostgreSQL pipeline, eliminating manual data recording and improving reliability.",
      "Created a web-based dashboard with Next.js, TypeScript, and React to provide real-time insights into production metrics for engineers and managers.",
    ],
    skills: [
      "Typescript",
      "React",
      "Next.js",
      "Node.js",
      "Javascript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Docker",
      "Git",
      "Tailwind CSS",
      "Figma",
    ],
    companyUrl: "https://www.denso.com/th/th/",
    logo: "/experience/Denso.png",
  },
  {
    id: "thai-summit",
    position: "Production Engineer Intern",
    company: "Thai Summit Autoparts Industry Co., Ltd.",
    location: "Bangkok, Thailand",
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-07-31"),
    description: [
      "Developed an in-process inspection system using Python and industrial cameras to automatically capture and analyze product images for defect detection.",
      "Conducted root cause analysis using system-generated data and implemented targeted corrective actions to resolve production issues and enhance product quality.",
    ],
    achievements: [
      "Implemented an automated visual inspection system with Python and industrial cameras, improving defect detection accuracy and reducing reliance on manual inspection.",
      "Performed root cause analysis based on inspection data and applied corrective measures, resulting in measurable improvements in production quality and efficiency.",
    ],
    skills: ["HTML 5", "CSS 3", "Javascript", "Bootstrap", "MongoDB"],
    companyUrl: "https://www.thaisummit.co.th/th/",
    logo: "/experience/Thai_Summit_Group_Logo.svg",
  },
];
