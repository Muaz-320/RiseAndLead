import { motion } from 'motion/react';
import { Clock, User, ArrowUpRight } from 'lucide-react';
import { Course } from '../types.ts';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white rounded-[2.5rem] p-4 border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] mb-6">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-black">
            {course.category}
          </span>
        </div>
      </div>

      <div className="px-4 pb-4 space-y-4">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-bold text-black leading-tight group-hover:text-gray-600 transition-colors">
            {course.title}
          </h3>
          <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-all">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="w-4 h-4" />
            <span className="text-xs font-semibold">{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <User className="w-4 h-4" />
            <span className="text-xs font-semibold">{course.instructor}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
