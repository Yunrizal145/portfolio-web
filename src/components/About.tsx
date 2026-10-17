import RevealSection from "./RevealSection";
import { about, stats } from "../data/content";

export default function About() {
  return (
    <RevealSection id="about">
      <span className="tag">// 01 — TENTANG</span>
      <h2 className="sec-title">
        Menerjemahkan masalah kompleks menjadi sistem yang sederhana.
      </h2>
      <div className="about-grid">
        <div>
          {about.map((paragraph) => (
            <p key={paragraph.slice(0, 20)}>{paragraph}</p>
          ))}
        </div>
        <div className="stat-row">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
