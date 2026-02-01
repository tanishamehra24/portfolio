const projects = [
  {
    id: "booknest",
    title: "BookNest",
    desc: "A full-stack book management app with clean, simple UI and CRUD features.",
    overview:
      "BookNest is a full-stack web application that allows users to manage and organize books efficiently through a secure dashboard.",

    problem:
      "Managing book collections manually is inefficient and unorganized. Users lack a centralized platform to store and manage book data.",

    solution:
      "BookNest provides a dashboard where users can add, update, and delete books. The frontend communicates with a RESTful backend API, ensuring smooth data flow and separation of concerns.",

    features: [
      "Protected routes",
      "Add, update, and delete books",
      "Responsive UI",
      "REST API integration",
    ],

    tech: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
    },

    challenges: [
      "Managing protected routes in React",
      "Handling async API calls and errors",
    ],

    future: [
      "Search and filter books",
      "Authentication",
      "Pagination",
      "Role-based access",
    ],

    frontendRepo: "https://github.com/tanishamehra24/booknest-frontend",
    backendRepo: "https://github.com/tanishamehra24/booknest-backend",
    live: "https://book-nest-frontend-mu.vercel.app/",
  },

  {
    id: "portfolio",
    title: "Portfolio Project",
    desc: "A personal portfolio showcasing my skills, projects, and journey as a developer.",

    overview:
      "This portfolio is a personal website built to showcase my projects, skills, and learning journey as a web developer. It focuses on clean UI, smooth navigation, and clear presentation of information.",

    problem:
      "Developers often need a single, professional platform to present their work, skills, and experience in a clear and engaging way. Generic resumes fail to show real-world projects and technical depth.",

    solution:
      "This portfolio solves that by presenting projects with detailed explanations, live demos, and source code links. It uses a modern frontend stack to ensure responsiveness, performance, and a clean user experience.",

    features: [
      "Responsive and minimal UI",
      "Project listing with detailed project pages",
      "Dynamic routing using React Router",
      "Reusable and scalable components",
      "Clean and readable code structure",
    ],

    tech: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: [],
      database: [],
    },

    challenges: [
      "Designing a layout that is minimal yet informative",
      "Structuring components for scalability",
      "Managing routing and dynamic project pages",
    ],

    future: [
      "Add animations and transitions",
      "Improve SEO and accessibility",
      "Add a blog or writing section",
    ],

    frontendRepo: "https://github.com/tanishamehra24/portfolio-frontend",
    backendRepo: " ",
    live: "YOUR_LIVE_LINK",
  },

  {
    id: "blogapp",
    title: "BlogApp Project",
    desc: "A full-stack blog platform where users can write, edit, and share posts seamlessly.",

    overview:
      "BlogApp is a full-stack blogging platform that allows users to create, edit, and manage blog posts through a clean and intuitive interface.",

    problem:
      "Writers and developers need a simple platform to share ideas without unnecessary complexity. Many blogging platforms are either too basic or overly complex for personal use.",

    solution:
      "BlogApp provides a streamlined blogging experience with authentication, post management, and a structured backend API. The frontend and backend are maintained separately to ensure scalability and clean architecture.",

    features: [
      "User authentication",
      "Create, edit, and delete blog posts",
      "Protected routes",
      "Responsive UI",
      "REST API integration",
    ],

    tech: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
    },

    challenges: [
      "Implementing authentication and protected routes",
      "Managing global state and API calls",
      "Designing a scalable backend structure",
    ],

    future: [
      "Add comments and likes",
      "Implement role-based access",
      "Improve editor experience",
      "Add pagination and search",
    ],

    frontendRepo: "https://github.com/tanishamehra24/blogApp-frontend",
    backendRepo: "https://github.com/tanishamehra24/blogApp-backend",
    live: "https://blog-app-frontend-taupe-pi.vercel.app/",
  },
];

export default projects;
