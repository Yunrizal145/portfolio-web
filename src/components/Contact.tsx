import RevealSection from "./RevealSection";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <RevealSection id="contact">
      <div className="contact-box">
        <span className="tag" style={{ justifyContent: "center", display: "flex" }}>
          // 05 — KONTAK
        </span>
        <h2>Mari berkolaborasi.</h2>
        <p>Terbuka untuk peluang kerja, kolaborasi proyek, atau sekadar ngobrol soal AI.</p>
        <a href={`mailto:${profile.email}`} className="btn btn-primary">
          Kirim Email →
        </a>
      </div>
    </RevealSection>
  );
}
