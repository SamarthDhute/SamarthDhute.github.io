import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</div>
        <div>Made by ten™ • IST</div>
        <div>
          <a href="#hero" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
