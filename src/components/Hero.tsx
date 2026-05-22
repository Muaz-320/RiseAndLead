import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden min-h-screen flex items-center bg-white">
      {/* Decorative text behind everything */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-[20vw] font-bold text-gray-50 leading-none select-none -z-10 tracking-tighter">
        ELITE
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-orange-500/5 text-orange-600 border border-orange-500/10"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Enrolling for 2026</span>
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.5rem,8vw,6.5rem)] font-bold tracking-tighter leading-[0.85] text-black"
            >
              Master the <br />
              <span className="font-serif italic font-light text-gray-400">Extraordinary.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-500 max-w-xl leading-relaxed font-medium"
            >
              EliteLearn provides precision-crafted short courses for the visionaries of the next decade. 
              We don't teach skills; we cultivate mastery.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            <button className="group relative bg-black text-white px-10 py-5 rounded-[2rem] flex items-center justify-center gap-3 font-bold hover:bg-gray-800 transition-all active:scale-95 shadow-2xl shadow-black/20 overflow-hidden">
              <span className="relative z-10">Start Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </button>
            <button className="relative px-10 py-5 rounded-[2rem] font-bold text-black border border-gray-200 hover:border-black hover:bg-black/5 transition-all active:scale-95">
              Explore Departments
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-12 pt-12 border-t border-gray-100"
          >
            <div className="space-y-1">
              <p className="text-3xl font-bold tracking-tighter text-black">12.5k</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Graduates Globally</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold tracking-tighter text-black">98%</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Career Growth</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold tracking-tighter text-black">40+</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Expert Mentors</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative z-20 aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[-40px_40px_80px_rgba(0,0,0,0.1)]">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
              alt="EliteLearn Atmosphere"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 z-30 bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-white/20 max-w-[240px]"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-orange-500 text-orange-500" />
              ))}
            </div>
            <p className="text-sm font-bold text-black mb-1">Elite Standard</p>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">
              "The most transformative learning experience of my career."
            </p>
          </motion.div>

          {/* Decorative shapes */}
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
