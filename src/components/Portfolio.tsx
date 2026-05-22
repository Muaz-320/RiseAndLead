import { motion } from 'motion/react';
import { PORTFOLIO } from '../constants.ts';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400"
          >
            Showcase
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold tracking-tight text-black"
          >
            Project Portfolio
          </motion.h2>
          <p className="text-gray-500">
            A glimpse into the impact we've created through our specialized training programs across the globe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PORTFOLIO.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: i * 0.15,
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true }}
              className="group relative h-[400px] rounded-[3rem] overflow-hidden"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">{item.year}</p>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-6">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-white font-medium text-sm group/btn cursor-pointer">
                  View Case Study
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
