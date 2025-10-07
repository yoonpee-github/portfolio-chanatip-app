import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
  category: "Frontend" | "Backend" | "Database" | "Tool";
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
    name: "AWS",
    description:
      "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
    rating: 3,
    icon: Icons.amazonaws,
    category: "Tool",
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
    category: "Tool",
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
    category: "Tool",
  },
  {
    name: "PostgreSQL",
    description:
      "A powerful, open-source relational database system with strong support for SQL standards and advanced features.",
    rating: 4,
    icon: Icons.postgresql,
    category: "Database",
  },
  {
    name: "Nginx",
    description:
      "A high-performance web server and reverse proxy known for its stability, scalability, and load balancing capabilities.",
    rating: 3,
    icon: Icons.nginx,
    category: "Tool",
  },
  {
    name: "Github",
    description:
      "A platform for version control and collaboration, enabling developers to host and review code, manage projects, and build software together.",
    rating: 5,
    icon: Icons.github,
    category: "Tool",
  },
  {
    name: "Figma",
    description:
      "A collaborative design tool used for UI/UX design, prototyping, and real-time team collaboration in the cloud.",
    rating: 5,
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
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
