import { motion } from 'framer-motion';
import { PROJECTS } from '../data/portfolio';
import { ProjectCard } from '../components/ui/ProjectCard';

export const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A collection of projects ranging from web development to computer vision and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

