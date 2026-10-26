export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  dates: string;
  note?: string;
  bullets: string[];
  stack?: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface PortfolioScreenshot {
  src: string;
  alt: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  summary: string;
  challenge: string;
  built: string[];
  highlights: string[];
  stack: string[];
  screenshots?: PortfolioScreenshot[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend & UX',
    skills: [
      'HTML',
      'CSS',
      'SCSS',
      'Tailwind',
      'JavaScript',
      'TypeScript',
      'jQuery',
      'Responsive Web Design',
      'React',
      'Next.js',
      'Vue',
      'Redux',
      'Pinia',
      'Figma',
      'Storybook',
    ],
  },
  {
    title: 'WordPress & CMS',
    skills: ['WordPress', 'PHP', 'Custom Plugin Development', 'CMS'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express', 'REST', 'GraphQL', 'Postman'],
  },
  {
    title: 'Data & Persistence',
    skills: ['SQL', 'PostgreSQL', 'MongoDB', 'Qdrant'],
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
      'Vercel',
      'Agile Software Development',
    ],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    company: 'Self Employed',
    location: 'Remote',
    role: 'Software Engineer',
    dates: '02/2025 - Present',
    bullets: [
      "Architected a suite of custom WordPress plugins in PHP that power Resonate Health's member platform: personalized programs, member health profiles, appointment booking, and an AI assistant.",
      "Built an AI assistant that helps members navigate the site and guides them step by step through the client's proprietary self-guided flow to identify the resources they need. A WordPress plugin connects to two Node.js services I built: an agentic assistant and a RAG pipeline that searches 1,000+ client-written posts embedded in a Qdrant Cloud vector database.",
      'Replaced a single Formidable Form at the bottom of a post with a full program-delivery system. Members now run multiple named programs, each tracking items, completion, notes, and choices in a custom front-end player, while staff create, template, and assign programs.',
      'Moved booking from a disconnected Calendly setup onto the website. Members now book, complete intake, and pay in one flow, then see upcoming sessions and join meetings from their account. Built with custom WordPress REST endpoints, TidyCal, Formidable Forms, and Paid Memberships Pro, including retry handling for failed bookings.',
      'Built a member Health Profile dashboard that brings assessment history and test results into one tabbed view, with Chart.js visualizations and rules-based personalized recommendations.',
      'Integrated Formidable Forms, Paid Memberships Pro, ACF, MailPoet, and TidyCal; secured member actions with nonce and access checks; and wrote WP-CLI commands for content imports and audits.',
      'Use AI-assisted development tools (Claude Code, Codex) daily to speed up development, debugging, and testing.',
    ],
    stack: [
      'WordPress',
      'PHP',
      'JavaScript',
      'ACF',
      'WP-CLI',
      'Chart.js',
      'Node.js',
      'Qdrant',
      'REST APIs',
    ],
  },
  {
    company: 'CareValidate, Inc.',
    location: 'Remote',
    role: 'Software Engineer',
    dates: '02/2023 - 01/2024',
    bullets: [
      'Built and supported the Vue 3 (Composition API, Pinia) frontend of a production SaaS application, using SCSS and Quasar, for an HR accommodations request platform.',
      'Delivered role-based UI permissions (requester vs. reviewer), document upload, and secure sharing views for third-party reviewers (e.g., medical professionals), improving processing speed and audit clarity.',
      'Contributed to an AI assistant initiative, building chatbot UI features with React, Next.js, and TypeScript, integrating the OpenAI/ChatGPT API.',
      'Wrote frontend unit tests with Jest; contributed to CI pipelines via GitHub Actions.',
      'Worked in 2-week Agile sprints with daily standups; adhered to a 2-approval code review policy via GitHub branch protection.',
    ],
    stack: [
      'React',
      'Next.js',
      'Vue',
      'TypeScript',
      'SCSS',
      'Quasar',
      'Jest',
      'Node.js',
      'PostgreSQL',
      'GraphQL',
      'GitHub Actions',
    ],
  },
  {
    company: 'ANDMORE (formerly International Market Centers)',
    location: 'Remote',
    role: 'Software Engineer',
    dates: '03/2020 - 11/2022',
    note: 'International Market Centers acquired RepZio in March 2020, retaining the product and team.',
    bullets: [
      'Led a live migration of a production Vue 2 application (Options API, Vuex) to Vue 3 (Composition API, Pinia) with zero downtime for active customers.',
      'Translated Figma designs into responsive production UI with custom SCSS for a large B2B ecommerce ecosystem, integrating REST APIs (Swagger/OpenAPI).',
      'Built and maintained a shared Vue component library using Storybook and Rollup.js. It was published to a private npm registry with semantic versioning and used across multiple production applications.',
      'Built the UI for a "Super Admin" internal dashboard and reporting platform that unified multiple products behind OIDC single sign-on.',
      'Wrote unit tests with Vitest and worked closely with a dedicated QA team on E2E and smoke testing. Part of a cross-functional team of 2 front-end, 2 back-end, PM, scrum master, and QA.',
    ],
    stack: [
      'Vue 2/3',
      'TypeScript',
      'Pinia',
      'Vuex',
      'SCSS',
      'REST API',
      'Storybook',
      'Rollup.js',
      'Vitest',
      'Figma',
    ],
  },
  {
    company: 'RepZio, LLC',
    location: 'Juno Beach, FL',
    role: 'Software Engineer',
    dates: '02/2019 - 03/2020',
    bullets: [
      'Rebuilt a legacy CMS into a modern, white-labeled drag-and-drop page builder with live preview. It supported text, button, and image elements as well as reusable composite components.',
      'Built the front end for a sales commissions application from the ground up, consuming a .NET Core REST API with complex nested commission logic.',
      'Used Postman for API testing and debugging, Git for version control (Bitbucket, later GitHub), and Azure DevOps for CI/CD and project tooling.',
    ],
    stack: ['Vue 2', 'TypeScript', 'REST API', 'Git', 'Azure DevOps'],
  },
  {
    company: 'Origin Code Academy',
    location: 'San Diego, CA',
    role: 'Instructor',
    dates: '11/2017 - 12/2018',
    bullets: [
      'Built the React frontend for an in-house Learning Management System (MERN stack) with Redux for state management and JWT-based authentication, supporting course progress, attendance, and student workflows.',
      'Independently designed, built, and deployed a companion barcode check-in system, including a Node.js/Express endpoint and a Python script on a Raspberry Pi for real-time attendance logging.',
      'Owned the LMS project solo in its early stages, later growing the codebase with 2 additional contributors; deployed via Heroku with CI/CD through GitHub.',
    ],
    stack: [
      'React',
      'JavaScript',
      'Redux',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Heroku',
    ],
  },
  {
    company: 'LanTrax, Inc.',
    location: 'Buffalo, NY',
    role: 'Front End Developer',
    dates: '11/2016 - 11/2017',
    bullets: [
      'Built and maintained internal application interfaces with HTML, CSS, Bootstrap, and vanilla JavaScript/jQuery on a VB.NET back end.',
      'Wrote and optimized complex SQL Server queries and reports using SSMS and SSRS to support day-to-day business operations.',
      'Maintained a mission-critical email ingestion pipeline, using complex regular expressions to normalize inbound messages into structured data.',
    ],
    stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'jQuery',
      'Bootstrap',
      'VB.NET',
      'SQL Server',
    ],
  },
];

