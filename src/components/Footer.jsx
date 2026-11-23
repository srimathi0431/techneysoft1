import React from "react";
import { Instagram, Facebook, Phone, Mail, Globe, MapPin, MessageCircle } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const openGoogleMaps = () => {
    window.open("https://www.google.com/maps/place/Techneysoft/@11.4501548,78.1451264,15z/data=!4m6!3m5!1s0x3babc30021b67773:0x89f16821cd6a1bdc!8m2!3d11.4437682!4d78.1495718!16s%2Fg%2F11n9v3h8s5?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D", "_blank");
  };

  return (
    <footer className="ts-footer">
      <div className="ts-footer-waves">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,50 Q300,20 600,50 T1200,50 L1200,100 L0,100 Z" fill="url(#waveGradient)"/>
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="ts-footer-inner">
        {/* COLUMN 1: BRAND & DESCRIPTION */}
        <div className="ts-footer-col ts-footer-brand reveal-left">
          <div className="ts-footer-logo-section">
            <img src="/image/logo.png" alt="Techneysoft Logo" className="ts-footer-logo-image" />
            <span className="ts-footer-name">TECHNEYSOFT</span>
          </div>
          <p className="ts-footer-description">
            Building modern IT solutions, websites and applications designed to help businesses grow and scale.
          </p>
          <div className="ts-footer-social">
            <a 
              href="https://www.facebook.com/techneysoft" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="ts-social-icon"
            >
              <Facebook />
            </a>
            <a 
              href="https://www.instagram.com/techneysoft.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="ts-social-icon"
            >
              <Instagram />
            </a>
            <a 
              href="https://wa.me/916383308994" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp"
              className="ts-social-icon"
            >
              <MessageCircle />
            </a>
          </div>
        </div>

        {/* COLUMN 2: QUICK LINKS */}
        <div className="ts-footer-col reveal-jump reveal-delay-1">
          <h4 className="ts-footer-heading">QUICK LINKS</h4>
          <div className="ts-footer-underline"></div>
          <nav className="ts-footer-links">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              Home
            </a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
              About
            </a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
              Services
            </a>
            <a href="#technologies" onClick={(e) => { e.preventDefault(); scrollToSection('technologies'); }}>
              Solutions
            </a>
          </nav>
        </div>

        {/* COLUMN 3: COMPANY */}
        <div className="ts-footer-col reveal-jump reveal-delay-2">
          <h4 className="ts-footer-heading">COMPANY</h4>
          <div className="ts-footer-underline"></div>
          <nav className="ts-footer-links">
            <a href="#why-choose" onClick={(e) => { e.preventDefault(); scrollToSection('why-choose'); }}>
              Why Techneysoft
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              Contact
            </a>
          </nav>
        </div>

        {/* COLUMN 4: GET IN TOUCH */}
        <div className="ts-footer-col reveal-right">
          <h4 className="ts-footer-heading">GET IN TOUCH</h4>
          <div className="ts-footer-underline"></div>
          <div className="ts-footer-contact">
            <a href="mailto:info@techneysoft.net" className="ts-footer-contact-item">
              <Mail size={16} />
              <span>info@techneysoft.net</span>
            </a>
            
            <div className="ts-footer-phone-group">
              <div className="ts-footer-phone-item">
                <Phone size={16} />
                <span>+91 63833 08994</span>
              </div>
              <div className="ts-footer-phone-actions">
                <a href="tel:+916383308994" className="ts-phone-action" aria-label="Call">
                  <Phone size={12} />
                </a>
                <a href="https://wa.me/916383308994" target="_blank" rel="noopener noreferrer" className="ts-phone-action" aria-label="WhatsApp">
                  <MessageCircle size={12} />
                </a>
              </div>
            </div>

            <div className="ts-footer-phone-group">
              <div className="ts-footer-phone-item">
                <Phone size={16} />
                <span>+91 9787158766</span>
              </div>
              <div className="ts-footer-phone-actions">
                <a href="tel:+919787158766" className="ts-phone-action" aria-label="Call">
                  <Phone size={12} />
                </a>
                <a href="https://wa.me/919787158766" target="_blank" rel="noopener noreferrer" className="ts-phone-action" aria-label="WhatsApp">
                  <MessageCircle size={12} />
                </a>
              </div>
            </div>

            <a 
              href="https://techneysoft.net" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ts-footer-contact-item"
            >
              <Globe size={16} />
              <span>www.techneysoft.net</span>
            </a>
            
            <div 
              className="ts-footer-contact-item ts-footer-address" 
              onClick={openGoogleMaps}
              style={{ cursor: 'pointer' }}
            >
              <MapPin size={16} />
              <span>PSK COMPLEX, 1/29, Koonavelampatti, Rasipuram, Tamil Nadu 637401, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="ts-footer-bottom reveal-fade">
        <p>© 2026 Techneysoft. All rights reserved.</p>
      </div>
    </footer>
  );
}
