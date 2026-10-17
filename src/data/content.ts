// Semua teks & data portfolio dikumpulkan di sini.
// Ganti isi di bawah ini untuk menyesuaikan dengan data kamu sendiri —
// tidak perlu menyentuh komponen React sama sekali.

export const profile = {
  name: "Hammad Yunrizal",
  status: "available for work",
  headline: ["Hammad", "Yunrizal"],
  description:
    "Saya membangun produk digital di persimpangan rekayasa perangkat lunak dan kecerdasan buatan — dari sistem backend yang solid hingga antarmuka yang terasa hidup.",
  typedPhrases: [
    "Building with AI.",
    "Solving real problems.",
    "Learning every day.",
  ],
  email: "email@kamu.com",
};

export const stats = [
  { value: "3+", label: "TAHUN BELAJAR & BERKARYA" },
  { value: "10+", label: "PROYEK DISELESAIKAN" },
  { value: "AI/ML", label: "FOKUS EKSPLORASI SAAT INI" },
];

export const about = [
  "Saya seorang developer yang fokus pada perpaduan antara software engineering dan artificial intelligence. Ketertarikan saya dimulai dari rasa penasaran tentang bagaimana mesin bisa \"belajar\", dan berkembang menjadi kebiasaan membangun sistem nyata yang dipakai orang.",
  "Saat ini saya sedang memperdalam machine learning dan pengembangan aplikasi berbasis AI, sambil terus mengasah dasar-dasar rekayasa perangkat lunak yang kuat.",
];

export const skills = [
  "Python",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "TensorFlow",
  "PyTorch",
  "Prompt Engineering",
  "REST API",
  "PostgreSQL",
  "Git & GitHub",
  "Figma",
];

export const skillBars = [
  { label: "Machine Learning", value: 85 },
  { label: "Frontend Development", value: 90 },
  { label: "Backend & API", value: 80 },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Nama Proyek Satu",
    description:
      "Deskripsi singkat proyek: masalah yang diselesaikan, pendekatan yang diambil, dan hasil yang dicapai.",
    stack: ["React", "Node.js", "OpenAI API"],
  },
  {
    id: "02",
    title: "Nama Proyek Dua",
    description:
      "Deskripsi singkat proyek: masalah yang diselesaikan, pendekatan yang diambil, dan hasil yang dicapai.",
    stack: ["Python", "TensorFlow", "Flask"],
  },
  {
    id: "03",
    title: "Nama Proyek Tiga",
    description:
      "Deskripsi singkat proyek: masalah yang diselesaikan, pendekatan yang diambil, dan hasil yang dicapai.",
    stack: ["Next.js", "PostgreSQL", "Vercel"],
  },
];

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    date: "2025 — Sekarang",
    title: "Posisi / Peran Saat Ini",
    description: "Deskripsi singkat tanggung jawab dan pencapaian di posisi ini.",
  },
  {
    date: "2024 — 2025",
    title: "Posisi Sebelumnya",
    description: "Deskripsi singkat tanggung jawab dan pencapaian di posisi ini.",
  },
  {
    date: "2023",
    title: "Awal Perjalanan",
    description: "Deskripsi singkat titik awal karier atau pembelajaran.",
  },
];
