import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { label: 'Global Graduates', value: 12500, suffix: '+', description: 'Elite professionals across 45 countries.' },
  { label: 'Avg. Salary Increase', value: 42, suffix: '%', description: 'Significant career trajectory shifts post-completion.' },
  { label: 'Fortune 500 Partners', value: 140, suffix: '+', description: 'Leading organizations trusting our curriculum.' },
  { label: 'Course Satisfaction', value: 99.4, suffix: '%', description: 'World-class education metrics.' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-5xl md:text-7xl font-bold tracking-tighter text-black">
      {count % 1 === 0 ? count : count.toFixed(1)}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex flex-col gap-1">
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                  {stat.label}
                </p>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
