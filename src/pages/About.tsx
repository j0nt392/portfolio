import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { BIO, EXPERIENCES } from '../data/portfolio';

export const About = () => {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            {BIO.about}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <MapPin className="w-5 h-5 text-indigo-500 mr-2" />
              Location
            </h3>
            <p className="text-slate-400">{BIO.location}</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Briefcase className="w-5 h-5 text-indigo-500 mr-2" />
              Current Role
            </h3>
            <p className="text-slate-400">{EXPERIENCES[0].role} at {EXPERIENCES[0].company}</p>
          </div>
        </div>

        {/* Experience Timeline */}
        <h2 className="text-3xl font-bold mb-8">Experience & Education</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-900 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {exp.role.includes("Student") || exp.company === "Nackademin" ? (
                  <GraduationCap className="w-5 h-5 text-indigo-400" />
                ) : (
                  <Briefcase className="w-5 h-5 text-emerald-400" />
                )}
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-indigo-500/30 transition-colors">
                <div className="flex flex-col sm:flex-row justify-between mb-2">
                  <h3 className="font-bold text-white text-lg">{exp.role}</h3>
                  <span className="text-indigo-400 text-sm font-mono flex items-center">
                    <Calendar className="w-3 h-3 mr-1" /> {exp.period}
                  </span>
                </div>
                <div className="text-slate-500 font-medium mb-3">{exp.company}</div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

