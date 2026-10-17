// src/data/education.ts

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  gpa?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  url?: string;
}

export const education: Education[] = [
  {
    id: "edu-01",
    school: "Universitas Nusa Putra",
    degree: "Bachelor",
    field: "Informatics Engineering",
    startYear: "2019",
    endYear: "2023",
    gpa: "3.62"
  }
];

export const certifications: Certification[] = [
  {
    id: "cert-01",
    title: "Programmer Training - Back-End Developer",
    issuer: "Kawah Edukasi Batch III",
    year: "2023"
  },
  {
    id: "cert-02",
    title: "Fundamentals of JavaScript Programming",
    issuer: "Online Course",
    year: "2023"
  }
];
