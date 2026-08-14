import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero({ textOpacity, textY }) {
  const firstName = "SAMARTH";
  const lastName = "DHUTE";

  const [displayedFirst, setDisplayedFirst] = useState("");
  const [displayedLast, setDisplayedLast] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    let j = 0;
    const intervalFirst = setInterval(() => {
      if (i < firstName.length) {
        setDisplayedFirst(firstName.substring(0, i + 1));
        i++;
      } else {
        clearInterval(intervalFirst);
        const intervalLast = setInterval(() => {
          if (j < lastName.length) {
            setDisplayedLast(lastName.substring(0, j + 1));
            j++;
          } else {
            clearInterval(intervalLast);
            setIsTypingComplete(true);
          }
        }, 110);
      }
    }, 110);
    return () => clearInterval(intervalFirst);
  }, []);

  return (
    <section id="hero" className="framer-hero-section">
      <motion.div
        className="hero-content-overlay"
        style={{ opacity: textOpacity, y: textY }}
      >
        {/* Bottom name + subtitle only — quote has been moved to App.jsx */}
        <div className="hero-bottom-bar">
          <div className="hero-name-box">
            <h1 className="hero-giant-name-line">
              {displayedFirst}
              {displayedFirst.length < firstName.length && (
                <span className="typing-cursor">|</span>
              )}
            </h1>
            <h1 className="hero-giant-name-line">
              {displayedLast}
              {displayedFirst.length >= firstName.length && !isTypingComplete && (
                <span className="typing-cursor">|</span>
              )}
            </h1>
            <motion.p
              className="hero-sub-role"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              Full-Stack Java Developer, based in Pune
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
