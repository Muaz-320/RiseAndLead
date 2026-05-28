import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { BRAND_HERO_SUBLINE, BRAND_TAGLINE } from '../constants.ts';

const careerPaths = ['Web Developer', 'Mobile App Dev', 'Freelancer', 'Software Engineer'];

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 px-6 bg-white lg:min-h-[88vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              {BRAND_TAGLINE}
            </p>
          </motion.div>

          <div className="space-y-5 max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="font-serif text-[clamp(2.25rem,4.8vw,3.5rem)] font-medium leading-[1.15] text-gray-900"
            >
              <span className="block">Just listen to your soul</span>
              <span className="mt-2 block italic text-gray-600">
                and unlock your <span className="not-italic font-semibold text-orange-600">true potential</span>.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="font-serif text-base md:text-lg italic text-gray-500 leading-relaxed border-l-2 border-orange-400/70 pl-4"
            >
              {BRAND_HERO_SUBLINE}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3 pt-1"
          >
            <button className="inline-flex items-center gap-2 bg-black text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
              Start Your Journey
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-7 py-3.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-colors">
              Explore Programs
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-[4/5] max-h-[480px] lg:max-h-none rounded-3xl overflow-hidden shadow-lg shadow-gray-200/80">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Rise & Lead 360 learning community"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-3 -left-3 bg-white p-4 rounded-xl border border-gray-100 shadow-md max-w-[250px]">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-2">Career paths</p>
            <div className="flex flex-wrap gap-1.5">
              {careerPaths.map((path) => (
                <span key={path} className="text-[11px] font-medium text-gray-700 bg-gray-100 px-2.5 py-1 rounded-md">
                  {path}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
