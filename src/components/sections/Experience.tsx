// src/components/sections/Experience.tsx

import { experiences } from '../../data/experience';
import SectionDivider from '../shared/SectionDivider';

export default function Experience() {
    return (
        <>
        <SectionDivider variant="dark-to-light" />
        
    <section id="experience" className="section-padding relative overflow-hidden bg-bg-light text-text-dark">
            <div className="container-custom">
                {/* Section Header */}
                <div className="mb-12">
                    <p className="text-accent-primary text-sm font-mono tracking-wider mb-2">CAREER // TIMELINE</p>
                    <h2 className="text-5xl md:text-6xl font-bold text-text-dark mb-4">Work Experience</h2>
                    <p className="text-text-dark-muted text-xl max-w-3xl">
                        Building mission-critical backend infrastructure for banking and enterprise systems.
                    </p>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 p-6 bg-slate-100 rounded-xl border border-slate-300">
                    {[
                        { icon: '💼', value: '3+', label: 'YEARS TECHNICAL EXP' },
                        { icon: '🏦', value: '2+', label: 'YEARS FINANCIAL CORE' },
                        { icon: '🚀', value: '450+', label: 'DEPLOYMENTS' },
                        { icon: '🛡️', value: '0', label: 'BREACHES SECURITY' }
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <span className="text-2xl">{stat.icon}</span>
                            <p className="text-text-dark font-bold text-2xl mt-1">{stat.value}</p>
                            <p className="text-text-dark-muted text-xs font-mono">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-blue-500/20 transform md:-translate-x-1/2"></div>

                    <div className="space-y-16">
                        {experiences.map((exp, index) => {
                            const isCurrent = exp.endDate === "Present";
                            const isEven = index % 2 === 0;
                            
                            return (
                                <div 
                                    key={exp.id} 
                                    className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                                        <div className={`w-4 h-4 rounded-full ${isCurrent ? 'bg-cyan-500' : 'bg-slate-400'} border-4 border-bg-light z-10`}></div>
                                        {isCurrent && (
                                            <div className="w-4 h-4 rounded-full bg-cyan-400/30 animate-ping absolute"></div>
                                        )}
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                                        <div className="bg-white border border-slate-300 rounded-xl p-6 hover:border-accent-primary/40 transition-all">
                                            {/* Header */}
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    {isCurrent && (
                                                        <span className="inline-block px-2 py-1 bg-cyan-500/20 text-accent-primary text-xs font-bold rounded mb-2">
                                                            CURRENT: RISE
                                                        </span>
                                                    )}
                                                    <p className="text-text-dark-muted text-xs font-mono">
                                                        {exp.startDate} — {exp.endDate}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-text-dark-muted text-xs font-mono">2y 2m23d - Now</p>
                                                </div>
                                            </div>

                                            {/* Title & Company */}
                                            <h3 className="text-xl font-bold text-text-dark mb-1">{exp.position}</h3>
                                            <p className="text-accent-primary font-medium text-sm mb-1">{exp.company}</p>
                                            <p className="text-text-dark-muted text-xs mb-4">• Core Banking</p>

                                            {/* Quote/Description */}
                                            <p className="text-text-dark-muted text-sm italic mb-4 border-l-2 border-accent-primary/50 pl-3">
                                                "{exp.description}"
                                            </p>

                                            {/* Achievements */}
                                            <div className="space-y-2 mb-5">
                                                {exp.achievements.map((item, idx) => (
                                                    <div key={idx} className="flex items-start gap-2">
                                                        <span className="text-accent-primary text-xs mt-1">▪</span>
                                                        <p className="text-text-dark-muted text-sm leading-relaxed">{item}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-300">
                                                {exp.technologies.map((tech) => (
                                                    <span 
                                                        key={tech} 
                                                        className="px-3 py-1 bg-slate-100 text-text-dark text-xs font-medium rounded border border-slate-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
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
                <div className="mt-16 pt-12 border-t border-slate-800 text-center">
                    <p className="text-slate-400 text-sm mb-6">Interested in my journey? Let's connect.</p>
                    <button className="px-8 py-3 bg-[#1a2332] hover:bg-[#1e293b] text-white font-semibold rounded-lg border border-slate-700 transition-all">
                        View Full Resume
                    </button>
                </div>
            </div>
        </section>

      <SectionDivider variant="light-to-dark" />
        </>
    );
}
