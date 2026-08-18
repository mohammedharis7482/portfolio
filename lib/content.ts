export const site = {
  name: "Mohammed Haris",
  initials: "MH",
  title: "Product Designer & Full-Stack Developer",
  email: "mohammedharisar@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/mohammed-haris-178332325/",
    github: "https://github.com/mohammedharis7482",
    behance: "https://www.behance.net/mohdharis21",
    resume: "#", // updated once resume file is generated
  },
  availability: "Open to Work",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "PRODUCT DESIGNER • FULL-STACK DEVELOPER",
  heading:
    "I design and build digital products that turn ideas into real-world solutions.",
  body: "I'm Mohammed Haris, a Product Designer and Full-Stack Developer focused on creating thoughtful, scalable and business-driven digital products. I combine product design, modern frontend engineering and backend development to take ideas from concept to implementation.",
  ctaPrimary: "View My Work →",
  ctaSecondary: "Let's Work Together →",
  availabilityNote:
    "Currently exploring full-time opportunities in Qatar & the GCC, while available for selected freelance projects and product collaborations.",
};

export const selectedWork = {
  heading: "Selected Work",
  body: "A selection of digital products, platforms and experiences I've designed and built across SaaS, business software, sports technology, real estate, education and ecommerce.",
  cta: "View Case Study",
  liveCta: "Live Site",
};

export type Project = {
  slug: string;
  order: string;
  category: string;
  title: string;
  headline: string;
  description: string;
  role: string;
  tech: string[];
  liveUrl?: string;
  images: { src: string; alt: string }[];
};

export const featuredProjects: Project[] = [
  {
    slug: "gcc-chalissery",
    order: "01",
    category: "SPORTS • SAAS • PLATFORM",
    title: "GCC Chalissery Football Academy",
    headline: "Turning tournament operations into a connected digital experience.",
    description:
      "A centralized tournament and academy management platform — including a public academy website and a mobile-optimized registration experience — designed to simplify team registration, player management, approvals, fixtures, results and tournament operations.",
    role: "Product Design • UI/UX • Frontend • Backend Architecture • Product Strategy",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Django REST Framework", "PostgreSQL", "PWA"],
    liveUrl: "https://gccacademy.in/",
    images: [
      { src: "/images/gcc/site-hero.png", alt: "GCC Chalissery Football Academy public homepage" },
      { src: "/images/gcc/registration.jpeg", alt: "Tournament registration hub" },
      { src: "/images/gcc/add-players-mobile.jpeg", alt: "Add players mobile flow" },
      { src: "/images/gcc/matches-admin.jpeg", alt: "Admin matches dashboard" },
      { src: "/images/gcc/bracket.jpeg", alt: "Knockout bracket view" },
      { src: "/images/gcc/site-gallery.png", alt: "Academy gallery section" },
    ],
  },
  {
    slug: "nexapos",
    order: "02",
    category: "SAAS • POS • RETAIL",
    title: "NexaPOS",
    headline: "A modern operating system for small grocery businesses.",
    description:
      "A business-focused SaaS POS platform designed to simplify billing, inventory and product management for small grocery businesses.",
    role: "Product Design • UX Architecture • Frontend • Backend • Database • DevOps",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Django REST Framework", "PostgreSQL", "Docker", "PWA"],
    images: [
      { src: "/images/nexapos/dashboard.jpeg", alt: "NexaPOS dashboard" },
      { src: "/images/nexapos/billing.jpeg", alt: "NexaPOS billing screen" },
      { src: "/images/nexapos/products.jpeg", alt: "NexaPOS product catalogue" },
      { src: "/images/nexapos/reports.jpeg", alt: "NexaPOS analytics reports" },
      { src: "/images/nexapos/receipt.jpeg", alt: "NexaPOS receipt output" },
    ],
  },
  {
    slug: "propertyflow-ai",
    order: "03",
    category: "AI • REAL ESTATE • SAAS • MOBILE",
    title: "PropertyFlow AI",
    headline: "Making real estate discovery and management more intelligent.",
    description:
      "A GCC-focused real estate SaaS concept combining property discovery, management workflows and AI-powered capabilities into a unified digital experience.",
    role: "Product Design • UX Architecture • Mobile UI • Design System • Full-Stack Development",
    tech: ["React Native", "Expo", "Next.js", "TypeScript", "Django REST"],
    liveUrl: "https://propertyflow-ai-omega.vercel.app/",
    images: [
      { src: "/images/propertyflow/landing.png", alt: "PropertyFlow AI landing page" },
      { src: "/images/propertyflow/user-dashboard.png", alt: "PropertyFlow AI user dashboard" },
      { src: "/images/propertyflow/agent-dashboard.png", alt: "PropertyFlow AI agent dashboard" },
      { src: "/images/propertyflow/admin-dashboard.png", alt: "PropertyFlow AI admin dashboard" },
    ],
  },
];

