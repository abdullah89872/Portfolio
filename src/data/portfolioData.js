// ============================================================
// portfolioData.js — Centralized configuration for Abdullah Abbas's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Abdullah Abbas",
  firstName: "Abdullah",
  brandName: "Abdullah Abbas",
  title: "Software Engineer",
  location: "Lahore, Pakistan",
  phone: "+92 346-6056781",
  emails: {
    primary: "abdullah67812d@gmail.com",
    secondary: "abdullah67812d@gmail.com",
  },
  summary:
    "Software Engineering student at COMSATS University with hands-on experience in MERN Stack, Java, and Python. Passionate about building efficient, user-friendly applications with clean architecture and modern development practices.",
  resumeUrl: "/Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/abdullah89872",
  linkedin: "https://www.linkedin.com/in/abdullah-abbas-28a003362/",
  instagram: "https://www.instagram.com/abd_wryh",
};

export const heroContent = {
  greeting: "Hi, I'm Abdullah",
  titleHighlight: "Software Engineer",
  subtitle:
    "I build efficient, scalable applications using the MERN Stack, Java, and Python.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Abdullah Abbas</span>, a Software Engineering student at COMSATS University, Lahore. I'm passionate about building efficient, user-friendly web applications using the MERN Stack, Java, and Python — focused on clean code and modern development practices.`,
  techStack: ["MERN Stack", "Java", "Python"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using MERN Stack, Java, and Python with best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment followed by ongoing support and iteration.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 88 },
        { name: "Java", level: 82 },
        { name: "Python", level: 78 },
        { name: "C++", level: 75 },
      ],
    },
    {
      title: "MERN Stack",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 80 },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "REST APIs", level: 82 },
        { name: "OOP Principles", level: 85 },
        { name: "Java (OOP)", level: 80 },
      ],
    },
    {
      title: "Tools & Version Control",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 78 },
      ],
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures", level: 82 },
        { name: "Algorithms", level: 80 },
        { name: "DBMS", level: 78 },
        { name: "Parallel Computing", level: 72 },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Analytical Thinking", level: 88 },
        { name: "Team Collaboration", level: 85 },
        { name: "Attention to Detail", level: 87 },
      ],
    },
  ],
};

