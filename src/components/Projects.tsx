import RevealSection from "./RevealSection";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <RevealSection id="projects">
      <span className="tag">// 03 — PROYEK</span>
      <h2 className="sec-title">Karya yang pernah saya bangun.</h2>
      <div className="proj-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </RevealSection>
  );
}
