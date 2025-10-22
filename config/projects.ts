import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: { en: string; th: string };
  imgArr: string[];
  description?: { en: string; th: string };
}

interface DescriptionDetailsInterface {
  paragraphs: { en: string[]; th: string[] };
  bullets: { en: string[]; th: string[] };
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: { en: string; th: string };
  category: ValidCategory[];
  shortDescription: { en: string; th: string };
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: { en: string | Date; th: string | Date };
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "dentallight",
    companyName: { en: "Dentallight", th: "เดนทัลไลท์" },
    type: "Internal Systems",
    category: ["Web App", "Full Stack", "Process Management"],
    shortDescription: {
      en: "Developed an internal management system for tracking dental product orders, production, and delivery — supporting both aligners and retainers.",
      th: "พัฒนาระบบบริหารจัดการภายในสำหรับติดตามคำสั่งซื้อ การผลิต และการจัดส่งผลิตภัณฑ์ทางทันตกรรม ครอบคลุมทั้งอุปกรณ์จัดฟันใสและรีเทนเนอร์",
    },
    websiteLink: "https://www.facebook.com/dentallightaligner/",
    techStack: [
      "Vue.js",
      "Tailwind CSS",
      "Node.js",
      "Socket.io",
      "AWS",
      "Python",
      "Docker",
      "Django",
      "MySQL",
    ],
    startDate: new Date("2025-04-01"),
    endDate: { en: new Date("2025-05-30"), th: new Date("2025-05-30") },
    companyLogoImg: "/projects/dentallight/logo.png",
    pagesInfoArr: [
      {
        title: { en: "Order Management", th: "การจัดการคำสั่งซื้อ" },
        description: {
          en: "Module for dentists and staff to create and manage new orders, capturing all necessary details for aligners and retainers.",
          th: "โมดูลสำหรับทันตแพทย์และเจ้าหน้าที่ในการสร้างและจัดการคำสั่งซื้อใหม่ รวมถึงข้อมูลสำคัญสำหรับอุปกรณ์จัดฟันใสและรีเทนเนอร์",
        },
        imgArr: [
          "/projects/dentallight/dentallight_1.png",
          "/projects/dentallight/dentallight_2.png",
        ],
      },
      {
        title: {
          en: "Production Workflow Tracking",
          th: "ติดตามกระบวนการผลิต",
        },
        description: {
          en: "Step-by-step tracking of each case through production stages — from design, fabrication, to quality check.",
          th: "ติดตามกระบวนการผลิตแต่ละเคสแบบขั้นตอน ตั้งแต่การออกแบบ การผลิต ไปจนถึงการตรวจสอบคุณภาพ",
        },
        imgArr: [
          "/projects/dentallight/dentallight_3.png",
          "/projects/dentallight/dentallight_4.png",
        ],
      },
      {
        title: { en: "Delivery & Logistics", th: "การจัดส่งและโลจิสติกส์" },
        description: {
          en: "Integrated system to update and monitor delivery status, ensuring clients can track when products are shipped and received.",
          th: "ระบบติดตามและอัปเดตสถานะการจัดส่ง เพื่อให้ลูกค้าสามารถตรวจสอบการจัดส่งและรับสินค้าได้อย่างแม่นยำ",
        },
        imgArr: [
          "/projects/dentallight/dentallight_5.png",
          "/projects/dentallight/dentallight_6.png",
        ],
      },
      {
        title: { en: "Admin Dashboard", th: "แดชบอร์ดผู้ดูแลระบบ" },
        description: {
          en: "Administrative interface for internal staff to manage orders, oversee production pipelines, and update case progress.",
          th: "หน้าจอสำหรับเจ้าหน้าที่ภายในในการจัดการคำสั่งซื้อ ดูแลกระบวนการผลิต และอัปเดตความคืบหน้าแต่ละเคส",
        },
        imgArr: [
          "/projects/dentallight/dentallight_7.png",
          "/projects/dentallight/dentallight_8.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: {
        en: [
          "I developed an internal web-based system for Dentallight to manage the entire workflow of dental product orders — covering aligners and retainers.",
          "Using Next.js and React with TypeScript, I built a responsive and intuitive interface for both staff and clinic partners.",
          "The system’s workflow module enables staff to update progress of each case — from fabrication to quality checks — ensuring transparency and reducing errors.",
        ],
        th: [
          "ผมได้พัฒนาระบบเว็บภายในสำหรับ Dentallight เพื่อบริหารจัดการกระบวนการทั้งหมดของคำสั่งซื้อผลิตภัณฑ์ทางทันตกรรม ครอบคลุมทั้งอุปกรณ์จัดฟันใสและรีเทนเนอร์",
          "ใช้ Next.js และ React พร้อม TypeScript เพื่อสร้างอินเทอร์เฟซที่ใช้งานง่ายและตอบสนองได้ดีสำหรับทั้งเจ้าหน้าที่และคลินิกคู่ค้า",
          "โมดูลติดตามการผลิตช่วยให้เจ้าหน้าที่สามารถอัปเดตความคืบหน้าแต่ละเคสได้แบบเรียลไทม์ เพิ่มความโปร่งใสและลดข้อผิดพลาด",
        ],
      },
      bullets: {
        en: [
          "Built internal order & production management system for aligners and retainers.",
          "Streamlined workflow from order to delivery tracking.",
          "Created dashboards for both staff and clinics.",
        ],
        th: [
          "สร้างระบบจัดการคำสั่งซื้อและการผลิตภายในสำหรับอุปกรณ์จัดฟันใสและรีเทนเนอร์",
          "ปรับปรุงขั้นตอนการทำงานตั้งแต่รับคำสั่งซื้อจนถึงติดตามการจัดส่ง",
          "สร้างแดชบอร์ดสำหรับเจ้าหน้าที่และคลินิกในการตรวจสอบสถานะงาน",
        ],
      },
    },
  },
  {
    id: "operations_monitoring",
    companyName: {
      en: "Operations & Monitoring",
      th: "ระบบติดตามและวิเคราะห์การดำเนินงาน",
    },
    type: "Internal Systems",
    category: ["Web App", "Full Stack", "Data Analytics"],
    shortDescription: {
      en: "Developed a mobile-first operations and analytics system to monitor sales, customer bookings, KPIs, and revenue forecasts across multiple branches.",
      th: "พัฒนาระบบวิเคราะห์และติดตามผลการดำเนินงานแบบเรียลไทม์ รองรับการใช้งานผ่านมือถือ เพื่อดูยอดขาย การจองของลูกค้า และตัวชี้วัดสำคัญ (KPI) ของแต่ละสาขา",
    },
    websiteLink: "",
    techStack: [
      "Vue.js",
      "Tailwind CSS",
      "Node.js",
      "Socket.io",
      "AWS",
      "Python",
      "Docker",
      "Django",
      "MySQL",
    ],
    startDate: new Date("2025-06-01"),
    endDate: { en: new Date("2025-07-09"), th: new Date("2025-07-09") },
    companyLogoImg: "/projects/operations_monitoring/logo.png",
    pagesInfoArr: [
      {
        title: { en: "User Authentication", th: "ระบบยืนยันตัวตนผู้ใช้" },
        description: {
          en: "Secure login and role-based access control for staff and administrators.",
          th: "ระบบเข้าสู่ระบบที่ปลอดภัย พร้อมการจำกัดสิทธิ์การเข้าถึงตามบทบาทของผู้ใช้",
        },
        imgArr: [
          "/projects/operations_monitoring/operations_monitoring_1.png",
          "/projects/operations_monitoring/operations_monitoring_2.png",
        ],
      },
      {
        title: { en: "Customer Insights", th: "ข้อมูลเชิงลึกลูกค้า" },
        description: {
          en: "Analytics module showing customer data, active bookings, repeat visits, and sales performance.",
          th: "โมดูลวิเคราะห์ข้อมูลลูกค้า แสดงจำนวนลูกค้า การจอง การกลับมาใช้บริการซ้ำ และยอดขายโดยรวม",
        },
        imgArr: [
          "/projects/operations_monitoring/operations_monitoring_3.png",
          "/projects/operations_monitoring/operations_monitoring_4.png",
        ],
      },
      {
        title: { en: "Branch KPIs", th: "ตัวชี้วัดสาขา (KPI)" },
        description: {
          en: "Branch-level KPI tracking based on closed sales and completed customer treatments.",
          th: "ติดตามตัวชี้วัดผลการดำเนินงานของแต่ละสาขา เช่น ยอดขายที่ปิดได้ และการรักษาที่เสร็จสมบูรณ์",
        },
        imgArr: [
          "/projects/operations_monitoring/operations_monitoring_7.png",
          "/projects/operations_monitoring/operations_monitoring_8.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: {
        en: [
          "Built a web-based analytics system to track real-time business performance.",
          "Used Vue.js and Node.js for an optimized mobile-first experience.",
          "Integrated predictive analytics to forecast revenue and KPIs.",
        ],
        th: [
          "สร้างระบบวิเคราะห์ข้อมูลแบบเรียลไทม์เพื่อติดตามผลการดำเนินงานของธุรกิจ",
          "ใช้ Vue.js และ Node.js เพื่อให้รองรับการใช้งานบนมือถือได้อย่างมีประสิทธิภาพ",
          "ผสานการวิเคราะห์เชิงคาดการณ์เพื่อประเมินรายได้และตัวชี้วัดสำคัญในอนาคต",
        ],
      },
      bullets: {
        en: [
          "Developed mobile-first operations monitoring system.",
          "Built dashboards for sales and KPI analytics.",
          "Integrated predictive models for business forecasting.",
        ],
        th: [
          "พัฒนาระบบติดตามการดำเนินงานที่เน้นการใช้งานผ่านมือถือ",
          "สร้างแดชบอร์ดสำหรับวิเคราะห์ยอดขายและตัวชี้วัด KPI",
          "เพิ่มการวิเคราะห์เชิงคาดการณ์เพื่อช่วยวางแผนธุรกิจ",
        ],
      },
    },
  },
  {
    id: "stock",
    companyName: {
      en: "Stock Management System",
      th: "ระบบจัดการสต็อกสินค้า",
    },
    type: "Internal Systems",
    category: ["Web App", "Full Stack", "Inventory Management"],
    shortDescription: {
      en: "Developed a stock and inventory management system to track product usage, transfers, and requests across multiple branches with real-time updates.",
      th: "พัฒนาระบบจัดการสต็อกสินค้าเพื่อใช้ติดตามการใช้สินค้า การโอนย้าย และการร้องขอสินค้าระหว่างสาขาแบบเรียลไทม์",
    },
    githubLink: "",
    techStack: [
      "Vue.js",
      "Tailwind CSS",
      "Node.js",
      "Socket.io",
      "AWS",
      "Python",
      "Docker",
      "Django",
      "MySQL",
    ],
    startDate: new Date("2025-07-10"),
    endDate: { en: new Date("2025-08-30"), th: new Date("2025-08-30") },
    companyLogoImg: "/projects/stock/logo.png",
    pagesInfoArr: [
      {
        title: {
          en: "Product Inventory Dashboard",
          th: "แดชบอร์ดจัดการสินค้าคงคลัง",
        },
        description: {
          en: "Comprehensive management dashboard displaying detailed product information, stock quantities, and item categories within the inventory system.",
          th: "แดชบอร์ดบริหารจัดการที่แสดงข้อมูลสินค้า จำนวนคงเหลือ และหมวดหมู่สินค้าอย่างละเอียด",
        },
        imgArr: ["/projects/stock/stock_1.png"],
      },
      {
        title: {
          en: "Inventory & Order Management",
          th: "การจัดการคลังสินค้าและคำสั่งซื้อ",
        },
        description: {
          en: "A centralized system for managing product inventory and processing branch orders efficiently between the main warehouse and branch locations.",
          th: "ระบบศูนย์กลางสำหรับจัดการสต็อกสินค้าและคำสั่งซื้อระหว่างคลังหลักและสาขาอย่างมีประสิทธิภาพ",
        },
        imgArr: ["/projects/stock/stock_2.png", "/projects/stock/stock_3.png"],
      },
      {
        title: {
          en: "Stock Request & Approval",
          th: "การร้องขอและอนุมัติสินค้า",
        },
        description: {
          en: "Module for branches to request items from the central warehouse and track approval and delivery status.",
          th: "โมดูลสำหรับสาขาในการร้องขอสินค้าไปยังคลังหลัก พร้อมติดตามสถานะการอนุมัติและจัดส่ง",
        },
        imgArr: ["/projects/stock/stock_4.png"],
      },
      {
        title: {
          en: "Branch Inventory Dashboard",
          th: "แดชบอร์ดสินค้าของแต่ละสาขา",
        },
        description: {
          en: "Real-time overview of available stock levels across different branches.",
          th: "ภาพรวมสินค้าคงคลังของแต่ละสาขาแบบเรียลไทม์",
        },
        imgArr: ["/projects/stock/stock_5.png", "/projects/stock/stock_6.png"],
      },
      {
        title: {
          en: "Usage & Sales Tracking",
          th: "การติดตามการใช้สินค้าและยอดขาย",
        },
        description: {
          en: "Reports on product usage within branches and items sold directly to customers.",
          th: "รายงานการใช้สินค้าในแต่ละสาขาและสินค้าที่ขายให้ลูกค้าโดยตรง",
        },
        imgArr: ["/projects/stock/stock_7.png"],
      },
      {
        title: {
          en: "Admin Control Panel",
          th: "แผงควบคุมผู้ดูแลระบบ",
        },
        description: {
          en: "Centralized admin dashboard to monitor inventory, approve requests, and manage inter-branch transfers.",
          th: "แดชบอร์ดส่วนกลางสำหรับผู้ดูแลในการตรวจสอบสต็อก อนุมัติคำขอ และจัดการการโอนย้ายระหว่างสาขา",
        },
        imgArr: ["/projects/stock/stock_8.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: {
        en: [
          "I developed a stock management system designed to monitor and control the flow of products and equipment across multiple branches. The platform enables businesses to track current stock levels, manage requests from branches, and oversee transfers of inventory between locations.",
          "The system includes a stock request and approval module that allows branches to submit requests to the central warehouse. These requests can be reviewed, approved, and tracked through delivery to ensure accurate stock movement.",
          "Another key feature is the inter-branch transfer functionality, which enables real-time monitoring of items being transferred from one branch to another. This ensures transparency and reduces discrepancies in stock reporting.",
          "Additionally, the system tracks product usage and sales, offering insights into what products are consumed in-house and what items are purchased by customers. This data-driven approach helps businesses optimize inventory, reduce waste, and ensure product availability.",
          "Built with Vue.js for website accessibility and Node.js, Python and MySQL on the backend, the system provides real-time updates and scalable performance across branches.",
        ],
        th: [
          "ผมได้พัฒนาระบบจัดการสต็อกสินค้าเพื่อควบคุมการเคลื่อนไหวของสินค้าและอุปกรณ์ในหลายสาขา ระบบนี้ช่วยให้ธุรกิจสามารถติดตามจำนวนสินค้าคงเหลือ จัดการคำขอจากสาขา และควบคุมการโอนสินค้าระหว่างสาขาได้อย่างมีประสิทธิภาพ",
          "ระบบประกอบด้วยโมดูลสำหรับการร้องขอและอนุมัติสินค้า โดยสาขาสามารถส่งคำขอไปยังคลังหลัก ตรวจสอบและติดตามสถานะการอนุมัติและการจัดส่งได้แบบเรียลไทม์",
          "อีกหนึ่งฟีเจอร์สำคัญคือการโอนสินค้าระหว่างสาขา ซึ่งช่วยให้สามารถติดตามการเคลื่อนไหวของสินค้าระหว่างสาขาได้แบบเรียลไทม์ เพิ่มความโปร่งใสและลดข้อผิดพลาดในการรายงานสต็อก",
          "ระบบยังติดตามการใช้สินค้าและยอดขาย เพื่อวิเคราะห์ว่าสินค้าใดถูกใช้ภายในหรือขายให้ลูกค้าโดยตรง ช่วยให้ธุรกิจบริหารสินค้าคงคลังได้อย่างมีประสิทธิภาพ",
          "ระบบนี้สร้างด้วย Vue.js สำหรับส่วนหน้า และ Node.js, Python และ MySQL สำหรับส่วนหลัง เพื่อรองรับการอัปเดตแบบเรียลไทม์และขยายระบบได้ในอนาคต",
        ],
      },
      bullets: {
        en: [
          "Developed a stock monitoring system for multi-branch operations.",
          "Implemented branch request and approval workflows for central warehouse restocking.",
          "Enabled real-time stock transfer tracking between branches.",
          "Created reporting features to monitor product usage and customer purchases.",
          "Built an admin panel for centralized oversight of stock, requests, and transfers.",
          "Used Vue.js for website access for efficient state management.",
          "Leveraged Node.js, Python and MySQL for scalable, real-time data handling.",
        ],
        th: [
          "พัฒนาระบบติดตามสต็อกสินค้าสำหรับการดำเนินงานหลายสาขา",
          "สร้างขั้นตอนการร้องขอและอนุมัติสินค้าระหว่างสาขาและคลังหลัก",
          "รองรับการติดตามการโอนสินค้าระหว่างสาขาแบบเรียลไทม์",
          "เพิ่มฟีเจอร์รายงานการใช้สินค้าและยอดขายของแต่ละสาขา",
          "สร้างแผงควบคุมผู้ดูแลระบบสำหรับบริหารจัดการคำขอและการโอนย้ายสินค้า",
          "ใช้ Vue.js เพื่อการเข้าถึงระบบผ่านเว็บไซต์ที่มีประสิทธิภาพสูง",
          "ใช้ Node.js, Python และ MySQL เพื่อรองรับการประมวลผลข้อมูลแบบเรียลไทม์",
        ],
      },
    },
  },
  {
    id: "camera_refer",
    companyName: {
      en: "Camera & Refer",
      th: "ระบบถ่ายภาพและส่งต่อคนไข้ (Camera & Refer)",
    },
    type: "External Systems (Clients)",
    category: ["Web App", "Full Stack", "Dental Tech"],
    shortDescription: {
      en: "Developed a dental photo management system for capturing and comparing pre- and post-treatment images, enabling case reviews and client presentations.",
      th: "พัฒนาระบบจัดการภาพถ่ายทางทันตกรรม สำหรับถ่ายและเปรียบเทียบภาพก่อน–หลังการรักษา เพื่อใช้ในการติดตามเคสและนำเสนอแก่ลูกค้า",
    },
    websiteLink: "",
    techStack: [
      "Vue.js",
      "Tailwind CSS",
      "Node.js",
      "Socket.io",
      "AWS",
      "Python",
      "Docker",
      "Django",
      "MySQL",
    ],
    startDate: new Date("2025-09-01"),
    endDate: { en: new Date("2025-09-14"), th: new Date("2025-09-14") },
    companyLogoImg: "/projects/photo/logo.png",
    pagesInfoArr: [
      {
        title: { en: "Patient Photo Archive", th: "คลังภาพถ่ายคนไข้" },
        description: {
          en: "System for capturing, storing, and reviewing dental images to track treatment progress and patient history over time.",
          th: "ระบบสำหรับถ่าย เก็บ และตรวจสอบภาพถ่ายทางทันตกรรม เพื่อใช้ติดตามความคืบหน้าการรักษาและประวัติคนไข้",
        },
        imgArr: ["/projects/photo/photo_1.png"],
      },
      {
        title: {
          en: "Before & After Comparison",
          th: "การเปรียบเทียบก่อน–หลังการรักษา",
        },
        description: {
          en: "Side-by-side image comparison tool to highlight treatment results.",
          th: "เครื่องมือเปรียบเทียบภาพก่อนและหลังการรักษาแบบเคียงข้าง เพื่อแสดงผลลัพธ์อย่างชัดเจน",
        },
        imgArr: ["/projects/photo/photo_2.png"],
      },
      {
        title: { en: "Patient Photo Capture", th: "การถ่ายภาพคนไข้" },
        description: {
          en: "Interface for capturing high-quality dental images before and after procedures.",
          th: "ส่วนติดต่อผู้ใช้สำหรับถ่ายภาพทางทันตกรรมคุณภาพสูงก่อนและหลังการรักษา",
        },
        imgArr: ["/projects/photo/photo_3.png"],
      },
      {
        title: {
          en: "Client Presentation Mode",
          th: "โหมดนำเสนอผลลัพธ์แก่ลูกค้า",
        },
        description: {
          en: "Dedicated view for showcasing results to clients in a professional format.",
          th: "โหมดพิเศษสำหรับแสดงผลลัพธ์แก่ลูกค้าในรูปแบบที่สวยงามและเป็นมืออาชีพ",
        },
        imgArr: [
          "/projects/photo/photo_4.png",
          "/projects/photo/photo_5.png",
          "/projects/photo/photo_6.png",
        ],
      },
      {
        title: {
          en: "Data Security & Storage",
          th: "ความปลอดภัยและการจัดเก็บข้อมูล",
        },
        description: {
          en: "Encrypted storage ensuring patient photo privacy and compliance.",
          th: "ระบบจัดเก็บข้อมูลที่เข้ารหัส เพื่อปกป้องความเป็นส่วนตัวของภาพถ่ายคนไข้และเป็นไปตามมาตรฐานความปลอดภัย",
        },
        imgArr: ["/projects/photo/photo_7.png", "/projects/photo/photo_8.png"],
      },
      {
        title: {
          en: "Patient Referral & Procedure Tracking",
          th: "การส่งต่อคนไข้และติดตามการรักษา",
        },
        description: {
          en: "System for managing patient referrals and scheduling upcoming dental procedures, ensuring smooth coordination between visits.",
          th: "ระบบจัดการการส่งต่อคนไข้และนัดหมายการรักษาครั้งต่อไป เพื่อให้การประสานงานเป็นไปอย่างราบรื่น",
        },
        imgArr: ["/projects/photo/photo_9.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: {
        en: [
          "I designed and developed a specialized dental imaging system that enables clinics to capture patient photos both before and after procedures. The system is tailored to manage and organize these images effectively, supporting case reviews and client consultations.",
          "The platform was built with Vue.js for speed and responsiveness, while MySQL provides scalable storage for patient case data. TypeScript ensures maintainability and reliability of the application.",
          "Key features include a streamlined photo capture workflow, a secure case management dashboard, and tools for comparing before-and-after images side by side. The platform also supports creating review libraries that dentists can use for internal reference and training.",
          "A dedicated presentation mode allows clinics to showcase treatment results to clients in a clear and professional manner, enhancing transparency and trust.",
        ],
        th: [
          "ผมออกแบบและพัฒนาระบบจัดการภาพถ่ายทางทันตกรรมที่ช่วยให้คลินิกสามารถถ่ายภาพคนไข้ก่อนและหลังการรักษาได้อย่างเป็นระบบ",
          "ระบบนี้ถูกสร้างด้วย Vue.js เพื่อความรวดเร็วและตอบสนองสูง พร้อมใช้ MySQL สำหรับจัดเก็บข้อมูลเคสของคนไข้อย่างปลอดภัย และ TypeScript เพื่อให้ระบบมีความเสถียรและบำรุงรักษาง่าย",
          "ฟีเจอร์หลักประกอบด้วยกระบวนการถ่ายภาพที่ง่าย แดชบอร์ดจัดการเคสที่ปลอดภัย และเครื่องมือเปรียบเทียบภาพก่อน–หลังแบบเคียงข้าง นอกจากนี้ยังสามารถสร้างคลังภาพสำหรับการรีวิวหรือใช้ฝึกอบรมภายในได้",
          "โหมดนำเสนอช่วยให้คลินิกสามารถแสดงผลลัพธ์การรักษาแก่ลูกค้าได้อย่างมืออาชีพ เพิ่มความโปร่งใสและความเชื่อมั่น",
        ],
      },
      bullets: {
        en: [
          "Developed a photo capture and case management system tailored for dental clinics",
          "Implemented secure storage for patient photos using MySQL",
          "Created a before-and-after comparison tool to highlight treatment results",
          "Built a responsive case management dashboard with Vue.js",
          "Enabled a client presentation mode for showcasing treatment outcomes",
          "Integrated user-friendly workflows for dental staff to capture and organize photos",
          "Ensured compliance and data security for sensitive patient records",
        ],
        th: [
          "พัฒนาระบบถ่ายภาพและจัดการเคสสำหรับคลินิกทันตกรรม",
          "จัดเก็บภาพคนไข้ด้วยระบบที่ปลอดภัยโดยใช้ MySQL",
          "สร้างเครื่องมือเปรียบเทียบภาพก่อน–หลังการรักษา",
          "สร้างแดชบอร์ดจัดการเคสที่ตอบสนองรวดเร็วด้วย Vue.js",
          "เพิ่มโหมดนำเสนอสำหรับแสดงผลลัพธ์แก่ลูกค้า",
          "ออกแบบกระบวนการทำงานที่ใช้งานง่ายสำหรับเจ้าหน้าที่ทันตกรรม",
          "ปฏิบัติตามมาตรฐานความปลอดภัยของข้อมูลคนไข้",
        ],
      },
    },
  },
  {
    id: "queue",
    companyName: {
      en: "Queue Management System",
      th: "ระบบจัดการคิวลูกค้า",
    },
    type: "Internal Systems",
    category: ["Web Dev", "Full Stack", "Clinic Management"],
    shortDescription: {
      en: "Developed a customer queue management system to track check-in times, waiting durations, assigned doctors/rooms, procedures performed, and billing generation.",
      th: "พัฒนาระบบจัดการคิวลูกค้าเพื่อติดตามเวลาการเช็กอิน ระยะเวลารอ หมอและห้องที่รับผิดชอบ ขั้นตอนการรักษา และการออกบิลชำระเงิน",
    },
    websiteLink: "",
    githubLink: "",
    techStack: [
      "Vue.js",
      "Tailwind CSS",
      "Node.js",
      "Socket.io",
      "AWS",
      "Python",
      "Docker",
      "Django",
      "MySQL",
    ],
    startDate: new Date("2025-09-15"),
    endDate: { en: new Date("2025-10-14"), th: new Date("2025-10-14") },
    companyLogoImg: "/projects/queue/logo.png",
    pagesInfoArr: [
      {
        title: { en: "Customer Check-in", th: "การเช็กอินลูกค้า" },
        description: {
          en: "Module for registering customers with details of appointment, purpose of visit, and assigned queue number.",
          th: "โมดูลสำหรับลงทะเบียนลูกค้าพร้อมรายละเอียดนัดหมาย วัตถุประสงค์ในการเข้ารับบริการ และหมายเลขคิวที่ได้รับ",
        },
        imgArr: ["/projects/queue/queue_1.png"],
      },
      {
        title: { en: "Queue Dashboard", th: "แดชบอร์ดจัดการคิว" },
        description: {
          en: "Real-time dashboard showing waiting times, queue order, and estimated service time.",
          th: "แดชบอร์ดแบบเรียลไทม์ที่แสดงลำดับคิว เวลารอ และเวลาให้บริการโดยประมาณ",
        },
        imgArr: ["/projects/queue/queue_2.png"],
      },
      {
        title: { en: "Doctor & Room Assignment", th: "การมอบหมายแพทย์และห้อง" },
        description: {
          en: "Interface to assign customers to doctors and treatment rooms, tracking the start and end times of each procedure.",
          th: "หน้าจอสำหรับมอบหมายลูกค้าให้กับแพทย์และห้องทำการรักษา พร้อมบันทึกเวลาเริ่มต้นและสิ้นสุดของแต่ละขั้นตอน",
        },
        imgArr: ["/projects/queue/queue_3.png"],
      },
      {
        title: { en: "Treatment Tracking", th: "การติดตามการรักษา" },
        description: {
          en: "Detailed records of procedures performed, duration of each treatment, and related notes.",
          th: "บันทึกข้อมูลการรักษาอย่างละเอียด รวมถึงระยะเวลาและบันทึกเพิ่มเติมของแต่ละเคส",
        },
        imgArr: ["/projects/queue/queue_4.png"],
      },
      {
        title: { en: "Billing & Checkout", th: "การคิดเงินและชำระเงิน" },
        description: {
          en: "Automated billing system generating invoices based on treatments completed, with payment tracking.",
          th: "ระบบคิดเงินอัตโนมัติที่สร้างใบแจ้งหนี้จากการรักษาที่เสร็จสิ้น พร้อมติดตามสถานะการชำระเงิน",
        },
        imgArr: ["/projects/queue/queue_5.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: {
        en: [
          "I developed a queue management system tailored for clinics and service-based businesses to optimize customer flow and improve operational efficiency. The system tracks each customer from the moment they check in until their visit is completed and billed.",
          "Customers can be registered with their appointment details and are automatically assigned a queue number. A real-time dashboard displays waiting times and queue progress, allowing staff to manage flow effectively.",
          "Doctors and rooms can be assigned dynamically, and the system records the start and end time of each procedure. This provides detailed insights into service duration, resource utilization, and patient experience.",
          "The system also integrates a billing module that automatically calculates charges based on the treatments performed, ensuring accurate and efficient invoicing.",
          "Built using Vue.js for the front-end and Node.js, Python and MySQL on the backend, the platform provides real-time updates and scalability to handle multiple branches or large patient volumes.",
        ],
        th: [
          "ผมได้พัฒนาระบบจัดการคิวที่ออกแบบมาเฉพาะสำหรับคลินิกและธุรกิจที่ให้บริการ เพื่อปรับปรุงการไหลของลูกค้าและเพิ่มประสิทธิภาพในการดำเนินงาน ระบบนี้สามารถติดตามลูกค้าได้ตั้งแต่เช็กอินจนเสร็จสิ้นการรักษาและการชำระเงิน",
          "ลูกค้าสามารถลงทะเบียนพร้อมรายละเอียดนัดหมาย และระบบจะกำหนดหมายเลขคิวโดยอัตโนมัติ แดชบอร์ดแบบเรียลไทม์ช่วยให้เจ้าหน้าที่ติดตามคิวและจัดการลูกค้าได้อย่างมีประสิทธิภาพ",
          "แพทย์และห้องทำการสามารถมอบหมายแบบไดนามิก ระบบจะบันทึกเวลาเริ่มต้นและสิ้นสุดของแต่ละขั้นตอนเพื่อใช้ในการวิเคราะห์ประสิทธิภาพและระยะเวลาการให้บริการ",
          "ระบบยังมีโมดูลการคิดเงินที่คำนวณค่าบริการโดยอัตโนมัติจากขั้นตอนการรักษาที่เสร็จสิ้น ทำให้การออกบิลและชำระเงินเป็นไปอย่างรวดเร็วและแม่นยำ",
          "พัฒนาโดยใช้ Vue.js สำหรับส่วนหน้า และ Node.js, Python และ MySQL สำหรับส่วนหลัง เพื่อรองรับการอัปเดตแบบเรียลไทม์และขยายระบบได้ตามปริมาณผู้ใช้",
        ],
      },
      bullets: {
        en: [
          "Developed a queue management system to streamline patient flow in clinics.",
          "Implemented real-time dashboards to track waiting times and queue progress.",
          "Built features for doctor and room assignment with detailed procedure tracking.",
          "Recorded treatment duration and services performed for reporting and optimization.",
          "Integrated billing module to generate invoices automatically after treatments.",
          "Leveraged Vue.js, Node.js, Python and MySQL for real-time and scalable operations.",
          "Improved customer experience by reducing wait times and ensuring transparency.",
        ],
        th: [
          "พัฒนาระบบจัดการคิวเพื่อเพิ่มประสิทธิภาพการให้บริการในคลินิก",
          "สร้างแดชบอร์ดเรียลไทม์สำหรับติดตามเวลารอและลำดับคิว",
          "เพิ่มฟีเจอร์การมอบหมายแพทย์และห้องพร้อมการติดตามขั้นตอนการรักษา",
          "บันทึกระยะเวลาและขั้นตอนการรักษาเพื่อใช้ในการวิเคราะห์และพัฒนา",
          "รวมโมดูลการคิดเงินอัตโนมัติหลังการรักษาเสร็จสิ้น",
          "ใช้ Vue.js, Node.js, Python และ MySQL เพื่อรองรับระบบเรียลไทม์และขยายได้",
          "ปรับปรุงประสบการณ์ลูกค้าโดยลดเวลารอและเพิ่มความโปร่งใส",
        ],
      },
    },
  },
  {
    id: "ecommerce",
    companyName: {
      en: "Ecommerce (Mini Project Hobby)",
      th: "ระบบอีคอมเมิร์ซ (โปรเจกต์ส่วนตัว)",
    },
    type: "External Systems (Clients)",
    category: ["Web Dev", "Full Stack", "E-Commerce Platform"],
    shortDescription: {
      en: "Developed a full-stack e-commerce platform with product management, shopping cart, discount engine, and order tracking system for both customers and admins.",
      th: "พัฒนาแพลตฟอร์มอีคอมเมิร์ซแบบฟูลสแต็ก พร้อมระบบจัดการสินค้า รถเข็น ส่วนลด และติดตามคำสั่งซื้อสำหรับลูกค้าและผู้ดูแล",
    },
    websiteLink: "",
    githubLink: "",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "CSS 3",
      "React",
      "Vercel",
      "Typescript",
      "Javascript",
    ],
    startDate: new Date("2025-10-10"),
    endDate: { en: new Date("2025-10-15"), th: new Date("2025-10-15") },
    companyLogoImg: "/projects/ecommerce/logo.png",
    pagesInfoArr: [
      {
        title: {
          en: "Product Listing & Filtering",
          th: "การแสดงและกรองรายการสินค้า",
        },
        description: {
          en: "Displays products with dynamic filtering by category, price, and rating. Users can view product details, images, and add items to their shopping cart.",
          th: "แสดงรายการสินค้าพร้อมระบบกรองตามหมวดหมู่ ราคา และเรตติ้ง ผู้ใช้สามารถดูรายละเอียดสินค้า รูปภาพ และเพิ่มลงในรถเข็นได้",
        },
        imgArr: [
          "/projects/ecommerce/ecommerce_1.png",
          "/projects/ecommerce/ecommerce_2.png",
        ],
      },
      {
        title: {
          en: "Shopping Cart & Checkout",
          th: "รถเข็นสินค้าและการชำระเงิน",
        },
        description: {
          en: "Interactive cart system that allows users to modify quantities, apply coupons, use reward points, and view real-time discount calculations before checkout.",
          th: "ระบบรถเข็นสินค้าแบบโต้ตอบที่ให้ผู้ใช้แก้ไขจำนวนสินค้า ใช้คูปอง ใช้คะแนนสะสม และดูส่วนลดแบบเรียลไทม์ก่อนชำระเงิน",
        },
        imgArr: [
          "/projects/ecommerce/ecommerce_3.png",
          "/projects/ecommerce/ecommerce_4.png",
        ],
      },
      {
        title: {
          en: "Discount & Promotion Engine",
          th: "ระบบส่วนลดและโปรโมชั่น",
        },
        description: {
          en: "Modular discount engine supporting coupon codes, on-top promotions, and seasonal campaigns with configurable rules and thresholds.",
          th: "ระบบจัดการส่วนลดที่รองรับคูปอง โปรโมชั่นเสริม และแคมเปญตามฤดูกาล พร้อมตั้งค่ากฎและเงื่อนไขได้อย่างยืดหยุ่น",
        },
        imgArr: [
          "/projects/ecommerce/ecommerce_5.png",
          "/projects/ecommerce/ecommerce_6.png",
        ],
      },
      {
        title: {
          en: "Order Management Dashboard",
          th: "แดชบอร์ดจัดการคำสั่งซื้อ",
        },
        description: {
          en: "Admin dashboard for viewing, updating, and managing customer orders, payment statuses, and delivery progress in real time.",
          th: "แดชบอร์ดสำหรับผู้ดูแลในการดู แก้ไข และจัดการคำสั่งซื้อของลูกค้า รวมถึงสถานะการชำระเงินและการจัดส่งแบบเรียลไทม์",
        },
        imgArr: [
          "/projects/ecommerce/ecommerce_7.png",
          "/projects/ecommerce/ecommerce_8.png",
        ],
      },
      {
        title: {
          en: "Customer Points & Loyalty System",
          th: "ระบบสะสมแต้มและสมาชิก",
        },
        description: {
          en: "Integrated points system where customers earn and redeem points for future purchases, encouraging repeat engagement and customer loyalty.",
          th: "ระบบสะสมแต้มที่ให้ลูกค้าได้รับและใช้แต้มในการซื้อครั้งถัดไป เพื่อกระตุ้นการกลับมาซื้อซ้ำและสร้างความภักดีต่อแบรนด์",
        },
        imgArr: ["/projects/ecommerce/ecommerce_9.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: {
        en: [
          "*** Live Preview: https://ecommerce-app-two-flame.vercel.app ***",
          "I developed a comprehensive e-commerce platform designed for businesses to manage their online sales efficiently. The system includes product listings, shopping cart management, discount configurations, and secure checkout workflows.",
          "Customers can browse products, apply discounts, and complete purchases seamlessly through an optimized checkout process with coupon and loyalty point support.",
          "A flexible discount engine was built to support multiple types of promotions including coupons, on-top discounts, and seasonal campaigns, making marketing management easier.",
          "Developed using Next.js and Node.js with TypeScript for performance and maintainability, the system integrates a real-time backend API to handle transactions and user sessions efficiently.",
        ],
        th: [
          "*** ตัวอย่างออนไลน์: https://ecommerce-app-two-flame.vercel.app ***",
          "ผมได้พัฒนาแพลตฟอร์มอีคอมเมิร์ซแบบครบวงจรสำหรับธุรกิจ เพื่อจัดการการขายออนไลน์อย่างมีประสิทธิภาพ ระบบนี้รวมถึงการจัดการสินค้า รถเข็น ส่วนลด และกระบวนการชำระเงินที่ปลอดภัย",
          "ลูกค้าสามารถเลือกซื้อสินค้า ใช้คูปอง และทำการชำระเงินได้อย่างราบรื่น พร้อมรองรับระบบแต้มสะสม",
          "ระบบส่วนลดถูกออกแบบให้รองรับหลายรูปแบบ ทั้งคูปอง โปรโมชั่นเสริม และแคมเปญตามฤดูกาล เพื่อให้ทีมการตลาดจัดการได้ง่ายขึ้น",
          "พัฒนาด้วย Next.js และ Node.js ร่วมกับ TypeScript เพื่อประสิทธิภาพสูงและดูแลรักษาได้ง่าย พร้อมเชื่อมต่อ API แบบเรียลไทม์สำหรับจัดการธุรกรรมและเซสชันผู้ใช้",
        ],
      },
      bullets: {
        en: [
          "Developed full-stack e-commerce platform with product catalog and checkout system.",
          "Implemented discount engine with coupons, points, and seasonal promotions.",
          "Built interactive shopping cart with real-time price and discount calculations.",
          "Integrated loyalty points system to reward customers and increase engagement.",
          "Used Next.js, Node.js, and TypeScript for scalable and performant architecture.",
          "Improved shopping experience with modern UI and responsive design using Ant Design.",
        ],
        th: [
          "พัฒนาแพลตฟอร์มอีคอมเมิร์ซแบบฟูลสแต็กพร้อมระบบจัดการสินค้าและชำระเงิน",
          "สร้างระบบส่วนลดที่รองรับคูปอง แต้มสะสม และโปรโมชั่นตามฤดูกาล",
          "สร้างระบบรถเข็นสินค้าแบบโต้ตอบพร้อมคำนวณราคาและส่วนลดแบบเรียลไทม์",
          "เพิ่มระบบแต้มสะสมเพื่อกระตุ้นการกลับมาซื้อซ้ำของลูกค้า",
          "ใช้ Next.js, Node.js และ TypeScript เพื่อประสิทธิภาพและความสามารถในการขยาย",
          "ปรับปรุงประสบการณ์การช้อปปิ้งด้วยดีไซน์สมัยใหม่และรองรับทุกอุปกรณ์ด้วย Ant Design",
        ],
      },
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
