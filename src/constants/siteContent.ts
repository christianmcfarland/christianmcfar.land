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
      'Figma',
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      'Node.js',
      'PHP',
      'WordPress',
      'REST API Design',
      'OpenAPI / Swagger',
      'API Integration',
      'Python',
      'Custom Plugin Development',
    ],
  },
  {
    title: 'Data, Automation & AI',
    skills: [
      'PostgreSQL',
      'SQL Server',
      'Database Migrations',
      'Data Parsing',
      'RegEx',
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
      'Google Cloud',
      'Azure DevOps',
      'GitHub Actions',
      'Unit Testing',
      'Code Review',
      'Agile/Scrum',
      'Jira / Confluence',
      'Technical Mentorship',
    ],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    company: 'Resonate Health, LLC',
    location: 'Remote, Part-time',
    role: 'WordPress Developer',
    dates: '07/2025 - Present',
    bullets: [
      'Own end-to-end delivery of product features for a WordPress-based healthcare platform, turning ambiguous requirements into scoped work, intuitive user experience, and maintainable custom plugins. (WordPress, PHP, JS, CSS, REST API)',
      'Designed and implemented an AI-powered knowledge layer: ingestion + chunking pipeline, embeddings, vector search, and a secured external service, integrated back into WordPress via authenticated endpoints. (Ollama, Qdrant)',
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
    location: 'Remote, Full-time',
    role: 'Frontend Developer',
    dates: '02/2023 - 01/2024',
    bullets: [
      'Built and supported a production SaaS application end-to-end, owning backend services and a TypeScript front end while shipping features through code review, testing, and CI/CD. (Node.js, Postgres, Vue, TypeScript, Apollo/GraphQL)',
      'Main project: delivered an HR accommodations request platform to streamline intake, review, decision workflows, enabling faster processing and clear auditability for internal stakeholders.',
      'Contributed to an AI assistant initiative by implementing/supporting parts of the stack and product integration. (Python, LangChain, Next.js, OpenAI/ChatGPT API)',
    ],
    stack: [
      'Node.js',
      'Vue',
      'TypeScript',
      'PostgreSQL',
      'GitHub Actions',
      'Python',
      'LangChain',
    ],
  },
  {
    company: 'ANDMORE (formerly International Market Centers)',
    location: 'Remote, Full-time',
    role: 'Frontend Developer',
    dates: '03/2020 - 11/2022',
    bullets: [
      'Delivered front-end features for a large B2B ecommerce ecosystem, translating Figma designs into production UI and integrating evolving APIs. (Vue, TypeScript, Swagger/OpenAPI)',
      'Maintained and evolved a shared Vue component library used across multiple apps to improve consistency.',
      'Main project: built and enhanced a "Super Admin" internal platform that connected multiple tools in the product suite and standardized cross-app workflows. (Vue, TypeScript, Pinia, shared component library)',
    ],
    stack: [
      'Vue',
      'TypeScript',
      'Pinia',
      'Unit Testing',
      'OpenAPI / Swagger',
      '.NET API integration',
    ],
  },
  {
    company: 'RepZio, LLC',
    location: 'Juno Beach, FL, Full-time',
    role: 'Frontend Developer',
    dates: '02/2019 - 03/2020',
    bullets: [
      'Shipped frontend work in a demo-driven environment: implemented Vue/TypeScript features from loose requirements, integrated in-progress APIs, mocked data as needed, and performed hands-on QA.',
      'Main project: rebuilt a legacy CMS into a modern white-labeled website builder, expanding available page elements and improving the editing experience.',
      'Main project: built a sales commissions application from the ground up in parallel with a .NET backend.',
    ],
    stack: ['Vue', 'TypeScript', 'OpenAPI / Swagger', '.NET API integration'],
  },
  {
    company: 'Origin Code Academy',
    location: 'San Diego, CA, Full-time',
    role: 'Instructor',
    dates: '11/2017 - 12/2018',
    bullets: [
      'Built internal tools to streamline operations (progress tracking, assessments, attendance workflows) and reduce manual overhead for staff.',
      'Main project: developed an in-house Learning Management System for courses, progress, attendance, and student workflows.',
      'Side project: created a barcode-based student check-in system using a Raspberry Pi + scanner, with a lightweight Python script sending scans to a Node.js endpoint to log check-in/out events.',
    ],
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Python', 'Raspberry Pi'],
  },
  {
    company: 'LanTrax, Inc.',
    location: 'Buffalo, NY, Full-time',
    role: 'Frontend Developer',
    dates: '11/2016 - 11/2017',
    bullets: [
      'Built internal applications in Visual Studio, delivering User Interface and backend features. (VB.NET, SQL Server, HTML, CSS, JavaScript, jQuery, RegEx)',
      'Wrote and refined SQL Server queries for reporting and operational workflows, supporting reliable day-to-day business functions.',
      'Maintained an email ingestion pipeline using highly specific regular expressions to normalize inbound messages into structured application data.',
    ],
    stack: [
      'VB.NET',
      'SQL Server',
      'T-SQL',
      'HTML/CSS',
      'JavaScript',
      'jQuery',
      'RegEx',
    ],
  },
];