export const caseStudy = {
  eyebrow: "FEATURED CASE STUDY",
  labels: {
    project: "PROJECT",
    role: "ROLE",
    interfaces: "INTERFACES",
  },
  interfaces: [
    "Public website",
    "Registration",
    "Mobile registration",
    "Player management",
    "Tournament dashboard",
    "Fixtures",
    "Knockout bracket",
    "Admin",
  ],
  // Paths resolve against featuredProjects[0].images so alt text is not duplicated
  showcase: {
    large: "/images/gcc/matches-admin.jpeg",
    small: ["/images/gcc/registration.jpeg", "/images/gcc/bracket.jpeg"],
  },
};

export const moreWork = {
  heading: "More Work",
  body: "Additional projects, concepts and client work spanning product design, frontend and full-stack development.",
};

export const moreProjects = [
  {
    category: "EDTECH • AI • FULL-STACK",
    title: "MathBot",
    description: "An education-focused assistant concept for guided problem solving and practice.",
  },
  {
    category: "WEB DESIGN • BRANDING • CLIENT PROJECT",
    title: "Odrowita",
    description: "A client web presence built around clear brand structure and content hierarchy.",
  },
  {
    category: "ECOMMERCE • FRONTEND • MOTION",
    title: "Maison Élève",
    description: "A refined ecommerce front-end exploration with considered motion and product presentation.",
  },
  {
    category: "SPORTS • PRODUCT CONCEPT",
    title: "PlaySphere",
    description: "A sports community and activity product concept.",
  },
  {
    category: "BOOKING • MOBILE • FULL-STACK",
    title: "Turf Booking App",
    description: "A slot-based booking experience for local turf facilities.",
  },
  {
    category: "RETAIL • WEB",
    title: "Baladna Offer Mart",
    description: "A retail offers browsing experience focused on clarity and speed.",
  },
  {
    category: "ENGINEERING • SYSTEMS THINKING",
    title: "Technical Debt Framework",
    description: "A structured approach to auditing and prioritising technical debt in products.",
  },
];

export const about = {
  eyebrow: "ABOUT ME",
  heading: ["More than a designer.", "More than a developer."],
  paragraphs: [
    "I'm Mohammed Haris, a Product Designer and Full-Stack Developer from Kerala, India, with a strong interest in building digital products that solve real business problems.",
    "My work sits at the intersection of design, engineering and product thinking. I enjoy understanding a problem, simplifying complexity, designing the experience, architecting the solution and turning it into a functional product.",
    "I've worked across SaaS platforms, POS systems, sports management, real estate, education, ecommerce and business websites, giving me experience with both customer-facing experiences and complex business workflows.",
    "Beyond individual projects, I'm interested in building scalable software products of my own, particularly SaaS, ERP/POS and AI-powered solutions for India and the GCC.",
  ],
  portrait: "/images/about/portrait.jpeg",
};

export const pillars = [
  {
    order: "01",
    title: "Design",
    subtitle: "Understand the user.",
    description:
      "Clear, intuitive and purposeful experiences through user flows, information architecture, wireframes, interfaces, prototypes and design systems.",
  },
  {
    order: "02",
    title: "Engineering",
    subtitle: "Build the solution.",
    description:
      "Responsive web and mobile products using modern frontend technologies and structured backend architectures.",
  },
  {
    order: "03",
    title: "Product",
    subtitle: "Solve the right problem.",
    description:
      "Connecting design and technology with business requirements, operational workflows and long-term product goals.",
  },
];

export const journey = {
  eyebrow: "MY JOURNEY",
  heading: "From designer to product builder.",
  paragraphs: [
    "My journey started with an interest in creating digital experiences and gradually expanded into understanding how those experiences are engineered.",
    "Today, I work across both sides of the product lifecycle — designing interfaces and user experiences while also building the systems behind them.",
    "This combination has shaped the way I approach projects: I don't stop at designing a screen. I think about the user journey, the business workflow, the underlying architecture and how the final product will actually work.",
  ],
  stages: ["UI/UX", "Frontend", "Full-Stack", "Product Development", "SaaS / AI"],
};

export const howIWork = {
  eyebrow: "HOW I WORK",
  heading: "From problem to product.",
};

export const process = [
  { num: "01", title: "Understand", description: "Understand users, business objectives, constraints and the actual problem." },
  { num: "02", title: "Define", description: "Structure requirements, user flows, information architecture and technical considerations." },
  { num: "03", title: "Design", description: "Create wireframes, interfaces, prototypes and reusable design systems." },
  { num: "04", title: "Build", description: "Translate the experience into clean, responsive and maintainable software." },
  { num: "05", title: "Validate", description: "Test workflows, audit implementation, identify issues and iterate." },
  { num: "06", title: "Improve", description: "Refine the product based on feedback, business needs and technical insights." },
];

