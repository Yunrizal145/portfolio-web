// src/components/sections/Skills.tsx

import { skills, skillTags } from '../../data/skills';
import { SkillCard } from '../ui';

export default function Skills() {
  return (
    <>
      <section id="skills" className="section-padding bg-bg-primary relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-primary opacity-10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="px-3.5 py-1.5 rounded-full glass-card text-xs font-semibold tracking-wider text-accent-light uppercase">
              Expertise & Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-4">Skills & Core Competencies</h2>
            <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto font-light">
              Spesialisasi dalam membangun backend systems berperforma tinggi, aman, dan dapat diskalakan (scalable).
            </p>
          </div>

          {/* Skill Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skills.map((skill) => (
              <div key={skill.id} className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>

          {/* Technology Tags */}
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h3 className="text-xl font-bold mb-6 text-center text-white">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-2.5 justify-center max-w-4xl mx-auto">
              {skillTags.map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-xl bg-bg-tertiary/80 border border-accent-primary/20 text-text-primary text-sm font-medium hover:border-accent-light transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Development Approach */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-2xl border-l-4 border-accent-primary">
              <div className="text-3xl mb-4">⚡</div>
              <h4 className="text-lg font-bold mb-2">Performance Focused</h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                Optimasi query database, implementasi caching dengan Redis, dan meminimalisir latensi response.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl border-l-4 border-accent-light">
              <div className="text-3xl mb-4">🛡️</div>
              <h4 className="text-lg font-bold mb-2">Reliable & Secure</h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                Penerapan validasi ketat, penanganan error transaksional, dan integritas data perbankan yang tinggi.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl border-l-4 border-purple-500">
              <div className="text-3xl mb-4">🚀</div>
              <h4 className="text-lg font-bold mb-2">Scalable Architecture</h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                Desain arsitektur berbasis microservices, distributed systems, dan siap menghadapi lonjakan traffic.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
