export interface Project {
  title: string;
  description: string;
  period: string;
  thumbnail: string;
  image: string[];
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
  /** Case-study fields — filled only for featured depth projects */
  problem?: string;
  role?: string;
  /** Architecture line + tradeoff combined */
  approach?: string;
  result?: string;
  /** Private projects: short structure diagram (text) */
  architecture?: string;
  detailedDescription?: string;
  features?: string[];
  challenges?: string[];
  duration?: string;
  teamSize?: string;
}
