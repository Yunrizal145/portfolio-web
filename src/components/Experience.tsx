import RevealSection from "./RevealSection";
import { timeline } from "../data/content";

export default function Experience() {
  return (
    <RevealSection id="experience">
      <span className="tag">// 04 — PENGALAMAN</span>
      <h2 className="sec-title">Perjalanan singkat.</h2>
      <div className="timeline">
        {timeline.map((item) => (
          <div className="t-item" key={item.date}>
            <div className="date">{item.date}</div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
