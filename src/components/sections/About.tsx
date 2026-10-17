// src/components/sections/About.tsx

import { profile } from '../../data/profile';
import SectionDivider from '../shared/SectionDivider';

export default function About() {
  const { bio } = profile;

  return (
    <>
      <SectionDivider variant="dark-to-light" />
      
      <section id="about" className="section-padding bg-bg-light text-text-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Portrait & Visual */}
            <div className="flex flex-col items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden light-card p-2 bg-gradient-to-tr from-accent-primary to-accent-light shadow-2xl">
                <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-accent-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Available for New Projects
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="space-y-6">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-accent-primary text-xs font-semibold tracking-wider uppercase">
                About Me
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold font-serif leading-tight">
                Code is my medium. <span className="text-accent-primary italic">Reliability is my superpower.</span>
              </h2>
              
              {bio.map((paragraph, idx) => (
                <p key={idx} className="text-text-dark-muted text-base md:text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
              
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border-light">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl md:text-3xl font-bold text-accent-primary mb-1">
                    {profile.stats.yearsExperience}
                  </div>
                  <p className="text-text-dark-muted text-xs md:text-sm">Years Experience</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl md:text-3xl font-bold text-accent-primary mb-1">
                    {profile.stats.clientsCount}
                  </div>
                  <p className="text-text-dark-muted text-xs md:text-sm">Clients</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl md:text-3xl font-bold text-accent-primary mb-1">
                    {profile.stats.projectsCount}
                  </div>
                  <p className="text-text-dark-muted text-xs md:text-sm">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="light-to-dark" />
    </>
  );
}
