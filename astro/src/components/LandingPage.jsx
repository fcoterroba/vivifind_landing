import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import ForSale from './ForSale';

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
      <About lang={lang} />
      <ForSale lang={lang} />
    </div>
  );
}
