import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="framer-section">
      <div className="section-divider"></div>
      <div className="section-grid-split">
        <motion.h2 
          className="section-title-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {educationData.sectionNum}. {educationData.title}
        </motion.h2>

        <motion.div 
          className="section-content-body"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="education-stack">
            {educationData.items.map((item, idx) => (
              <div key={idx} className="edu-item-block">
                <div className="edu-meta">{item.institution}  •  {item.period}</div>
                <h3 className="edu-degree">{item.degree}</h3>
                <p className="edu-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
