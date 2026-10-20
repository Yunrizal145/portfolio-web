// src/components/sections/Hero.tsx

import { Button } from "../ui";
import { profile } from "../../data/profile";

export default function Hero() {
    return (
        <section id="hero" className="section-padding relative overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary opacity-15 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-semibold tracking-wider text-accent-light uppercase">
                            <span className="w-2 h-2 rounded-full bg-accent-light"></span>
                            {profile.title}
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                            Hammad Yunrizal Aushaf
                            <br />
                            <span className="text-gradient text-5xl">
                                Backend Architect & Core System
                            </span>
                        </h1>

                        <p className="text-text-secondary text-lg sm:text-xl font-light leading-relaxed">
                            <span className="text-white">
                                {profile.tagline}.
                            </span>{" "}
                            3+ years engineering high-throughput microservices
                            specializing in Java Spring Boot, distributed
                            transaction ledgers, and low-latency financial
                            rails.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button
                                variant="primary"
                                href="#projects"
                                className="shadow-lg shadow-blue-500/25"
                            >
                                View My Work →
                            </Button>
                            <Button variant="secondary" href="#contact">
                                Let's Talk
                            </Button>
                        </div>

                        {/* Quick Status */}
                        <div className="pt-6 flex items-center gap-3 text-sm text-text-secondary">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold border-2 border-bg-primary">
                                    JR
                                </div>
                                <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-white text-xs font-bold border-2 border-bg-primary">
                                    BV
                                </div>
                                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold border-2 border-bg-primary">
                                    BT
                                </div>
                            </div>
                            <span>
                                Trusted by major banking & enterprise projects
                            </span>
                        </div>
                    </div>

                    {/* Right Visual / App Mockup Preview */}
                    <div className="relative flex justify-center">
                        <div className="relative w-full max-w-md aspect-square glass-card rounded-3xl p-6 flex flex-col justify-between overflow-hidden shadow-2xl border border-accent-primary/30">
                            {/* Abstract Code / Banking Dashboard Preview */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <span className="text-xs font-mono text-accent-light">
                                        Spring Boot 3.2
                                    </span>
                                </div>

                                <div className="bg-bg-primary/80 p-4 rounded-xl font-mono text-xs text-blue-300 space-y-1 overflow-hidden border border-slate-800">
                                    <p className="text-purple-400">
                                        @RestController
                                    </p>
                                    <p className="text-blue-400">
                                        @RequestMapping("/api/v1/banking")
                                    </p>
                                    <p className="text-yellow-300">
                                        public class TransactionController
                                        &#123;
                                    </p>
                                    <p className="pl-4 text-slate-300">
                                        @PostMapping("/bulk-transfer")
                                    </p>
                                    <p className="pl-4 text-emerald-400">
                                        public ResponseEntity&lt;Response&gt;
                                        processTransfer(...) &#123;
                                    </p>
                                    <p className="pl-8 text-slate-400">
                                        // Optimized with Redis & PostgreSQL
                                    </p>
                                    <p className="pl-8 text-cyan-300">
                                        return transactionService.execute(...);
                                    </p>
                                    <p className="pl-4 text-emerald-400">
                                        &#125;
                                    </p>
                                    <p className="text-yellow-300">&#125;</p>
                                </div>
                            </div>

                            {/* Bottom Card Metric */}
                            <div className="p-4 rounded-xl bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-text-secondary">
                                        System Uptime
                                    </p>
                                    <p className="text-xl font-bold text-accent-light">
                                        99.99% Reliability
                                    </p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-light">
                                    ⚡
                                </div>
                            </div>
                        </div>

                        {/* Floating Glow Badge */}
                        <div className="absolute -bottom-6 -left-6 glass-card px-5 py-3 rounded-2xl flex items-center gap-3 shadow-xl border border-accent-primary/40">
                            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                            <div>
                                <p className="text-xs text-text-secondary">
                                    Status
                                </p>
                                <p className="text-sm font-semibold text-white">
                                    Ready for Impact
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
