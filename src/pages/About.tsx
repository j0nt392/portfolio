import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { BIO, EXPERIENCES, SKILLS } from '../data/portfolio';

export const About = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="container-custom pt-24 lg:pt-32 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-10">
              About
            </h1>
            
            <div className="space-y-6 text-[var(--color-text-muted)] leading-relaxed text-lg">
              <p>{BIO.about}</p>
            </div>

            <div className="flex gap-8 mt-14">
              <a
                href={BIO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover-underline"
              >
                GitHub
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={BIO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover-underline"
              >
                LinkedIn
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-14 lg:pt-4"
          >
            <div>
              <span className="font-mono text-xs text-[var(--color-text-subtle)] uppercase tracking-widest">
                Location
              </span>
              <p className="mt-3 font-display text-xl">{BIO.location}</p>
            </div>
            
            <div>
              <span className="font-mono text-xs text-[var(--color-text-subtle)] uppercase tracking-widest">
                Current
              </span>
              <p className="mt-3 font-display text-xl">{EXPERIENCES[0].role}</p>
              <p className="text-[var(--color-text-muted)] mt-1">{EXPERIENCES[0].company}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="container-custom py-32 border-t border-[var(--color-border)]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-xs text-[var(--color-text-subtle)] uppercase tracking-widest">
            Skills
          </span>
          
          <div className="flex flex-wrap gap-x-10 gap-y-4 mt-10">
            {SKILLS.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-[var(--color-text-muted)] text-lg"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section className="container-custom py-32 border-t border-[var(--color-border)]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="font-mono text-xs text-[var(--color-text-subtle)] uppercase tracking-widest">
            Experience
          </span>
        </motion.div>

        <div className="space-y-16">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-4 gap-6"
            >
              <div className="sm:col-span-1">
                <span className="font-mono text-xs text-[var(--color-text-subtle)]">
                  {experience.period}
                </span>
              </div>
              <div className="sm:col-span-3">
                <h3 className="font-display text-xl font-medium">{experience.role}</h3>
                <p className="text-[var(--color-text-muted)] mt-1 mb-3">{experience.company}</p>
                <p className="text-[var(--color-text-muted)]">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
