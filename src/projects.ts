const projects = [
  {
    id: "next-goal",
    title: "Next Goal",
    desc: "A mobile-first goal tracking app that scores and prioritizes your goals, always surfacing the most important one to focus on next.",

    overview:
      "Next Goal is a full-stack MERN application designed to help users manage and prioritize their goals effectively. Instead of showing a flat list, it uses a scoring algorithm based on priority, deadline, energy, and estimated time to recommend the single most important goal to tackle next.",

    problem:
      "People often have multiple goals but struggle to decide where to focus their energy. Traditional to-do apps treat all tasks equally, leaving users overwhelmed and unsure what to work on next.",

    solution:
      "Next Goal eliminates decision fatigue by automatically calculating a score for each active goal and surfacing the highest priority one. Users can mark goals as done or skip them, keeping the system dynamic and up to date.",

    features: [
      "User authentication with JWT",
      "Create, edit, and delete goals",
      "Smart next goal recommendation based on scoring algorithm",
      "Mark goals as done or skip them",
      "Protected routes",
      "Mobile-first responsive UI",
      "Form validation with inline error messages",
    ],

    tech: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express", "JWT", "bcrypt"],
      database: ["MongoDB"],
    },

    challenges: [
      "Designing and tuning the goal scoring algorithm for accurate prioritization",
      "Fixing duplicate PATCH routes in Express that silently blocked status updates",
      "Managing cascading re-renders from multiple useState calls inside useEffect",
      "Handling event bubbling between delete buttons and card click navigation",
    ],

    future: [
      "Goal history page for completed and skipped goals",
      "Analytics dashboard showing goal completion trends",
      "Energy-aware scheduling based on time of day",
      "PWA support for a native mobile experience",
    ],

    frontendRepo: "https://github.com/tanishamehra24/next-goal-frontend",
    backendRepo: "https://github.com/tanishamehra24/next-goal-backend",
    live: "https://next-goal-frontend.vercel.app/",
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
      backend: ["Node.js", "Express", "JWT", "bcrypt"],
      database: ["PostgreSQL"],
    },

    challenges: [
      "Implementing authentication and protected routes",
      "Managing global state and API calls",
      "Designing a relational database structure for users and applications",
      "Handling form validation and user input errors",
    ],

    future: [
      "Interview notes and reminders",
      "Application analytics dashboard",
      "Export application data (CSV/Excel)",
      "Resume version tracking",
    ],

    frontendRepo:
      "https://github.com/tanishamehra24/internship-tracker-frontend",
    backendRepo: "https://github.com/tanishamehra24/internship-tracker-backend",
    live: "https://interntrack-mu.vercel.app/",
  },
];

export default projects;
