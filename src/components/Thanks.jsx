import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Thanks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="quote-section" ref={ref}>
      <div className="section-divider" style={{ marginBottom: '3.5rem' }}></div>

      <motion.div
        className="quote-text-block"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="quote-giant-text">
          "The journey of a developer is never finished — there's always something new to{' '}
          <span className="quote-accent">Learn.</span>"
        </p>
      </motion.div>

      <motion.div
        className="thanks-sub"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Thank you for visiting.
      </motion.div>
    </section>
  );
}
