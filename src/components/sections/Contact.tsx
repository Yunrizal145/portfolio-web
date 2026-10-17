// src/components/sections/Contact.tsx

import { contact } from '../../data/contact';
import { Button } from '../ui';
import SectionDivider from '../shared/SectionDivider';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

export default function Contact() {
  return (
    <>
      <SectionDivider variant="dark-to-light" />
      
      <section id="contact" className="section-padding bg-bg-light text-text-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-accent-primary text-xs font-semibold tracking-wider uppercase">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-serif mt-4 mb-4">
              Let's Work Together
            </h2>
            <p className="text-text-dark-muted text-base md:text-lg max-w-2xl mx-auto font-light">
              Buka untuk kolaborasi, kesempatan karir baru, atau diskusi mengenai project sistem perbankan & backend.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Email */}
              <a 
                href={`mailto:${contact.email}`}
                className="light-card rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-accent-primary flex items-center justify-center text-2xl group-hover:bg-accent-primary group-hover:text-white transition-colors">
                    <MdEmail />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Email</h3>
                    <p className="text-text-dark-muted text-xs break-all">{contact.email}</p>
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a 
                href={`tel:${contact.phone}`}
                className="light-card rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-accent-primary flex items-center justify-center text-2xl group-hover:bg-accent-primary group-hover:text-white transition-colors">
                    <MdPhone />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Phone</h3>
                    <p className="text-text-dark-muted text-xs">{contact.phone}</p>
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="light-card rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-accent-primary flex items-center justify-center text-2xl">
                    <MdLocationOn />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Location</h3>
                    <p className="text-text-dark-muted text-xs">{contact.location}</p>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <a 
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="light-card rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-accent-primary flex items-center justify-center text-2xl group-hover:bg-accent-primary group-hover:text-white transition-colors">
                    <FaLinkedin />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">LinkedIn</h3>
                    <p className="text-text-dark-muted text-xs">Connect with me</p>
                  </div>
                </div>
              </a>

              {/* GitHub */}
              {contact.github && (
                <a 
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="light-card rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-accent-primary flex items-center justify-center text-2xl group-hover:bg-accent-primary group-hover:text-white transition-colors">
                      <FaGithub />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">GitHub</h3>
                      <p className="text-text-dark-muted text-xs">View my repositories</p>
                    </div>
                  </div>
                </a>
              )}

              {/* Twitter */}
              {contact.twitter && (
                <a 
                  href={contact.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="light-card rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-accent-primary flex items-center justify-center text-2xl group-hover:bg-accent-primary group-hover:text-white transition-colors">
                      <FaTwitter />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Twitter</h3>
                      <p className="text-text-dark-muted text-xs">Follow updates</p>
                    </div>
                  </div>
                </a>
              )}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button 
                variant="primary"
                href={`mailto:${contact.email}`}
                className="px-8 py-4 shadow-xl shadow-blue-500/20 text-base"
              >
                Send Me an Email ✉️
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
