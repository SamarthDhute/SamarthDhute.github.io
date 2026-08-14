import React from 'react';
import { motion } from 'framer-motion';
import { languagesData } from '../data/portfolioData';

export default function Languages() {
  return (
    <section id="languages" className="framer-section">
      <div className="section-divider"></div>
      <div className="section-grid-split">
        <motion.h2 
          className="section-title-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {languagesData.sectionNum}. {languagesData.title}
        </motion.h2>

        <motion.div 
          className="section-content-body"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cards-grid-2col">
            {languagesData.items.map((item, idx) => (
              <div key={idx} className="framer-border-card">
                <h3 className="card-name-title">{item.name}</h3>
                <div className="card-sub-level">{item.level}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
