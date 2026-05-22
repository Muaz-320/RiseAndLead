import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-40 px-6 bg-[#0a0a0a] overflow-hidden relative">
      {/* Abstract gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center space-y-16 relative z-10">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500"
          >
            The Elite Bulletin
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif italic text-white"
          >
            Stay Ahead of the <br />
            <span className="text-gray-500 not-italic font-sans font-bold tracking-tighter">Exponential Curve.</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto font-medium">
            Receive monthly frameworks, mental models, and exclusive cohort invitations directly in your inbox.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative max-w-lg mx-auto"
        >
          <input 
            type="email" 
            placeholder="Institutional Email"
            className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-6 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all text-lg"
          />
          <button className="absolute right-2 top-2 bottom-2 bg-white text-black px-8 rounded-2xl font-bold flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-all active:scale-95">
            Join Now
            <Send className="w-4 h-4" />
          </button>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 pt-8">
          {['No Spam', 'Weekly Insights', 'Exclusive Access'].map((benefit) => (
            <div key={benefit} className="flex items-center gap-2 text-gray-500">
              <CheckCircle2 className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-bold uppercase tracking-widest">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
