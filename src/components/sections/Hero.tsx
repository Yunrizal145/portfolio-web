// src/components/sections/Hero.tsx

import { Button } from '../ui';
import { profile } from '../../data/profile';

export default function Hero() {
  return (
    <section id="hero" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-display font-bold mb-4">
                {profile.name}
              </h1>
              <p className="text-h3 text-gradient font-semibold mb-4">
                {profile.title}
              </p>
              <p className="text-body-lg text-text-secondary mb-6">
                {profile.tagline}
              </p>
              <p className="text-body text-text-secondary mb-8">
                {profile.bio[0]}
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-primary mb-2">
                  {profile.stats.yearsExperience}
                </div>
                <p className="text-text-secondary text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-primary mb-2">
                  {profile.stats.clientsCount}
                </div>
                <p className="text-text-secondary text-sm">Clients</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-primary mb-2">
                  {profile.stats.projectsCount}
                </div>
                <p className="text-text-secondary text-sm">Projects</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="#projects">
                View My Work
              </Button>
              <Button variant="secondary" href="#contact">
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Image/Visual Placeholder */}
          <div className="relative">
            <div className="bg-bg-secondary rounded-card aspect-square relative overflow-hidden">
              {/* Placeholder for profile image or illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl text-accent-primary mb-4">💻</div>
                  <p className="text-text-secondary">Backend Developer</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent-primary opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-accent-light opacity-10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
