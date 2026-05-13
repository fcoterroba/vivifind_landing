import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { translations } from '../utils/translations';

const NEWS_LINKS = [
  {
    title: "El proyecto Vivifind, premio del PCUMH en la 13ª edición de Santander X Explorer",
    source: "Alicante Plaza",
    url: "https://alicanteplaza.es/alicanteplaza/innovacion-alicante/el-proyecto-vivifind-premio-del-pcumh-en-la-13-edicion-de-santander-x-explorer"
  },
  {
    title: "¿Buscas casa? Una herramienta de IA creada en la UMH de Elche lo hace por ti",
    source: "Información",
    url: "https://www.informacion.es/elche/2026/05/05/herramienta-ia-buscar-casa-umh-elche-129865675.html"
  },
  {
    title: "Premio para una plataforma ilicitana que permite automatizar la búsqueda de vivienda",
    source: "TodoAlicante",
    url: "https://www.todoalicante.es/educacion/premio-plataforma-ilicitana-permite-automatizar-busqueda-vivienda-20260430173304-nt.html"
  },
  {
    title: "Una plataforma que permite automatizar la búsqueda de vivienda mediante IA recibe el premio del PCUMH",
    source: "Publitoral",
    url: "https://www.publitoral.es/una-plataforma-que-permite-automatizar-la-busqueda-de-vivienda-mediante-ia-recibe-el-premio-del-pcumh-en-la-13a-edicion-de-santander-x-explorer/"
  },
  {
    title: "Award for Elche-based platform that automates the search for housing",
    source: "TodoAlicante (English)",
    url: "https://www.todoalicante.es/english/award-elche-based-platform-20260430030414-nt.html"
  }
];

export default function News({ lang }) {
  const t = translations[lang];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">{t.newsTitle}</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid gap-4 max-w-4xl mx-auto">
          {NEWS_LINKS.map((news, i) => (
            <motion.a
              key={i}
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between hover:bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex-1 pr-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 block">
                  {news.source}
                </span>
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
