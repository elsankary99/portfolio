export interface Project {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  role: string;
  challenges: string[];
  solutions: string[];
  keyFeatures: string[];
  technologies: string[];
  results: string[];
  appStore?: string;
  appStoreProvider?: string;
  googlePlay?: string;
  github?: string;
  image: string;
  gradient: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  logo?: string;
}

export interface Skill {
  name: string;
  level?: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Technology {
  name: string;
  category: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
