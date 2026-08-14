import React from 'react';
import { motion } from 'framer-motion';
import { certsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="framer-section">
      <div className="section-divider"></div>
      <div className="section-grid-split">
        <motion.h2 
          className="section-title-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {certsData.sectionNum}.{certsData.title}
        </motion.h2>

        <motion.div 
          className="section-content-body"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cert-stack-cards">
            {certsData.items.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="framer-cert-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ scale: 1.015, borderColor: "rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.985 }}
              >
                <div className="cert-card-header">
                  <h3 className="cert-card-title">{item.title}</h3>
                  <motion.span 
                    className="cert-card-arrow"
                    whileHover={{ x: 3, y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    ↗
                  </motion.span>
                </div>
                <div className="cert-card-issuer">{item.issuer}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
