import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal } from 'lucide-react';
import { BIO, SKILLS, PROJECTS, EXPERIENCES } from '../data/portfolio';
import { ProjectCard } from '../components/ui/ProjectCard';
import { TypewriterEffect } from '../components/ui/TypewriterEffect';
import { About } from './About';

export const Home = () => {
  return (
    <div className="space-y-20 pb-20 pt-10">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">{BIO.name}</span>
            </h1>
            
            <div className="text-xl md:text-3xl text-slate-400 max-w-2xl mx-auto mb-10 h-12 flex items-center justify-center gap-2 font-light">
              I build <span className="font-semibold text-indigo-400"><TypewriterEffect /></span>
            </div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                to="/projects"
                className="group px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center"
              >
                View Work 
                <motion.span
                  className="inline-block ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 bg-slate-800/50 hover:bg-slate-800 text-white rounded-lg font-medium transition-colors border border-slate-700 hover:border-slate-600 flex items-center justify-center backdrop-blur-sm"
              >
                About Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-slate-500/30 rounded-full p-1 flex justify-center">
            <div className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 text-white"
          >
            Tech Stack
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400"
          >
            Tools and technologies I work with
          </motion.p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.1)", borderColor: "rgba(99, 102, 241, 0.5)" }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="px-6 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-300 transition-all cursor-default select-none hover:text-indigo-400 backdrop-blur-sm"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-white"
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400"
            >
              Some of my recent work
            </motion.p>
          </div>
          <Link to="/projects" className="hidden md:flex items-center text-indigo-400 hover:text-indigo-300 group">
            View all 
            <motion.span
              className="inline-block ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/projects" className="inline-flex items-center text-indigo-400 hover:text-indigo-300">
            View all projects <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="container mx-auto px-4">
        <About />
      </section>

      {/* Quick About/CTA */}
      <section className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 md:p-12 border border-slate-800 relative overflow-hidden group hover:border-indigo-500/30 transition-colors duration-500"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <Terminal className="w-64 h-64 rotate-12" />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold mb-4 text-white">Let's work together</h2>
            <p className="text-slate-400 mb-8 text-lg">
              I'm always interested in working on new projects and learning new technologies.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:contact@example.com`} 
              className="inline-block px-8 py-3 bg-white text-slate-900 hover:bg-slate-200 rounded-lg font-bold transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
