import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-[var(--color-text-subtle)] uppercase tracking-widest mb-4 block">
            404
          </span>
          
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            Page not found
          </h1>
          
          <p className="text-[var(--color-text-muted)] mb-12 max-w-md">
            The page you're looking for doesn't exist.
          </p>
          
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm hover-underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
