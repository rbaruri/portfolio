export const profile = {
  name: 'Rajasree',
  fullName: 'Rajasree Baruri',
  title: 'Software Engineer',
  location: 'Bengaluru, Karnataka, India',
  tags: [
    'Backend & Cloud',
    'Distributed Systems',
    'Search Infrastructure',
    'React & Node.js',
  ],
  lede:
    'I build backend systems, cloud workflows, search, messaging, and React apps that hold up in production.',
  about: [
    'I write software for catalogue and partner platforms: APIs, workers, queues, and the React screens that call them.',
    'Day to day I touch OpenSearch, AWS, WhatsApp providers, MySQL, Redis, BullMQ, and Node services. I take a feature from schema and API design through deploy and the bugs that show up after.',
    'I spend time on slow queries, failed jobs, and unclear contracts. I fix the path end to end so the next release is quieter than the last.',
  ],
  email: 'rbaruri2002@gmail.com',
  github: 'https://github.com/rbaruri',
  linkedin: 'https://www.linkedin.com/in/rajasree-baruri',
}

export const experience = [
  {
    company: '',
    role: 'Software Engineer',
    period: 'Jul 2025 - Present',
    location: 'Bengaluru, India',
    milestones: [
      'Built WhatsApp multi-provider routing with ValueFirst as default and Interakt per tenant',
      'Owned BullMQ reminder and snooze workers with cancel support and SMS fallback',
      'Shipped OpenSearch SKU search with ngram indexes, chunked bulk and delta sync, and MySQL fallback',
      'Built AI dealer insights: per-dealer summaries, top-performer and underperformer stats, weekly labelling batches',
    ],
  },
  {
    company: 'Talview',
    role: 'Software Engineering Intern',
    period: 'Jan 2025 - Jul 2025',
    location: 'Bengaluru, India',
    milestones: [
      'Built a self-initiated full-stack project and contributed reusable UI components to the Tessera library',
      'Wrote Cypress tests and implemented CI/CD pipelines to streamline diagnostics and automation workflows',
    ],
  },
]

export const education = [
  {
    school: 'Christ University, Bangalore',
    degree: 'Master of Computer Applications (MCA)',
    period: 'Jul 2023 - May 2025',
    milestones: [
      'Studied software engineering, systems, and cloud',
      'Built API and database projects as coursework',
      'Finished AWS Academy Cloud Foundations',
    ],
  },
  {
    school: 'Siliguri Institute of Technology',
    degree: 'Bachelor of Computer Application',
    period: 'Aug 2020 - Jun 2023',
    milestones: [
      'Learned programming, databases, and web basics',
      'Wrote small apps that pushed me toward backend work',
      'Practiced problem solving and debugging in labs',
    ],
  },
]

export const certifications = [
  'AWS Academy Graduate - AWS Academy Cloud Foundations',
  'Introduction to Prompt Engineering for Generative AI',
  'Cybersecurity Fundamentals',
]

export const principles = [
  {
    title: 'Own the full path',
    body: 'I pick up a feature at requirements and stay through schema, API, integrate, deploy, and monitor.',
  },
  {
    title: 'Follow the request',
    body: 'I trace a call across clients, services, databases, queues, cloud, workers, and providers until I find the break.',
  },
  {
    title: 'Ship for production',
    body: 'I add idempotency, retries, logs, and clear API contracts before I call the work done.',
  },
  {
    title: 'Keep it maintainable',
    body: 'I choose designs that still make sense when traffic spikes or a provider fails at 2 a.m.',
  },
]

export const systems = [
  {
    id: '01',
    title: 'OpenSearch SKU search',
    domain: 'Search · Catalogue',
    summary:
      'I built SKU search on OpenSearch for product catalogues. Wildcard queries were slow, so I switched to ngram analyzers, chunked bulk indexing for large catalogues, added freshness checks, and kept a MySQL fallback when search is down.',
    highlights: [
      'ngram analyzer instead of wildcards',
      'Chunked bulk and delta indexing',
      'Event-driven and cron reindex',
      'MySQL fallback for catalogue list',
      'Visibility and pricing filters in the index',
    ],
    stack: ['OpenSearch', 'Node.js', 'MySQL', 'EventBridge', 'SQS'],
  },
  {
    id: '02',
    title: 'BullMQ reminders and notifications',
    domain: 'Queues · Notifications',
    summary:
      'I built reminder and snooze flows on a shared BullMQ queue. Job IDs are deterministic so the same schedule cannot double-enqueue. Workers claim due jobs, fan out bulk sends, and fall back to SMS if WhatsApp fails.',
    highlights: [
      'BullMQ reminder and snooze workers',
      'Schedule and cancel APIs',
      'Deterministic job IDs',
      'Recurring and one-off schedules',
      'SQS inbound, multi-channel outbound',
    ],
    stack: ['BullMQ', 'Redis', 'Node.js', 'MySQL', 'AWS SQS'],
  },
  {
    id: '03',
    title: 'WhatsApp multi-provider routing',
    domain: 'Messaging platforms',
    summary:
      'I built WhatsApp-first routing with provider adapters. ValueFirst is the default. Tenants mapped to Interakt use Interakt for OTP and transactional templates. Credentials stay per tenant. Delivery reports come back through webhooks, with SMS fallback on provider errors.',
    highlights: [
      'Provider routing (ValueFirst or Interakt)',
      'Per-tenant credentials',
      'OTP and transactional templates',
      'Delivery report webhooks',
      'SMS fallback on WhatsApp failure',
    ],
    stack: ['ValueFirst', 'Interakt', 'Webhooks', 'Node.js', 'MySQL'],
  },
  {
    id: '04',
    title: 'AI dealer insights and stats',
    domain: 'AI · Analytics',
    summary:
      'I generate individual dealer insight summaries as structured JSON (Groq today, AWS Bedrock client started) plus multi-dealer visit insights. Alert APIs return top performers, underperformers, churn risk, inactive dealers, and visit-order graphs. Weekly cron batches label dealers and track job success or failure.',
    highlights: [
      'Individual dealer insight summaries',
      'Top performer and underperformer APIs',
      'Dealer labelling batch jobs',
      'Graph payloads with date filters',
      'AWS Bedrock client setup',
    ],
    stack: ['Node.js', 'MongoDB', 'Groq', 'AWS Bedrock', 'Cron'],
  },
]

