import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
  category: "Frontend" | "Backend" | "Database" | "Cloud" | "Tool";
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 5,
    icon: Icons.nextjs,
    category: "Frontend",
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 4,
    icon: Icons.react,
    category: "Frontend",
  },
  {
    name: "GraphQL",
    description:
      "Fetch data precisely with a powerful query language for APIs and runtime execution.",
    rating: 2,
    icon: Icons.graphql,
    category: "Database",
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 4,
    icon: Icons.nodejs,
    category: "Frontend",
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 3,
    icon: Icons.mongodb,
    category: "Database",
  },
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 4,
    icon: Icons.typescript,
    category: "Frontend",
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
    category: "Frontend",
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 5,
    icon: Icons.html5,
    category: "Frontend",
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 5,
    icon: Icons.css3,
    category: "Frontend",
  },
  {
    name: "React Native",
    description:
      "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
    rating: 2,
    icon: Icons.react,
    category: "Frontend",
  },
  {
    name: "Socket.io",
    description:
      "Enable real-time, bidirectional communication between clients and servers effortlessly.",
    rating: 3,
    icon: Icons.socketio,
    category: "Tool",
  },
  {
    name: "MariaDB",
    description:
      "A popular open-source relational database system, known for its speed, reliability, and compatibility with MySQL.",
    rating: 4,
    icon: Icons.mariadb,
    category: "Database",
  },
  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 5,
    icon: Icons.tailwindcss,
    category: "Frontend",
  },
  {
    name: "AWS (EC2, S3, IAM)",
    description:
      "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
    rating: 3,
    icon: Icons.amazonaws,
    category: "Cloud",
  },
  {
    name: "Bootstrap",
    description:
      "Quickly create responsive and appealing web designs using a popular CSS framework.",
    rating: 3,
    icon: Icons.bootstrap,
    category: "Frontend",
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 5,
    icon: Icons.mysql,
    category: "Database",
  },
  {
    name: "Docker",
    description:
      "Build, ship, and run applications seamlessly using containerization technology.",
    rating: 3,
    icon: Icons.docker,
    category: "Cloud",
  },
  {
    name: "FastAPI",
    description:
      "A modern, high-performance web framework for building APIs with Python, designed for speed and developer productivity.",
    rating: 4,
    icon: Icons.fastapi,
    category: "Backend",
  },
  {
    name: "Django",
    description:
      "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
    rating: 3,
    icon: Icons.django,
    category: "Backend",
  },
  {
    name: "Python",
    description:
      "A versatile programming language known for its readability, wide ecosystem, and applications in web development, data science, and automation.",
    rating: 4,
    icon: Icons.python,
    category: "Backend",
  },
  {
    name: "Vue.js",
    description:
      "A progressive JavaScript framework for building user interfaces, focused on simplicity and flexibility.",
    rating: 5,
    icon: Icons.vuedotjs,
    category: "Frontend",
  },
  {
    name: "Apache Airflow",
    description:
      "An open-source platform to programmatically author, schedule, and monitor complex data workflows.",
    rating: 3,
    icon: Icons.apacheairflow,
    category: "Cloud",
  },
  {
    name: "PostgreSQL",
    description:
      "A powerful, open-source relational database system with strong support for SQL standards and advanced features.",
    rating: 3,
    icon: Icons.postgresql,
    category: "Database",
  },
  {
    name: "Nginx",
    description:
      "A high-performance web server and reverse proxy known for its stability, scalability, and load balancing capabilities.",
    rating: 3,
    icon: Icons.nginx,
    category: "Cloud",
  },
  {
    name: "Github",
    description:
      "A platform for version control and collaboration, enabling developers to host and review code, manage projects, and build software together.",
    rating: 4,
    icon: Icons.github,
    category: "Cloud",
  },
  {
    name: "Figma",
    description:
      "A collaborative design tool used for UI/UX design, prototyping, and real-time team collaboration in the cloud.",
    rating: 4,
    icon: Icons.figma,
    category: "Tool",
  },
  {
    name: "Three.js",
    description:
      "A JavaScript 3D library that makes it easy to create and display animated 3D graphics in the browser using WebGL.",
    rating: 3,
    icon: Icons.threedotjs,
    category: "Frontend",
  },
  {
    name: "Vercel",
    description:
      "A cloud platform for deploying and hosting frontend applications, optimized for frameworks like Next.js with seamless CI/CD and global edge network delivery.",
    rating: 4,
    icon: Icons.vercel,
    category: "Cloud",
  },
  {
    name: "Postman",
    description:
      "A collaboration platform for API development that allows testing, documenting, and monitoring of APIs with an intuitive interface.",
    rating: 4,
    icon: Icons.postman,
    category: "Tool",
  },
  {
    name: "Git Lab (CI/CD Pipelines)",
    description:
      "A DevOps platform providing source code management and CI/CD pipelines to automate build, test, and deployment workflows.",
    rating: 3,
    icon: Icons.gitlab,
    category: "Cloud",
  },
  {
    name: "VS Code",
    description:
      "A lightweight yet powerful source code editor with built-in support for debugging, Git control, syntax highlighting, and extensions for various programming languages.",
    rating: 5,
    icon: Icons.code,
    category: "Tool",
  },
  {
    name: ".NET",
    description:
      "A framework developed by Microsoft for building scalable and secure applications across web, desktop, mobile, and cloud platforms.",
    rating: 3,
    icon: Icons.dotnet,
    category: "Backend",
  },
  {
    name: "C#",
    description:
      "A modern, object-oriented programming language developed by Microsoft, commonly used with the .NET framework to build web, desktop, and game applications.",
    rating: 3,
    icon: Icons.csharp,
    category: "Backend",
  },
  {
    name: "PHP",
    description:
      "A widely-used server-side scripting language designed for web development, enabling dynamic content and database-driven websites.",
    rating: 3,
    icon: Icons.php,
    category: "Backend",
  },
  {
    name: "Laravel",
    description:
      "A popular PHP web framework that simplifies development with elegant syntax, MVC architecture, and built-in tools for routing, authentication, and database management.",
    rating: 3,
    icon: Icons.laravel,
    category: "Backend",
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
