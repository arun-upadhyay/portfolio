export type Experience = {
  company: string
  title: string
  dates: string
  location?: string
  domain?: string
  highlights: string[]
  tech?: string[]
}

export type Education = {
  school: string
  degree: string
  dates: string
  details?: string
}

export type Project = {
  title: string
  description: string
  bullets: string[]
  tags: string[]
}

export type RecruiterStat = {
  value: string
  label: string
  detail: string
}

export type RecruiterHighlight = {
  title: string
  detail: string
  tags: string[]
}

export const site = {
  name: 'Arun Kumar Upadhyay',
  role: 'Senior Software Engineer',
  location: 'Bedford, TX',
  headline:
    'Senior Software Engineer with 12+ years building enterprise web and backend systems (React, TypeScript, PHP, Node.js, Java, AWS).',
  summary: [
    'Dynamic software developer with 12+ years of experience developing enterprise level desktop and web applications to elevate business performance.',
    'Experienced across the full software development lifecycle using Agile and Scrum, translating requirements into scalable features and clean, maintainable code.',
    'Strong collaboration skills with cross functional teams across product, UX, QA, and DevOps.'
  ],
  personal: {
    family:
        'Outside of work, I live with my wife and our two children. Family keeps me grounded and reinforces patience, responsibility, and long term thinking in both life and work.'
  },
  statusLine: 'Lawful Permanent Resident (USA)',
  contact: {
    email: 'arun-upadhyay@outlook.com',
    linkedin: 'https://www.linkedin.com/in/arun-upadhyay',
    github: 'https://github.com/arun-upadhyay'
  },
  recruiterSnapshot: [
    {
      value: '12+ Years',
      label: 'Enterprise Delivery',
      detail: 'Delivered front end and backend systems across healthcare, telecom, and government platforms.'
    },
    {
      value: '3 Domains',
      label: 'Domain Breadth',
      detail: 'U.S. healthcare EDI claims, telecom monitoring platforms, and public sector business systems.'
    },
    {
      value: 'LPR (USA)',
      label: 'Work Authorization',
      detail: 'Lawful Permanent Resident with no visa sponsorship requirement.'
    },
    {
      value: 'MSCS',
      label: 'Technical Foundation',
      detail: 'Master of Science in Computer Science with strong architecture, design patterns, and SDLC fundamentals.'
    }
  ] as RecruiterStat[],
  impactHighlights: [
    {
      title: 'Healthcare Integrations and Compliance',
      detail:
        'Built EDI workflows (X12 834, 835, 837), secure partner file exchange, and event-driven services using AWS and Node.js in a HIPAA-sensitive environment.',
      tags: ['React', 'TypeScript', 'AWS', 'EDI', 'HIPAA']
    },
    {
      title: 'Large Legacy to Modern SPA Migration',
      detail:
        'Converted Adobe Flex systems into React single-page applications while preserving customer workflows and improving maintainability.',
      tags: ['React SPA', 'Modernization', 'UI Engineering']
    },
    {
      title: 'Real-Time Monitoring Platform Engineering',
      detail:
        'Designed APIs, telemetry pipelines, and device integrations across HTTP, SNMP, Modbus, SSH, and Telnet for high-availability monitoring use cases.',
      tags: ['REST API', 'Telemetry', 'Protocol Integration']
    },
    {
      title: 'Escalation Ownership and Reliability',
      detail:
        'Handled customer escalation tickets, root-cause analysis, and production hotfixes while partnering with QA, DevOps, and product teams.',
      tags: ['Incident Response', 'Datadog', 'Splunk', 'SLA Support']
    }
  ] as RecruiterHighlight[],
  recruiterFocus: [
    'Hands-on IC who can design architecture and still ship production code quickly.',
    'Strong communication: technical walkthroughs, sprint demos, and cross-team alignment with product and leadership.',
    'Balanced profile across frontend UX quality, backend reliability, and cloud-native delivery.'
  ],
  skills: {
    languages: ['PHP (OOP)', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'PL/SQL', 'C', 'C++'],
    frontend: ['React', 'Redux', 'HTML5', 'CSS', 'SCSS', 'AJAX', 'DOM', 'jQuery'],
    backend: ['Laravel', 'Node.js', 'Express', 'Spring', 'Spring Data', 'Hibernate', 'REST APIs'],
    databases: ['MySQL', 'PostgreSQL', 'Oracle', 'MongoDB', 'MS Access'],
    devopsCloud: ['AWS (Lambda, S3, SQS, SNS, ECS, EC2, CloudFormation, Cognito, CloudWatch, API Gateway)', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Ansible'],
    tools: ['VS Code', 'JetBrains IDEs', 'Eclipse', 'NetBeans', 'Git', 'SVN', 'Jira', 'PHPUnit', 'Datadog', 'ElasticSearch'],
    patterns: ['MVC', 'Singleton', 'Factory', 'Strategy', 'Observer', 'Adapter', 'Facade']
  },
  experiences: [
    {
      company: 'Inovalon Inc',
      title: 'Sr. Software Engineer',
      dates: 'Mar 2023 – Present',
      domain: 'Healthcare data analytics • SaaS platforms',
      highlights: [
        'Designed and implemented responsive user interfaces with React and TypeScript focused on performance and user centric UX.',
        'Integrated front end apps with RESTful APIs and implemented state management with Redux, hooks, and Context for reusable components.',
        'Built and maintained backend microservices in PHP and Node.js powering e commerce and internal applications.',
        'Optimized MySQL queries and data models for high volume transactional workloads and improved scalability using RabbitMQ.',
        'Containerized services with Docker and supported deployments via Kubernetes; automated CI/CD with Jenkins and GitHub Actions.',
        'Improved product search and filtering using ElasticSearch; used Datadog monitoring and logs to troubleshoot production performance.'
      ],
      tech: ['React', 'TypeScript', 'Redux', 'PHP', 'Node.js', 'Java', 'MySQL', 'RabbitMQ', 'ElasticSearch', 'Docker', 'Kubernetes', 'Jenkins', 'Datadog']
    },
    {
      company: 'CSquared Systems LLC',
      title: 'Senior Software Engineer',
      dates: 'Mar 2017 – Feb 2023',
      domain: 'Remote monitoring and management • Telecom and network device management',
      highlights: [
        'Developed and maintained Site Portal backend using PHP and MySQL for remote monitoring of distributed systems and equipment.',
        'Built device communication and telemetry features using HTTP, SNMP, Modbus, SSH, and Telnet; worked with XML and MIBs.',
        'Converted an Adobe Flex based application to a React based single page application.',
        'Designed pipeline auditing and profiling plus reporting systems to support SLA compliance and faster incident troubleshooting.',
        'Designed and implemented a granular access control framework spanning multiple customer facing systems with strong performance guarantees.',
        'Built a standards compliant REST API engine enabling high availability access to real time monitoring datasets for internal and third party consumers.'
      ],
      tech: ['PHP', 'Laravel', 'MySQL', 'React', 'Node.js', 'Doctrine', 'Jenkins', 'Ansible']
    },
    {
      company: 'Center of Information Technology',
      title: 'Senior Software Engineer',
      dates: 'Aug 2010 – Mar 2016',
      domain: 'Government systems • Web portals • Enterprise applications',
      highlights: [
        'Led module delivery end to end: requirements, design (flowcharts and ERDs), implementation, testing, and deployments.',
        'Built front ends with HTML, CSS, JavaScript, and jQuery; created RDBMS schemas, stored procedures, triggers, and optimized queries.',
        'Delivered web apps and custom CMS solutions using OOP PHP plus Joomla and WordPress customization.',
        'Worked on Java enterprise applications with Spring Boot, Spring MVC, Spring Data, Hibernate; implemented authentication and authorization.',
        'Mentored junior developers, performed code reviews, and ensured on time delivery aligned with client needs.'
      ],
      tech: ['Core PHP', 'MySQL', 'Java', 'Spring', 'Hibernate', 'JSP/Servlet', 'VB.NET', 'Jira']
    }
  ] as Experience[],
  projects: [
    {
      title: 'Site Portal Monitoring Software (CSquared Systems)',
      description:
        'Monitoring platform enhancements for telecom and network device management, including profiling, auditing, and telemetry features.',
      bullets: [
        'Implemented a pipeline auditing and profiling system in PHP with extended reporting to enforce SLA compliance.',
        'Built a device driver subsystem in PHP and C++ to poll RF metrics and dynamically manage RF settings and network interfaces.',
        'Delivered telemetry scraping and management across diverse device drivers and protocols (HTTP, SNMP, Modbus, proprietary).'
      ],
      tags: ['PHP', 'MySQL', 'C++', 'Telemetry', 'Protocols']
    },
    {
      title: 'Generic Device Framework and Unified API (CSquared Systems)',
      description:
        'Framework and REST API layer enabling real time monitoring datasets for web UI and integrations.',
      bullets: [
        'Built automated environment validation service collecting and aggregating process data, logging, and reporting.',
        'Designed access control solution with fine grained permission levels across API and UI layers.',
        'Developed robust REST API engine providing high availability access to real time datasets for internal and third party consumers.'
      ],
      tags: ['REST', 'Laravel', 'Access control', 'Performance']
    },
    {
      title: 'Tax Clearance System (Nepal municipalities)',
      description:
        'Tax management system deployed across municipalities with multilingual support and scalable architecture.',
      bullets: [
        'Designed application architecture and database; implemented core taxpayer modules with CRUD operations.',
        'Added authentication and authorization using Spring Security and followed MVC patterns.',
        'Created reporting outputs and supported production deployments and hosting.'
      ],
      tags: ['Java', 'Spring', 'MySQL', 'Government']
    }
  ] as Project[],
  education: [
    {
      school: 'Maharishi University of Management (MUM), Fairfield, Iowa, USA',
      degree: 'Master of Science in Computer Science',
      dates: '2016 – 2018',
      details: 'CGPA 3.56'
    },
    {
      school: 'North Bengal University (NBU), Siliguri, India',
      degree: 'Master of Computer Applications',
      dates: '2007 – 2010',
      details: 'CGPA 3.91'
    }
  ] as Education[],
  certifications: [
    'Ultimate AWS Certified Developer Associate 2022',
    'Server side Development with NodeJS (Hong Kong University of Science and Technology), Coursera',
    'HTML, CSS, and JavaScript (Hong Kong University of Science and Technology), Coursera',
    'Object oriented programming using Java (University of California, San Diego), Coursera',
    'Front End JavaScript Frameworks: AngularJS (Hong Kong University of Science and Technology), Coursera',
    'Algorithms: Design and Analysis Part I and Part II (Stanford University), Coursera'
  ]
}
