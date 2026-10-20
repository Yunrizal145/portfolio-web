// src/components/sections/About.tsx

import { profile } from "../../data/profile";
import SectionDivider from "../shared/SectionDivider";

export default function About() {
    return (
        <>
      <SectionDivider variant="dark-to-light" />
      
    <section id="about" className="section-padding relative overflow-hidden bg-bg-light text-text-dark">
            <div className="container-custom">
                <div className="grid lg:grid-cols-[60%_38%] gap-12">
                    {/* Left Column: Content */}
                    <div className="space-y-8">
                        {/* Section Header */}
                        <div>
                            <p className="text-accent-primary text-sm font-mono tracking-wider mb-2">SYS_ARCH // BIO & PHILOSOPHY</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">About Me</h2>
                            <p className="text-xl text-accent-primary font-semibold">
                                Specializing in Core Banking & High-Throughput Payment Infrastructure
                            </p>
                        </div>

                        {/* Bio Paragraphs */}
                        <div className="space-y-4 text-text-dark-muted text-base leading-relaxed">
                            <p>
                                I'm a <span className="text-text-dark font-semibold">Backend Architect</span> with 3+ years of experience building 
                                mission-critical financial systems. My expertise lies in designing and implementing high-throughput microservices 
                                using <span className="font-mono text-cyan-400">Java 21</span>, <span className="font-mono text-cyan-400">Spring Boot</span>, and 
                                distributed data systems like <span className="font-mono text-cyan-400">PostgreSQL</span>, <span className="font-mono text-cyan-400">Apache Kafka</span>, and <span className="font-mono text-cyan-400">Redis</span>.
                            </p>
                            <p>
                                I architect resilient backend infrastructure that powers core banking platforms, payment gateways, 
                                and settlement systems. My work emphasizes <span className="text-text-dark font-semibold">transaction integrity</span>, 
                                <span className="text-text-dark font-semibold"> low-latency APIs</span>, and <span className="text-text-dark font-semibold">observability</span> through 
                                tools like OpenTelemetry, Prometheus, and Grafana.
                            </p>
                            <p>
                                From ACID-compliant ledgers to event-driven architectures, I ensure systems are production-ready, 
                                scalable, and maintainable. I thrive in cross-functional teams, translating complex business requirements 
                                into clean, testable code that delivers real impact.
                            </p>
                        </div>

                        {/* Philosophy Quote */}
                        <div className="border-l-4 border-accent-primary bg-slate-100 p-6 rounded-r-xl">
                            <p className="text-text-dark text-lg italic mb-2">"{profile.quote}"</p>
                            <p className="text-text-dark-muted text-sm">— Personal Engineering Doctrine</p>
                        </div>

                        {/* Core Domains */}
                        <div>
                            <h3 className="text-text-dark font-semibold text-lg mb-3">Core Domains</h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'Financial Rails',
                                    'Distributed Consensus',
                                    'ACID Ledgers',
                                    'Event Sourcing & CQRS',
                                    'Zero-Trust Security',
                                    'High Concurrency Tuning'
                                ].map((domain) => (
                                    <span key={domain} className="px-4 py-2 bg-slate-200 text-text-dark text-sm font-medium rounded-full border border-slate-300">
                                        {domain}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Education & Credentials */}
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-text-dark font-semibold text-lg mb-3">Education</h3>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-accent-primary/20 flex items-center justify-center text-accent-primary flex-shrink-0">
                                        🎓
                                    </div>
                                    <div>
                                        <p className="text-text-dark font-semibold">B.S. Computer Science</p>
                                        <p className="text-text-dark-muted text-sm">Universitas Komputer Indonesia</p>
                                        <span className="inline-block mt-1 px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded">
                                            1st Class Hons
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-text-dark font-semibold text-lg mb-3">Professional Certifications</h3>
                                <div className="grid gap-3">
                                    {[
                                        { name: 'Oracle Certified Professional: Java SE 17/21', badge: 'OCP', verified: true },
                                        { name: 'Confluent Certified Developer for Apache Kafka', badge: 'CCDAK', verified: true },
                                        { name: 'AWS Solutions Architect Associate', badge: 'AWS', verified: true },
                                        { name: 'Spring Professional Engineer (VMware)', badge: 'Spring', verified: true }
                                    ].map((cert) => (
                                        <div key={cert.name} className="flex items-center gap-3 p-3 bg-slate-100 rounded-lg border border-slate-300">
                                            <span className="px-2 py-1 bg-accent-primary/20 text-accent-primary text-xs font-bold rounded">
                                                {cert.badge}
                                            </span>
                                            <p className="text-text-dark text-sm flex-1">{cert.name}</p>
                                            {cert.verified && (
                                                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                                </svg>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Profile Card */}
                    <div className="lg:sticky lg:top-24 h-fit">
                        <div className="light-card rounded-2xl p-6 space-y-6 bg-white">
                            {/* Profile Image */}
                            <div className="relative">
                                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent-primary to-accent-light p-1">
                                    <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center text-4xl font-bold text-text-dark">
                                        HY
                                    </div>
                                </div>
                                
                                {/* Status Badge */}
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full whitespace-nowrap">
                                    ✓ AVAILABLE FOR LEAD ROLES
                                </div>
                            </div>

                            {/* Name & Role */}
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-text-dark mb-1">{profile.name}</h3>
                                <p className="text-text-dark-muted text-sm">Senior Backend Engineer</p>
                            </div>

                            {/* Key Metrics */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-slate-100 rounded-lg p-3 border border-slate-300">
                                    <p className="text-text-dark-muted text-xs mb-1">Uptime guarantee</p>
                                    <p className="text-emerald-600 font-bold text-lg">99.99%+</p>
                                    <p className="text-text-dark-muted text-xs">SLA</p>
                                </div>
                                <div className="bg-slate-100 rounded-lg p-3 border border-slate-300">
                                    <p className="text-text-dark-muted text-xs mb-1">Target runtime</p>
                                    <p className="text-accent-primary font-bold text-lg">JVM 21</p>
                                    <p className="text-text-dark-muted text-xs">(LTS)</p>
                                </div>
                            </div>

                            {/* Visual Stats */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-600">
                                        💼
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-text-dark font-semibold text-sm">3+ years</p>
                                        <p className="text-slate-500 text-xs">Core banking experience</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-600">
                                        🤝
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-text-dark font-semibold text-sm">5+ partners</p>
                                        <p className="text-text-dark-muted text-xs">Enterprise clients</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-accent-primary">
                                        🚀
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-text-dark font-semibold text-sm">15+ systems</p>
                                        <p className="text-text-dark-muted text-xs">Shipped to production</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-600">
                                        ⚙️
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-text-dark font-semibold text-sm">PROD</p>
                                        <p className="text-text-dark-muted text-xs">Environment ready</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="space-y-2 pt-4 border-t border-slate-300">
                                <button className="w-full py-2.5 bg-accent-primary hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors">
                                    Engineering Resume (PDF)
                                </button>
                                <button className="w-full py-2.5 bg-[#1a2332] hover:bg-[#1e293b] text-white font-medium rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-2">
                                    <span>💬</span>
                                    Technical Discussion
                                </button>
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
