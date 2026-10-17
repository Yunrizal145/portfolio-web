// src/components/ui/SkillCard.tsx

import type { Skill } from '../../data/skills';
import * as SiIcons from 'react-icons/si';

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  // Get icon from react-icons
  const IconComponent = (SiIcons as Record<string, any>)[skill.icon];
  
  return (
    <div className="card group">
      <div className="flex items-center gap-4 mb-4">
        {IconComponent && (
          <div className="text-accent-primary text-4xl group-hover:text-accent-light transition-colors">
            <IconComponent />
          </div>
        )}
      </div>
      <h3 className="text-h4 font-semibold mb-2">{skill.title}</h3>
      <p className="text-text-secondary text-sm">{skill.description}</p>
    </div>
  );
}
