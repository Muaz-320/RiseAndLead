/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Courses from './components/Courses.tsx';
import Testimonials from './components/Testimonials.tsx';
import About from './components/About.tsx';
import Stats from './components/Stats.tsx';
import Process from './components/Process.tsx';
import Portfolio from './components/Portfolio.tsx';
import Staff from './components/Staff.tsx';
import FAQ from './components/FAQ.tsx';
import Newsletter from './components/Newsletter.tsx';
import Footer from './components/Footer.tsx';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <About />
        <Stats />
        <Process />
        <Courses />
        <Testimonials />
        <Portfolio />
        <Staff />
        <FAQ />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
