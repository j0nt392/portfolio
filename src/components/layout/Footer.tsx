import { Github, Linkedin, Mail } from 'lucide-react';
import { BIO } from '../../data/portfolio';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} {BIO.name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href={BIO.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-500 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={BIO.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={BIO.social.email} className="text-slate-500 hover:text-indigo-500 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
