// src/components/layout/Footer.tsx

import { contact } from '../../data/contact';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border-subtle py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="text-xl font-bold">
            H<span className="text-accent-primary">.</span>
          </div>

          {/* Copyright */}
          <div className="text-text-secondary text-sm">
            © {currentYear} Hammad Yunrizal Aushaf. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            {contact.github && (
              <a 
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-primary transition-colors"
              >
                <FaGithub size={20} />
              </a>
            )}
            {contact.twitter && (
              <a 
                href={contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-primary transition-colors"
              >
                <FaTwitter size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
