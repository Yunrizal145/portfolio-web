import { useTilt } from "../hooks/useTilt";
import type { Project } from "../data/content";

export default function ProjectCard({ project }: { project: Project }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>();

  return (
    <div
      className="card"
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <span className="num">{project.id}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="stack">
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
}
