import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const exp = experienceData[0];

  return (
    <section id="experience" className="framer-section">
      <div className="section-divider"></div>
      <div className="section-grid-split">
        <motion.h2 
          className="section-title-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {exp.sectionNum}. {exp.sectionTitle}
        </motion.h2>

        <motion.div 
          className="section-content-body"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="exp-meta">{exp.company}  •  {exp.location}  •  {exp.date}</div>
          <h3 className="exp-role">{exp.role}</h3>
          <p className="exp-desc">{exp.description}</p>
        </motion.div>
      </div>
    </section>
  );
}