// Projects
export const projects = [
  {
    id: "gym-management",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Gym Management Website",
    description:
      "A full-featured gym management web application built with the MERN Stack. Enables gym owners to manage memberships, track attendance, handle billing, and view analytics — all through a modern, responsive dashboard with role-based access control.",
    techTags: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
      links: {
        github: "https://github.com/abdullah89872/Mern-Elgymnasio",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "library-management",
    number: "02",
    badge: null,
    title: "Library Management System",
    description:
      "A C-based library management system that manages book inventory, member records, borrowing/returning flows, and reporting — implemented using efficient data structures and algorithms.",
    techTags: ["C", "Data Structures", "Algorithms"],
    links: {
      github: "https://github.com/abdullah89872/Library-Management-System",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "railway-management",
    number: "03",
    badge: null,
    title: "Railway Management System",
    description:
      "An object-oriented Java application simulating a complete railway management system. Features train scheduling, passenger booking, route management, and ticket generation — built with solid OOP design patterns and clean architecture.",
    techTags: ["Java", "OOP", "Data Structures", "Algorithms"],
    links: {
      github: "https://github.com/abdullah89872",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "string-visualizer",
    number: "04",
    badge: null,
    title: "String Visualizer",
    description:
      "A Java-based interactive tool for visualizing string algorithms in real-time. Demonstrates operations such as pattern matching, string traversal, reversal, and manipulation — designed as an educational utility for understanding string data structures.",
    techTags: ["Java", "Algorithms", "Data Structures", "Visualization"],
    links: {
      github: "https://github.com/abdullah89872/String-Vistualizer",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "parallel-search-engine",
    number: "05",
    badge: null,
    title: "Parallel Search Engine",
    description:
      "A Python-based search engine leveraging parallel and distributed computing techniques to accelerate document indexing and query resolution. Implements multi-threading and process-level parallelism for high-performance search across large datasets.",
    techTags: ["Python", "Parallel Computing", "Distributed Systems", "Algorithms"],
    links: {
      github: "https://github.com/abdullah89872/Parallel-Search-engine",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "MERN Stack Development",
      issuer: "Coursera",
      icon: "⚛️",
    },
    {
      name: "Programming in Java",
      issuer: "NPTEL / Coursera",
      icon: "☕",
    },
    {
      name: "Python for Everybody",
      issuer: "Coursera",
      icon: "🐍",
    },
    {
      name: "Data Structures & Algorithms",
      issuer: "HackerRank",
      icon: "🧩",
    },
    {
      name: "Git & GitHub Essentials",
      issuer: "GitHub",
      icon: "🐙",
    },
    {
      name: "Web Development Fundamentals",
      issuer: "freeCodeCamp",
      icon: "🌐",
    },
  ],
  viewAllUrl:
    "https://www.linkedin.com/in/abdullah-abbas-28a003362/",
};

export const education = {
  degree: "BS Software Engineering",
  institution: "COMSATS University",
  cgpa: "—",
  graduation: "2027",
  twelfth: "Intermediate — Punjab College (2021–2023)",
  tenth: "Matriculation — Punjab Public School (2019–2021)",
};

// Work Experience (Internships section)
export const internshipsList = [
  {
    organization: "Mindbridge",
    role: "Customer Service Representative",
    duration: "Aug 2025 – Oct 2025",
    skills: [
      "Customer Support",
      "Professional Communication",
      "Issue Resolution",
      "Client Relations",
    ],
    tech: ["CRM Tools", "Communication Platforms", "Ticketing Systems"],
  },
  {
    organization: "Rizzup Media",
    role: "Customer Sales Representative",
    duration: "Oct 2025 – Dec 2025",
    skills: [
      "Lead Generation",
      "Digital Marketing",
      "Sales Strategy",
      "Client Engagement",
    ],
    tech: ["Sales CRM", "Digital Marketing Tools", "Social Media Platforms"],
  },
  {
    organization: "100 Local Pvt",
    role: "Customer Sales Representative",
    duration: "Jan 2026 – Jul 2026",
    skills: [
      "Lead Generation",
      "Business Development",
      "Customer Engagement",
      "Digital Services Promotion",
    ],
    tech: ["CRM", "Lead Management", "Communication Tools"],
  },
];

// Academic & Co-curricular Activities
export const leadershipList = [
  {
    title: "BS Software Engineering — COMSATS University",
    description:
      "Pursuing a comprehensive degree in Software Engineering with a focus on web development, algorithms, data structures, and distributed systems. Actively building real-world projects alongside coursework.",
    role: "Full-time Student",
    badge: "Academic",
  },
  {
    title: "MERN Stack Full-Stack Developer",
    description:
      "Built multiple full-stack web applications including a Gym Management System and Grocery Management System using React, Node.js, Express, and MongoDB — applying industry best practices.",
    role: "Full-Stack Developer",
    badge: "Projects",
  },
  {
    title: "Parallel & Distributed Computing — Python",
    description:
      "Developed a Parallel Search Engine as part of a Parallel & Distributed Computing course, implementing multi-threading and process-level parallelism for high-performance search capabilities.",
    role: "Developer",
    badge: "Research",
  },
  {
    title: "Multi-Professional Work Experience",
    description:
      "Gained practical professional experience across three organizations — Mindbridge, Rizzup Media, and 100 Local Pvt — developing strong communication, client engagement, and business development skills.",
    role: "Professional",
    badge: "Experience",
  },
  {
    title: "Object-Oriented Java Engineering",
    description:
      "Designed and implemented complex Java applications including a Railway Management System and String Visualizer, demonstrating mastery of OOP principles, design patterns, and algorithm visualization.",
    role: "Java Developer",
    badge: "Engineering",
  },
];

// Soft Skills
export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Debugging and analytically decomposing complex software challenges into clean, modular solutions.",
  },
  {
    name: "Analytical Thinking",
    icon: "🔍",
    desc: "Systematic evaluation of solutions, performance bottlenecks, and architectural trade-offs.",
  },
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Agile workflow experience across professional environments and university group projects.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Strong customer-facing communication skills developed across multiple professional roles.",
  },
  {
    name: "Attention to Detail",
    icon: "🎯",
    desc: "Code quality focus, careful debugging, and clean, maintainable software development practices.",
  },
  {
    name: "Time Management",
    icon: "⏰",
    desc: "Balancing university coursework, multiple job roles, and personal development projects effectively.",
  },
  {
    name: "Adaptability",
    icon: "🌟",
    desc: "Quick to adopt new technologies — from MERN Stack to Java OOP to Python distributed systems.",
  },
  {
    name: "Leadership",
    icon: "👑",
    desc: "Taking initiative on projects, coordinating team efforts, and delivering results under pressure.",
  },
];

// Content Creation / Projects Showcase (repurposed)
export const contentCreation = {
  badge: "Beyond the Code",
  heading: "Exploring Tech, Building & Learning",
  description:
    "Outside of formal projects, I continuously explore new technologies and push my learning through personal builds and experiments.",
  categories: [
    {
      title: "MERN Stack Apps",
      description:
        "Building full-stack web applications with React, Node.js, Express, and MongoDB — from management systems to REST APIs.",
      stats: "3+ Projects Built",
      icon: "⚛️",
    },
    {
      title: "Java Engineering",
      description:
        "Implementing object-oriented systems, algorithm visualizers, and management tools using core Java and OOP principles.",
      stats: "2+ Java Projects",
      icon: "☕",
    },
    {
      title: "Python & AI",
      description:
        "Exploring parallel computing, distributed systems, and Python-based tooling — including a full Parallel Search Engine.",
      stats: "Python Projects",
      icon: "🐍",
    },
    {
      title: "Continuous Learning",
      description:
        "Actively upskilling through online courses, certifications, and hands-on experiments with emerging web technologies.",
      stats: "Always Growing",
      icon: "📚",
    },
  ],
};

export const footerContent = {
  taglines: [
    "Software Engineering & Web Dev",
    "MERN Stack · Java · Python",
    "Full Stack Applications",
  ],
  credential: "BS Software Engineering · COMSATS University",
  copyright: `© ${new Date().getFullYear()} Abdullah Abbas | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId:
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId:
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey:
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
