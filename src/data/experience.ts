// src/data/experience.ts

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: string[];
  technologies: string[];
  companyLogo?: string;
}

export const experiences: WorkExperience[] = [
  {
    id: "exp-01",
    company: "PT Infosys Solusi Terpadu",
    position: "Backend Developer",
    startDate: "12/2023",
    endDate: "Present",
    description: "Develop and maintain backend services untuk distributed banking systems. Handle complex transactions, API integration, dan performance optimization.",
    achievements: [
      "Developed RESTful APIs untuk seamless data exchange di distributed environment",
      "Implemented mobile banking onboarding features, improving user registration flows",
      "Enhanced bulk transfer feature dengan unified flow, reducing transaction errors",
      "Integrated third-party APIs dari payment gateways dan e-wallets",
      "Optimized backend services, reducing server response time significantly"
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "RESTful API", "Redis"]
  },
  {
    id: "exp-02",
    company: "PT Diskominfo Kota Sukabumi",
    position: "Backend Developer",
    startDate: "04/2023",
    endDate: "12/2023",
    description: "Built APIs, managed database queries, dan developed microservices architecture untuk aplikasi skala enterprise.",
    achievements: [
      "Built APIs dan data clients untuk efficient data consumption",
      "Managed SQL queries dan optimized data transport",
      "Developed microservices architecture untuk improved scalability",
      "Ensured seamless integration antara Java backend, databases, dan external systems",
      "Authored code fixes dan enhancements untuk production releases"
    ],
    technologies: ["Java", "MySQL", "Microservices", "Git", "Agile"]
  }
];
