import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, Home } from 'lucide-react';
import { translations } from '../utils/translations';

const icons = [Search, Bell, Home];

export default function About({ lang }) {
  const t = translations[lang];

  return (
    <section className="py-24 px-4 relative bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
            <motion.div
                key={lang}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">{t.whatWasVivifind}</h2>
                <p className="text-slate-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
                    {t.description}
                </p>
            </motion.div>
        </AnimatePresence>

        <div className="grid md:grid-cols-3 gap-8">
          {t.features.map((item, i) => {
            const Icon = icons[i];
            return (
                <motion.div
                key={`${lang}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group"
                >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-sm md:text-base">
                    {item.desc}
                </p>
                </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
