export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  techStack: string[];
  status: 'deployed' | 'open-source' | 'in-development';
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  problemStatement: string;
  implementationDetails: string;
  impact: string;
  learnings?: string[];
  researchPapers?: { title: string; url: string; note: string }[];
  metrics?: {
    throughput?: string;
    accuracy?: string;
    latency?: string;
    reduction?: string;
  };
  order: number;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  achievements: string[];
}

export interface Skill {
  category: string;
  skills: { name: string; level: number }[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}
