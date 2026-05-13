import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Newspaper } from 'lucide-react';
import { translations } from '../utils/translations';

export default function Awards({ lang }) {
  const t = translations[lang];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">
            {t.awardsTitle}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <Trophy className="w-8 h-8 text-yellow-500" />
            <div className="text-left">
              <p className="font-bold text-slate-900 leading-tight">{t.bestProposal}</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <Award className="w-8 h-8 text-blue-500" />
            <div className="text-left">
              <p className="font-bold text-slate-900 leading-tight">{t.umhPrize}</p>
              <p className="text-xs text-slate-500">PCUMH UMH Space</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 group/item"
          >
            <Newspaper className="w-8 h-8 text-slate-500 group-hover/item:text-slate-900 transition-colors duration-300" />
            <div className="text-left">
              <p className="font-bold text-slate-900 leading-tight">{t.pressMention}</p>
              <p className="text-xs text-slate-500 font-bold uppercase">Onda Cero • Alicante Plaza • +</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
