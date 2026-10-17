// src/components/sections/Contact.tsx

import { contact } from '../../data/contact';
import { Button } from '../ui';
import WavyDivider from '../shared/WavyDivider';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

export default function Contact() {
  return (
    <>
      <WavyDivider />
      
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold mb-4">Let's Work Together</h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              Buka untuk kolaborasi dan opportunity baru. Mari diskusikan project Anda!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Email */}
              <a 
                href={`mailto:${contact.email}`}
                className="bg-bg-secondary rounded-card p-6 hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-accent-primary text-3xl group-hover:text-accent-light transition-colors">
                    <MdEmail />
                  </div>
                  <h3 className="text-h4 font-semibold">Email</h3>
                </div>
                <p className="text-text-secondary text-sm">{contact.email}</p>
              </a>

              {/* Phone */}
              <a 
                href={`tel:${contact.phone}`}
                className="bg-bg-secondary rounded-card p-6 hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-accent-primary text-3xl group-hover:text-accent-light transition-colors">
                    <MdPhone />
                  </div>
                  <h3 className="text-h4 font-semibold">Phone</h3>
                </div>
                <p className="text-text-secondary text-sm">{contact.phone}</p>
              </a>

              {/* Location */}
              <div className="bg-bg-secondary rounded-card p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-accent-primary text-3xl">
                    <MdLocationOn />
                  </div>
                  <h3 className="text-h4 font-semibold">Location</h3>
                </div>
                <p className="text-text-secondary text-sm">{contact.location}</p>
              </div>

              {/* LinkedIn */}
              <a 
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg-secondary rounded-card p-6 hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-accent-primary text-3xl group-hover:text-accent-light transition-colors">
                    <FaLinkedin />
                  </div>
                  <h3 className="text-h4 font-semibold">LinkedIn</h3>
                </div>
                <p className="text-text-secondary text-sm">Connect with me</p>
              </a>

              {/* GitHub */}
              {contact.github && (
                <a 
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bg-secondary rounded-card p-6 hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-accent-primary text-3xl group-hover:text-accent-light transition-colors">
                      <FaGithub />
                    </div>
                    <h3 className="text-h4 font-semibold">GitHub</h3>
                  </div>
                  <p className="text-text-secondary text-sm">View my code</p>
                </a>
              )}

              {/* Twitter */}
              {contact.twitter && (
                <a 
                  href={contact.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bg-secondary rounded-card p-6 hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-accent-primary text-3xl group-hover:text-accent-light transition-colors">
                      <FaTwitter />
                    </div>
                    <h3 className="text-h4 font-semibold">Twitter</h3>
                  </div>
                  <p className="text-text-secondary text-sm">Follow me</p>
                </a>
              )}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button 
                variant="primary"
                href={`mailto:${contact.email}`}
                className="px-8"
              >
                Send Me an Email
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
