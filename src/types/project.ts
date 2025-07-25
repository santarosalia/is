export interface Project {
    title: string;
    description: string;
    thumbnail: string;
    image: string[];
    technologies: string[];
    github: string;
    live: string;
    featured: boolean;
    detailedDescription?: string;
    features?: string[];
    challenges?: string[];
    duration?: string;
    teamSize?: string;
  }