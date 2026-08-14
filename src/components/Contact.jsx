import React from 'react';
import { motion } from 'framer-motion';
import { contactData } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="framer-section">
      <div className="section-divider"></div>
      <div className="section-grid-split">
        <motion.h2 
          className="section-title-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {contactData.sectionNum}. {contactData.title}
        </motion.h2>

        <motion.div 
          className="section-content-body"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h3 
            className="contact-headline-text"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {contactData.heading}
          </motion.h3>

          <div className="cards-grid-2col" style={{ marginTop: '2rem' }}>
            <motion.a 
              href={`tel:${contactData.phone}`} 
              className="framer-border-card"
              whileHover={{ scale: 1.02, translateY: -3, borderColor: "#00ffae" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="card-sub-level">Phone</div>
              <h4 className="card-name-title" style={{ fontSize: '1.2rem' }}>{contactData.phone}</h4>
            </motion.a>

            <motion.a 
              href={`mailto:${contactData.email}`} 
              className="framer-border-card"
              whileHover={{ scale: 1.02, translateY: -3, borderColor: "#00ffae" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="card-sub-level">Email</div>
              <h4 className="card-name-title" style={{ fontSize: '1.2rem' }}>{contactData.email}</h4>
            </motion.a>

            <motion.a 
              href={contactData.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="framer-border-card"
              whileHover={{ scale: 1.02, translateY: -3, borderColor: "#00ffae" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="card-sub-level">Github</div>
              <h4 className="card-name-title" style={{ fontSize: '1.2rem' }}>{contactData.github}</h4>
            </motion.a>

            <motion.a 
              href={contactData.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="framer-border-card"
              whileHover={{ scale: 1.02, translateY: -3, borderColor: "#00ffae" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="card-sub-level">LinkedIn</div>
              <h4 className="card-name-title" style={{ fontSize: '1.2rem' }}>{contactData.linkedin}</h4>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
