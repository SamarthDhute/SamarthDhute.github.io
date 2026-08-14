import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="framer-section">
      <div className="section-divider"></div>
      <div className="section-grid-split">
        <motion.h2 
          className="section-title-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {aboutData.sectionNum}. {aboutData.title}
        </motion.h2>

        <motion.div 
          className="section-content-body"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="about-text-content">{aboutData.content}</p>
        </motion.div>
      </div>
    </section>
  );
}
