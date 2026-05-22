import { motion } from 'motion/react';
import { Target, Award, Users, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: Target,
    label: 'Precision',
    text: 'Every lesson is curated to provide maximum impact with zero filler.'
  },
  {
    icon: Award,
    label: 'Excellence',
    text: 'We maintain the highest standards of professional training in the industry.'
  },
  {
    icon: Users,
    label: 'Community',
    text: 'Join a network of high-achievers and visionaries globally.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-xs font-bold uppercase tracking-[0.4em] text-orange-500"
              >
                Our Philosophy
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl font-serif italic leading-[1.1] text-white"
              >
                Education is the <br />
                <span className="text-gray-500 not-italic font-sans font-bold tracking-tighter">Ultimate Leverage.</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 leading-relaxed max-w-lg"
            >
              EliteLearn was founded on a simple realization: the gap between potential and success is often just the right framework. We don't just provide content; we provide the catalyst for your evolution.
            </motion.p>

            <div className="grid sm:grid-cols-1 gap-8 pt-8 border-t border-white/10">
              {values.map((value, i) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex gap-6 items-start group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                    <value.icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-white tracking-tight">{value.label}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{value.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-square rounded-[4rem] overflow-hidden relative z-10 border border-white/10 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
                alt="EliteLearn Vision"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent " />
              
              <div className="absolute bottom-12 left-12 right-12 space-y-6">
                <blockquote className="text-2xl font-serif italic text-white/90">
                  "Excellence reflects the curated choice of mastery over mediocrity."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-orange-500" />
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-500">The Elite Path</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Frames */}
            <div className="absolute -top-12 -right-12 w-full h-full border border-white/5 rounded-[4rem] -z-10 translate-x-4 translate-y-4" />
            
            <motion.div
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute -top-6 -right-6 w-32 h-32 border-4 border-dashed border-white/10 rounded-full"
            />
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 p-12 rounded-[3.5rem] bg-white text-black flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-4xl font-bold tracking-tight">Ready to transcend limits?</h3>
            <p className="text-gray-500 font-medium">Join our next cohort and redefine your professional trajectory.</p>
          </div>
          <button className="group bg-black text-white px-10 py-5 rounded-[2rem] font-bold flex items-center gap-3 hover:bg-gray-800 transition-all active:scale-95 shadow-xl shadow-black/10 shrink-0">
            Apply for Admission
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
