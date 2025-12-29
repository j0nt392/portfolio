import { BIO } from '../../data/portfolio';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="container-custom py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <p className="text-sm text-[var(--color-text-muted)]">
              © {currentYear} {BIO.name}
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <a 
              href={BIO.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              GitHub
            </a>
            <a 
              href={BIO.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href={BIO.social.email}
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
