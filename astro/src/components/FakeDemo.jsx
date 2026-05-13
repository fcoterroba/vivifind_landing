import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Sparkles, MessageSquare, ClipboardList, CheckCircle2, Star, Zap } from 'lucide-react';
import { translations } from '../utils/translations';

const MOCK_RESULTS = [
  { id: 1, price: '850€', location: 'Elche, Centro', match: 98, title: 'Modern Studio', type: 'premium' },
  { id: 2, price: '1200€', location: 'Playa San Juan', match: 95, title: 'Sea View Loft', type: 'premium' },
  { id: 3, price: '950€', location: 'Alicante Centro', match: 92, title: 'Renovated Apt', type: 'premium' },
  { id: 4, price: '700€', location: 'Elche, Altabix', match: 85, title: 'Cozy Flat', type: 'standard' },
  { id: 5, price: '750€', location: 'Alicante, Benalúa', match: 82, title: 'Bright Room', type: 'standard' }
];

export default function FakeDemo({ lang }) {
  const t = translations[lang];
  const [step, setStep] = useState(0); // 0: Form, 1: Chat, 2: Searching, 3: Results

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="demo-section" className="py-24 px-4 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">{t.demoTitle}</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12 gap-4 md:gap-12">
            {[t.demoStepForm, t.demoStepChat, t.demoStepResults].map((label, i) => {
                const isActive = (i === 0 && step === 0) || (i === 1 && step === 1) || (i === 2 && step >= 2);
                return (
                    <div key={i} className={`flex items-center gap-2 transition-all duration-500 ${isActive ? 'opacity-100 scale-105' : 'opacity-40'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${isActive ? 'bg-primary text-white' : 'bg-slate-200 text-slate-500'}`}>
                            {i + 1}
                        </div>
                        <span className={`text-sm font-bold hidden md:block ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>{label}</span>
                    </div>
                );
            })}
        </div>

        <div className="relative max-w-4xl mx-auto bg-white rounded-3xl p-4 md:p-8 shadow-2xl border border-slate-200 min-h-[500px] flex flex-col">
          {/* Browser Header */}
          <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <div className="w-3 h-3 rounded-full bg-slate-200" />
            </div>
            <div className="bg-slate-50 rounded-lg px-4 py-1 text-xs text-slate-400 flex-1 ml-4 flex items-center gap-2 border border-slate-100">
              <Zap className="w-3 h-3 text-primary" /> vivifind.ai/engine
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center relative">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full max-w-md space-y-6"
                >
                  <div className="text-center mb-8">
                    <ClipboardList className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-800">Initial Setup</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-500">{t.demoFormCity}</span>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-sm font-bold text-slate-900">Alicante / Elche</motion.span>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-500">{t.demoFormBudget}</span>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-sm font-bold text-slate-900">1200€</motion.span>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-500">{t.demoFormPets}</span>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="text-sm font-bold text-slate-900">Yes 🐾</motion.span>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  key="chat"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="w-full max-w-lg space-y-4"
                >
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-slate-100 p-4 rounded-2xl rounded-tl-none text-sm text-slate-700">
                            {t.demoChatHi}
                        </motion.div>
                    </div>
                    <div className="flex gap-3 justify-end">
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.5 }} className="bg-primary text-white p-4 rounded-2xl rounded-tr-none text-sm shadow-lg shadow-primary/20">
                            {t.demoChatUser}
                        </motion.div>
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                            <div className="w-4 h-4 rounded-full bg-slate-400" />
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 3 }} className="bg-slate-100 p-4 rounded-2xl rounded-tl-none text-sm text-slate-700">
                            {t.demoChatAi}
                        </motion.div>
                    </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="searching"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="text-center"
                >
                  <div className="relative mb-8">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute inset-0 bg-primary/10 rounded-full blur-2xl"
                    />
                    <div className="relative bg-white p-8 rounded-full border-2 border-primary/20 shadow-inner">
                      <Search className="w-16 h-16 text-primary animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{t.demoSearching}</h3>
                  <div className="flex gap-2 justify-center">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }} className="w-2 h-2 bg-primary rounded-full" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-2 h-2 bg-primary rounded-full" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full h-full flex flex-col"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" /> {t.demoFound}
                    </h4>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Powered by ViviFind AI</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-[400px] p-2">
                    {MOCK_RESULTS.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-4 rounded-2xl border transition-all ${item.type === 'premium' ? 'bg-blue-50/50 border-primary/20 shadow-md ring-1 ring-primary/10' : 'bg-white border-slate-100 shadow-sm'}`}
                        >
                            <div className="flex justify-between items-start mb-3">
                                <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${item.type === 'premium' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                                    {item.type === 'premium' ? t.demoPremium : t.demoStandard}
                                </span>
                                <div className="text-right">
                                    <div className="text-xs font-black text-primary">{item.match}%</div>
                                </div>
                            </div>
                            <h5 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h5>
                            <div className="flex items-center gap-1 text-[10px] text-slate-500 mb-2">
                                <MapPin className="w-3 h-3" /> {item.location}
                            </div>
                            <div className="text-primary font-bold">{item.price}</div>
                        </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* AI Logs Floating UI */}
          <div className="absolute -right-4 md:-right-12 bottom-12 hidden md:block w-64 pointer-events-none">
            <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-slate-100"
            >
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">AI Agent: Active</span>
                </div>
                <div className="space-y-2">
                    <div className="h-1 w-full bg-slate-100 rounded" />
                    <div className="h-1 w-3/4 bg-slate-100 rounded" />
                </div>
                <div className="mt-4 flex items-center gap-2 text-primary">
                    <Star className="w-4 h-4 fill-primary" />
                    <span className="text-[10px] font-bold text-slate-700">5 curated recommendations</span>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
