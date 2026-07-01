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
  instagram?: string;
  huggingface?: string;
  kaggle?: string;
  credly?: string;
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

export interface PortfolioConfig {
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
  //  PERSONAL INFORMATION
  // ══════════════════════════════════════════════════════════
  name: 'Jatin Gurwani',
  firstName: 'Jatin',
  title: 'AI Engineer & GenAI Specialist',
  tagline: 'Building intelligent systems that bridge the gap between cutting-edge AI research and real-world applications.',
  profilePhoto: '/profile.jpg',
  resumeUrl: '/resume.pdf',
  about: `I'm a passionate AI Engineer specializing in Generative AI, Large Language Models, and AI Agent architectures. With a deep understanding of both the theoretical foundations and practical applications of modern AI, I design and build systems that transform how businesses leverage artificial intelligence.

My work spans the full AI development lifecycle — from fine-tuning foundation models and building RAG pipelines to deploying scalable AI agents in production. I'm driven by the belief that AI should be accessible, reliable, and impactful.

When I'm not building AI systems, you'll find me contributing to open-source projects, writing technical articles, and mentoring aspiring AI engineers.`,
  yearsOfExperience: 4,
  specializations: [
    'Generative AI & LLMs',
    'AI Agent Architectures',
    'RAG Systems & Knowledge Bases',
    'MLOps & AI Infrastructure',
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
    instagram: '',
    huggingface: '',
    kaggle: '',
    credly: '',
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
        { name: 'DALL·E' },
        { name: 'Prompt Engineering' },
      ],
    },
    {
      title: 'Machine Learning',
      icon: '🧠',
      skills: [
        { name: 'Scikit-learn' },
        { name: 'XGBoost' },
        { name: 'Feature Engineering' },
        { name: 'Model Evaluation' },
        { name: 'A/B Testing' },
        { name: 'Statistical Analysis' },
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
        { name: 'Haystack' },
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
      title: 'MLOps',
      icon: '⚙️',
      skills: [
        { name: 'MLflow' },
        { name: 'Weights & Biases' },
        { name: 'DVC' },
        { name: 'Kubeflow' },
        { name: 'BentoML' },
        { name: 'Model Monitoring' },
      ],
    },
    {
      title: 'Cloud',
      icon: '☁️',
      skills: [
        { name: 'AWS (SageMaker, Bedrock)' },
        { name: 'Google Cloud (Vertex AI)' },
        { name: 'Azure (OpenAI Service)' },
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'Terraform' },
      ],
    },
    {
      title: 'Backend',
      icon: '🖥️',
      skills: [
        { name: 'Python' },
        { name: 'FastAPI' },
        { name: 'Node.js' },
        { name: 'GraphQL' },
        { name: 'REST APIs' },
        { name: 'gRPC' },
      ],
    },
    
    {
      title: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL' },
        { name: 'MongoDB' },
        { name: 'ChromaDB' },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════
  //  EXPERIENCE
  // ══════════════════════════════════════════════════════════
experience: [
    {
      company: 'NeuralScale AI',
      role: 'Senior AI Engineer',
      duration: 'Jan 2023 – Present',
      startDate: '2023-01',
      endDate: 'Present',
      description: [
        'Lead the design and development of enterprise-grade GenAI solutions including multi-agent systems, RAG pipelines, and LLM-powered automation.',
        'Architected a conversational AI platform serving 500K+ monthly users with 99.9% uptime.'
      ],
      technologies: ['LangChain', 'GPT-4', 'AWS Bedrock', 'Python', 'FastAPI', 'Pinecone', 'Docker'],
      companyUrl: 'https://neuralscale.ai',
    },
    {
      company: 'DataForge Labs',
      role: 'AI Engineer',
      duration: 'Jun 2021 – Dec 2022',
      startDate: '2021-06',
      endDate: '2022-12',
      description: [
        'Built and deployed ML/DL models for NLP and computer vision use cases.',
        'Developed a document intelligence pipeline that reduced manual processing time by 85%.',
        'Implemented MLOps practices including automated retraining and model monitoring.'
      ],
      technologies: ['PyTorch', 'TensorFlow', 'Hugging Face', 'MLflow', 'GCP', 'Kubernetes'],
      companyUrl: 'https://dataforgelabs.com',
    },
    {
      company: 'CloudMinds Inc.',
      role: 'Machine Learning Engineer',
      duration: 'Aug 2019 – May 2021',
      startDate: '2019-08',
      endDate: '2021-05',
      description: [
        'Developed predictive analytics models for supply chain optimization.',
        'Built real-time anomaly detection systems processing 1M+ events/day.',
        'Created reusable ML pipeline components that accelerated model development across the org by 3x.'
      ],
      technologies: ['Scikit-learn', 'XGBoost', 'Apache Spark', 'Airflow', 'AWS SageMaker', 'PostgreSQL'],
      companyUrl: 'https://cloudminds.io',
    },
    {
      company: 'TechStart Solutions',
      role: 'Data Scientist (Intern → Full-Time)',
      duration: 'Jan 2019 – Jul 2019',
      startDate: '2019-01',
      endDate: '2019-07',
      description: [
        'Started as an intern and transitioned to full-time.',
        'Conducted exploratory data analysis, built dashboards, and developed customer churn prediction models that saved the company $2M annually.'
      ],
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Tableau', 'SQL', 'Flask'],
    },
  ],

  // ══════════════════════════════════════════════════════════
  //  EDUCATION
  // ══════════════════════════════════════════════════════════
  education: [
    {
      institution: 'Stanford University',
      degree: 'Master of Science',
      field: 'Computer Science — AI Specialization',
      duration: '2017 – 2019',
      description: 'Focused on deep learning, natural language processing, and reinforcement learning. Research assistant in the NLP Lab.',
    },
    {
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science',
      field: 'Computer Science & Mathematics',
      duration: '2013 – 2017',
      description: 'Graduated with honors. Teaching assistant for Machine Learning and Linear Algebra courses.',
    },
  ],

  // ══════════════════════════════════════════════════════════
  //  PROJECTS
  // ══════════════════════════════════════════════════════════
  projects: [
    {
      title: 'AgentForge',
      description:
        'An open-source framework for building, testing, and deploying multi-agent AI systems. Features plug-and-play agent templates, inter-agent communication protocols, and built-in evaluation metrics.',
      image: '/projects/agentforge.png',
      techStack: ['Python', 'LangGraph', 'FastAPI', 'Redis', 'Docker'],
      githubUrl: 'https://github.com/Jatin-Gurwani/agentforge',
      liveUrl: 'https://agentforge.dev',
      tags: ['AI Agents', 'Open Source', 'LLM'],
      featured: true,
    },
    {
      title: 'RAGStack',
      description:
        'Production-ready RAG (Retrieval-Augmented Generation) pipeline with hybrid search, re-ranking, and automatic chunk optimization. Supports multiple vector stores and LLM providers.',
      image: '/projects/ragstack.png',
      techStack: ['Python', 'LlamaIndex', 'Pinecone', 'FastAPI', 'React'],
      githubUrl: 'https://github.com/Jatin-Gurwani/ragstack',
      liveUrl: 'https://ragstack.demo.dev',
      tags: ['RAG', 'GenAI', 'LLM', 'Open Source'],
      featured: true,
    },
    {
      title: 'LLM Eval Suite',
      description:
        'Comprehensive evaluation framework for LLM applications. Includes automated testing for hallucination detection, factuality checking, toxicity filtering, and response quality scoring.',
      image: '/projects/llm-eval.png',
      techStack: ['Python', 'RAGAS', 'Pytest', 'Streamlit', 'PostgreSQL'],
      githubUrl: 'https://github.com/Jatin-Gurwani/llm-eval-suite',
      liveUrl: '',
      tags: ['Testing', 'LLM', 'Open Source'],
    },
    {
      title: 'DocuMind',
      description:
        'AI-powered document intelligence platform that extracts, summarizes, and answers questions from complex documents (PDFs, contracts, research papers) using fine-tuned models.',
      image: '/projects/documind.png',
      techStack: ['GPT-4', 'LangChain', 'Next.js', 'Supabase', 'Vercel'],
      githubUrl: 'https://github.com/Jatin-Gurwani/documind',
      liveUrl: 'https://documind.app',
      tags: ['GenAI', 'RAG', 'Web Apps'],
      featured: true,
    },
    {
      title: 'AutoML Pipeline',
      description:
        'End-to-end automated machine learning pipeline with feature engineering, model selection, hyperparameter tuning, and deployment automation. Reduces time-to-model by 10x.',
      image: '/projects/automl.png',
      techStack: ['Python', 'Scikit-learn', 'Optuna', 'MLflow', 'Docker'],
      githubUrl: 'https://github.com/Jatin-Gurwani/automl-pipeline',
      liveUrl: '',
      tags: ['Automation', 'Open Source'],
    },
    {
      title: 'ChatOps Bot',
      description:
        'Intelligent Slack/Teams bot for DevOps automation. Uses natural language to trigger deployments, query metrics, manage incidents, and generate reports. Integrates with 20+ tools.',
      image: '/projects/chatops.png',
      techStack: ['Python', 'OpenAI', 'Slack SDK', 'Terraform', 'Grafana'],
      githubUrl: 'https://github.com/Jatin-Gurwani/chatops-bot',
      liveUrl: '',
      tags: ['AI Agents', 'Automation'],
    },
    {
      title: 'VisionLab',
      description:
        'Computer vision toolkit for real-time object detection, image classification, and visual search. Built with a focus on edge deployment and low-latency inference.',
      image: '/projects/visionlab.png',
      techStack: ['PyTorch', 'ONNX', 'FastAPI', 'React', 'WebSocket'],
      githubUrl: 'https://github.com/Jatin-Gurwani/visionlab',
      liveUrl: 'https://visionlab.demo.dev',
      tags: ['GenAI', 'Web Apps', 'Open Source'],
    },
    {
      title: 'TestPilot AI',
      description:
        'AI-powered test generation and automation tool. Analyzes codebases to generate unit tests, integration tests, and end-to-end test suites using LLMs with code understanding.',
      image: '/projects/testpilot.png',
      techStack: ['TypeScript', 'OpenAI', 'Playwright', 'Vitest', 'Node.js'],
      githubUrl: 'https://github.com/Jatin-Gurwani/testpilot-ai',
      liveUrl: '',
      tags: ['Testing', 'AI Agents', 'Automation'],
    },
  ],

  // ══════════════════════════════════════════════════════════
  //  CERTIFICATIONS
  // ══════════════════════════════════════════════════════════
  certifications: [
    {
      name: 'AWS Certified Machine Learning — Specialty',
      issuer: 'Amazon Web Services',
      date: 'Mar 2024',
      credentialUrl: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/',
      badgeIcon: '🏅',
    },
    {
      name: 'Google Cloud Professional ML Engineer',
      issuer: 'Google Cloud',
      date: 'Nov 2023',
      credentialUrl: 'https://cloud.google.com/certification/machine-learning-engineer',
      badgeIcon: '🏅',
    },
    {
      name: 'DeepLearning.AI — Generative AI with LLMs',
      issuer: 'DeepLearning.AI & AWS',
      date: 'Aug 2023',
      credentialUrl: 'https://www.coursera.org/specializations/generative-ai-with-llms',
      badgeIcon: '📜',
    },
    {
      name: 'Microsoft Azure AI Engineer Associate',
      issuer: 'Microsoft',
      date: 'May 2023',
      credentialUrl: 'https://learn.microsoft.com/en-us/certifications/azure-ai-engineer/',
      badgeIcon: '🏅',
    },
    {
      name: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      date: 'Jan 2022',
      credentialUrl: 'https://www.tensorflow.org/certificate',
      badgeIcon: '📜',
    },
  ],

  // ══════════════════════════════════════════════════════════
  //  ACHIEVEMENTS
  // ══════════════════════════════════════════════════════════
  achievements: [
    {
      title: 'Best AI Innovation Award',
      description: 'Awarded for AgentForge at the Global AI Summit 2024 for advancing multi-agent AI systems.',
      category: 'award',
      date: '2024',
      link: 'https://globalaist.com/awards/2024',
    },
    {
      title: 'Published: "Scaling Multi-Agent Systems for Enterprise"',
      description: 'Peer-reviewed paper accepted at NeurIPS 2023 Workshop on Foundation Models.',
      category: 'publication',
      date: '2023',
      link: 'https://arxiv.org/abs/example',
    },
    {
      title: 'RAGStack — 5K+ GitHub Stars',
      description: 'Open-source RAG framework adopted by 200+ companies and featured in MLOps Community newsletter.',
      category: 'open-source',
      date: '2023',
      link: 'https://github.com/Jatin-Gurwani/ragstack',
    },
    {
      title: '1st Place — AI Hackathon by TechCrunch Disrupt',
      description: 'Built an AI-powered accessibility tool for visually impaired users in 48 hours.',
      category: 'hackathon',
      date: '2023',
      link: 'https://techcrunch.com/hackathon/2023',
    },
    {
      title: 'Published: "Practical RAG Patterns"',
      description: 'Technical blog series with 50K+ reads on optimizing retrieval-augmented generation pipelines.',
      category: 'publication',
      date: '2024',
      link: 'https://blog.jatingurwani.dev/rag-patterns',
    },
    {
      title: 'Top Contributor — LangChain',
      description: 'Recognized as a top open-source contributor with 100+ merged PRs to the LangChain ecosystem.',
      category: 'open-source',
      date: '2024',
      link: 'https://github.com/langchain-ai/langchain',
    },
  ],

  // ══════════════════════════════════════════════════════════
  //  TESTIMONIALS
  // ══════════════════════════════════════════════════════════
  testimonials: [
    {
      quote: "Jatin is one of the most talented AI engineers I've worked with. His ability to translate complex AI concepts into production-ready systems is remarkable.",
      name: 'Sarah Chen',
      role: 'VP of Engineering',
      company: 'NeuralScale AI',
    },
    {
      quote: 'The RAG pipeline Jatin built for us transformed our document processing workflow. What used to take days now takes minutes, with better accuracy.',
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'DocuTech Solutions',
    },
    {
      quote: "Jatin's contributions to the open-source AI community are outstanding. AgentForge has become an essential tool in our agent development toolkit.",
      name: 'Dr. Emily Zhang',
      role: 'Research Lead',
      company: 'AI Research Institute',
    },
  ],

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
    twitterHandle: '@jatingurwani',
    keywords: [
      'AI Engineer',
      'GenAI',
      'LLM',
      'Machine Learning',
      'Deep Learning',
      'AI Agents',
      'RAG',
      'Portfolio',
      'Jatin Gurwani',
    ],
  },
};
