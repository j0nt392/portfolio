import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolio';

export const Projects = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="container-custom pt-24 lg:pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-8">
            Work
          </h1>
          <p className="text-[var(--color-text-muted)] max-w-lg text-lg">
            A selection of projects spanning fullstack development, computer vision, and AI.
          </p>
        </motion.div>
      </section>

      {/* Project List */}
      <section className="container-custom pb-32">
        <div className="border-t border-[var(--color-border)]">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link 
                to={`/projects/${project.id}`}
                className="group flex flex-col sm:flex-row sm:items-baseline justify-between py-10 border-b border-[var(--color-border)] hover:pl-4 transition-all duration-300"
              >
                <div className="flex items-baseline gap-8 mb-4 sm:mb-0">
                  <span className="font-mono text-xs text-[var(--color-text-subtle)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-medium group-hover:text-[var(--color-text-muted)] transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-sm text-[var(--color-text-muted)] mt-2 max-w-md">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-8 pl-12 sm:pl-0">
                  <div className="flex gap-3">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs text-[var(--color-text-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="font-mono text-xs text-[var(--color-text-subtle)]">
                    {project.date}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--color-text-subtle)] group-hover:text-[var(--color-text)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
