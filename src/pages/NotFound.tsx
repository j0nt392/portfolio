import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-9xl font-bold text-slate-800">404</h1>
      <h2 className="text-2xl font-bold mb-4">Page not found</h2>
      <p className="text-slate-400 mb-8">The page you are looking for doesn't exist or has been moved.</p>
      <Link 
        to="/" 
        className="flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
      >
        <Home className="w-4 h-4 mr-2" /> Back to Home
      </Link>
    </div>
  );
};

