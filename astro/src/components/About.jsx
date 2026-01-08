import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, Home } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: "Automated Search",
    desc: "An AI assistant that scoured major real estate portals while you slept."
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    desc: "Delivered strictly relevant listings, saving hours of daily manual scrolling."
  },
  {
    icon: Home,
    title: "Smart Matching",
    desc: "Understood preferences beyond filters, finding the perfect home match."
  }
];

export default function About() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">What was Vivifind?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
             It was more than a search engine. It was a personal agent that worked tirelessly to find your next home, giving you the competitive edge in a fast-moving market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="glass-card p-8 hover:bg-white/10 transition-colors duration-300"
            >
              <item.icon className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
