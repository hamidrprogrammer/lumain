import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

const FooterMain = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="container">
      {/* Background Image */}
      <div className="background-image" />
      
      {/* Navigation */}
      <nav className="nav" data-aos="fade-down">
        <div className="nav-left">
          <span>Bottle</span>
          <span>Tablets</span>
          <span>Science</span>
        </div>
        <div className="nav-right">
          <span>LumiVitae</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-grid">
        {/* Left Column */}
        <div className="left-column" data-aos="fade-right" data-aos-delay="200">
          <div className="section">
            <h2>Science</h2>
            <div className="items">
              <span>Molecular Hydrogen</span>
              <span>Supplements</span>
              <span>Bottle</span>
              <span>Water</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column" data-aos="fade-left" data-aos-delay="400">
          <div className="section">
            <h2>LumiVitae</h2>
            <div className="items">
              <span>About LumiVitae</span>
              <span>Become a Partner</span>
              <span>Help & FAQs</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer" data-aos="fade-up" data-aos-delay="600">
        <div className="footer-links">
          <span>Imprint</span>
          <span>Privacy Policy</span>
          <span>Shipping</span>
          <span>Returns</span>
          <span>Terms of Service</span>
          <span>Warranty</span>
        </div>
        <div className="copyright">
          © 2025 LumiVitae, Lda<br />
          United States<br />
          English
        </div>
      </footer>
    </div>
  );
};

export default FooterMain;