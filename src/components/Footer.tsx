import { BookOpen, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-white p-2 rounded-lg">
              <BookOpen className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold tracking-tight">EliteLearn</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Empowering modern professionals with elite training in leadership, programming, and self-mastery.
          </p>
          <div className="flex gap-4">
            <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#courses" className="hover:text-white transition-colors">Courses</a></li>
            <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
            <li><a href="#staff" className="hover:text-white transition-colors">Staff</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Support</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-6">Stay updated with our latest courses and news.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-white/30 transition-all"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-white text-black px-4 rounded-lg text-xs font-bold hover:bg-gray-100 transition-all">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-gray-500 underline underline-offset-4 decoration-white/20">
          Built with Elegance in 2026
        </p>
        <p className="text-xs text-gray-500">
          © 2026 EliteLearn Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
