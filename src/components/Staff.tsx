import { motion } from 'motion/react';
import { STAFF } from '../constants.ts';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function Staff() {
  return (
    <section id="staff" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 relative">
        {/* Decorative background text */}
        <div className="absolute top-0 right-0 text-[10rem] font-bold text-gray-50 leading-none select-none -translate-y-1/4 translate-x-1/4 pointer-events-none">
          FACULTY
        </div>

        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400"
          >
            Experts
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold tracking-tight text-black"
          >
            Meet our Staff
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {STAFF.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-6"
            >
              <div className="relative group">
                <div className="aspect-square rounded-[3rem] overflow-hidden bg-gray-100 border border-gray-100 shadow-sm">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                  <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-black hover:text-white transition-all">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-black hover:text-white transition-all">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-black hover:text-white transition-all">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-black">{member.name}</h3>
                <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">{member.role}</p>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
