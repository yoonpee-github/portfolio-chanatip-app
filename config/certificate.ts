export interface CertificateItem {
  id: number;
  title: {
    en: string;
    th: string;
  };
  description?: {
    en: string;
    th: string;
  };
  image: string;
  date?: string;
}

export const certificates: CertificateItem[] = [
  {
    id: 1,
    title: {
      en: "Generative AI & ChatGPT",
      th: "Generative AI และ ChatGPT",
    },
    description: {
      en: "Understanding Generative AI and ChatGPT: Learn how these AI models generate content and assist in creative workflows.",
      th: "ทำความเข้าใจ Generative AI และ ChatGPT: เรียนรู้ว่าโมเดล AI เหล่านี้สร้างเนื้อหาอย่างไรและช่วยในงานสร้างสรรค์ได้อย่างไร",
    },
    image: "/certificate/certificate_1.png",
    date: "2024-03-10",
  },
  {
    id: 2,
    title: {
      en: "Data Analytics for Action",
      th: "Data Analytics เพื่อผลลัพธ์",
    },
    description: {
      en: "Push it with Data: Apply data analytics to transform information into actionable insights and measurable outcomes.",
      th: "นำ Data Analytics มาใช้เพื่อเปลี่ยนข้อมูลให้เป็นความรู้และผลลัพธ์ที่วัดได้",
    },
    image: "/certificate/certificate_2.png",
    date: "2024-06-21",
  },
  {
    id: 3,
    title: {
      en: "Coding with AI",
      th: "เขียนโค้ดคู่กับ AI",
    },
    description: {
      en: "Coding with AI: Learn how to write code alongside AI tools to accelerate development and stay up-to-date with trends.",
      th: "เรียนรู้การเขียนโค้ดร่วมกับเครื่องมือ AI เพื่อทำงานได้เร็วขึ้นและไม่ตกเทรนด์",
    },
    image: "/certificate/certificate_3.png",
    date: "2024-10-05",
  },
  {
    id: 4,
    title: {
      en: "ChatGPT Power",
      th: "พลังของ ChatGPT",
    },
    description: {
      en: "Skip Python? With ChatGPT, you can accomplish tasks without necessarily learning Python from scratch.",
      th: "ไม่ต้องเรียน Python แล้ว? ด้วย ChatGPT คุณสามารถทำงานต่าง ๆ ได้โดยไม่จำเป็นต้องเริ่มเรียน Python ใหม่",
    },
    image: "/certificate/certificate_4.png",
    date: "2025-01-15",
  },
];
