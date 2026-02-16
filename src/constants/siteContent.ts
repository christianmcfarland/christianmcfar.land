export interface FeaturedProject {
  name: string;
  description: string;
  status: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  dates: string;
  bullets: string[];
  stack?: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'Off We Go Website',
    description:
      'Booking-focused charter website for Off We Go Outdoors. Built to streamline trip discovery, charter inquiries, and conversion from traffic to bookings.',
    status: 'In Progress',
    stack: ['Next.js', 'TypeScript', 'Responsive UI', 'Booking UX'],
    liveUrl: 'https://www.offwegocharters.com/',
    repoUrl: 'https://github.com/christianmcfarland/offwego',
  },
  {
    name: 'Freight Email Parser',
    description:
      'Eliminating repetitive manual dimension conversions from messy freight emails.',
    status: 'In Progress',
    stack: [
      'Parsing Logic',
      'Unit Conversion',
      'Workflow Automation',
      'LLM Experimentation',
    ],
    liveUrl: 'https://freight-email-parser.vercel.app/',
    repoUrl: 'https://github.com/christianmcfarland/freight-email-parser',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend & UX',
    skills: [
      'JavaScript',
      'TypeScript',
      'Vue',
      'Pinia',
      'Quasar',
      'React',
      'Next.js',
      'HTML/CSS',
      'Responsive Web Development',
      'Component Library Development',
      'Figma-to-UI Implementation',
      'White-Labeled UI Systems',
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      'Node.js',
      'PHP',
      'WordPress',
      'WP REST API',
      'REST API Design',
      'API Validation / Transforms',
      'OpenAPI / Swagger',
      'API Integration',
      '.NET API Integration',
      'Python Services',
      'Custom Plugin Development',
    ],
  },
  {
    title: 'Data, Automation & AI',
    skills: [
      'Postgres',
      'SQL Server',
      'T-SQL',
      'Database Migrations',
      'Data Parsing',
      'Regex-Based Email Parsing',
      'Workflow Automation',
      'LangChain',
      'OpenAI / ChatGPT API',
      'Ollama',
      'Qdrant',
      'Vector Search / RAG',
    ],
  },
  {
    title: 'Delivery & Collaboration',
    skills: [
      'CI/CD',
      'GitHub Actions',
      'Unit Testing',
      'Code Review',
      'Agile/Scrum',
      'Jira / Confluence',
      'Product-Oriented Delivery',
      'Stakeholder Demos',
      'Technical Mentorship',
      'Sprint Planning & Prioritization',
    ],
  },
  {
    title: 'Platform & Integrations',
    skills: [
      'Vercel',
      'PMPro',
      'MailPoet',
      'Formidable Forms',
      'MERN Stack',
      'Raspberry Pi + Scanner Integration',
    ],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    company: 'Resonate Health, LLC',
    location: 'Remote',
    role: 'Full Stack Developer (Contractor)',
    dates: 'January 2025 - Present',
    bullets: [
      'Own end-to-end feature delivery for a WordPress healthcare platform, converting ambiguous requirements into scoped and maintainable plugin work.',
      'Built integrations across PMPro, MailPoet, and Formidable Forms for onboarding, intake, gated content, and member communication flows.',
      'Implemented an AI-powered knowledge layer with ingestion/chunking, embeddings, vector search, and secured service integration back into WordPress.',
    ],
    stack: [
      'WordPress',
      'PHP',
      'JavaScript',
      'WP REST API',
      'Ollama',
      'Qdrant',
      'Node.js',
    ],
  },
  {
    company: 'CareValidate, Inc.',
    location: 'Remote',
    role: 'Full Stack Developer',
    dates: 'February 2023 - January 2024',
    bullets: [
      'Built and supported a production SaaS application end-to-end with backend services and TypeScript frontend delivery through reviews, testing, and CI/CD.',
      'Designed relational models and API layers with validation/transforms for reliable workflows and consistent data.',
      'Delivered an HR accommodations request platform to streamline intake, review, and decision workflows with improved auditability.',
    ],
    stack: [
      'Node.js',
      'Vue',
      'TypeScript',
      'Postgres',
      'GitHub Actions',
      'Python',
      'LangChain',
    ],
  },
  {
    company: 'ANDMORE (formerly International Market Centers)',
    location: 'Remote',
    role: 'Front End Developer',
    dates: 'March 2020 - November 2022',
    bullets: [
      'Delivered front-end features for a large B2B ecommerce ecosystem from Figma to production with testing and code review discipline.',
      'Maintained and evolved a shared Vue component library used across multiple teams to improve consistency and speed.',
      'Built a Super Admin internal platform connecting tools across the suite and standardized cross-app workflows.',
    ],
    stack: [
      'Vue',
      'TypeScript',
      'Pinia',
      'Unit Testing',
      'OpenAPI',
      '.NET API integration',
    ],
  },
  {
    company: 'RepZio, LLC',
    location: 'Juno Beach, FL',
    role: 'Front End Developer',
    dates: 'February 2019 - March 2020',
    bullets: [
      'Shipped fast-turnaround Vue/TypeScript features in a demo-driven environment with frequent stakeholder feedback loops.',
      'Helped rebuild a legacy CMS into a white-labeled website builder with expanded page elements and improved editing UX.',
      'Built a sales commissions application in parallel with a .NET backend using contract-driven API integration.',
    ],
    stack: ['Vue', 'TypeScript', 'Swagger / OpenAPI', '.NET API integration'],
  },
  {
    company: 'Origin Code Academy',
    location: 'San Diego, CA',
    role: 'Instructor',
    dates: 'November 2017 - December 2018',
    bullets: [
      'Led full-stack instruction and mentorship, writing lessons/demos and guiding implementation through reviews and project work.',
      'Built internal tools for progress tracking, assessments, and attendance workflows to reduce manual overhead.',
      'Developed an in-house LMS and a barcode-based check-in system using Raspberry Pi, Python, and Node.js.',
    ],
    stack: ['Node.js', 'React', 'MERN', 'Python', 'Raspberry Pi'],
  },
  {
    company: 'LanTrax, Inc.',
    location: 'Buffalo, NY',
    role: 'Full Stack Developer',
    dates: 'November 2016 - November 2017',
    bullets: [
      'Built internal client/server applications from rough requirements through production in a Visual Studio environment.',
      'Wrote and optimized SQL Server queries for reporting and operational workflows.',
      'Maintained a mission-critical email ingestion/parsing pipeline using regex-heavy normalization into structured application data.',
    ],
    stack: [
      'VB.NET/.NET',
      'SQL Server',
      'T-SQL',
      'HTML/CSS/JS',
      'jQuery',
      'Regex parsing',
    ],
  },
];
