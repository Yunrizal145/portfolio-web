// src/components/sections/Skills.tsx

import { skills, skillTags } from '../../data/skills';
import { Badge, SkillCard } from '../ui';
import WavyDivider from '../shared/WavyDivider';

export default function Skills() {
  return (
    <>
      <WavyDivider />
      
      <section id="skills" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold mb-4">Skills & Expertise</h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              Specialized in backend development dengan focus pada scalable, reliable, dan performant systems
            </p>
          </div>

          {/* Skill Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>

          {/* Technology Tags */}
          <div className="mb-12">
            <h3 className="text-h4 font-semibold mb-6 text-center">Technologies</h3>
            <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
              {skillTags.map((tag) => (
                <Badge key={tag} text={tag} variant="skill" />
              ))}
            </div>
          </div>

          {/* Development Approach */}
          <div className="bg-bg-secondary rounded-card p-8">
            <h3 className="text-h3 font-bold mb-6 text-center">Development Approach</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl text-accent-primary mb-4">⚡</div>
                <h4 className="text-h4 font-semibold mb-2">Performance Focused</h4>
                <p className="text-text-secondary text-sm">
                  Optimize query execution, implement caching strategies, reduce latency
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-accent-primary mb-4">🛡️</div>
                <h4 className="text-h4 font-semibold mb-2">Reliable & Secure</h4>
                <p className="text-text-secondary text-sm">
                  Implement robust validation, error handling, data integrity checks
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-accent-primary mb-4">🚀</div>
                <h4 className="text-h4 font-semibold mb-2">Scalable Architecture</h4>
                <p className="text-text-secondary text-sm">
                  Design microservices, implement load balancing, prepare for scale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
