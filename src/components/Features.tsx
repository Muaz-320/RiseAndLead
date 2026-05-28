import { motion } from 'motion/react';
import { Target, Zap, Shield, Globe } from 'lucide-react';
import { BRAND_NAME, BRAND_TAGLINE } from '../constants.ts';

const features = [
  {
    icon: Target,
    title: 'Structured Learning Paths',
    description:
      'Clear milestones from fundamentals to portfolio-ready projects — no guesswork, no wasted time.'
  },
  {
    icon: Zap,
    title: 'Expert Mentors',
    description:
      'Learn from practitioners who have shipped products, led teams, and built careers in tech.'
  },
  {
    icon: Shield,
    title: 'Real-World Projects',
    description:
      'Build work you can show employers — not just theory, but proof of what you can deliver.'
  },
  {
    icon: Globe,
    title: 'Global Community',
    description:
      'Network with peers and alumni who share your ambition to grow and lead in their fields.'
  }
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500"
            >
              Why {BRAND_NAME}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold tracking-tight text-black leading-[1.1]"
            >
              {BRAND_TAGLINE.split('.')[0]}. <br />
              <span className="text-gray-300">{BRAND_TAGLINE.split('.')[1]?.trim()}.</span>
            </motion.h2>
            <p className="text-lg text-gray-500 max-w-md leading-relaxed">
              A training experience built around outcomes — mentorship, projects, and the skills hiring
              managers actually look for.
            </p>
            <div className="pt-4">
              <button className="text-sm font-bold border-b-2 border-black pb-1 hover:text-orange-500 hover:border-orange-500 transition-all">
                Explore our programs
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
                viewport={{ once: true, margin: '-50px' }}
                className="p-8 rounded-[2rem] border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all group lg:odd:mt-8"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
