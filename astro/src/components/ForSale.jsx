import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Brain } from 'lucide-react';

const technologies = [
    { name: "Python Core", icon: Code },
    { name: "TypeScript & Next.js", icon: Globe },
    { name: "AI/ML Integration", icon: Brain },
    { name: "Scalable Architecture", icon: Database },
];

export default function ForSale() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white text-gradient">
                    The Code Remains.
                </h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                    Vivifind may be asleep, but its engine is wide awake. The complete codebase, including the sophisticated scraping algorithms, AI matching logic, and modern frontend, is available for acquisition.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="mailto:contact@vivifind.com" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40">
                        Contact for Inquiry
                    </a>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technologies.map((tech, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                        className="p-6 rounded-xl border border-white/10 bg-white/5 flex items-center gap-4 hover:border-blue-500/30 transition-colors"
                    >
                        <tech.icon className="w-6 h-6 text-blue-400" />
                        <span className="text-slate-200 font-medium">{tech.name}</span>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
      
      <footer className="absolute bottom-0 w-full py-8 text-center border-t border-white/5">
        <p className="text-slate-600 text-sm">© Vivifind. All rights reserved in memory.</p>
      </footer>
    </section>
  );
}
