# Portfolio — Hammad Yunrizal

Portfolio pribadi bertema AI (dark futuristic, ungu-hitam-biru), dibangun dengan
React 19 + TypeScript + Vite 8.

## Menjalankan project

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

## Struktur folder

```
src/
  components/   -> semua komponen UI (Hero, About, Skills, Projects, dst)
  hooks/        -> logic reusable (typing effect, scroll reveal, tilt 3D)
  data/         -> content.ts — SEMUA TEKS ADA DI SINI
  App.tsx       -> merangkai semua komponen
  App.css       -> seluruh styling
```

## Mengedit konten

Buka `src/data/content.ts` — nama, deskripsi, skill, proyek, dan pengalaman
semuanya ada di satu file itu. Tidak perlu menyentuh komponen React sama
sekali untuk mengganti teks.

## Build untuk production

```bash
npm run build
```

Hasil build ada di folder `dist/` — folder inilah yang di-deploy ke Vercel.

## Preview hasil build

```bash
npm run preview
```
