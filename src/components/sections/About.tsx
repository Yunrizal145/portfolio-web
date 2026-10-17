// src/components/sections/About.tsx

import { profile } from '../../data/profile';
import { StatCard } from '../ui';
import WavyDivider from '../shared/WavyDivider';

export default function About() {
  const { bio, quote } = profile;

  return (
    <>
      <WavyDivider />
      
      <section id="about" className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-h2 font-bold mb-6">About Me</h2>
              
              {bio.map((paragraph, idx) => (
                <p key={idx} className="text-body text-text-secondary">
                  {paragraph}
                </p>
              ))}
              
              <div className="mt-8 p-6 bg-bg-secondary rounded-card border-l-4 border-accent-primary">
                <p className="text-body-lg text-text-secondary italic">
                  "{quote}"
                </p>
              </div>
            </div>

            {/* Stats & Image Section */}
            <div className="space-y-8">
              {/* Profile Image Placeholder */}
              <div className="bg-bg-secondary rounded-card p-8 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-accent-primary opacity-20 mb-6 flex items-center justify-center">
                  <div className="text-4xl">👨‍💻</div>
                </div>
                
                <h3 className="text-h3 font-bold mb-2">{profile.name}</h3>
                <p className="text-text-secondary mb-6">{profile.title}</p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 w-full">
                  <StatCard 
                    value={profile.stats.yearsExperience}
                    label="Years Experience"
                  />
                  <StatCard 
                    value={profile.stats.clientsCount}
                    label="Clients"
                  />
                  <StatCard 
                    value={profile.stats.projectsCount}
                    label="Projects"
                  />
                </div>
              </div>

              {/* Education/Certification Summary */}
              <div className="bg-bg-secondary rounded-card p-6">
                <h3 className="text-h4 font-semibold mb-4">Education & Certification</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                    <span className="text-text-secondary">Bachelor in Informatics Engineering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                    <span className="text-text-secondary">Back-End Developer Certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                    <span className="text-text-secondary">JavaScript Programming Fundamentals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
