// src/components/sections/Experience.tsx

import { experiences } from '../../data/experience';
import SectionDivider from '../shared/SectionDivider';

export default function Experience() {
  return (
    <>
      <SectionDivider variant="dark-to-light" />
      
      <section id="experience" className="section-padding bg-bg-light text-text-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-accent-primary text-xs font-semibold tracking-wider uppercase">
              Career Roadmap
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-serif mt-4 mb-4">
              The Journey That Shaped Me
            </h2>
            <p className="text-text-dark-muted text-base md:text-lg max-w-2xl mx-auto font-light">
              Pengalaman profesional menangani sistem perbankan skala nasional dan layanan publik.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="max-w-4xl mx-auto relative">
            {/* Center Line (Desktop) / Left Line (Mobile) */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-blue-200"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className={`relative flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent-primary rounded-full border-4 border-white shadow-md z-10"></div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="light-card p-6 md:p-8 rounded-2xl relative group hover:border-accent-primary/50 transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 rounded-full bg-blue-50 text-accent-primary text-xs font-bold">
                          {exp.startDate} — {exp.endDate}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.position}</h3>
                      <p className="text-accent-primary font-semibold text-sm mb-4">{exp.company}</p>
                      
                      <p className="text-text-dark-muted text-sm mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Achievements:</p>
                        <ul className="space-y-1.5">
                          {exp.achievements.map((item, idx) => (
                            <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                              <span className="text-accent-primary font-bold">▪</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="light-to-dark" />
    </>
  );
}
