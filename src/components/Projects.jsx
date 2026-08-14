import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="framer-section">
      <div className="section-divider"></div>
      <div className="section-grid-split">
        <motion.h2 
          className="section-title-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {projectsData.sectionNum}. {projectsData.title}
        </motion.h2>

        <motion.div 
          className="section-content-body"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="projects-stack">
            {projectsData.items.map((proj, idx) => (
              <motion.div 
                key={idx} 
                className="framer-cert-card project-card-box"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ scale: 1.015, borderColor: "#00ffae" }}
                whileTap={{ scale: 0.985 }}
              >
                <div className="cert-card-header">
                  <h3 className="cert-card-title">{proj.title}</h3>
                  <motion.a 
                    href={proj.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-card-arrow"
                    whileHover={{ x: 3, y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    ↗
                  </motion.a>
                </div>
                <div className="project-tech-line">{proj.tech}</div>
                <p className="exp-desc" style={{ marginTop: '0.75rem' }}>{proj.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
