import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_NAME, FAQS } from '../constants.ts';
import { ArrowRight, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [activeId, setActiveId] = useState<string>(FAQS[0].id);

  const activeFaq = FAQS.find(f => f.id === activeId) || FAQS[0];

  return (
    <section id="faq" className="py-40 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-orange-500"
            >
              <div className="w-8 h-px bg-orange-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Knowledge Base</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold tracking-tighter text-black leading-[0.85]"
            >
              Curiosity <br />
              <span className="font-serif italic font-light text-gray-300">Simplified.</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-4 lg:pb-4">
            <p className="text-gray-400 font-medium leading-relaxed max-w-xs">
              Every detail of your journey with {BRAND_NAME}, explained with clarity and transparency.
            </p>
          </div>
        </div>

        {/* Interactive Board */}
        <div className="grid lg:grid-cols-12 gap-1 px-1 bg-gray-100 rounded-[3rem] overflow-hidden border border-gray-100">
          
          {/* Left Navigation (Questions) */}
          <div className="lg:col-span-5 bg-white p-4 space-y-2 lg:min-h-[600px] flex flex-col justify-center">
            {FAQS.map((faq, index) => {
              const isActive = activeId === faq.id;
              return (
                <button
                  key={faq.id}
                  onClick={() => setActiveId(faq.id)}
                  className={`group relative w-full text-left p-8 rounded-[2rem] transition-all duration-500 ${
                    isActive ? 'bg-black text-white shadow-2xl' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <span className={`text-[10px] font-bold mt-1.5 transition-colors ${
                      isActive ? 'text-orange-500' : 'text-gray-300 group-hover:text-black'
                    }`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className={`text-xl md:text-2xl font-bold tracking-tight transition-all ${
                      isActive ? 'translate-x-2' : 'group-hover:translate-x-1'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute right-8 top-1/2 -translate-y-1/2"
                    >
                      <ArrowRight className="w-6 h-6 text-orange-500" />
                    </motion.div>
                  )}
                </button>
              );
            })}

            <div className="mt-8 p-8 flex items-center justify-between border-t border-gray-50 pt-12">
               <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Still confused?</p>
                  <p className="text-sm font-bold text-black">Speak with an advisor</p>
               </div>
               <button className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
               </button>
            </div>
          </div>

          {/* Right Detail Board */}
          <div className="lg:col-span-7 bg-white p-12 lg:p-20 relative overflow-hidden flex flex-col justify-center">
            {/* Background Branding */}
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] select-none pointer-events-none">
               <HelpCircle className="w-96 h-96" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 space-y-10"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest">
                    <Sparkles className="w-3 h-3" />
                    Expert Insight
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-black leading-none">
                    {activeFaq.question}
                  </h3>
                </div>

                <div className="space-y-8">
                  <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium font-serif italic italic-light">
                    {activeFaq.answer}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-gray-800 transition-all active:scale-95 shadow-xl shadow-black/10">
                      View Documentation
                    </button>
                    <button className="border border-gray-100 px-8 py-4 rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Decorative Stats */}
                <div className="grid grid-cols-2 gap-8 pt-12 border-t border-gray-50">
                   <div>
                      <p className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em] mb-2">Confidence Score</p>
                      <p className="text-2xl font-bold text-black">High (99%)</p>
                   </div>
                   <div>
                      <p className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em] mb-2">Last Updated</p>
                      <p className="text-2xl font-bold text-black">Q1 2026</p>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