export const projects = [
  {
    id: '01',
    title: 'NerdNest',
    summary:
      'AI-based LMS where users upload syllabi and get curated study links plus timeline-based quizzes. Performance tracking with auto-generated reports on a Hasura GraphQL and PostgreSQL backend.',
    highlights: [
      'Syllabus upload to study links and quizzes',
      'Timeline-based quiz flow',
      'Auto-generated performance reports',
      'Hasura GraphQL and PostgreSQL backend',
    ],
    stack: [
      'React',
      'Redux-Saga',
      'TypeScript',
      'Hasura',
      'PostgreSQL',
      'Google Document AI',
      'Turboseek',
      'Llama 3',
    ],
  },
  {
    id: '02',
    title: 'ScanTec',
    summary:
      'Automated bone fracture diagnosis system. Improved accuracy by 80% and cut analysis time by 25%. Fracture detection and pathology report analysis reached 95% accuracy.',
    highlights: [
      'ResNet50 fracture detection',
      'Grad-CAM for model explanation',
      'Document AI and Llama 3 for pathology reports',
      'Streamlit interface for clinicians',
    ],
    stack: [
      'ResNet50',
      'Grad-CAM',
      'Google Document AI',
      'Llama 3',
      'Streamlit',
      'Python',
    ],
  },
  {
    id: '03',
    title: 'NotifEye',
    summary:
      'Crime alert mobile app for real-time reporting. Improved reporting accuracy by 40% and reduced response time by 20%.',
    highlights: [
      'Real-time crime alerts',
      'Location-aware reporting',
      'Firebase-backed data layer',
      'Maps integration for response context',
    ],
    stack: ['Flutter', 'Firebase', 'Google Maps API'],
  },
]

export const skillDomains = [
  {
    id: 'languages',
    label: 'Languages',
    items: [
      'JavaScript',
      'TypeScript',
      'Python',
      'SQL',
      'C',
      'C#',
      'Shell Script',
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'TypeScript',
      'Flask',
      'REST APIs',
      'GraphQL',
      'Hasura',
      'Middleware',
      'AuthN / AuthZ',
      'Service layer',
      'Repository pattern',
      'API versioning',
      'Background workers',
    ],
  },
  {
    id: 'data',
    label: 'Data',
    items: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Firebase',
      'Schema design',
      'Query optimisation',
      'Indexing',
      'Transactions',
      'Migrations',
      'Redis caching',
      'TTL and invalidation',
      'Idempotency keys',
      'Rate limiting',
    ],
  },
  {
    id: 'search',
    label: 'Search',
    items: [
      'OpenSearch',
      'Index mappings',
      'Bulk / delta indexing',
      'Shared and client indices',
      'Ranking',
      'Token normalisation',
      'SKU / product search',
      'Latency tuning',
      'Hydration optimisation',
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & queues',
    items: [
      'AWS',
      'AWS SQS',
      'EventBridge',
      'S3',
      'CloudFront',
      'IAM',
      'Secrets Manager',
      'BullMQ',
      'Reminder / snooze jobs',
      'Job scheduling',
      'Docker',
    ],
  },
  {
    id: 'messaging',
    label: 'Messaging',
    items: [
      'WhatsApp Business API',
      'ValueFirst',
      'Interakt',
      'SMS integrations',
      'OTP systems',
      'DLR / webhooks',
      'WA-first routing',
      'Template management',
      'SMS fallback',
    ],
  },
  {
    id: 'ai',
    label: 'AI',
    items: [
      'Prompt engineering',
      'Groq integrations',
      'AWS Bedrock',
      'Llama 3',
      'Google Document AI',
      'ResNet50',
      'Grad-CAM',
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    items: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Redux-Saga',
      'Hooks & Context',
      'Routing',
      'Tailwind CSS',
      'Streamlit',
      'Flutter',
      'Responsive UI',
      'Dashboards',
      'Forms & validation',
      'API integration',
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: [
      'Figma',
      'Unity',
      'Hydra',
      'Docker',
    ],
  },
  {
    id: 'platform',
    label: 'Platform',
    items: [
      'Microservices',
      'Event-driven design',
      'System design',
      'GitHub Actions',
      'CI/CD pipelines',
      'Git / GitHub',
      'Postman',
      'Cypress',
      'New Relic',
      'API documentation',
    ],
  },
]

export const domainsWorked = [
  'Enterprise SaaS',
  'Product catalogue management',
  'Partner platforms',
  'Search platforms',
  'Notification platforms',
  'Messaging infrastructure',
  'Authentication systems',
  'AI-based LMS',
  'Medical imaging',
  'Mobile alerting',
]

export const exploring = [
  'Semantic search and RAG',
  'Vector databases',
  'Amazon Bedrock / LLM integrations',
  'Kubernetes',
  'New Relic',
  'Event sourcing and CQRS',
]
