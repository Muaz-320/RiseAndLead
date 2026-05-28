import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  Clapperboard,
  Code2,
  Mic2,
  Briefcase,
  Check,
  ArrowUpRight
} from 'lucide-react';
import { OFFERING_PILLARS } from '../data/offerings.ts';
import { OfferingPillarId, OfferingProgram } from '../types.ts';
import { cn } from '../lib/utils';

const pillarIcons: Record<OfferingPillarId, typeof Users> = {
  hr: Users,
  film: Clapperboard,
  technology: Code2,
  singing: Mic2,
  services: Briefcase
};

const ease = [0.16, 1, 0.3, 1] as const;

const tabPanelVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease,
      staggerChildren: 0.055,
      delayChildren: 0.04
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease }
  }
} as const;

const tabItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease }
  }
} as const;

function ProgramCard({ program }: { program: OfferingProgram }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease }}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white',
        'shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-[box-shadow,border-color,transform] duration-300',
        'hover:border-orange-200 hover:shadow-[0_14px_40px_-12px_rgba(0,0,0,0.12)]'
      )}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
      <div className="flex h-full flex-col p-6 md:p-7">
        <div className="flex items-start justify-between gap-3 pb-5 mb-5 border-b border-gray-100 shrink-0">
          <h3 className="text-lg font-bold text-gray-900 leading-snug pr-2 group-hover:text-gray-700 transition-colors">
            {program.title}
          </h3>
          <div className="flex flex-col items-end gap-2 shrink-0">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
              {program.duration}
            </span>
            <ArrowUpRight className="w-4 h-4 text-gray-300 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          {program.description && (
            <p className="text-sm text-gray-600 leading-relaxed">{program.description}</p>
          )}

          {program.technologies && program.technologies.length > 0 && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                Core stack
              </p>
              <div className="flex flex-wrap gap-2">
                {program.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {program.items.length > 0 && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2.5">
                Key topics covered
              </p>
              <ul className="space-y-2.5">
              {program.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-gray-600 leading-snug"
                >
                  <Check className="w-4 h-4 shrink-0 text-orange-500 mt-0.5" strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Courses() {
  const [activePillar, setActivePillar] = useState<OfferingPillarId>('hr');
  const pillar = OFFERING_PILLARS.find((p) => p.id === activePillar) ?? OFFERING_PILLARS[0];
  const ActiveIcon = pillarIcons[pillar.id];

  return (
    <section id="courses" className="relative py-28 md:py-36 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#fafafa]" />
      <div className="absolute top-0 right-0 w-[min(50vw,480px)] h-[min(50vw,480px)] bg-orange-100/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-200/40 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 md:mb-16 lg:mb-20 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
                className="flex items-center gap-3 mb-6 whitespace-nowrap"
              >
                <span className="h-px w-10 shrink-0 bg-orange-500" />
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-600">
                  What we offer
                </p>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08, ease }}
                className="font-serif text-4xl md:text-5xl lg:text-[3.35rem] font-medium text-gray-900 leading-[1.1] tracking-tight"
              >
                Programs built for{' '}
                <span className="italic text-gray-400">real careers.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mt-5 text-gray-500 leading-relaxed max-w-lg"
              >
                Structured paths across five domains — workshops, certifications, and
                industry-ready skills.
              </motion.p>
        </div>

        {/* Main panel */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease }}
          className="rounded-[2rem] border border-gray-200/90 bg-white/90 backdrop-blur-sm shadow-[0_20px_60px_-24px_rgba(0,0,0,0.08)] p-5 md:p-8 lg:p-10"
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* Sidebar nav */}
            <nav
              className="lg:w-56 shrink-0 flex lg:flex-col gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-hide"
              aria-label="Program categories"
            >
              {OFFERING_PILLARS.map((p, i) => {
                const Icon = pillarIcons[p.id];
                const isActive = activePillar === p.id;
                return (
                  <motion.button
                    key={p.id}
                    type="button"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    onClick={() => setActivePillar(p.id)}
                    className={cn(
                      'relative flex items-center gap-3 px-4 py-3.5 rounded-xl text-left text-sm font-semibold whitespace-nowrap transition-colors duration-300',
                      isActive ? 'text-white' : 'text-gray-600 hover:text-gray-900'
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="offering-active-tab"
                        className="absolute inset-0 bg-gray-900 rounded-xl shadow-lg shadow-gray-900/20"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      />
                    )}
                    <Icon className={cn('relative z-10 w-4 h-4 shrink-0', isActive ? 'text-orange-300' : '')} />
                    <span className="relative z-10">{p.label}</span>
                  </motion.button>
                );
              })}
            </nav>

            {/* Programs */}
            <div className="flex-1 min-w-0 relative">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={pillar.id}
                  variants={tabPanelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="w-full"
                >
                  <motion.div
                    variants={tabItemVariants}
                    className="flex items-center gap-4 mb-7 pb-5 border-b border-gray-100"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 border border-orange-100 text-orange-600">
                      <ActiveIcon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 truncate">
                        {pillar.label}
                      </h3>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {pillar.programs.length} program{pillar.programs.length !== 1 ? 's' : ''} available
                      </p>
                    </div>
                  </motion.div>

                  <div
                    className={cn(
                      'grid items-stretch gap-6',
                      pillar.programs.length === 1 ? 'grid-cols-1 max-w-2xl' : 'md:grid-cols-2'
                    )}
                  >
                    {pillar.programs.map((program) => (
                      <motion.div
                        key={program.id}
                        variants={tabItemVariants}
                        className="h-full"
                      >
                        <ProgramCard program={program} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
