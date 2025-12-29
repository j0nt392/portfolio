import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolio';

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);
  const projectIndex = PROJECTS.findIndex(p => p.id === id);
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  if (!project) {
    return (
      <div className="container-custom py-40 text-center">
        <h2 className="font-display text-2xl font-medium mb-6">Project not found</h2>
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="container-custom pt-12 pb-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors mb-16"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-xs text-[var(--color-text-subtle)]">{project.date}</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-8">
            {project.title}
          </h1>
          
          <p className="text-xl text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            {project.shortDescription}
          </p>
        </motion.div>
      </section>

      {/* Media */}
      {project.videoUrl && (
        <section className="container-custom pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="aspect-video w-full bg-[var(--color-border)] overflow-hidden"
          >
            <video 
              src={project.videoUrl} 
              className="w-full h-full object-cover"
              autoPlay 
              muted 
              loop 
              playsInline
              controls
            />
          </motion.div>
        </section>
      )}

      {/* Content */}
      <section className="container-custom mt-24 pt-32 pb-40 border-t border-[var(--color-border)]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2 align-bottom"
          >
            <h2 className="font-mono text-xs text-[var(--color-text-subtle)] uppercase tracking-widest py-3">
              Overview
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed whitespace-pre-line text-lg">
              {project.fullDescription}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-16"
          >
            <div>
              <h3 className="font-mono text-xs text-[var(--color-text-subtle)] uppercase tracking-widest py-3">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {project.technologies.map(tech => (
                  <span 
                    key={tech} 
                    className="text-[var(--color-text-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {(project.githubUrl || project.demoUrl) && (
              <div>
                <h3 className="font-mono text-xs text-[var(--color-text-subtle)] uppercase tracking-widest mb-6">
                  Links
                </h3>
                <div className="space-y-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-sm hover-underline"
                    >
                      View Code
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-sm hover-underline"
                    >
                      Live Demo
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Next Project */}
      <section className="mt-16 border-t border-[var(--color-border)]">
        <Link 
          to={`/projects/${nextProject.id}`}
          className="group block"
        >
          <div className="container-custom py-32">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[var(--color-text-subtle)] uppercase tracking-widest mb-4 block">
                  Next
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-medium group-hover:text-[var(--color-text-muted)] transition-colors">
                  {nextProject.title}
                </h2>
              </div>
              
              <ArrowUpRight className="w-6 h-6 text-[var(--color-text-subtle)] group-hover:text-[var(--color-text)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </motion.div>
          </div>
        </Link>
      </section>
    </div>
  );
};
