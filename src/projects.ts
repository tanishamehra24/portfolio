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

    frontendRepo: "https://github.com/tanishamehra24/portfolio.git",
    live: "https://tanisha-portfolio-eta.vercel.app/",
  },

  {
    id: "internship-tracker",
    title: "Internship Tracker",
    desc: "A full-stack internship tracker where users can add, edit, and track their internship applications seamlessly.",

    overview:
      "Internship Tracker is a full-stack web application that helps students organize and manage their internship or job applications in one place. It provides a centralized dashboard where users can add, track, and update the status of applications throughout the hiring process.",

    problem:
      "Students often apply to multiple internships across different platforms, making it difficult to keep track of application details, links, and statuses. This lack of organization can lead to missed follow-ups and confusion during the application process.",

    solution:
      "The Internship Tracker provides a simple platform where users can record internship applications, monitor their progress, and manage important details like company information, roles, and application status through a structured dashboard.",

    features: [
      "User authentication",
      "Create, edit, and track applications",
      "Protected routes",
      "Responsive UI",
      "Search applications by company or role",
      "REST API integration",
    ],

    tech: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express","JWT","bcrypt"],
      database: ["PostgreSQL"],
    },

    challenges: [
      "Implementing authentication and protected routes",
      "Managing global state and API calls",
      "Designing a relational database structure for users and applications",
      "Handling form validation and user input errors"
    ],

    future: [
      "Interview notes and reminders",
      "Application analytics dashboard",
      "Export application data (CSV/Excel)",
      "Resume version tracking",
    ],

    frontendRepo: "https://github.com/tanishamehra24/internship-tracker-frontend",
    backendRepo: "https://github.com/tanishamehra24/internship-tracker-backend",
    live: "https://interntrack-mu.vercel.app/",
  },
];

export default projects;
