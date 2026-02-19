
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ViewMode, MainCategory, SubTopic } from './types';
import { CATEGORIES } from './constants';

const BackgroundElements = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
    <motion.div
      animate={{ 
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
        opacity: [0.1, 0.2, 0.1]
      }}
      transition={{ duration: 20, repeat: Infinity }}
      className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]"
    />
    <motion.div
      animate={{ 
        scale: [1, 1.3, 1],
        rotate: [0, -90, 0],
        opacity: [0.1, 0.2, 0.1]
      }}
      transition={{ duration: 25, repeat: Infinity, delay: 2 }}
      className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600 rounded-full blur-[150px]"
    />
  </div>
);

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.LANDING);
  const [selectedCategory, setSelectedCategory] = useState<MainCategory | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<SubTopic | null>(null);

  useEffect(() => {
    if (viewMode === ViewMode.LANDING) {
      const timer = setTimeout(() => {
        setViewMode(ViewMode.HOME);
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [viewMode]);

  const handleCategoryClick = (category: MainCategory) => {
    setSelectedCategory(category);
    setViewMode(ViewMode.TOPIC);
  };

  const handleTopicClick = (topic: SubTopic) => {
    setSelectedTopic(topic);
    setViewMode(ViewMode.DETAIL);
  };

  const goBack = () => {
    if (viewMode === ViewMode.DETAIL) {
      setViewMode(ViewMode.TOPIC);
      setSelectedTopic(null);
    } else if (viewMode === ViewMode.TOPIC) {
      setViewMode(ViewMode.HOME);
      setSelectedCategory(null);
    }
  };

  return (
    <div className="min-h-screen relative text-slate-100 selection:bg-cyan-500/30">
      <BackgroundElements />
      
      <AnimatePresence mode="wait">
        {viewMode === ViewMode.LANDING && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 1 }}
            className="fixed inset-0 flex flex-col items-center justify-center z-50 p-6 text-center bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mb-4"
            >
              <h1 className="text-6xl md:text-8xl font-orbitron font-bold tracking-tighter animate-shine">
                MindMatrix
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-xl md:text-2xl text-cyan-400 font-medium tracking-widest uppercase">
                Android App Development with GenAI
              </h2>
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
              <p className="text-slate-400 italic text-lg max-w-lg mx-auto">
                “Building Smart Solutions for a Better Tomorrow”
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
              className="absolute bottom-12 text-slate-500 text-sm tracking-widest uppercase"
            >
              Initializing Experience
            </motion.div>
          </motion.div>
        )}

        {viewMode === ViewMode.HOME && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            className="container mx-auto px-4 py-16 flex flex-col items-center min-h-screen justify-center"
          >
            <header className="text-center mb-16 relative">
              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-5xl font-orbitron font-bold mb-4 neon-text-blue"
              >
                AI for Society
              </motion.h1>
              <p className="text-slate-400 text-lg">Innovation Showcase</p>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-cyan-500 rounded-full blur-[2px]"></div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
              {CATEGORIES.map((cat, idx) => (
                <motion.div
                  key={cat.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={(id) => {
                    const isSelected = selectedCategory?.id === cat.id;
                    if (isSelected) return { scale: 1.1, zIndex: 50 };
                    return { x: idx < 2 ? -1000 : 1000, opacity: 0 };
                  }}
                  transition={{ delay: idx * 0.1, type: 'spring', damping: 20 }}
                  whileHover={{ scale: 1.05, translateY: -8 }}
                  onClick={() => handleCategoryClick(cat)}
                  className="cursor-pointer group relative"
                >
                  <div className="h-full w-full glass-card rounded-xl p-8 flex flex-col items-center justify-center text-center transition-all neon-border">
                    <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {cat.icon}
                    </div>
                    <h3 className="text-xl font-orbitron font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {cat.title}
                    </h3>
                    <div className="mt-6 text-cyan-500/0 group-hover:text-cyan-400/100 transition-all font-orbitron text-xs tracking-widest">
                      ENTER MODULE
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {viewMode === ViewMode.TOPIC && selectedCategory && (
          <motion.div
            key="topics"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container mx-auto px-4 py-12 min-h-screen flex flex-col"
          >
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
              <button
                onClick={goBack}
                className="flex items-center gap-2 px-6 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all hover:border-cyan-500 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK TO MAIN
              </button>
              <div className="flex items-center gap-6">
                <span className="text-5xl drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                  {selectedCategory.icon}
                </span>
                <div>
                  <h2 className="text-3xl font-orbitron font-bold text-white neon-text-blue">
                    {selectedCategory.title}
                  </h2>
                  <div className="h-0.5 w-full bg-gradient-to-r from-cyan-500 to-transparent"></div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl w-full">
                {selectedCategory.topics.map((topic, idx) => (
                  <motion.div
                    key={topic.id}
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    onClick={() => handleTopicClick(topic)}
                    className="glass-card rounded-lg p-6 cursor-pointer hover:border-cyan-500/50 transition-all group aspect-square flex flex-col justify-center items-center text-center relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-2 opacity-10 font-orbitron text-4xl">
                      0{idx + 1}
                    </div>
                    <div className="w-10 h-10 rounded-full border border-cyan-500/30 flex items-center justify-center mb-4 group-hover:border-cyan-400 group-hover:bg-cyan-400/10 transition-all shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                      <span className="text-cyan-400 font-orbitron text-sm">{idx + 1}</span>
                    </div>
                    <h4 className="text-sm md:text-base font-medium text-slate-200 group-hover:text-white leading-snug">
                      {topic.title}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {viewMode === ViewMode.DETAIL && selectedTopic && (
          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ type: 'spring', damping: 25 }}
              className="max-w-4xl w-full glass-card rounded-2xl p-8 md:p-16 relative overflow-hidden border border-cyan-500/30 shadow-[0_0_50px_rgba(0,242,255,0.1)]"
            >
              {/* Futuristic Accents */}
              <div className="absolute top-0 left-0 w-24 h-1 bg-cyan-500"></div>
              <div className="absolute top-0 left-0 w-1 h-24 bg-cyan-500"></div>
              <div className="absolute bottom-0 right-0 w-24 h-1 bg-purple-500"></div>
              <div className="absolute bottom-0 right-0 w-1 h-24 bg-purple-500"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-20 h-20 rounded-full bg-cyan-500/10 flex items-center justify-center mb-8 border border-cyan-500/30"
                >
                  <span className="text-4xl">🚀</span>
                </motion.div>

                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-8 leading-tight neon-text-blue"
                >
                  {selectedTopic.title}
                </motion.h2>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mb-12 max-w-2xl"
                >
                  <p className="text-xl text-slate-300 leading-relaxed font-light tracking-wide">
                    {selectedTopic.description}
                  </p>
                </motion.div>

                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(6,182,212,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={goBack}
                  className="px-12 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 font-orbitron font-bold rounded-full transition-all group"
                >
                  <span className="group-hover:mr-2 transition-all">←</span> RETURN TO MODULE
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 text-center z-40">
        <div className="inline-block px-6 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/5 shadow-lg">
          <p className="text-slate-500 text-xs tracking-[0.2em] font-orbitron">
            Developed by <span className="text-cyan-400 neon-text-blue">Patil Anuja C</span> – Internship task using <span className="text-purple-400">Google Ai Studio</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
