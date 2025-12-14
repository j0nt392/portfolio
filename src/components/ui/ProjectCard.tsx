import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import type { Project } from '../../data/portfolio';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 transition-colors group h-full flex flex-col"
    >
      <div className="h-48 bg-slate-800/50 relative overflow-hidden">
        {/* Video or Placeholder */}
        {project.videoUrl ? (
          <video 
            src={project.videoUrl} 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-slate-900/50" />
            <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-mono text-4xl font-bold opacity-20 group-hover:scale-110 transition-transform duration-500">
              {project.title.substring(0, 2)}
            </div>
          </>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-slate-500 font-mono">{project.date}</span>
        </div>
        
        <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="px-2 py-1 bg-slate-800 text-indigo-300/80 text-xs rounded-full border border-slate-700/50">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded-full border border-slate-700/50">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
          <Link 
            to={`/projects/${project.id}`}
            className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Read More <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
          
          <div className="flex space-x-3">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
