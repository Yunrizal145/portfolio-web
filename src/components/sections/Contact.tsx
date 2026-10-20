// src/components/sections/Contact.tsx

import { useState } from 'react';
import { contact } from '../../data/contact';
import SectionDivider from '../shared/SectionDivider';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    domain: 'fintech-payments',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <SectionDivider variant="light-to-dark" />
    
    <section id="contact" className="section-padding relative overflow-hidden bg-bg-light text-text-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent-light text-sm font-mono tracking-wider mb-2">NETWORK // CONNECTION</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Let's Build <span className="text-gradient">Connection</span>
          </h2>
          <p className="text-[#cbd5e1] text-xl max-w-3xl mx-auto">
            Open for architecture discussions, high-scale projects, and fintech/payments system collaboration.
          </p>
        </div>

        {/* Quick Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {/* Direct Email */}
          <a 
            href={`mailto:${contact.email}`}
            className="bg-[#1a2332] border border-slate-800 rounded-lg p-4 hover:border-accent-primary/50 transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                ✉️
              </div>
              <div className="min-w-0">
                <p className="text-white font-semibold text-sm">Direct Email</p>
                <p className="text-slate-500 text-xs font-mono">Response &lt; 12 hrs</p>
                <p className="text-cyan-400 text-xs mt-1 break-all">{contact.email}</p>
              </div>
            </div>
          </a>

          {/* Phone/WhatsApp */}
          <a 
            href={`tel:${contact.phone}`}
            className="bg-[#1a2332] border border-slate-800 rounded-lg p-4 hover:border-accent-primary/50 transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                📱
              </div>
              <div className="min-w-0">
                <p className="text-white font-semibold text-sm">Phone/WhatsApp</p>
                <p className="text-slate-500 text-xs font-mono">Jakarta (UTC+7)</p>
                <p className="text-cyan-400 text-xs mt-1">{contact.phone}</p>
              </div>
            </div>
          </a>

          {/* Location */}
          <div className="bg-[#1a2332] border border-slate-800 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                📍
              </div>
              <div className="min-w-0">
                <p className="text-white font-semibold text-sm">Location</p>
                <p className="text-slate-500 text-xs font-mono">On-site & Global Remote</p>
                <p className="text-slate-400 text-xs mt-1">{contact.location}</p>
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <a 
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a2332] border border-slate-800 rounded-lg p-4 hover:border-accent-primary/50 transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                💼
              </div>
              <div className="min-w-0">
                <p className="text-white font-semibold text-sm">LinkedIn</p>
                <p className="text-slate-500 text-xs font-mono">// NETWORK</p>
                <p className="text-cyan-400 text-xs mt-1">16+ Repos</p>
              </div>
            </div>
          </a>

          {/* GitHub */}
          {contact.github && (
            <a 
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a2332] border border-slate-800 rounded-lg p-4 hover:border-accent-primary/50 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-500/20 flex items-center justify-center text-slate-300 flex-shrink-0">
                  🔗
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm">GitHub</p>
                  <p className="text-slate-500 text-xs font-mono">// PORTFOLIO</p>
                  <p className="text-slate-400 text-xs mt-1">Public repos</p>
                </div>
              </div>
            </a>
          )}
        </div>

        {/* Inquiry Form */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-xl p-8 border border-accent-primary/20">
            <div className="mb-6">
              <p className="text-accent-light text-xs font-mono tracking-wider mb-2">// ARCHITECTURE INQUIRY</p>
              <h3 className="text-2xl font-bold text-white">Send Architecture Proposal</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input 
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#0a0e1a] border border-slate-800 rounded-lg px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-accent-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                  <input 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#0a0e1a] border border-slate-800 rounded-lg px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-accent-primary transition-colors"
                  />
                </div>
              </div>

              {/* System Domain Dropdown */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">System Domain</label>
                <select 
                  value={formData.domain}
                  onChange={(e) => setFormData({...formData, domain: e.target.value})}
                  className="w-full bg-[#0a0e1a] border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-accent-primary transition-colors"
                >
                  <option value="fintech-payments">High-Throughput Fintech & Payments</option>
                  <option value="core-banking">Core Banking Infrastructure</option>
                  <option value="microservices">Microservices Architecture</option>
                  <option value="distributed-systems">Distributed Systems Design</option>
                  <option value="other">Other / General Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message / Requirements</label>
                <textarea 
                  placeholder="Describe your project, challenges, or architecture needs..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#0a0e1a] border border-slate-800 rounded-lg px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-accent-primary transition-colors resize-none"
                ></textarea>
              </div>

              {/* Security Badge */}
              <div className="p-3 bg-[#1a2332] rounded-lg border border-slate-800 text-xs text-slate-400 flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">🔒</span>
                <span><span className="text-white font-medium">CONFIDENTIAL DISCUSSIONS</span> - NDA & IP Protection respected by default</span>
              </div>

              {/* Status & CTA */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <p className="text-slate-500 text-xs font-mono">STATUS: READY_TO_TRANSMIT</p>
                </div>
              </div>

              {/* Schedule Meeting Checkbox */}
              <label className="flex items-center gap-3 p-3 bg-[#1a2332] rounded-lg border border-slate-800 cursor-pointer hover:border-accent-primary/30 transition-colors">
                <input 
                  type="checkbox"
                  className="w-4 h-4 rounded bg-[#0a0e1a] border border-slate-700 accent-accent-primary"
                />
                <span className="text-slate-300 text-sm">Schedule Architecture Sync (Google Meet)</span>
              </label>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full py-3 bg-accent-primary hover:bg-accent-hover text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Transmit Message</span>
                <span className="text-lg">→</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-12 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm mb-6">
            Prefer a quick call? Let's discuss your architecture needs directly.
          </p>
          <a 
            href={`https://calendly.com/yunrizal`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#1a2332] hover:bg-[#1e293b] text-white font-semibold rounded-lg border border-slate-700 transition-all"
          >
            Schedule Engineering Call
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
