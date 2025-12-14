import { motion } from 'framer-motion';
import { ParticleBackground } from './ParticleBackground';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-950">
      {/* Background Base */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Particles Layer */}
      <div className="absolute inset-0 z-20">
        <ParticleBackground />
      </div>
      
      {/* Ambient Glows */}
      <div className="absolute inset-0 z-10">
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-indigo-600/20 rounded-full blur-[100px]"
        />
        
        <motion.div
          animate={{
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-[30%] right-[0%] w-[45%] h-[45%] bg-purple-600/15 rounded-full blur-[100px]"
        />

        <motion.div
          animate={{
            opacity: [0.2, 0.35, 0.2],
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-blue-600/15 rounded-full blur-[100px]"
        />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
    </div>
  );
};
