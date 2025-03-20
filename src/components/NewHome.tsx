import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InteractivePortfolio from './InteractivePortfolio';
import ThreeDimensionalSkills from './ThreeDimensionalSkills';
import { Button } from './ui/button';

const NewHome: React.FC = () => {
  const [selectedVersion, setSelectedVersion] = useState<'terminal' | 'standard' | null>(null);

  if (selectedVersion === 'terminal') {
    return <InteractivePortfolio />;
  }

  if (selectedVersion === 'standard') {
    // Import and use the original Home component
    const OriginalHome = React.lazy(() => import('./home'));
    return (
      <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <OriginalHome />
      </React.Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Choose Your Experience
      </motion.h1>

      <motion.p 
        className="text-xl text-slate-400 max-w-2xl text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Select a unique way to explore Amit Kumar's portfolio
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <motion.div 
          className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-500/20 p-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="bg-slate-900/80 rounded-lg p-6 h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Terminal Experience</h2>
            <p className="text-slate-300 mb-6 flex-grow">
              An interactive command-line inspired portfolio. Navigate through sections using terminal commands or the visual interface.
            </p>
            <div className="bg-slate-950 rounded-md p-3 mb-6 font-mono text-sm text-green-400">
              <p>$ cd portfolio</p>
              <p>$ ./explore.sh</p>
              <p> Hello, I'm Amit Kumar</p>
              <p> Type 'help' to see commands...</p>
            </div>
            <Button 
              onClick={() => setSelectedVersion('terminal')}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              Launch Terminal Experience
            </Button>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
        </motion.div>

        <motion.div 
          className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/20 p-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="bg-slate-900/80 rounded-lg p-6 h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Standard Portfolio</h2>
            <p className="text-slate-300 mb-6 flex-grow">
              A traditional portfolio layout with a clean, professional design. Easily navigate through sections with a familiar interface.
            </p>
            <div className="bg-slate-950 rounded-md p-3 mb-6 flex items-center justify-center">
              <div className="w-full h-16 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded flex items-center justify-center">
                <span className="text-white">Classic Portfolio Layout</span>
              </div>
            </div>
            <Button 
              onClick={() => setSelectedVersion('standard')}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              View Standard Portfolio
            </Button>
          </div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
        </motion.div>
      </div>

      <motion.div 
        className="mt-16 w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 className="text-xl font-semibold mb-4 text-center text-slate-300">Preview of Skills Visualization</h3>
        <div className="h-64 overflow-hidden rounded-xl relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
          <ThreeDimensionalSkills />
        </div>
      </motion.div>
    </div>
  );
};

export default NewHome;
