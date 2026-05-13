import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import Awards from './Awards';
import About from './About';
import News from './News';
import FakeDemo from './FakeDemo';
import Future from './Future';
import { translations } from '../utils/translations';

const Attribution = ({ lang }) => {
  const t = translations[lang];
  return (
    <motion.a
      href="https://fcoterroba.com"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 inset-x-0 mx-auto w-max md:inset-x-auto md:mx-0 md:left-6 z-[100] flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full shadow-sm hover:shadow-md hover:border-[#2ECC71]/30 transition-all group pointer-events-auto whitespace-nowrap"
    >
      <img src="/fcoterroba_icon.png" alt="fcoterroba" className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" />
      <span className="text-xs font-bold text-slate-600">
        {t.attribution.split('fcoterroba')[0]}
        <span className="text-[#2ECC71]">fcoterroba</span>
        {t.attribution.split('fcoterroba')[1]}
      </span>
    </motion.a>
  );
};

export default function LandingPage() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="mouse-glow">
      <Hero lang={lang} setLang={setLang} />
      <Awards lang={lang} />
      <About lang={lang} />
      <News lang={lang} />
      <FakeDemo lang={lang} />
      <Future lang={lang} />
      <Attribution lang={lang} />
    </div>
  );
}
