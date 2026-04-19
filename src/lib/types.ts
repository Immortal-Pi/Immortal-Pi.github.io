export interface Project {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  githubUrl: string;
  icon: string;
  dates: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  school: string;
  gpa: string;
  startDate: string;
  endDate: string;
  logoSrc: string;
  coursework?: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface LinkedInArticle {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  linkedinUrl: string;
}
