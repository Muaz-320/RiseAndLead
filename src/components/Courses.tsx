import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COURSES } from '../constants.ts';
import CourseCard from './CourseCard.tsx';
import { cn } from '../lib/utils';

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredCourses = activeCategory === 'All' 
    ? COURSES 
    : COURSES.filter(c => c.category === activeCategory);

  return (
    <section id="courses" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500"
            >
              Our Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold tracking-tight text-black"
            >
              Short Courses for <br />
              <span className="text-gray-300">Modern Success.</span>
            </motion.h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {['All', 'Leadership', 'Programming', 'Self Grooming', 'Self Awareness'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap",
                  activeCategory === cat 
                    ? "bg-black text-white shadow-lg shadow-black/20" 
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
