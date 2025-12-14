import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AnimatedBackground } from '../ui/AnimatedBackground';
import { PageTransition } from './PageTransition';
import { AnimatePresence } from 'framer-motion';

export const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col text-white relative font-sans">
      <AnimatedBackground />
      <Navbar />
      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};
