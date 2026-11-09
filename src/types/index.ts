import { StaticImageData } from "next/image";

export interface Technology {
  name: string;
  icon: StaticImageData
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  repoUrl?: string;
  demoUrl?: string;
}

export interface TechGroup {
  title: string;
  items: Technology[];
}

export interface SoftSkill {
  name: string;
  icon: string;
}