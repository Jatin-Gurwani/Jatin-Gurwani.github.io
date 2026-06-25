/* ============================================================
   portfolio.ts — Centralized Portfolio Configuration
   ============================================================
   This is the ONLY file you need to edit to update your portfolio.
   All components read their data from this configuration.
   ============================================================ */

// ─── Type Definitions ────────────────────────────────────────

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  blog: string;
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
  companyUrl?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  tags: string[];
  featured?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  badgeIcon: string;
}

export interface Achievement {
  title: string;
  description: string;
  category: 'award' | 'publication' | 'open-source' | 'hackathon';
  date: string;
  link?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  description?: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  ogImage: string;
  twitterHandle: string;
  keywords: string[];
}

export interface ThemeConfig {
  primaryColor: string; // Primary brand color hex code (e.g., '#6366f1')
  accentColor: string;  // Accent/secondary color hex code (e.g., '#8b5cf6')
}

export interface PortfolioConfig {
  // ── Theme ──
  theme: ThemeConfig;

  // ── Personal Info ──
  name: string;
  firstName: string;
  title: string;
  tagline: string;
  profilePhoto: string;
  resumeUrl: string;
  about: string;
  yearsOfExperience: number;
  specializations: string[];

  // ── Contact ──
  email: string;
  phone: string;
  location: string;

  // ── Social ──
  socialLinks: SocialLinks;

  // ── Content Sections ──
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  certifications: Certification[];
  achievements: Achievement[];
  testimonials: Testimonial[];

  // ── GitHub ──
  githubUsername: string;

  // ── SEO ──
  seo: SEOConfig;
}

// ─── Portfolio Data ──────────────────────────────────────────

