import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Globe, Brain } from 'lucide-react';
import { translations } from '../utils/translations';

const icons = [Code, Globe, Brain, Database];

export default function ForSale({ lang }) {
  const t = translations[lang];

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-slate-50">
        {/* Background Accent */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <AnimatePresence mode="wait">
                <motion.div
                    key={lang}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900">
                        {t.codeRemains}
                    </h2>
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                        {t.saleDesc}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="mailto:vivifind@fcoterroba.com" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-full font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1">
                            {t.contactInquiry}
                        </a>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.techStack.map((tech, i) => {
                    const Icon = icons[i];
                    return (
                        <motion.div 
                            key={`${lang}-${i}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + (i * 0.1), duration: 0.5 }}
                            className="p-6 rounded-2xl border border-slate-200 bg-white flex items-center gap-4 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
                        >
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                                <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-slate-700 font-bold text-sm tracking-tight">{tech}</span>
                        </motion.div>
                    );
                })}
            </div>
        </div>
      </div>
      
      <footer className="absolute bottom-0 w-full py-8 text-center border-t border-slate-200 bg-white">
        <p className="text-slate-400 text-sm font-medium">{t.footer}</p>
      </footer>
    </section>
  );
}
