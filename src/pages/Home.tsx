import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { BIO, PROJECTS } from '../data/portfolio';

export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-10">
              Software Developer building thoughtful digital experiences
            </h1>
            
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-14 max-w-xl">
              I'm {BIO.name}, a fullstack developer and AI engineer based in {BIO.location}. 
              Currently crafting solutions at Sigma Connectivity.
            </p>

            <div className="flex gap-8">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium hover-underline"
              >
                View work
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                About me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-32 border-t border-[var(--color-border)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="font-mono text-xs text-[var(--color-text-subtle)] uppercase tracking-widest">
              Selected Work
            </span>
          </motion.div>

          <div className="space-y-1">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={`/projects/${project.id}`}
                  className="group flex items-baseline justify-between py-8 border-b border-[var(--color-border)] hover:pl-4 transition-all duration-300"
                >
                  <div className="flex items-baseline gap-8">
                    <span className="font-mono text-xs text-[var(--color-text-subtle)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-medium group-hover:text-[var(--color-text-muted)] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-10">
                    <span className="hidden sm:block font-mono text-xs text-[var(--color-text-subtle)]">
                      {project.date}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-[var(--color-text-subtle)] group-hover:text-[var(--color-text)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              View all projects
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-32 border-t border-[var(--color-border)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-medium mb-8">
              Let's work together
            </h2>
            <p className="text-[var(--color-text-muted)] mb-10 text-lg">
              I'm currently available for freelance projects and full-time opportunities.
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 text-sm font-medium hover-underline"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
