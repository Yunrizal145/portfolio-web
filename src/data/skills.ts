// src/data/skills.ts

export interface Skill {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "backend" | "database" | "tools" | "methodology";
}

export const skills: Skill[] = [
  {
    id: "skill-01",
    title: "Backend Development",
    description: "Java (Spring Boot), RESTful APIs, OOP, microservices architecture",
    icon: "SiJava",
    category: "backend"
  },
  {
    id: "skill-02",
    title: "Database & Caching",
    description: "MySQL, PostgreSQL, Redis, query optimization, data modeling",
    icon: "SiPostgresql",
    category: "database"
  },
  {
    id: "skill-03",
    title: "Development Tools",
    description: "Git, Docker, Unit Testing, API Integration, Debugging",
    icon: "SiGit",
    category: "tools"
  },
  {
    id: "skill-04",
    title: "Agile & Collaboration",
    description: "Scrum/Agile, Team Leadership, Cross-functional communication",
    icon: "SiTrello",
    category: "methodology"
  }
];

export const skillTags = [
  "Java",
  "Spring Boot",
  "RESTful API",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Git",
  "Docker",
  "Microservices",
  "Agile/Scrum",
  "Unit Testing",
  "API Integration"
];

export const skillProficiency = [
  { label: "Backend Development", value: 92 },
  { label: "Database Management", value: 88 },
  { label: "Problem Solving", value: 90 }
];