export const workStyle = [
  { title: "Audit First", description: "Understand before changing." },
  { title: "Design + Engineering", description: "Design experiences with technical reality in mind." },
  { title: "Clean Architecture", description: "Build structured, reusable and maintainable systems." },
  { title: "Business Connection", description: "Technology should solve an actual user or business problem." },
];

export const experienceSection = {
  eyebrow: "EXPERIENCE",
  heading: "Experience",
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  dates: string;
  description: string;
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "UI/UX Mentor",
    company: "Softroniics",
    location: "Palakkad, Kerala",
    dates: "March 2026 – August 2026",
    description:
      "Worked across UI/UX design, design education and practical digital product development while mentoring learners on modern design principles, workflows and product creation.",
    tags: ["UI/UX", "Mentoring", "Product Design", "Design Systems"],
  },
  {
    role: "Freelance Product Designer",
    company: "Self Employed",
    location: "Remote — Helpdesk Qatar",
    dates: "December 2025 – Present",
    description:
      "Working remotely with a Qatar-based client on design and product-related work, applying UI/UX and product thinking to a real business context.",
    tags: ["UI/UX", "Freelance", "Remote", "Product Design"],
  },
  {
    role: "UI/UX Design Intern",
    company: "Aspira Design",
    location: "Bengaluru, Karnataka, India",
    dates: "July 2025 – March 2026",
    description:
      "Worked as a UI/UX Design Intern, contributing to interface design, user experience and design system work under guidance from the design team.",
    tags: ["UI/UX", "UI Design", "UX Design"],
  },
];

export const capabilitiesSection = {
  eyebrow: "CAPABILITIES",
  heading: "Design, engineering and product — end to end.",
};

export const capabilities = [
  {
    num: "01",
    title: "Product Design",
    items: ["UX strategy", "User flows", "Information architecture", "Wireframing", "UI design", "Prototyping", "Design systems", "Responsive design", "Interaction design"],
  },
  {
    num: "02",
    title: "Frontend Development",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Shadcn UI", "Responsive web", "API integration"],
  },
  {
    num: "03",
    title: "Backend Development",
    items: ["Django", "Django REST Framework", "Python", "PostgreSQL", "REST APIs", "Authentication", "Database architecture", "Business logic"],
  },
  {
    num: "04",
    title: "Mobile Development",
    items: ["React Native", "Expo", "Expo Router", "API integration", "Mobile UX"],
  },
  {
    num: "05",
    title: "Product & SaaS",
    items: ["SaaS architecture", "Business workflows", "Product strategy", "System thinking", "Technical auditing", "MVP planning", "Product architecture"],
  },
];

export const toolsSection = {
  heading: "Tools I work with.",
};

export const tools = [
  { category: "Design", items: ["Figma", "Adobe Photoshop", "Adobe Illustrator"] },
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Shadcn UI"] },
  { category: "Backend", items: ["Django", "Django REST Framework", "Python"] },
  { category: "Database", items: ["PostgreSQL"] },
  { category: "Mobile", items: ["React Native", "Expo"] },
  { category: "Engineering", items: ["Git", "GitHub", "Docker", "PWA", "REST APIs", "AI-assisted development workflows"] },
];

export const career = {
  eyebrow: "AVAILABILITY",
  heading: "Open to meaningful opportunities.",
  body: "I'm currently exploring opportunities in Qatar and the wider GCC, particularly within product design, UI/UX, frontend development and full-stack product engineering. I'm also available for selected freelance projects, remote work and product collaborations.",
  fullTime: {
    label: "FULL-TIME",
    region: "Qatar / GCC",
    heading: "Interested in",
    items: ["Product Designer", "UI/UX Designer", "Frontend Developer", "React Developer", "Next.js Developer", "Full-Stack Developer", "Product Engineer"],
    cta: "View Resume →",
  },
  freelance: {
    label: "FREELANCE",
    region: "Remote / Global",
    heading: "Available for",
    items: ["Website design and development", "SaaS MVPs", "Dashboard design", "Business applications", "POS / ERP interfaces", "UI/UX redesigns", "Frontend development", "Full-stack product development", "Design systems", "Product prototypes"],
    cta: "Start a Project →",
  },
};

export const freelanceCta = {
  heading: "Have a product idea? Let's turn it into something real.",
  body: "From UX architecture and interface design to functional software, I can help transform an idea into a polished digital product.",
  primary: "Start a Project →",
  secondary: "View My Work →",
};

export const contact = {
  eyebrow: "CONTACT",
  heading: "Let's build something meaningful.",
  body: "Whether you're hiring for a product team, looking for a freelance partner, or exploring a new product idea, I'd love to hear about what you're building.",
};

export const footer = {
  tagline: "Designing experiences. Building products. Solving real problems.",
  copyright: `© ${new Date().getFullYear()} Mohammed Haris`,
  location: "Kerala, India",
};
