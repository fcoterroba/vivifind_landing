import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations } from '../utils/translations';

export default function Hero({ lang, setLang }) {
  const t = translations[lang];

  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Navigation / Language Switcher */}
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
            <img src="https://vivifind.com/favicon.ico" alt="Vivifind" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-xl text-primary tracking-tight">ViviFind</span>
        </div>
        <div className="flex gap-4">
          {['en', 'es', 'zh'].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1 rounded-full text-xs font-semibold uppercase transition-all ${
                lang === l ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-white/50 text-slate-500 hover:bg-white hover:text-primary'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </nav>

      <div className="z-10 text-center max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 text-slate-900 leading-[1.1]">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed mb-8">
              {t.heroSubtitle}
            </p>
            <div className="flex justify-center">
                <span className="text-sm md:text-base font-bold uppercase tracking-widest bg-blue-50 text-primary px-6 py-2 rounded-full border border-blue-100">
                    {t.archived}
                </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 animate-bounce text-slate-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
      </motion.div>
    </section>
  );
}
