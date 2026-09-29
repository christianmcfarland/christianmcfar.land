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
      'React',
      'Vue',
      'Next.js',
      'HTML',
      'CSS',
      'Tailwind',
      'SCSS',
      'Redux',
      'Pinia',
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      'Node.js',
      'Express',
      'REST',
      'GraphQL',
    ],
  },
  {
    title: 'Data & Persistence',
    skills: [
      'SQL',
      'PostgreSQL',
      'MongoDB',
      'Prisma',
      'Drizzle',
    ],
  },
  {
    title: 'Testing & Delivery',
    skills: [
      'Jest',
      'Vitest',
      'Testing Library',
      'Git',
      'GitHub Actions',
      'CI/CD',
      'Agile Software Development',
      'Scrum Software Development',
    ],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    company: 'Self Employed',
    location: 'Remote',
    role: 'Software Engineer',
    dates: '08/2024 - Present',
    bullets: [
      'Design, build, and maintain full-stack web applications using React, Next.js, and TypeScript, styled with Tailwind CSS and styled-components.',
      'Architect backend logic using Next.js Server Actions and Drizzle ORM against PostgreSQL hosted on Neon, with Zod for schema/form validation.',
      'Implement authentication with Better Auth and write unit tests with Vitest as part of the development workflow.',
      'Deploy via Vercel with automated CI/CD from GitHub; manage the full project lifecycle from requirements gathering through deployment and client support.',
      'Integrate AI-assisted development tools including Claude Code and Codex daily to accelerate code generation, debugging, and testing while maintaining code quality and review standards.',
    ],
    stack: [
      'React',
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Drizzle',
      'Vitest',
      'Vercel',
    ],
  },
  {
    company: 'CareValidate, Inc.',
    location: 'Remote, Full-time',
    role: 'Software Engineer',
    dates: '02/2023 - 01/2024',
    bullets: [
      'Built and supported a production SaaS application end-to-end using Vue 3 with Composition API and Pinia, SCSS, and Quasar on the frontend, and Express with Prisma and Apollo/GraphQL on the backend.',
      'Delivered an HR accommodations request platform featuring role-based permissions, document upload, and secure sharing with third-party reviewers, improving processing speed and audit clarity.',
      'Wrote unit tests with Jest across both frontend and backend; contributed to CI pipelines via GitHub Actions.',
      'Worked in 2-week Agile sprints with daily standups; enforced a 2-approval code review policy via GitHub branch protection.',
    ],
    stack: [
      'Vue 3',
      'TypeScript',
      'Pinia',
      'Quasar',
      'Express',
      'Prisma',
      'GraphQL',
      'Jest',
      'GitHub Actions',
    ],
  },
  {
    company: 'ANDMORE (formerly International Market Centers)',
    location: 'Remote, Full-time',
    role: 'Software Engineer',
    dates: '03/2020 - 11/2022',
    bullets: [
      'Delivered front-end features for a large B2B ecommerce ecosystem using Vue 3 with Composition API and Pinia plus custom SCSS, translating Figma designs into production UI and integrating REST APIs with Swagger/OpenAPI.',
      'Built and maintained a shared Vue component library using Storybook and Rollup.js, published to a private npm registry with semantic versioning and consumed as a package across multiple production applications.',
      'Built and enhanced a "Super Admin" internal dashboard and reporting platform unifying multiple products behind OIDC single sign-on.',
      'Wrote unit tests with Vitest and collaborated closely with a dedicated QA team handling E2E and smoke testing as part of a cross-functional team.',
    ],
    stack: [
      'Vue 3',
      'TypeScript',
      'Pinia',
      'Storybook',
      'Rollup.js',
      'Vitest',
      'OpenAPI / Swagger',
    ],
  },
  {
    company: 'RepZio, LLC',
    location: 'Juno Beach, FL, Full-time',
    role: 'Software Engineer',
    dates: '02/2019 - 03/2020',
    bullets: [
      'Led a live migration of a production Vue 2 application using Options API and Vuex to Vue 3 with Composition API and Pinia with zero downtime for active customers.',
      'Rebuilt a legacy CMS into a modern, white-labeled drag-and-drop page builder with live preview, supporting basic elements and composite components.',
      'Built a sales commissions application from the ground up against a .NET Core REST API, supporting complex nested commission logic, manual overrides, and bonus commissions.',
      'Used Postman for API testing and debugging against in-progress backend endpoints; version control via Git, Bitbucket, and GitHub; CI/CD and project tooling via Azure DevOps.',
    ],
    stack: [
      'Vue 2',
      'Vue 3',
      'TypeScript',
      'Pinia',
      'Postman',
      '.NET Core REST API',
      'Azure DevOps',
    ],
  },
  {
    company: 'Origin Code Academy',
    location: 'San Diego, CA, Full-time',
    role: 'Instructor',
    dates: '11/2017 - 12/2018',
    bullets: [
      'Built an in-house Learning Management System using the MERN stack with Redux for state management and JWT-based authentication, supporting course progress, attendance, and student workflows.',
      'Independently designed, built, and deployed a Node.js/Express barcode check-in system with a companion Python script running on a Raspberry Pi to log real-time attendance events.',
      'Owned the LMS project solo in its early stages, later growing the codebase with 2 additional contributors; deployed via Heroku with CI/CD through GitHub.',
    ],
    stack: [
      'MongoDB',
      'Mongoose',
      'Express',
      'React',
      'Redux',
      'Node.js',
      'Python',
      'Raspberry Pi',
      'Heroku',
    ],
  },
  {
    company: 'LanTrax, Inc.',
    location: 'Buffalo, NY, Full-time',
    role: 'Front End Developer',
    dates: '11/2016 - 11/2017',
    bullets: [
      'Built internal applications in Visual Studio using VB.NET, HTML/CSS, Bootstrap, and vanilla JavaScript/jQuery, using Git for version control.',
      'Wrote and optimized complex SQL Server queries and reports using SSMS and SSRS to support day-to-day business operations.',
      'Maintained a mission-critical email ingestion pipeline using complex regular expressions to normalize inbound messages into structured data, adapting patterns as source formats changed without notice.',
    ],
    stack: [
      'VB.NET',
      'SQL Server',
      'HTML/CSS',
      'JavaScript',
      'jQuery',
      'Bootstrap',
      'RegEx',
      'SSRS',
    ],
  },
];
