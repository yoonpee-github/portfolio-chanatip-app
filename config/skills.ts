export interface skillsInterface {
  name: string;
  description: { en: string; th: string };
  rating: number;
  icon: string;
  category: "Frontend" | "Backend" | "Database" | "Cloud" | "Tool";
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Next.js",
    description: {
      en: "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
      th: "สร้างแอปพลิเคชันแบบไดนามิกอย่างง่ายดายด้วย routing, layouts, loading UI และ API routes",
    },
    rating: 5,
    icon: "nextjs",
    category: "Frontend",
  },
  {
    name: "React",
    description: {
      en: "Craft interactive user interfaces using components, state, props, and virtual DOM.",
      th: "สร้างส่วนติดต่อผู้ใช้แบบโต้ตอบได้ด้วย components, state, props และ virtual DOM",
    },
    rating: 4,
    icon: "react",
    category: "Frontend",
  },
  {
    name: "GraphQL",
    description: {
      en: "Fetch data precisely with a powerful query language for APIs and runtime execution.",
      th: "ดึงข้อมูลได้อย่างแม่นยำด้วยภาษาคิวรีทรงพลังสำหรับ API และการประมวลผลแบบ runtime",
    },
    rating: 2,
    icon: "graphql",
    category: "Database",
  },
  {
    name: "Node.js",
    description: {
      en: "Run JavaScript on the server side, enabling dynamic and responsive applications.",
      th: "รัน JavaScript ฝั่งเซิร์ฟเวอร์ เพื่อสร้างแอปพลิเคชันที่ไดนามิกและตอบสนองได้เร็ว",
    },
    rating: 4,
    icon: "nodejs",
    category: "Frontend",
  },
  {
    name: "MongoDB",
    description: {
      en: "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
      th: "จัดเก็บและเรียกใช้ข้อมูลอย่างราบรื่นด้วยฐานข้อมูล NoSQL ที่ยืดหยุ่นและปรับขนาดได้",
    },
    rating: 3,
    icon: "mongodb",
    category: "Database",
  },
  {
    name: "Typescript",
    description: {
      en: "Enhance JavaScript with static types, making code more understandable and reliable.",
      th: "ปรับปรุง JavaScript ด้วย static types ทำให้โค้ดเข้าใจง่ายและเชื่อถือได้",
    },
    rating: 4,
    icon: "typescript",
    category: "Frontend",
  },
  {
    name: "Javascript",
    description: {
      en: "Create interactive and dynamic web experiences with the versatile scripting language.",
      th: "สร้างประสบการณ์เว็บแบบโต้ตอบและไดนามิกด้วยภาษาสคริปต์ที่มีความยืดหยุ่น",
    },
    rating: 5,
    icon: "javascript",
    category: "Frontend",
  },
  {
    name: "HTML 5",
    description: {
      en: "Structure web content beautifully with the latest version of HyperText Markup Language.",
      th: "จัดโครงสร้างเนื้อหาเว็บอย่างสวยงามด้วย HTML เวอร์ชันล่าสุด",
    },
    rating: 5,
    icon: "html5",
    category: "Frontend",
  },
  {
    name: "CSS 3",
    description: {
      en: "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
      th: "ตกแต่งหน้าเว็บอย่างสร้างสรรค์ด้วย CSS เวอร์ชันล่าสุด",
    },
    rating: 5,
    icon: "css3",
    category: "Frontend",
  },
  {
    name: "React Native",
    description: {
      en: "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
      th: "พัฒนาแอปมือถือข้ามแพลตฟอร์มด้วย React เพื่อประสบการณ์ที่สอดคล้องและน่าสนใจ",
    },
    rating: 2,
    icon: "react",
    category: "Frontend",
  },
  {
    name: "Socket.io",
    description: {
      en: "Enable real-time, bidirectional communication between clients and servers effortlessly.",
      th: "เปิดใช้งานการสื่อสารแบบเรียลไทม์สองทางระหว่าง client และ server อย่างง่ายดาย",
    },
    rating: 3,
    icon: "socketio",
    category: "Tool",
  },
  {
    name: "MariaDB",
    description: {
      en: "A popular open-source relational database system, known for its speed, reliability, and compatibility with MySQL.",
      th: "ระบบฐานข้อมูลเชิงสัมพันธ์โอเพ่นซอร์สยอดนิยมที่มีความเร็ว เชื่อถือได้ และเข้ากันได้กับ MySQL",
    },
    rating: 4,
    icon: "mariadb",
    category: "Database",
  },
  {
    name: "Tailwind CSS",
    description: {
      en: "Design beautiful, modern websites faster with a utility-first CSS framework.",
      th: "ออกแบบเว็บไซต์สวยงามและทันสมัยได้เร็วขึ้นด้วย CSS framework แบบ utility-first",
    },
    rating: 5,
    icon: "tailwindcss",
    category: "Frontend",
  },
  {
    name: "AWS (EC2, S3, IAM)",
    description: {
      en: "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
      th: "ใช้ Amazon Web Services ในการสร้างและ deploy แอปพลิเคชันที่ปรับขนาดได้ เชื่อถือได้ และปลอดภัย",
    },
    rating: 3,
    icon: "amazonaws",
    category: "Cloud",
  },
  {
    name: "Bootstrap",
    description: {
      en: "Quickly create responsive and appealing web designs using a popular CSS framework.",
      th: "สร้างดีไซน์เว็บที่ตอบสนองได้และน่าสนใจอย่างรวดเร็วด้วย CSS framework ยอดนิยม",
    },
    rating: 3,
    icon: "bootstrap",
    category: "Frontend",
  },
  {
    name: "MySQL",
    description: {
      en: "Manage and organize relational databases efficiently for data-driven applications.",
      th: "จัดการและจัดระเบียบฐานข้อมูลเชิงสัมพันธ์อย่างมีประสิทธิภาพสำหรับแอปพลิเคชันที่ใช้ข้อมูลเป็นหลัก",
    },
    rating: 5,
    icon: "mysql",
    category: "Database",
  },
  {
    name: "Docker",
    description: {
      en: "Build, ship, and run applications seamlessly using containerization technology.",
      th: "สร้าง ส่งมอบ และรันแอปพลิเคชันได้อย่างราบรื่นด้วยเทคโนโลยี containerization",
    },
    rating: 3,
    icon: "docker",
    category: "Cloud",
  },
  {
    name: "FastAPI",
    description: {
      en: "A modern, high-performance web framework for building APIs with Python, designed for speed and developer productivity.",
      th: "เว็บ framework สมัยใหม่ประสิทธิภาพสูงสำหรับสร้าง API ด้วย Python ออกแบบเพื่อความเร็วและเพิ่ม productivity ให้กับนักพัฒนา",
    },
    rating: 4,
    icon: "fastapi",
    category: "Backend",
  },
  {
    name: "Django",
    description: {
      en: "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
      th: "Python web framework ระดับสูงที่สนับสนุนการพัฒนาอย่างรวดเร็วและการออกแบบที่สะอาดและใช้ได้จริง",
    },
    rating: 3,
    icon: "django",
    category: "Backend",
  },
  {
    name: "Python",
    description: {
      en: "A versatile programming language known for its readability, wide ecosystem, and applications in web development, data science, and automation.",
      th: "ภาษาการเขียนโปรแกรมที่หลากหลาย ใช้งานง่าย มี ecosystem กว้าง และใช้ในเว็บ, data science และ automation",
    },
    rating: 4,
    icon: "python",
    category: "Backend",
  },
  {
    name: "Vue.js",
    description: {
      en: "A progressive JavaScript framework for building user interfaces, focused on simplicity and flexibility.",
      th: "JavaScript framework แบบก้าวหน้า สำหรับสร้าง user interfaces เน้นความเรียบง่ายและยืดหยุ่น",
    },
    rating: 5,
    icon: "vuedotjs",
    category: "Frontend",
  },
  {
    name: "Apache Airflow",
    description: {
      en: "An open-source platform to programmatically author, schedule, and monitor complex data workflows.",
      th: "แพลตฟอร์มโอเพ่นซอร์สสำหรับเขียนโปรแกรม จัดตาราง และตรวจสอบ workflow ข้อมูลซับซ้อน",
    },
    rating: 3,
    icon: "apacheairflow",
    category: "Cloud",
  },
  {
    name: "PostgreSQL",
    description: {
      en: "A powerful, open-source relational database system with strong support for SQL standards and advanced features.",
      th: "ระบบฐานข้อมูลเชิงสัมพันธ์โอเพ่นซอร์สทรงพลัง รองรับ SQL standards และฟีเจอร์ขั้นสูง",
    },
    rating: 3,
    icon: "postgresql",
    category: "Database",
  },
  {
    name: "Nginx",
    description: {
      en: "A high-performance web server and reverse proxy known for its stability, scalability, and load balancing capabilities.",
      th: "เว็บเซิร์ฟเวอร์และ reverse proxy ประสิทธิภาพสูง มีความเสถียร ปรับขนาดได้ และรองรับ load balancing",
    },
    rating: 3,
    icon: "nginx",
    category: "Cloud",
  },
  {
    name: "Github",
    description: {
      en: "A platform for version control and collaboration, enabling developers to host and review code, manage projects, and build software together.",
      th: "แพลตฟอร์มสำหรับ version control และ collaboration ช่วยนักพัฒนาจัดการโค้ด โปรเจกต์ และสร้างซอฟต์แวร์ร่วมกัน",
    },
    rating: 4,
    icon: "github",
    category: "Cloud",
  },
  {
    name: "Figma",
    description: {
      en: "A collaborative design tool used for UI/UX design, prototyping, and real-time team collaboration in the cloud.",
      th: "เครื่องมือออกแบบร่วมกัน ใช้ออกแบบ UI/UX, prototyping และทำงานร่วมกับทีมแบบเรียลไทม์บนคลาวด์",
    },
    rating: 4,
    icon: "figma",
    category: "Tool",
  },
  {
    name: "Three.js",
    description: {
      en: "A JavaScript 3D library that makes it easy to create and display animated 3D graphics in the browser using WebGL.",
      th: "ไลบรารี 3D ของ JavaScript ที่ช่วยสร้างและแสดงกราฟิก 3D เคลื่อนไหวในเบราว์เซอร์ด้วย WebGL อย่างง่ายดาย",
    },
    rating: 3,
    icon: "threedotjs",
    category: "Frontend",
  },
  {
    name: "Vercel",
    description: {
      en: "A cloud platform for deploying and hosting frontend applications, optimized for frameworks like Next.js with seamless CI/CD and global edge network delivery.",
      th: "แพลตฟอร์มคลาวด์สำหรับ deploy และโฮสต์ frontend apps ปรับแต่งสำหรับ Next.js รองรับ CI/CD และ global edge network",
    },
    rating: 4,
    icon: "vercel",
    category: "Cloud",
  },
  {
    name: "Postman",
    description: {
      en: "A collaboration platform for API development that allows testing, documenting, and monitoring of APIs with an intuitive interface.",
      th: "แพลตฟอร์มร่วมมือในการพัฒนา API ที่ช่วยทดสอบ, จัดทำเอกสาร และมอนิเตอร์ API ด้วยอินเตอร์เฟซที่เข้าใจง่าย",
    },
    rating: 4,
    icon: "postman",
    category: "Tool",
  },
  {
    name: "Git Lab (CI/CD Pipelines)",
    description: {
      en: "A DevOps platform providing source code management and CI/CD pipelines to automate build, test, and deployment workflows.",
      th: "แพลตฟอร์ม DevOps สำหรับจัดการโค้ดและ CI/CD pipeline เพื่ออัตโนมัติการ build, test และ deploy",
    },
    rating: 3,
    icon: "gitlab",
    category: "Cloud",
  },
  {
    name: "VS Code",
    description: {
      en: "A lightweight yet powerful source code editor with built-in support for debugging, Git control, syntax highlighting, and extensions for various programming languages.",
      th: "ตัวแก้ไขโค้ดน้ำหนักเบาแต่ทรงพลัง รองรับ debugging, Git, syntax highlighting และ extensions สำหรับหลายภาษา",
    },
    rating: 5,
    icon: "code",
    category: "Tool",
  },
  {
    name: ".NET",
    description: {
      en: "A framework developed by Microsoft for building scalable and secure applications across web, desktop, mobile, and cloud platforms.",
      th: "Framework จาก Microsoft สำหรับสร้างแอปพลิเคชันที่ปรับขนาดได้และปลอดภัย ครอบคลุม web, desktop, mobile และ cloud",
    },
    rating: 3,
    icon: "dotnet",
    category: "Backend",
  },
  {
    name: "C#",
    description: {
      en: "A modern, object-oriented programming language developed by Microsoft, commonly used with the .NET framework to build web, desktop, and game applications.",
      th: "ภาษาการเขียนโปรแกรมเชิงวัตถุสมัยใหม่จาก Microsoft ใช้กับ .NET framework สำหรับสร้างเว็บ, desktop และเกม",
    },
    rating: 3,
    icon: "csharp",
    category: "Backend",
  },
  {
    name: "PHP",
    description: {
      en: "A widely-used server-side scripting language designed for web development, enabling dynamic content and database-driven websites.",
      th: "ภาษาสคริปต์ฝั่งเซิร์ฟเวอร์ยอดนิยม ออกแบบสำหรับเว็บพัฒนา ให้เว็บไซต์มีเนื้อหาไดนามิกและเชื่อมฐานข้อมูลได้",
    },
    rating: 3,
    icon: "php",
    category: "Backend",
  },
  {
    name: "Laravel",
    description: {
      en: "A popular PHP web framework that simplifies development with elegant syntax, MVC architecture, and built-in tools for routing, authentication, and database management.",
      th: "PHP web framework ยอดนิยม ช่วยพัฒนาได้ง่ายด้วย syntax สวยงาม, สถาปัตยกรรม MVC และเครื่องมือ built-in สำหรับ routing, authentication และ database",
    },
    rating: 3,
    icon: "laravel",
    category: "Backend",
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
