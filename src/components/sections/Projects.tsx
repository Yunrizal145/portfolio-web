// src/components/sections/Projects.tsx

import { useState } from 'react';
import { projects } from '../../data/projects';
import { Badge, Button, Modal } from '../ui';
import WavyDivider from '../shared/WavyDivider';
import type { Project } from '../../data/projects';

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div 
      className="group bg-bg-secondary rounded-card overflow-hidden cursor-pointer hover:shadow-card-hover transition-all duration-300"
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="aspect-video bg-bg-tertiary relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-50">🏦</div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-accent-primary bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button variant="secondary" className="bg-white text-accent-primary border-white hover:bg-opacity-90">
              View Details
            </Button>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-text-muted">{project.year}</span>
          {project.featured && (
            <span className="px-2 py-1 text-xs bg-accent-primary rounded-full text-white">Featured</span>
          )}
        </div>
        
        <h3 className="text-h4 font-bold mb-2 group-hover:text-accent-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} text={tech} variant="tech" />
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-text-muted">+{project.technologies.length - 3} more</span>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectDetail({ project }: { project: Project; onClose: () => void }) {
  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-sm text-text-muted">{project.year}</span>
          {project.featured && (
            <span className="px-3 py-1 text-sm bg-accent-primary rounded-full text-white">Featured</span>
          )}
        </div>
        <h2 className="text-h2 font-bold mb-2">{project.title}</h2>
      </div>

      {/* Image Gallery */}
      <div className="aspect-video bg-bg-tertiary rounded-card mb-6 flex items-center justify-center">
        <div className="text-8xl opacity-50">🏦</div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Description */}
        <div>
          <h3 className="text-h4 font-semibold mb-3">About Project</h3>
          <p className="text-text-secondary text-body">{project.fullDescription}</p>
        </div>

        {/* Highlights */}
        <div>
          <h3 className="text-h4 font-semibold mb-3">Key Achievements</h3>
          <ul className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">✓</span>
                <span className="text-text-secondary">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-h4 font-semibold mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} text={tech} variant="tech-lg" />
            ))}
          </div>
        </div>

        {/* Links */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex gap-4 pt-4">
            {project.liveUrl && (
              <Button variant="primary" href={project.liveUrl}>
                View Live →
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="secondary" href={project.githubUrl}>
                View Code →
              </Button>
            )}
          </div>
        )}
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
    <>
      <WavyDivider />
      
      <section id="projects" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold mb-4">Portfolio Projects</h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              Professional projects dalam backend development untuk banking dan enterprise systems
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {displayProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* Show More Button */}
          {projects.length > 4 && !showAll && (
            <div className="text-center">
              <Button 
                variant="secondary"
                onClick={() => setShowAll(true)}
              >
                View All Projects ({projects.length})
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      <Modal 
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </Modal>
    </>
  );
}
