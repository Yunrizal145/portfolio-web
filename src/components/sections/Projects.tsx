// src/components/sections/Projects.tsx

import { useState } from 'react';
import { projects } from '../../data/projects';
import { Modal } from '../ui';
import SectionDivider from '../shared/SectionDivider';
import type { Project } from '../../data/projects';

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

  return (
    <>
    <SectionDivider variant="light-to-dark" />
    
    <section id="projects" className="section-padding relative overflow-hidden bg-bg-primary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-accent-light text-sm font-mono tracking-wider mb-2">PORTFOLIO // SHOWCASE</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Work Experience & Career Timeline</h2>
          <p className="text-[#cbd5e1] text-xl max-w-3xl">
            Mission-critical projects delivering real impact across banking and enterprise infrastructure.
          </p>
        </div>

        {/* Timeline with Alternating Cards */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-blue-500/20 transform md:-translate-x-1/2"></div>

          <div className="space-y-20">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={project.id} 
                  className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-[#0f1117] z-10"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div 
                      className="bg-[#1a2332] border border-slate-800 rounded-xl p-6 hover:border-accent-primary/40 transition-all cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      {/* Header with Date */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded mb-2">
                            {project.year}
                          </span>
                          <p className="text-slate-500 text-xs font-mono">Banking Project</p>
                        </div>
                        {project.featured && (
                          <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>

                      {/* Quote/Description */}
                      <p className="text-slate-400 text-sm italic mb-4 border-l-2 border-blue-500/50 pl-3">
                        "{project.shortDescription}"
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-5">
                        {project.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-cyan-400 text-xs mt-1">▪</span>
                            <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 bg-[#0a0e1a] text-slate-300 text-xs font-medium rounded border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* View Details Button */}
                      <button className="mt-4 w-full py-2 bg-accent-primary/10 hover:bg-accent-primary/20 text-cyan-400 text-sm font-medium rounded-lg border border-accent-primary/30 transition-all">
                        View Full Details →
                      </button>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm mb-6">
            Explore more about these implementations or discuss your project needs.
          </p>
          <button className="px-8 py-3 bg-accent-primary hover:bg-accent-hover text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 transition-all">
            Let's Build Something Great
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal 
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && <ProjectDetail project={selectedProject} />}
      </Modal>
    </section>

      <SectionDivider variant="dark-to-light" />
    </>
  );
}
