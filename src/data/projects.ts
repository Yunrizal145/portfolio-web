// src/data/projects.ts

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  highlights: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
}

export const projects: Project[] = [
  {
    id: "proj-01",
    title: "Internet Banking Mobile - Bank Victoria",
    shortDescription: "Developed backend services untuk mobile banking platform dengan focus pada onboarding dan transfer features.",
    fullDescription: "Built RESTful APIs dan backend services untuk mobile banking application. Implemented secure user registration, verification flows, dan reliable transfer processing untuk thousands of daily transactions.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "RESTful API", "Redis"],
    highlights: [
      "Seamless onboarding flow dengan improved user experience",
      "Secure transfer feature dengan transaction verification",
      "Optimized response time untuk better mobile experience",
      "Handled high transaction volume dengan stability"
    ],
    images: [
      "/images/projects/banking-mobile-1.jpg",
      "/images/projects/banking-mobile-2.jpg"
    ],
    featured: true,
    year: "2024"
  },
  {
    id: "proj-02",
    title: "Corporate Banking Platform - Bank Victoria",
    shortDescription: "Developed complex backend services untuk corporate banking transactions termasuk bulk transfers dan scheduled transactions.",
    fullDescription: "Built comprehensive backend services supporting one-to-one transfers, one-to-many bulk transfers, dan scheduled transactions. Implemented payment dan purchase modules dengan robust validation untuk high-volume financial transactions.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "RESTful API", "Unit Testing"],
    highlights: [
      "One-to-many bulk transfer dengan centralized flow",
      "Scheduled transaction management system",
      "Strong validation dan data integrity untuk financial data",
      "Optimized transaction processing untuk reduced latency"
    ],
    images: [
      "/images/projects/corporate-banking-1.jpg"
    ],
    featured: true,
    year: "2024"
  },
  {
    id: "proj-03",
    title: "Digital Banking Services - Bank Tabungan Negara",
    shortDescription: "Implemented payment integrations, e-wallet features, dan MSME services untuk BTN platform.",
    fullDescription: "Developed multiple banking features including BPJS payment integration, Purchase Dana (e-wallet), MSME support features, dan advanced transaction tracking. Enhanced system reliability dengan real-time transaction status updates.",
    technologies: ["Java", "Spring Boot", "MySQL", "RESTful API", "Payment Gateway Integration"],
    highlights: [
      "BPJS payment integration dengan compliance requirements",
      "Purchase Dana e-wallet feature untuk seamless transactions",
      "MSME features untuk supporting business users",
      "Real-time transaction status tracking system"
    ],
    images: [
      "/images/projects/btn-banking-1.jpg"
    ],
    featured: true,
    year: "2024"
  },
  {
    id: "proj-04",
    title: "City Government API Platform - Diskominfo Sukabumi",
    shortDescription: "Developed microservices architecture dan APIs untuk government administrative systems.",
    fullDescription: "Built scalable microservices architecture dengan multiple APIs untuk government services. Managed SQL queries optimization, frontend-backend integration, dan continuous deployment dalam Agile environment.",
    technologies: ["Java", "MySQL", "Microservices", "Git", "Docker"],
    highlights: [
      "Scalable microservices architecture design",
      "Optimized SQL queries untuk improved performance",
      "Seamless frontend-backend integration",
      "Continuous deployment dalam Agile workflow"
    ],
    images: [
      "/images/projects/diskominfo-1.jpg"
    ],
    featured: true,
    year: "2023"
  }
];
