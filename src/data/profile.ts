// src/data/profile.ts

export interface Profile {
    name: string;
    title: string;
    tagline: string;
    bio: string[];
    quote: string;
    stats: {
        yearsExperience: string;
        clientsCount: string;
        projectsCount: string;
    };
    profileImage: string;
    resume: string;
}

export const profile: Profile = {
    name: "Hammad Yunrizal Aushaf",
    title: "Backend Developer",
    tagline:
        "Building fault-tolerant backend infrastructure and mission-critical APIs.",
    bio: [
        "Backend development professional dengan over 3 tahun pengalaman dalam Java dan foundation yang kuat dalam server-side logic, database management, dan API integration.",
        "Skilled dalam problem-solving, clear communication, dan commitment terhadap high-quality outcomes. Berpengalaman dalam distributed systems, financial transactions, dan complex data handling.",
    ],
    quote: "Code adalah medium saya. Reliability adalah superpower saya.",
    stats: {
        yearsExperience: "3+",
        clientsCount: "5+",
        projectsCount: "10+",
    },
    profileImage: "/images/profile.jpg",
    resume: "/files/resume.pdf",
};