export const portfolio: PortfolioConfig = {
  // ══════════════════════════════════════════════════════════
  //  THEME CONFIGURATION
  // ══════════════════════════════════════════════════════════
  theme: {
    primaryColor: '#fd6739', // Indigo #6366f1 bb3e03
    accentColor: '#fcab93',  // Violet #8b5cf6 cb997e
  },

  // ══════════════════════════════════════════════════════════
  //  PERSONAL INFORMATION
  // ══════════════════════════════════════════════════════════
  name: 'Jatin Gurwani',
  firstName: 'Jatin',
  title: 'AI Engineer & GenAI Specialist',
  tagline: 'Building intelligent systems that bridge the gap between cutting-edge AI research and real-world applications.',
  profilePhoto: '/profile.jpg',
  resumeUrl: '/resume.pdf',
  about: `
  I'm a passionate AI & Backend Engineer specializing in Generative AI, Conversational Systems, and Intelligent Automation. With a strong foundation in architecting high-availability IVR workflows and scalable call-routing systems, I design and build backend infrastructures that bridge the gap between human intent and machine intelligence.

  My work spans the technical implementation of automation—from developing full-stack CRUD applications and real-time computer vision pipelines to deploying robust, enterprise-level communication logic. I am deeply driven by the potential of Large Language Models and AI agents, combining my deep backend engineering experience with modern GenAI frameworks to build context-aware, production-ready AI applications.
  

  When I'm not building AI systems or diving into the latest GenAI frameworks, you'll find me optimizing backend architectures, containerizing applications, and exploring new open-source technologies`,
  
  yearsOfExperience: 4,
  specializations: [
    'Generative AI & LLMs',
    'AI Agent Architectures',
    'RAG Systems & Knowledge Bases',
    'Conversational AI & Voice Architecture',
  ],

  // ══════════════════════════════════════════════════════════
  //  CONTACT INFORMATION
  // ══════════════════════════════════════════════════════════
  email: 'gurwanijatin@gmail.com',
  phone: '+91-9320042242',
  location: 'Ulhasnagar,Maharashtra,India',

  // ══════════════════════════════════════════════════════════
  //  SOCIAL LINKS
  // ══════════════════════════════════════════════════════════
  socialLinks: {
    github: 'https://github.com/Jatin-Gurwani',
    linkedin: 'https://linkedin.com/in/jatin-gurwani',
    twitter: '',
    blog: '',
  },

  // ══════════════════════════════════════════════════════════
  //  SKILLS (Categorized)
  // ══════════════════════════════════════════════════════════
  skills: [
    {
      title: 'Generative AI',
      icon: '✨',
      skills: [
        { name: 'GPT-4 / GPT-4o' },
        { name: 'Claude' },
        { name: 'Gemini' },
        { name: 'Stable Diffusion' },
        { name: 'Prompt Engineering' },
      ],
    },
    {
      title: 'Deep Learning',
      icon: '🔬',
      skills: [
        { name: 'TensorFlow' },
        { name: 'Transformers' },
        { name: 'CNNs' },
        { name: 'RNNs / LSTMs' },
      ],
    },
    {
      title: 'LLM Frameworks',
      icon: '🔗',
      skills: [
        { name: 'LangChain' },
        { name: 'LlamaIndex' },
        { name: 'Semantic Kernel' },
        { name: 'Hugging Face' },
        { name: 'Ollama' },
      ],
    },
    {
      title: 'AI Agents',
      icon: '🤖',
      skills: [
        { name: 'CrewAI' },
        { name: 'LangGraph' },
        { name: 'MCP' },
        { name: 'Tool Use / Function Calling' },
        { name: 'Multi-Agent Systems' },
      ],
    },
    {
      title: 'Backend',
      icon: '🖥️',
      skills: [
        { name: 'Python' },
        { name: 'FastAPI' },
        { name: 'Flask' },
        { name: 'REST APIs' },
        { name: 'Docker'}
      ],
    },
    
    {
      title: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL' },
        { name: 'MongoDB' },
        { name: 'ChromaDB' },
        { name:'Oracle'}
      ],
    },
    {
      title:'Genesys',
      icon:'📞',
      skills:[
        {name:'Genesys Composer'},
        {name:'VXML'},
        {name:'SCXML'},
        {name:'OPM'},
        {name:'GVP'},
        {name:'IVR'}
      ]

    },
  ],

  // ══════════════════════════════════════════════════════════
  //  EXPERIENCE
  // ══════════════════════════════════════════════════════════
  experience: [
    
    {
      company: 'Nu10',
      role: 'AI Operations Specialist',
      duration: 'May 2025 – Jan 2026',
      startDate: '2025-05',
      endDate: '2026-01',
      description: [
        'Designed and managed over 120 intents across multiple projects in Azure Language Studio, aligning conversational models directly with strategic business scenarios.',
        'Analyzed and refined intent structures to resolve misclassifications, reducing operational issues by 25% and improving overall bot accuracy'
      ],
      technologies: ['Natural Language Processing (NLP)', 'Intent Management', 'Conversational AI Design', 'Azure Language Studio',],
      companyUrl: 'https://nu10.co/',
    },
    {
      company: 'SmartConnect Technologies',
      role: 'IVR Developer',
      duration: 'May 2022 – Jan 2025',
      startDate: '2022-05',
      endDate: '2025-01',
      description: [
        'Designed and maintained high-traffic IVR workflows for a major entertainment client using Genesys Composer, JSP, and JavaScript to handle large call volumes reliably.',
        'Worked closely with business teams to translate complex requirements into custom routing logic, launching updates quickly during fast-paced sprints without impacting system stability.',
        'Restored corrupted and undocumented workflows by reverse-engineering core VXML structures, preventing critical data loss and ensuring continuous business operations.'
      ],
      technologies: ['Genesys Composer', 'Call Routing Architecture', 'VXML', 'Interactive Voice Response (IVR)', 'Cross-Functional Collaboration', 'Business Requirements Analysis','Agile / Scrum Sprints'],
      companyUrl: 'https://www.smartconnectt.com/',
    },
  ],

  // ══════════════════════════════════════════════════════════
  //  EDUCATION
  // ══════════════════════════════════════════════════════════
  education: [
    {
      institution: 'Tilak Maharashtra Vidyapeeth',
      degree: 'Master of Science in Computer Applications (MSC-CA)',
      field: 'Computer Science — Data Analytics',
      duration: '2022 – 2024',
      description: '',
    },
    {
      institution: 'Tilak Maharashtra Vidyapeeth',
      degree: 'Bachelor of Computer Applications (BCA)',
      field: 'Computer Science & Mathematics',
      duration: '2019 – 2022',
      description: '',
    },
  ],

  // ══════════════════════════════════════════════════════════
  //  PROJECTS
  // ══════════════════════════════════════════════════════════
  projects: [
    {
      title: 'QA Testing Crew',
      description:
        'A Crew which analyze a GitHub repository and automatically generate test strategies and testcases',
      image: '/projects/ragstack.png',
      techStack: ['Python', 'Crew AI', 'MCP', 'Streamlit', 'Gemini'],
      githubUrl: 'https://github.com/Jatin-Gurwani/QA_Testing_AI_Team',
      liveUrl: '',
      tags: [ 'AI Agents','GenAI', 'LLM','Automation'],
      featured: true,
    },
    {
      title: 'Notes',
      description:
        'Built a personal notes application with Flask, providing users with a secure and convenient way to manage their notes',
      image: '/projects/chatops.png',
      techStack: ['Python', 'Flask', 'SQLAlchemy', 'JWT', 'RestAPI','Marshmallow','Docker','Oracle'],
      githubUrl: 'https://github.com/Jatin-Gurwani/NOTES_APP_FLASK',
      liveUrl: '',
      tags: ['Web Apps', 'Backend'],
      featured: true,
    },
    {
      title: 'Smart Parking System',
      description:
        'Engineered a real-time automatic number plate recognition pipeline to automate vehicle tracking and reduce entry gate processing time by 40%.',
      image: '/projects/visionlab.png',
      techStack: ['YOLOv8', 'Computer Vision', 'EasyOCR', 'Python', 'MongoDB'],
      githubUrl: 'https://github.com/Jatin-Gurwani/Smart_Parking_System',
      liveUrl: '',
      tags: ['Deep Learning','Computer Vision','Automation'],
    },
    {
      title: 'Musify',
      description:
        'A Online Music platform',
      image: '/projects/musify.png',
      techStack: ['asp.net', 'mvc', 'js', 'MS-SQL', 'Bootstrap'],
      githubUrl: 'https://github.com/Jatin-Gurwani/Musify',
      liveUrl: '',
      tags: [ 'Web Apps',],
    },
  ],

  // ══════════════════════════════════════════════════════════
  //  CERTIFICATIONS
  // ══════════════════════════════════════════════════════════
  certifications: [

    {
      name: 'REST APIs with Flask and Python',
      issuer: 'Udemy',
      date: 'Dec 2024',
      credentialUrl: 'https://www.udemy.com/certificate/UC-55adc8d4-352b-41a5-9c8a-24d017e6f06d/',
      badgeIcon: '🏅',
    },
    {
      name: 'Google Gen AI Academy',
      issuer: 'Google Cloud',
      date: 'April 2025',
      credentialUrl: 'https://certificate.hack2skill.com/legacy/2025H2S04GENAI-A00929',
      badgeIcon: '🏅',
    },
    {
      name: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM',
      date: 'April 2024',
      credentialUrl: 'https://www.credly.com/badges/bb4b996d-60be-4081-9303-be35f14ba69b/public_url',
      badgeIcon: '📜',
    },
    {
      name: 'Data Analysis with Python',
      issuer: 'IBM ',
      date: 'May 2025',
      credentialUrl: 'https://courses.gfg.skillsnetwork.site/certificates/fa24fc4b76944898a7f63e25ff2b3833',
      badgeIcon: '🏅',
    },
    {
      name: 'Generative AI Foundations',
      issuer: 'Microsoft',
      date: 'July 2025',
      credentialUrl: 'https://certificates.upgrad.com/730052d6-1bbd-4360-9e0e-065e409f2d2d-Gen-AI-qkCKHnYdtxbF73Mw.jpeg',
      badgeIcon: '📜',
    },
  ],

  // ══════════════════════════════════════════════════════════
  //  ACHIEVEMENTS
  // ══════════════════════════════════════════════════════════
  achievements: [],

  // ══════════════════════════════════════════════════════════
  //  TESTIMONIALS
  // ══════════════════════════════════════════════════════════
  testimonials: [],

  // ══════════════════════════════════════════════════════════
  //  GITHUB CONFIGURATION
  // ══════════════════════════════════════════════════════════
  githubUsername: 'Jatin-Gurwani',

  // ══════════════════════════════════════════════════════════
  //  SEO CONFIGURATION
  // ══════════════════════════════════════════════════════════
  seo: {
    title: 'Jatin Gurwani — AI Engineer & GenAI Specialist',
    description:
      'Portfolio of Jatin Gurwani, an AI Engineer specializing in Generative AI, LLMs, AI Agents, and RAG systems. Building intelligent systems that solve real-world problems.',
    ogImage: '/og-image.png',
    twitterHandle: '@gurwanijatin',
    keywords: [
      'AI Engineer',
      'GenAI',
      'LLM',
      'Deep Learning',
      'AI Agents',
      'RAG',
      'Portfolio',
      'Jatin Gurwani',
    ],
  },
};
