import NeuralCanvas from "./NeuralCanvas";
import { useTypedText } from "../hooks/useTypedText";
import { profile } from "../data/content";

export default function Hero() {
  const typed = useTypedText(profile.typedPhrases);

  return (
    <section className="hero">
      <NeuralCanvas />
      <div className="hero-content">
        <div className="eyebrow mono">status: {profile.status}</div>
        <h1>
          {profile.headline.map((line, i) => (
            <span key={line}>
              {line}
              {i < profile.headline.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="desc">{profile.description}</p>
        <div id="typed" className="mono">
          <span>{typed}</span>
          <span className="cursor-blink">▍</span>
        </div>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            Lihat Proyek →
          </a>
          <a href="#contact" className="btn btn-ghost">
            Hubungi Saya
          </a>
        </div>
      </div>
      <div className="scroll-hint">
        <span className="bar" />
        scroll
      </div>
    </section>
  );
}
