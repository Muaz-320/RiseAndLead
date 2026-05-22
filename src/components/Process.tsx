import { motion } from 'motion/react';
import { UserCheck, BookOpen, GraduationCap, Trophy } from 'lucide-react';

const steps = [
  {
    icon: UserCheck,
    title: 'Consultation',
    description: 'A 1-on-1 assessment with our advisors to align your career goals with our vision.'
  },
  {
    icon: BookOpen,
    title: 'Immersive Cohort',
    description: 'Deep-dive intensive sessions with industry icons and collaborative global peers.'
  },
  {
    icon: GraduationCap,
    title: 'Precision Mastery',
    description: 'Completing project-based milestones that transition theory into real-world leverage.'
  },
  {
    icon: Trophy,
    title: 'Lifetime network',
    description: 'Immediate entry into our private alumni database and exclusive global events.'
  }
];

export default function Process() {
  return (
    <section className="py-40 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-[0.4em]"
          >
            The Methodology
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-black leading-[0.85]"
          >
            Your path to <br />
            <span className="font-serif italic font-light text-gray-300">Transcendence.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 -z-10 hidden lg:block" />
          
          <div className="grid lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8 bg-white lg:bg-transparent"
              >
                <div className="relative">
                  <div className="w-20 h-20 rounded-[2rem] bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-black transition-all duration-500">
                    <step.icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold shadow-xl border-4 border-white">
                    {i + 1}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold tracking-tight text-black">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