export const portfolioClient = 'Resonate Health';

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    summary:
      "An on-site AI assistant that helps members find their way around the site, walks them through a guided self-assessment, and answers questions using the client's own library of 1,000+ articles.",
    challenge:
      'Resonate Health has published more than 1,000 posts over the years. That depth is valuable, but it is hard for members to know where to start or which resources fit their situation. The client also has a proprietary self-guided process that members follow to work out which resources they need.',
    built: [
      'I built an AI assistant that lives on the website and handles everything from simple navigation ("where do I find my programs?") to guiding a member step by step through the self-guided flow. When a question calls for the client\'s expertise, the assistant searches their article library and answers from that content rather than from generic knowledge.',
      'Behind the scenes, a WordPress plugin connects the site to two Node.js services I built: an agentic assistant that decides how to respond, and a search pipeline it can call as one of its tools.',
    ],
    highlights: [
      'WordPress plugin as the integration layer between the site and two custom Node.js services.',
      'Agentic assistant that chooses which tools to use for each request, including the retrieval pipeline.',
      'Retrieval-augmented generation (RAG) pipeline over 1,000+ WordPress posts, embedded into a vector database hosted on Qdrant Cloud.',
      "Guided multi-step flow that keeps track of where a member is in the client's self-guided process.",
      'Powered by Claude as the underlying LLM.',
    ],
    stack: ['WordPress', 'PHP', 'Node.js', 'Claude', 'RAG', 'Qdrant Cloud'],
  },
  {
    slug: 'personalized-programs',
    title: 'Personalized Programs',
    summary:
      'A program-delivery system that lets staff build and assign personalized programs, and gives members a guided player to work through them and track their progress.',
    challenge:
      "A member's program used to be a single Formidable Form at the bottom of a WordPress post, and the form's entry history served as the program itself. Each member effectively had one program, with little room to track progress, take notes, or come back to earlier steps.",
    built: [
      'I replaced that form with a full program system. Members can now have multiple programs, each with its own name, items, completion state, notes, and choices. They work through each program in a custom player that shows the next step, linked resources, and suggested next actions.',
      "Staff can create programs from scratch, build reusable templates, and assign programs to members. Programs can also be created from recommendations in the member's Health Profile.",
    ],
    highlights: [
      'Programs modeled as WordPress custom post types, covering consultant-created, self-guided, template, protocol, and recommended programs.',
      'Custom front-end player rendered through shortcodes, with progression steps, embedded guide content, linked resources, and suggested next steps.',
      'Per-member state (item completion, notes, selected options, repeat decisions) stored in WordPress user meta.',
      'Authenticated AJAX handlers with nonce checks and access checks for every member action.',
      'Integrations with Formidable Forms and Paid Memberships Pro, plus admin tools for assigning and fulfilling programs.',
      'WP-CLI commands for importing templates and progressions and auditing content.',
    ],
    stack: [
      'WordPress',
      'PHP',
      'JavaScript',
      'Formidable Forms',
      'Paid Memberships Pro',
      'WP-CLI',
    ],
  },
  {
    slug: 'booking-integration',
    title: 'Booking Integration',
    summary:
      'An on-site booking flow that takes members from choosing a time through intake and payment, then keeps their sessions in their account where they can view and join them.',
    challenge:
      "Booking used to run entirely through Calendly, separate from the website. Members couldn't see anything about their sessions when they logged in and had to rely on Calendly's emails to find their appointments and meeting links.",
    built: [
      "I moved the whole booking process onto the website. Members pick an available time, complete an intake form, and pay through the site's existing checkout. Once payment goes through, the booking is created automatically. Members can then log in to see upcoming sessions and join meetings directly from their account. Staff get an overview of every session and its status.",
    ],
    highlights: [
      'Shortcode-based two-step booking panel: date and time selection, then a configurable intake form.',
      'Custom WordPress REST endpoints that fetch live availability from TidyCal and create bookings.',
      'Hooks into Paid Memberships Pro checkout so the TidyCal booking is created only after payment succeeds.',
      "Custom session post type and taxonomy, with ACF settings for each session type's form, price, scheduler, and MailPoet emails.",
      'Booking status, confirmed time, timezone, meeting URL, and intake entry stored on each session for members and staff.',
      'Automatic lookup and retry when a booking type ID goes stale, with failures recorded so staff can reschedule.',
    ],
    stack: [
      'WordPress REST API',
      'PHP',
      'TidyCal',
      'Paid Memberships Pro',
      'Formidable Forms',
      'ACF',
      'MailPoet',
    ],
  },
  {
    slug: 'health-profile',
    title: 'Health Profile',
    summary:
      'A member dashboard that brings assessment history and test results into one place, with personalized recommendations for what to do next.',
    challenge:
      "Members' information was spread across separate assessments and test records, which made it hard to see their overall picture or decide on a next step.",
    built: [
      "I built a tabbed Health Profile dashboard that assembles everything about a member into a single view: assessment status, test history, charts, and an overview. A rules-based engine then suggests programs or assessments that fit the member's goals, skipping anything they've already completed or aren't ready for yet. Recommendations connect directly to the Personalized Programs system, so a member can go from a suggestion to an active program.",
    ],
    highlights: [
      'Repository classes that read assessment records from Formidable Forms and physical test history from separate sources.',
      "A snapshot builder that assembles each member's status, normalized fields, recommendations, and overview.",
      'A configurable rules engine that prioritizes recommendations by matching member goals and results.',
      'Prerequisite and fulfillment checks, so members only see recommendations that apply to them.',
      'Dashboard rendered through WordPress shortcodes, with Chart.js visualizations.',
      'Clean separation of services, repositories, builders, and rule configuration.',
    ],
    stack: ['WordPress', 'PHP', 'Chart.js', 'Formidable Forms'],
  },
];
