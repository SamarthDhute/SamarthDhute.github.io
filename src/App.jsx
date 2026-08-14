import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Languages from './components/Languages';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Thanks from './components/Thanks';
import Footer from './components/Footer';

export default function App() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Raw scroll progress → spring smoothed
  const rawProgress = useTransform(scrollY, [0, 480], [0, 1]);
  const smoothProgress = useSpring(rawProgress, {
    stiffness: 85,
    damping: 24,
    mass: 0.6,
    restDelta: 0.0005
  });

  // Multi-frame image morph
  const imgWidth = useTransform(
    smoothProgress,
    [0, 0.2, 0.45, 0.75, 1],
    [isMobile ? '100%' : '100%', isMobile ? '100%' : '88%', isMobile ? '100%' : '71%', isMobile ? '100%' : '56%', isMobile ? '100%' : '46%']
  );
  const imgLeft = useTransform(
    smoothProgress,
    [0, 0.2, 0.45, 0.75, 1],
    ['0%', isMobile ? '0%' : '12%', isMobile ? '0%' : '29%', isMobile ? '0%' : '44%', isMobile ? '0%' : '54%']
  );
  const imgScale = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [1, 1.018, 1.028, 1.014, 1]);
  const imgBlur = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], ['blur(0px)', 'blur(0.6px)', 'blur(1px)', 'blur(0.4px)', 'blur(0px)']);

  // Hero overlays — ALL tied to the same smoothProgress so everything fades together
  const gradientBlendOpacity = useTransform(smoothProgress, [0, 0.2, 0.6, 1], [0, 0.25, 0.75, 1]);
  const heroTextOpacity = useTransform(smoothProgress, [0, 0.32], [1, 0]);
  const heroTextY = useTransform(smoothProgress, [0, 0.32], [0, -30]);

  return (
    <div className="portfolio-app-root">
      <Navbar />

      {/* Fixed hero top-right quote — fades out with scroll via MotionValue */}
      <motion.div
        className="hero-top-right-quote"
        style={{ opacity: heroTextOpacity, y: heroTextY }}
      >
        <p>
          " I BUILD SCALABLE WEB APPLICATIONS WITH JAVA, SPRING BOOT, REACT, SECURE APIS, AND CLEAN MAINTAINABLE CODE "
        </p>
      </motion.div>

      {/* Fixed Morphing Portrait Container */}
      <motion.div
        className="morphing-portrait-fixed-container"
        style={{ width: imgWidth, left: imgLeft }}
      >
        <motion.img
          src="/hero.jpg"
          alt="Samarth Dhute"
          className="morphing-portrait-img"
          style={{ scale: imgScale, filter: imgBlur }}
        />
        <div className="hero-initial-gradient-overlay"></div>
        <motion.div
          className="left-edge-gradient-blend"
          style={{ opacity: gradientBlendOpacity }}
        ></motion.div>
        <a href="#about" className="floating-scroll-indicator">Scroll</a>
      </motion.div>

      {/* Main Content Layout */}
      <div className="main-content-scroll-container">
        <div className="left-sections-column">
          <Hero textOpacity={heroTextOpacity} textY={heroTextY} />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Languages />
          <Certifications />
          <Projects />
          <Contact />
          <Thanks />
          <Footer />
        </div>
      </div>
    </div>
  );
}
