// Personal information type
export interface PersonalInfo {
  name: string;
  phone: string;
  email: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
}

// Education entry
export interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate?: string; // Optional for current education
  description?: string;
}

// Skill with visual rating
export interface Skill {
  name: string;
  level: number; // 1-5
  category?: 'Frontend' | 'Backend' | 'DevOps' | 'Other';
}

// Project showcase
export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  demoUrl?: string;
}

// CV Sections
export interface CVData {
  personal: PersonalInfo;
  sections: {
    about: string;
    education: Education[];
    skills: Skill[];
    projects: Project[];
    experience?: Experience[]; // Optional work experience
  };
}

// Optional work experience type
interface Experience {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}