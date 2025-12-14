import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const words = ["Fullstack", "AI", "React", "Python", "FastAPI"];

export const TypewriterEffect = () => {
  const [index, setIndex] = useState(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => words[index].slice(0, latest));
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const controls = animate(count, words[index].length, {
      type: "tween",
      duration: 1,
      ease: "easeInOut",
      onComplete: () => {
        setTimeout(() => {
          animate(count, 0, {
            type: "tween",
            duration: 0.8,
            ease: "easeInOut",
            onComplete: () => {
              setIndex((prev) => (prev + 1) % words.length);
            },
          });
        }, 2000);
      },
    });
    return controls.stop;
  }, [index, count]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="inline-flex items-center">
      <motion.span className="text-indigo-400 font-bold">
        {displayText}
      </motion.span>
      <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} ml-1 text-indigo-400 font-bold`}>|</span>
    </span>
  );
};

