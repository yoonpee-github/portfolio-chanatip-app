import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "dentallight",
    companyName: "Dentallight",
    type: "Internal Systems",
    category: ["Web App", "Full Stack", "Process Management"],
    shortDescription:
      "Developed an internal management system for tracking dental product orders, production, and delivery — supporting both aligners and retainers.",
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
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-11-01"),
    companyLogoImg: "/projects/dentallight/logo.png",
    pagesInfoArr: [
      {
        title: "Order Management",
        description:
          "Module for dentists and staff to create and manage new orders, capturing all necessary details for aligners and retainers.",
        imgArr: [
          "/projects/dentallight/dentallight_1.png",
          "/projects/dentallight/dentallight_2.png",
        ],
      },
      {
        title: "Production Workflow Tracking",
        description:
          "Step-by-step tracking of each case through production stages — from design, fabrication, to quality check.",
        imgArr: [
          "/projects/dentallight/dentallight_3.png",
          "/projects/dentallight/dentallight_4.png",
        ],
      },
      {
        title: "Delivery & Logistics",
        description:
          "Integrated system to update and monitor delivery status, ensuring clients can track when products are shipped and received.",
        imgArr: [
          "/projects/dentallight/dentallight_5.png",
          "/projects/dentallight/dentallight_6.png",
        ],
      },
      {
        title: "Admin Dashboard",
        description:
          "Administrative interface for internal staff to manage orders, oversee production pipelines, and update case progress.",
        imgArr: [
          "/projects/dentallight/dentallight_7.png",
          "/projects/dentallight/dentallight_8.png",
        ],
      },
      {
        title: "Dashboard",
        description:
          "Check production status, and receive delivery updates in real-time.",
        imgArr: ["/projects/dentallight/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I developed an internal web-based system for Dentallight to manage the entire workflow of dental product orders — covering aligners and retainers. The platform streamlines the process from order intake, production tracking, to final delivery, providing real-time visibility to both staff and clinics.",
        "Using Next.js and React with TypeScript, I built a responsive and intuitive interface for both staff and clinic partners. On the backend, I implemented Node.js, Python and MySQL to handle complex workflows and ensure accurate data tracking across multiple stages.",
        "The system’s production workflow module enables staff to update the progress of each case — from fabrication to quality checks — ensuring transparency and reducing errors. Additionally, the client dashboard empowers dental clinics to check case progress and track deliveries directly, improving overall communication.",
        "This project was crucial in digitizing Dentallight’s core business operations, allowing seamless management of both aligner and retainer production pipelines with efficiency and scalability.",
      ],
      bullets: [
        "Built an internal order and production management system for aligners and retainers.",
        "Streamlined workflow covering order intake, production, and delivery tracking.",
        "Developed a client-facing dashboard for clinics to monitor case status in real-time.",
        "Created an admin dashboard to manage production pipelines and logistics.",
        "Leveraged Next.js, React, and TypeScript for a modern, responsive front-end.",
        "Implemented Node.js, Python and MySQL for a robust backend system.",
        "Improved efficiency, transparency, and scalability of Dentallight’s core business processes.",
      ],
    },
  },
  {
    id: "operations_monitoring",
    companyName: "Operations & Monitoring",
    type: "Internal Systems",
    category: ["Web App", "Full Stack", "Data Analytics"],
    shortDescription:
      "Developed a mobile-first operations and analytics system to monitor sales, customer bookings, KPIs, and revenue forecasts across multiple branches.",
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
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/operations_monitoring/logo.png",
    pagesInfoArr: [
      {
        title: "User Authentication",
        description:
          "Secure login and role-based access control for staff and administrators.",
        imgArr: [
          "/projects/operations_monitoring/operations_monitoring_1.png",
          "/projects/operations_monitoring/operations_monitoring_2.png",
        ],
      },
      {
        title: "Customer Insights",
        description:
          "Analytics module displaying number of customers, active bookings, and repeat visits and comprehensive dashboard showing daily, monthly, and yearly sales performance across branches.",
        imgArr: [
          "/projects/operations_monitoring/operations_monitoring_3.png",
          "/projects/operations_monitoring/operations_monitoring_4.png",
        ],
      },
      {
        title: "Average Bill Analysis",
        description:
          "Reports highlighting average revenue per customer and per bill, with historical trend comparisons.",
        imgArr: [
          "/projects/operations_monitoring/operations_monitoring_5.png",
          "/projects/operations_monitoring/operations_monitoring_6.png",
        ],
      },
      {
        title: "Branch KPIs",
        description:
          "Branch-level KPI tracking based on closed sales and completed customer treatments.",
        imgArr: [
          "/projects/operations_monitoring/operations_monitoring_7.png",
          "/projects/operations_monitoring/operations_monitoring_8.png",
        ],
      },
      {
        title: "Forecast & Projections",
        description:
          "Predictive analytics for future sales and customer growth, helping management set monthly and yearly targets.",
        imgArr: [
          "/projects/operations_monitoring/operations_monitoring_9.png",
          "/projects/operations_monitoring/operations_monitoring_10.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I developed a website-based operations and monitoring platform designed to provide real-time insights into sales performance and customer analytics. The system helps businesses track critical metrics such as bookings, average revenue per customer, and overall sales trends.",
        "Built with Vue.js for cross-platform accessibility, the application provides managers and staff with an easy-to-use interface for tracking KPIs at both branch and company levels. The backend, powered by Node.js, Python and MySQL, ensures reliable data storage and fast querying of analytics data.",
        "One of the key strengths of this system is its forecasting module, which leverages historical data to project future sales and customer growth. This enables management to set realistic KPIs and optimize strategies for increasing revenue.",
        "By digitizing reporting and monitoring processes, the platform empowers businesses to make data-driven decisions, improve operational efficiency, and maintain consistent growth across all branches.",
      ],
      bullets: [
        "Developed a website-first analytics system with Vue.js for real-time sales and operations monitoring.",
        "Implemented dashboards for tracking daily, monthly, and yearly sales performance.",
        "Built customer analytics including bookings, average bill per customer, and repeat visits.",
        "Designed branch-level KPI monitoring to measure closed sales and treatment performance.",
        "Integrated predictive analytics for forecasting sales and customer growth.",
        "Leveraged Node.js, Python and MySQL to handle high-volume data storage and analysis.",
        "Enhanced decision-making processes with accurate, accessible business insights.",
      ],
    },
  },
  {
    id: "stock",
    companyName: "Stock Management System",
    type: "Internal Systems",
    category: ["Web App", "Full Stack", "Inventory Management"],
    shortDescription:
      "Developed a stock and inventory management system to track product usage, transfers, and requests across multiple branches with real-time updates.",
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
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/stock/logo.png",
    pagesInfoArr: [
      {
        title: "Product Inventory Dashboard",
        description:
          "Comprehensive management dashboard displaying detailed product information, stock quantities, and item categories within the inventory system.",
        imgArr: ["/projects/stock/stock_1.png"],
      },
      {
        title: "Inventory & Order Management",
        description:
          "A centralized system for managing product inventory and processing branch orders efficiently between the main warehouse and branch locations.",
        imgArr: ["/projects/stock/stock_2.png", "/projects/stock/stock_3.png"],
      },
      {
        title: "Stock Request & Approval",
        description:
          "Module for branches to request items from the central warehouse and track approval and delivery status.",
        imgArr: ["/projects/stock/stock_4.png"],
      },
      {
        title: "Branch Inventory Dashboar",
        description:
          "Real-time overview of available stock levels across different branches.",
        imgArr: ["/projects/stock/stock_5.png", "/projects/stock/stock_6.png"],
      },
      {
        title: "Usage & Sales Tracking",
        description:
          "Reports on product usage within branches and items sold directly to customers.",
        imgArr: ["/projects/stock/stock_7.png"],
      },
      {
        title: "Admin Control Panel",
        description:
          "Centralized admin dashboard to monitor inventory, approve requests, and manage inter-branch transfers.",
        imgArr: ["/projects/stock/stock_8.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I developed a stock management system designed to monitor and control the flow of products and equipment across multiple branches. The platform enables businesses to track current stock levels, manage requests from branches, and oversee transfers of inventory between locations.",
        "The system includes a stock request and approval module that allows branches to submit requests to the central warehouse. These requests can be reviewed, approved, and tracked through delivery to ensure accurate stock movement.",
        "Another key feature is the inter-branch transfer functionality, which enables real-time monitoring of items being transferred from one branch to another. This ensures transparency and reduces discrepancies in stock reporting.",
        "Additionally, the system tracks product usage and sales, offering insights into what products are consumed in-house and what items are purchased by customers. This data-driven approach helps businesses optimize inventory, reduce waste, and ensure product availability.",
        "Built with Vue.js for website accessibility and Node.js, Python and MySQl on the backend, the system provides real-time updates and scalable performance across branches.",
      ],
      bullets: [
        "Developed a stock monitoring system for multi-branch operations.",
        "Implemented branch request and approval workflows for central warehouse restocking.",
        "Enabled real-time stock transfer tracking between branches.",
        "Created reporting features to monitor product usage and customer purchases.",
        "Built an admin panel for centralized oversight of stock, requests, and transfers.",
        "Used Vue.js for website access for efficient state management.",
        "Leveraged Node.js, Python and MySQL for scalable, real-time data handling.",
      ],
    },
  },
  {
    id: "camera_refer",
    companyName: "Camera & Refer",
    type: "External Systems (Clients)",
    category: ["Web App", "Full Stack", "Dental Tech"],
    shortDescription:
      "Developed a dental photo management system for capturing and comparing pre- and post-treatment images, enabling case reviews and client presentations.",
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
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/photo/logo.png",
    pagesInfoArr: [
      {
        title: "Patient Photo Archive",
        description:
          "System for capturing, storing, and reviewing dental images to track treatment progress and patient history over time.",
        imgArr: ["/projects/photo/photo_1.png"],
      },
      {
        title: "Before & After Comparison",
        description:
          "Side-by-side image comparison tool to highlight treatment results",
        imgArr: ["/projects/photo/photo_2.png"],
      },
      {
        title: "Patient Photo Capture",
        description:
          "Interface for capturing high-quality dental images before and after procedures",
        imgArr: ["/projects/photo/photo_3.png"],
      },
      {
        title: "Client Presentation Mode",
        description:
          "Dedicated view for showcasing results to clients in a professional format",
        imgArr: [
          "/projects/photo/photo_4.png",
          "/projects/photo/photo_5.png",
          "/projects/photo/photo_6.png",
        ],
      },
      {
        title: "Data Security & Storage",
        description:
          "Encrypted storage ensuring patient photo privacy and compliance",
        imgArr: ["/projects/photo/photo_7.png", "/projects/photo/photo_8.png"],
      },
      {
        title: "Patient Referral & Procedure Tracking",
        description:
          "System for managing patient referrals and scheduling upcoming dental procedures, ensuring smooth coordination between visits.",
        imgArr: ["/projects/photo/photo_9.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I designed and developed a specialized dental imaging system that enables clinics to capture patient photos both before and after procedures. The system is tailored to manage and organize these images effectively, supporting case reviews and client consultations.",
        "The platform was built with Vue.js for speed and responsiveness, while MySQL provides scalable storage for patient case data. TypeScript ensures maintainability and reliability of the application.",
        "Key features include a streamlined photo capture workflow, a secure case management dashboard, and tools for comparing before-and-after images side by side. The platform also supports creating review libraries that dentists can use for internal reference and training.",
        "A dedicated presentation mode allows clinics to showcase treatment results to clients in a clear and professional manner, enhancing transparency and trust.",
      ],
      bullets: [
        "Developed a photo capture and case management system tailored for dental clinics",
        "Implemented secure storage for patient photos using MySQL",
        "Created a before-and-after comparison tool to highlight treatment results",
        "Built a responsive case management dashboard with Vue.js",
        "Enabled a client presentation mode for showcasing treatment outcomes",
        "Integrated user-friendly workflows for dental staff to capture and organize photos",
        "Ensured compliance and data security for sensitive patient records",
      ],
    },
  },
  {
    id: "queue",
    companyName: "Queue Management System",
    type: "Internal Systems",
    category: ["Web Dev", "Full Stack", "Clinic Management"],
    shortDescription:
      "Developed a customer queue management system to track check-in times, waiting durations, assigned doctors/rooms, procedures performed, and billing generation.",
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
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/queue/logo.png",
    pagesInfoArr: [
      {
        title: "Customer Check-in",
        description:
          "Module for registering customers with details of appointment, purpose of visit, and assigned queue number.",
        imgArr: ["/projects/queue/queue_1.png"],
      },
      {
        title: "Queue Dashboard",
        description:
          "Real-time dashboard showing waiting times, queue order, and estimated service time.",
        imgArr: ["/projects/queue/queue_2.png"],
      },
      {
        title: "Doctor & Room Assignment",
        description:
          "Interface to assign customers to doctors and treatment rooms, tracking the start and end times of each procedure.",
        imgArr: ["/projects/queue/queue_3.png"],
      },
      {
        title: "Treatment Tracking",
        description:
          "Detailed records of procedures performed, duration of each treatment, and related notes.",
        imgArr: ["/projects/queue/queue_4.png"],
      },
      {
        title: "Billing & Checkout",
        description:
          "Automated billing system generating invoices based on treatments completed, with payment tracking.",
        imgArr: ["/projects/queue/queue_5.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I developed a queue management system tailored for clinics and service-based businesses to optimize customer flow and improve operational efficiency. The system tracks each customer from the moment they check in until their visit is completed and billed.",
        "Customers can be registered with their appointment details and are automatically assigned a queue number. A real-time dashboard displays waiting times and queue progress, allowing staff to manage flow effectively.",
        "Doctors and rooms can be assigned dynamically, and the system records the start and end time of each procedure. This provides detailed insights into service duration, resource utilization, and patient experience.",
        "The system also integrates a billing module that automatically calculates charges based on the treatments performed, ensuring accurate and efficient invoicing.",
        "Built using Vue.js for the front-end and Node.js, Python and MySQL on the backend, the platform provides real-time updates and scalability to handle multiple branches or large patient volumes.",
      ],
      bullets: [
        "Developed a queue management system to streamline patient flow in clinics.",
        "Implemented real-time dashboards to track waiting times and queue progress.",
        "Built features for doctor and room assignment with detailed procedure tracking.",
        "Recorded treatment duration and services performed for reporting and optimization.",
        "Integrated billing module to generate invoices automatically after treatments.",
        "Leveraged Vue.js, Node.js, Python and MySQL for real-time and scalable operations.",
        "Improved customer experience by reducing wait times and ensuring transparency.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
