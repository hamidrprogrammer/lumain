import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import basket from './basket.svg';
import globe from './globe.svg';
import group from './group.png';
import image from './image.png';
import social from './social.png';
import vector1 from './vector-1.svg';
import './style.css';

interface Props {
  onClose: () => void; // تابع بستن
}

/* دکمه با انیمیشن کلیک */
function Button({
  className = '',
  color = 'default',
  size = 'small',
  vectorClassName = '',
}) {
  const classes = `button ${className} color-${color} size-${size} ${vectorClassName}`;
  return <motion.button whileTap={{ scale: 0.9 }} className={classes} />;
}

export const MenuVivid: React.FC<Props> = ({ onClose }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="menu-vivid">
      <div className="container">
        {/* ---------- Content ---------- */}
        <section className="content-panel">
          <article className="card bottle" data-aos="fade-up">
            <Button className="arrow" vectorClassName="button-instance" />
            <h2 className="card-title">Bottle</h2>
          </article>

          <article className="card tablets" data-aos="fade-up" data-aos-delay="100">
            <h2 className="card-title">Tablets</h2>
            <Button className="arrow" vectorClassName="button-instance" />
          </article>

          <nav className="nav-links" data-aos="fade-left" data-aos-delay="200">
            {['Vision', 'Science', 'Revolution'].map((t) => (
              <button key={t} className={`nav-button ${t.toLowerCase()}`}>
                <span className="nav-text">{t}</span>
              </button>
            ))}
          </nav>

          <div className="switchers" data-aos="zoom-in" data-aos-delay="300">
            {/* Country */}
            <div className="switcher country-switcher">
              <div className="switcher-bg" />
              <img className="icon globe" src={globe} alt="Globe" />
              <span className="switcher-text">United States</span>
              <img className="icon dropdown" src={vector1} alt="Dropdown" />
            </div>
            {/* Language */}
            <div className="switcher language-switcher">
              <div className="switcher-bg" />
              <img className="icon language" src={image} alt="Language" />
              <span className="switcher-text">English</span>
              <img className="icon dropdown" src={vector1} alt="Dropdown" />
            </div>
          </div>

          <footer className="footer" data-aos="fade-up" data-aos-delay="400">
            <span className="footer-legal">Legals</span>
            <img className="footer-social" src={social} alt="Social" />
          </footer>
        </section>

        {/* ---------- Top-nav ---------- */}
        <header className="top-nav" data-aos="fade-down">

          <div className="nav-actions">
            {/* متن Close */}
            <span className="close-text" onClick={onClose}>
              Close
            </span>

            {/* X آیکن منو */}
            <div className="menu-icon" onClick={onClose}>
              <img src={group} alt="Menu" />
            </div>

            <div className="basket-icon">
              <img src={basket} alt="Basket" />
            </div>
          </div>
        </header>
      </div>
    </main>
  );
};
