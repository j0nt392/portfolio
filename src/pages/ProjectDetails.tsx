import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, Code2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolio';

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Link to="/projects" className="text-indigo-400 hover:text-indigo-300">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Link 
          to="/projects" 
          className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
        </Link>

        {/* Media Header */}
        <div className="w-full h-64 md:h-96 bg-slate-900 rounded-2xl overflow-hidden mb-8 relative border border-slate-800">
          {project.videoUrl ? (
            <video 
              src={project.videoUrl} 
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay 
              muted 
              loop 
              playsInline
              controls
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-slate-900/50" />
              <div className="absolute inset-0 flex items-center justify-center text-slate-800 font-mono text-6xl md:text-8xl font-bold opacity-30">
                {project.title.substring(0, 2)}
              </div>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-4 text-white">{project.title}</h1>
            <p className="text-xl text-slate-400 mb-8 font-light leading-relaxed">
              {project.shortDescription}
            </p>

            <div className="prose prose-invert max-w-none">
              <h3 className="text-xl font-bold mb-4 text-white">Overview</h3>
              <p className="text-slate-300 leading-relaxed mb-6 whitespace-pre-line">
                {project.fullDescription}
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-white">Key Features</h3>
              <ul className="list-disc list-inside text-slate-300 space-y-2 mb-6">
                <li>Feature 1: AI-driven analysis</li>
                <li>Feature 2: Real-time processing</li>
                <li>Feature 3: Interactive visualization</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Project Info</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-slate-300">
                    <Calendar className="w-4 h-4 mr-2 text-indigo-400" /> Date
                  </span>
                  <span className="text-slate-400">{project.date}</span>
                </div>
                
                <div className="border-t border-slate-800 my-4" />
                
                <div>
                  <div className="flex items-center text-slate-300 mb-2">
                    <Code2 className="w-4 h-4 mr-2 text-indigo-400" /> Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-slate-800 text-indigo-300/80 text-xs rounded-md border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Links</h3>
              <div className="space-y-3">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center w-full px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700"
                  >
                    <Github className="w-4 h-4 mr-2" /> View Code
                  </a>
                )}
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                  </a>
                )}
                {!project.githubUrl && !project.demoUrl && (
                  <p className="text-sm text-slate-500 text-center italic">No public links available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
