// src/components/sections/Projects.tsx

import { useState } from 'react';
import { projects } from '../../data/projects';
import { Button, Modal } from '../ui';
import type { Project } from '../../data/projects';

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div 
      className="glass-card rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 flex flex-col justify-between"
      onClick={onClick}
    >
      {/* Project Banner / Thumbnail */}
      <div className="aspect-video bg-gradient-to-br from-blue-900/40 to-slate-900 relative overflow-hidden flex items-center justify-center border-b border-border-subtle">
        <div className="text-6xl group-hover:scale-110 transition-transform duration-300">🏦</div>
        
        <div className="absolute inset-0 bg-accent-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="px-4 py-2 rounded-lg bg-white text-accent-primary font-bold text-sm shadow-lg">
            View Details →
          </span>
        </div>

        {project.featured && (
          <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-accent-primary text-white text-xs font-semibold shadow">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-accent-light">{project.year}</span>
        </div>

        <h3 className="text-xl font-bold group-hover:text-accent-light transition-colors">
          {project.title}
        </h3>

        <p className="text-text-secondary text-sm line-clamp-2 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Tech Stack badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="px-2.5 py-1 rounded-md bg-bg-tertiary text-text-secondary text-xs font-medium">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2.5 py-1 rounded-md bg-bg-tertiary text-text-muted text-xs">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="space-y-6 text-text-primary">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono text-accent-light">{project.year}</span>
          {project.featured && (
            <span className="px-3 py-1 rounded-full bg-accent-primary text-white text-xs font-semibold">
              Featured Project
            </span>
          )}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
      </div>

      <div className="aspect-video bg-bg-tertiary rounded-xl flex items-center justify-center border border-border-subtle">
        <div className="text-8xl">🏦</div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-accent-light">Overview</h3>
        <p className="text-text-secondary text-sm md:text-base leading-relaxed">{project.fullDescription}</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-accent-light">Key Achievements</h3>
        <ul className="space-y-2">
          {project.highlights.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="text-accent-light font-bold mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-accent-light">Technologies Used</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-lg bg-bg-tertiary text-accent-light text-xs font-medium border border-border-subtle">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);
  const displayProjects = showAll ? projects : featuredProjects;

  return (
    <section id="projects" className="section-padding bg-bg-primary relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="px-3.5 py-1.5 rounded-full glass-card text-xs font-semibold tracking-wider text-accent-light uppercase">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-4">Featured Works</h2>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto font-light">
            Solusi digital dan distributed system berstandar tinggi yang telah diimplementasikan.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {displayProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* View All Button */}
        {projects.length > 4 && !showAll && (
          <div className="text-center">
            <Button 
              variant="secondary"
              onClick={() => setShowAll(true)}
              className="border-accent-primary text-accent-light hover:bg-accent-primary hover:text-white"
            >
              Explore All Projects ({projects.length})
            </Button>
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal 
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && <ProjectDetail project={selectedProject} />}
      </Modal>
    </section>
  );
}
