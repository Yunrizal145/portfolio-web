// src/components/sections/Hero.tsx

export default function Hero() {
    return (
        <section id="hero" className="section-padding relative overflow-hidden bg-bg-primary">
            {/* Background Glow Effect */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6] opacity-10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
                    {/* Left: Text Content */}
                    <div className="space-y-6">
                        {/* Status Banner */}
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card text-xs font-mono tracking-wide border border-accent-primary/30">
                            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                            <span className="text-emerald-400">SYS_INIT // V2.4.8</span>
                            <span className="text-slate-400">•</span>
                            <span className="text-white">SYSTEMS ARCHITECT | Available for High-Scale Roles</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                            <span className="text-white">Hammad Yunrizal Aushaf</span>
                            <br />
                            <span className="text-white">Backend</span>{" "}
                            <span className="text-gradient">Architect</span>
                            <br />
                            <span className="text-white">&</span>{" "}
                            <span className="text-gradient">Core Systems</span>
                        </h1>

                        {/* Description */}
                        <p className="text-[#cbd5e1] text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
                            Specializing in high-throughput financial rails, distributed transaction ledgers, and 
                            low-latency microservices. 3+ years engineering mission-critical backend infrastructure 
                            with Java Spring Boot, PostgreSQL, Apache Kafka, and Redis.
                        </p>

                        {/* Technology Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {['Java 21', 'Spring Boot 3', 'Microservices', 'PostgreSQL', 'Apache Kafka', 'Redis Cluster', 'Docker & K8s'].map((tech) => (
                                <span key={tech} className="px-3 py-1.5 text-sm font-medium bg-[#1a2332] text-white rounded-lg border border-slate-700/50">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-6">
                            <button className="px-6 py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2">
                                Explore Architecture
                                <span>→</span>
                            </button>
                            <button className="p-3 bg-[#1a2332] hover:bg-[#1e293b] text-white rounded-lg border border-slate-700 transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                            </button>
                            <button className="p-3 bg-[#1a2332] hover:bg-[#1e293b] text-white rounded-lg border border-slate-700 transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/></svg>
                            </button>
                        </div>
                    </div>

                    {/* Right: Dashboard Mockup */}
                    <div className="relative">
                        <div className="glass-card rounded-2xl p-4 space-y-3 border border-accent-primary/20 shadow-2xl shadow-blue-500/10">
                            {/* Panel 1: FinPay Gateway */}
                            <div className="bg-[#0a0e1a] rounded-xl p-4 border border-slate-800">
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <h3 className="text-white font-semibold text-sm">FinPay Gateway</h3>
                                        <p className="text-slate-500 text-xs font-mono">14:23:45 UTC • Live</p>
                                    </div>
                                    <span className="text-emerald-400 text-lg font-bold">34.2%</span>
                                </div>
                                
                                {/* Metrics Row */}
                                <div className="flex gap-3 mb-3">
                                    <div className="flex-1 bg-slate-900/50 rounded-lg p-2">
                                        <p className="text-slate-500 text-xs">Throughput</p>
                                        <p className="text-cyan-400 font-bold text-sm">4.2k req/s</p>
                                    </div>
                                    <div className="flex-1 bg-slate-900/50 rounded-lg p-2">
                                        <p className="text-slate-500 text-xs">P99 Latency</p>
                                        <p className="text-blue-400 font-bold text-sm">11.8ms</p>
                                    </div>
                                </div>

                                {/* Wave Visualization */}
                                <div className="h-16 bg-slate-950/50 rounded-lg flex items-center justify-center relative overflow-hidden border border-slate-800">
                                    <svg className="w-full h-full" viewBox="0 0 200 50">
                                        <path d="M0,25 Q10,15 20,25 T40,25 T60,25 T80,25 T100,25 T120,25 T140,25 T160,25 T180,25 T200,25" 
                                              stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.6"/>
                                        <path d="M0,25 Q10,30 20,25 T40,25 T60,25 T80,25 T100,25 T120,25 T140,25 T160,25 T180,25 T200,25" 
                                              stroke="#10b981" strokeWidth="1.5" fill="none" opacity="0.4"/>
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-slate-600 text-xs font-mono">Errors: 0.002%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Panel 2: Spring Boot Actuator */}
                            <div className="bg-[#0a0e1a] rounded-xl p-4 border border-slate-800">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-white font-semibold text-sm">Spring Boot Actuator</h3>
                                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded">UP</span>
                                </div>
                                
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="bg-slate-900/50 rounded px-2 py-1.5 border border-slate-800">
                                        <p className="text-slate-500 text-xs">POSTGRES</p>
                                        <p className="text-emerald-400 text-xs font-bold">ONLINE</p>
                                    </div>
                                    <div className="bg-slate-900/50 rounded px-2 py-1.5 border border-slate-800">
                                        <p className="text-slate-500 text-xs">REDIS</p>
                                        <p className="text-cyan-400 text-xs font-bold">SYNCED</p>
                                    </div>
                                    <div className="bg-slate-900/50 rounded px-2 py-1.5 border border-slate-800">
                                        <p className="text-slate-500 text-xs">KAFKA</p>
                                        <p className="text-blue-400 text-xs font-bold">HEALTHY</p>
                                    </div>
                                </div>
                                
                                <p className="text-slate-500 text-xs mt-2 font-mono">Disk: 82% free</p>
                            </div>

                            {/* Panel 3: Settlement Batch */}
                            <div className="bg-[#0a0e1a] rounded-xl p-3 border border-slate-800">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                    <p className="text-white text-xs font-mono">Settlement Batch #892</p>
                                    <span className="ml-auto text-emerald-400 text-xs font-bold">ACK</span>
                                </div>
                                <p className="text-slate-500 text-xs font-mono mt-1">Processing: 1,247 txn</p>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-xl border border-accent-primary/40 shadow-xl">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
                                <div className="w-2 h-2 rounded-full bg-emerald-400 absolute"></div>
                                <p className="text-xs text-white font-semibold ml-2">Ready for Impact</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-slate-800">
                    {[
                        { label: 'YEARS EXP', value: '3+', icon: '⚡' },
                        { label: 'FINTECH CLIENTS', value: '5+', icon: '🏦' },
                        { label: 'CORE SERVICES', value: '14+', icon: '🚀' },
                        { label: 'SLA GUARANTEED', value: '99.99%', icon: '✓' }
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                            <p className="text-xs text-slate-500 font-semibold tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
