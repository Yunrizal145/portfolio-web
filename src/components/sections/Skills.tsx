// src/components/sections/Skills.tsx

import { skillTags } from '../../data/skills';

export default function Skills() {
    return (
        <section id="skills" className="section-padding relative overflow-hidden bg-[#0f1117]">
            <div className="container-custom">
                {/* Section Header */}
                <div className="mb-16">
                    <p className="text-accent-light text-sm font-mono tracking-wider mb-2">PROD // CAPABILITIES</p>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Technical Skills & Competencies</h2>
                    <p className="text-[#cbd5e1] text-xl max-w-3xl">
                        Deep expertise in high-throughput systems, distributed transactions, and production-grade backend infrastructure.
                    </p>
                </div>

                {/* Philosophy Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {[
                        { 
                            id: 1,
                            title: 'Performance Focused',
                            metric: '4.2k RPS',
                            description: 'Optimized query execution, Redis caching, and sub-millisecond latencies',
                            icon: '⚡'
                        },
                        { 
                            id: 2,
                            title: 'Reliable & Secure',
                            metric: '99.99%',
                            description: 'ACID compliance, transaction integrity, and zero-breach security model',
                            icon: '🛡️'
                        },
                        { 
                            id: 3,
                            title: 'Scalable Architecture',
                            metric: '15+',
                            description: 'Microservices design, distributed consensus, and horizontal scaling',
                            icon: '🚀'
                        }
                    ].map((philosophy) => (
                        <div key={philosophy.id} className="glass-card rounded-xl p-6 border border-accent-primary/20">
                            <div className="flex items-start justify-between mb-3">
                                <span className="text-3xl">{philosophy.icon}</span>
                                <span className="px-2 py-1 bg-accent-primary/20 text-accent-light text-xs font-bold rounded">
                                    {philosophy.metric}
                                </span>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">{philosophy.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{philosophy.description}</p>
                        </div>
                    ))}
                </div>

                {/* Production Capabilities Grid */}
                <div className="mb-16">
                    <h3 className="text-white font-bold text-2xl mb-6">Production Capabilities</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            {
                                name: 'Java 21 Enterprise',
                                description: 'Modern Java with virtual threads and advanced concurrency',
                                mastery: '98%',
                                badge: 'Expert / Core'
                            },
                            {
                                name: 'Spring Boot 3 & Cloud',
                                description: 'Production-grade framework with microservices patterns',
                                mastery: '96%',
                                badge: 'Expert / Core'
                            },
                            {
                                name: 'PostgreSQL & Engines',
                                description: 'Query optimization, JSONB, partitioning, and replication',
                                mastery: '92%',
                                badge: 'Advanced'
                            },
                            {
                                name: 'Apache Kafka Streaming',
                                description: 'Event sourcing, CQRS patterns, and real-time processing',
                                mastery: '90%',
                                badge: 'Advanced'
                            },
                            {
                                name: 'Redis Cache Acceleration',
                                description: 'Distributed caching, Redlock patterns, and cluster topology',
                                mastery: '94%',
                                badge: 'Expert'
                            },
                            {
                                name: 'Kubernetes & Containers',
                                description: 'Container orchestration, service mesh, and deployment pipelines',
                                mastery: '88%',
                                badge: 'Advanced'
                            },
                            {
                                name: 'Docker & gRPC APIs',
                                description: 'Containerization, image optimization, and high-performance RPC',
                                mastery: '91%',
                                badge: 'Advanced'
                            },
                            {
                                name: 'Prometheus & Alerting',
                                description: 'Observability, metrics collection, and SLO governance',
                                mastery: '89%',
                                badge: 'Proficient'
                            }
                        ].map((capability, idx) => (
                            <div key={idx} className="bg-[#1a2332] border border-slate-800 rounded-xl p-4 hover:border-accent-primary/50 transition-all">
                                <div className="mb-3">
                                    <span className="px-2 py-1 bg-accent-primary/20 text-accent-primary text-xs font-bold rounded">
                                        {capability.badge}
                                    </span>
                                </div>
                                <h4 className="text-white font-bold text-sm mb-2">{capability.name}</h4>
                                <p className="text-slate-400 text-xs leading-relaxed mb-4">{capability.description}</p>
                                
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-500 text-xs font-mono">MASTERY</span>
                                        <span className="text-cyan-400 text-xs font-bold">{capability.mastery}</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                            style={{ width: capability.mastery }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Code Example */}
                <div className="mb-16">
                    <h3 className="text-white font-bold text-2xl mb-4">Implementation Example</h3>
                    <div className="bg-[#0a0e1a] border border-slate-800 rounded-xl p-6 font-mono text-sm overflow-x-auto">
                        <pre className="text-slate-300">
{`@RestController
@RequestMapping("/api/v1/transactions")
public class HighThroughputTransactionController {
    
    @PostMapping("/bulk-settlement")
    @Transactional(isolation = SERIALIZABLE)
    public ResponseEntity<SettlementResponse> processBulkSettlement(
        @RequestBody BulkSettlementRequest request
    ) {
        // Idempotent processing with Redis locking
        String lockKey = "settlement:" + request.batchId();
        if (!redisTemplate.opsForValue().setIfAbsent(lockKey, "processing", 5, MINUTES)) {
            return ResponseEntity.status(CONFLICT).build();
        }
        
        // Event-driven architecture with Kafka
        List<SettlementEvent> events = processWithKafka(request);
        
        // PostgreSQL transaction with strong consistency
        settlementRepository.saveAll(events);
        kafkaTemplate.send("settlement-events", events);
        
        return ResponseEntity.ok(new SettlementResponse(SUCCESS, batchId));
    }
}`}
                        </pre>
                    </div>
                </div>

                {/* Performance Metrics Dashboard */}
                <div className="mb-16">
                    <h3 className="text-white font-bold text-2xl mb-4">Engine Performance Metrics</h3>
                    <div className="glass-card rounded-xl p-6 border border-accent-primary/20">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                <span className="text-emerald-400 font-mono text-sm font-bold">LIVE</span>
                                <span className="text-slate-500 text-sm">• BENCHMARK</span>
                            </div>
                            <span className="text-slate-500 text-xs">Updated 2s ago</span>
                        </div>

                        <div className="grid md:grid-cols-4 gap-4">
                            <div className="bg-[#0a0e1a] border border-slate-800 rounded-lg p-4">
                                <p className="text-slate-500 text-xs mb-1 font-mono">THROUGHPUT</p>
                                <p className="text-cyan-400 font-bold text-2xl">42,560</p>
                                <p className="text-slate-600 text-xs">RPS</p>
                            </div>
                            <div className="bg-[#0a0e1a] border border-slate-800 rounded-lg p-4">
                                <p className="text-slate-500 text-xs mb-1 font-mono">RECORD LATENCY</p>
                                <p className="text-blue-400 font-bold text-2xl">3.6</p>
                                <p className="text-slate-600 text-xs">ms P99</p>
                            </div>
                            <div className="bg-[#0a0e1a] border border-slate-800 rounded-lg p-4">
                                <p className="text-slate-500 text-xs mb-1 font-mono">KAFKA BROKER E2E</p>
                                <p className="text-emerald-400 font-bold text-2xl">&lt;12</p>
                                <p className="text-slate-600 text-xs">ms Lag</p>
                            </div>
                            <div className="bg-[#0a0e1a] border border-slate-800 rounded-lg p-4">
                                <p className="text-slate-500 text-xs mb-1 font-mono">SYSTEM UPTIME</p>
                                <p className="text-emerald-400 font-bold text-2xl">99.99%</p>
                                <p className="text-slate-600 text-xs">Reliability</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ecosystem & Tooling Inventory */}
                <div>
                    <h3 className="text-white font-bold text-2xl mb-6">Ecosystem & Tooling Inventory</h3>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        {skillTags.map((tag) => (
                            <span 
                                key={tag}
                                className="px-3 py-1.5 bg-[#1a2332] text-slate-300 text-sm font-medium rounded-lg border border-slate-800 hover:border-accent-primary/50 transition-all"
                                style={{
                                    fontSize: `${0.85 + (Math.random() * 0.2)}rem`,
                                    opacity: 0.8 + (Math.random() * 0.2)
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* CTA Footer */}
                <div className="mt-16 pt-12 border-t border-slate-800 text-center">
                    <p className="text-slate-400 text-sm mb-6">Want to explore my technical depth? Let's discuss architecture.</p>
                    <button className="px-8 py-3 bg-accent-primary hover:bg-accent-hover text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 transition-all">
                        Schedule Architecture Call
                    </button>
                </div>
            </div>
        </section>
    );
}
