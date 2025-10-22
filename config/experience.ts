import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: { en: string; th: string };
  company: { en: string; th: string };
  location: { en: string; th: string };
  startDate: Date;
  endDate: { en: string | Date; th: string | Date };
  description: { en: string[]; th: string[] };
  achievements: { en: string[]; th: string[] };
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "plusdentalclinic",
    position: {
      en: "Software Engineer",
      th: "วิศวกรซอฟต์แวร์",
    },
    company: {
      en: "Plusdentalclinic Co., Ltd.",
      th: "บริษัท พลัสเดนทัลคลินิก จำกัด",
    },
    location: {
      en: "Bangkok, Thailand",
      th: "กรุงเทพมหานคร ประเทศไทย",
    },
    startDate: new Date("2024-08-01"),
    endDate: {
      en: "Present",
      th: "ปัจจุบัน",
    },
    description: {
      en: [
        "Developed web-based digital platforms using Vue.js and Next.js to replace manual, paper-based workflows, including customer data management, file uploads, and image storage, integrated with MySQL databases using Python.",
        "Created and maintained real-time data visualization dashboards to support business analysis and provide actionable insights for executives and strategic decision-making.",
        "Designed and deployed the company’s official website, enhancing online presence and allowing customers to access key corporate information easily.",
      ],
      th: [
        "พัฒนาแพลตฟอร์มดิจิทัลบนเว็บด้วย Vue.js และ Next.js เพื่อทดแทนระบบเอกสารแบบแมนนวล รวมถึงการจัดการข้อมูลลูกค้า การอัปโหลดไฟล์ และการจัดเก็บรูปภาพ พร้อมเชื่อมต่อฐานข้อมูล MySQL ด้วย Python",
        "สร้างและดูแลแดชบอร์ดแสดงข้อมูลแบบเรียลไทม์ เพื่อสนับสนุนการวิเคราะห์ทางธุรกิจและช่วยผู้บริหารในการตัดสินใจเชิงกลยุทธ์",
        "ออกแบบและเปิดใช้งานเว็บไซต์ทางการของบริษัท เพื่อเสริมสร้างการรับรู้แบรนด์และเพิ่มความสะดวกให้ลูกค้าเข้าถึงข้อมูลสำคัญของบริษัทได้ง่ายขึ้น",
      ],
    },
    achievements: {
      en: [
        "Digitized manual workflows into web-based systems, significantly improving efficiency in customer data handling and operational processes.",
        "Delivered real-time dashboards that empowered executives with actionable insights for strategic planning and business growth.",
        "Successfully launched the company’s official website, strengthening brand presence and customer accessibility.",
      ],
      th: [
        "แปลงกระบวนการทำงานแบบเอกสารให้เป็นระบบเว็บ เพิ่มประสิทธิภาพในการจัดการข้อมูลลูกค้าและการทำงานภายในองค์กรอย่างมาก",
        "พัฒนาแดชบอร์ดข้อมูลเรียลไทม์ที่ช่วยให้ผู้บริหารสามารถตัดสินใจเชิงกลยุทธ์ได้อย่างมีประสิทธิภาพ",
        "เปิดตัวเว็บไซต์อย่างเป็นทางการของบริษัท เสริมสร้างภาพลักษณ์และการเข้าถึงข้อมูลของลูกค้า",
      ],
    },
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
    position: {
      en: "Production Engineer Intern",
      th: "นักศึกษาฝึกงานวิศวกรการผลิต",
    },
    company: {
      en: "Denso (Thailand) Co., Ltd.",
      th: "บริษัท เดนโซ่ (ประเทศไทย) จำกัด",
    },
    location: {
      en: "Chonburi, Thailand",
      th: "ชลบุรี ประเทศไทย",
    },
    startDate: new Date("2024-01-01"),
    endDate: {
      en: new Date("2024-05-30"),
      th: new Date("2024-05-30"),
    },
    description: {
      en: [
        "Developed a real-time data logging system using Raspberry Pi to collect machine data and store it in a PostgreSQL database, replacing manual paper-based workflows.",
        "Built an interactive data visualization dashboard using Next.js, TypeScript, and React to display key production metrics and support data-driven analysis.",
      ],
      th: [
        "พัฒนาระบบเก็บข้อมูลเครื่องจักรแบบเรียลไทม์ด้วย Raspberry Pi และจัดเก็บในฐานข้อมูล PostgreSQL เพื่อแทนที่การบันทึกข้อมูลแบบเอกสาร",
        "สร้างแดชบอร์ดแสดงผลข้อมูลแบบอินเทอร์แอคทีฟด้วย Next.js, TypeScript และ React เพื่อแสดงตัวชี้วัดหลักด้านการผลิตและสนับสนุนการวิเคราะห์ข้อมูล",
      ],
    },
    achievements: {
      en: [
        "Automated machine data collection with a Raspberry Pi–PostgreSQL pipeline, eliminating manual data recording and improving reliability.",
        "Created a web-based dashboard with Next.js, TypeScript, and React to provide real-time insights into production metrics for engineers and managers.",
      ],
      th: [
        "ทำให้การเก็บข้อมูลเครื่องจักรเป็นอัตโนมัติด้วยระบบ Raspberry Pi–PostgreSQL ช่วยลดความผิดพลาดจากการบันทึกด้วยมือและเพิ่มความน่าเชื่อถือของข้อมูล",
        "สร้างแดชบอร์ดบนเว็บเพื่อให้วิศวกรและผู้จัดการสามารถดูข้อมูลการผลิตแบบเรียลไทม์ได้",
      ],
    },
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
    position: {
      en: "Production Engineer Intern",
      th: "นักศึกษาฝึกงานวิศวกรการผลิต",
    },
    company: {
      en: "Thai Summit Autoparts Industry Co., Ltd.",
      th: "บริษัท ไทยซัมมิท ออโตพาร์ท อินดัสตรี จำกัด",
    },
    location: {
      en: "Bangkok, Thailand",
      th: "กรุงเทพมหานคร ประเทศไทย",
    },
    startDate: new Date("2023-06-01"),
    endDate: {
      en: new Date("2023-07-31"),
      th: new Date("2023-07-31"),
    },
    description: {
      en: [
        "Developed an in-process inspection system using Python and industrial cameras to automatically capture and analyze product images for defect detection.",
        "Conducted root cause analysis using system-generated data and implemented targeted corrective actions to resolve production issues and enhance product quality.",
      ],
      th: [
        "พัฒนาระบบตรวจสอบชิ้นงานระหว่างกระบวนการผลิตด้วย Python และกล้องอุตสาหกรรม เพื่อจับภาพและวิเคราะห์ข้อบกพร่องของผลิตภัณฑ์โดยอัตโนมัติ",
        "วิเคราะห์หาสาเหตุของปัญหาโดยใช้ข้อมูลจากระบบและดำเนินการแก้ไขที่เหมาะสม เพื่อปรับปรุงคุณภาพและประสิทธิภาพการผลิต",
      ],
    },
    achievements: {
      en: [
        "Implemented an automated visual inspection system with Python and industrial cameras, improving defect detection accuracy and reducing reliance on manual inspection.",
        "Performed root cause analysis based on inspection data and applied corrective measures, resulting in measurable improvements in production quality and efficiency.",
      ],
      th: [
        "พัฒนาระบบตรวจสอบชิ้นงานอัตโนมัติด้วย Python และกล้องอุตสาหกรรม ช่วยเพิ่มความแม่นยำในการตรวจจับข้อบกพร่องและลดการพึ่งพาการตรวจสอบด้วยคน",
        "ดำเนินการวิเคราะห์สาเหตุของปัญหาและปรับปรุงกระบวนการ ส่งผลให้คุณภาพและประสิทธิภาพการผลิตดีขึ้นอย่างเห็นได้ชัด",
      ],
    },
    skills: ["HTML 5", "CSS 3", "Javascript", "Bootstrap", "MongoDB", "Python"],
    companyUrl: "https://www.thaisummit.co.th/th/",
    logo: "/experience/Thai_Summit_Group_Logo.svg",
  },
];
