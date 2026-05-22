import { motion } from 'motion/react';
import { Target, Zap, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Focused Curriculum',
    description: 'We eliminate the noise. Our courses are precision-engineered to deliver maximum value in minimum time.'
  },
  {
    icon: Zap,
    title: 'Elite Instructors',
    description: 'Learn from industry icons who have built global products and led multi-billion dollar organizations.'
  },
  {
    icon: Shield,
    title: 'Lifetime Mastery',
    description: 'Enrolling in EliteLearn means gaining a lifelong partner in your professional developmental journey.'
  },
  {
    icon: Globe,
    title: 'Global Cohorts',
    description: 'Network with ultra-high performers from around the world in our exclusive community hubs.'
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
              Why EliteLearn
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold tracking-tight text-black leading-[1.1]"
            >
              Excellence isn't <br />
              <span className="text-gray-300">an accident.</span>
            </motion.h2>
            <p className="text-lg text-gray-500 max-w-md leading-relaxed">
              We provide the framework for professional transformation through 
              scientifically backed learning methodologies and elite mentorship.
            </p>
            <div className="pt-4">
              <button className="text-sm font-bold border-b-2 border-black pb-1 hover:text-orange-500 hover:border-orange-500 transition-all">
                Learn our methodology
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
                viewport={{ once: true, margin: "-50px" }}
                className="p-8 rounded-[2rem] border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all group lg:odd:mt-8"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
