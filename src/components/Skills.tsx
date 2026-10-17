import { useState } from "react";
import RevealSection from "./RevealSection";
import { skills, skillBars } from "../data/content";

export default function Skills() {
  const [barsActive, setBarsActive] = useState(false);

  return (
    <RevealSection id="skills" onReveal={() => setBarsActive(true)}>
      <span className="tag">// 02 — KEAHLIAN</span>
      <h2 className="sec-title">Tools & teknologi yang saya gunakan.</h2>

      <div className="skills-wrap">
        {skills.map((skill) => (
          <span className="pill" key={skill}>
            {skill}
          </span>
        ))}
      </div>

      <div className="bars">
        {skillBars.map((bar) => (
          <div className="bar-row" key={bar.label}>
            <div className="label">
              <span>{bar.label}</span>
              <span>{bar.value}%</span>
            </div>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{ width: barsActive ? `${bar.value}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
