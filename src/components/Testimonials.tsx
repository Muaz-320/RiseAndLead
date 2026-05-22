import { motion } from 'motion/react';
import { TESTIMONIALS } from '../constants.ts';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gray-50 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <Quote className="w-64 h-64" />
      </div>
      
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400"
            >
              Voices
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold tracking-tight text-black"
            >
              Success <br />
              <span className="text-gray-300">Stories.</span>
            </motion.h2>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`w-12 h-1 ${i === 1 ? 'bg-black' : 'bg-gray-200'} rounded-full`} />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <p className="text-xl font-medium text-black leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-12 border-t border-gray-50 pt-8">
                <div className="w-12 h-12 rounded-full overflow-hidden grayscale">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-black text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-400 font-semibold">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
