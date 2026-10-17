// src/components/sections/Experience.tsx

import { experiences } from '../../data/experience';
import { Badge } from '../ui';
import WavyDivider from '../shared/WavyDivider';

export default function Experience() {
  return (
    <>
      <WavyDivider />
      
      <section id="experience" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold mb-4">Work Experience</h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              Professional journey dalam backend development dan system architecture
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-accent-primary opacity-20"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-primary rounded-full border-4 border-bg-primary z-10"></div>

                  {/* Content */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                  }`}>
                    <div className="bg-bg-secondary rounded-card p-6">
                      {/* Date Badge */}
                      <div className={`mb-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <span className="inline-block px-4 py-2 bg-bg-tertiary rounded-full text-sm text-accent-primary font-semibold">
                          {exp.startDate} — {exp.endDate}
                        </span>
                      </div>

                      {/* Job Details */}
                      <h3 className="text-h3 font-bold mb-2">{exp.position}</h3>
                      <p className="text-accent-light text-lg font-medium mb-4">{exp.company}</p>
                      <p className="text-text-secondary text-body mb-4">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-text-primary mb-2">Key Achievements:</h4>
                        <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                          {exp.achievements.slice(0, 3).map((achievement, idx) => (
                            <li key={idx} className="text-text-secondary text-sm flex items-start gap-2">
                              <span className="text-accent-primary mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} text={tech} variant="tech" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
