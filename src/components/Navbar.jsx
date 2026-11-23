import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (sectionId) => {
    closeMenu();
    
    // Use requestAnimationFrame for smoother scroll
    requestAnimationFrame(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 60;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  };

  return (
    <header className="ts-navbar">
      <div className="ts-nav-container">
        <a
          href="#home"
          className="ts-logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <img src="/image/logo.png" alt="Techneysoft Logo" className="ts-logo-image" />
          <span className="ts-logo-text">
            TECHNEYSOFT
            <small>TECHNOLOGY SOLUTIONS</small>
          </span>
        </a>

        <button
          className="ts-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`ts-nav-links ${menuOpen ? "active" : ""}`}>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
          >
            Services
          </a>
          <a
            href="#solutions"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('solutions');
            }}
          >
            Solutions
          </a>
          <a
            href="#technologies"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('technologies');
            }}
          >
            Technologies
          </a>
          <a
            href="#why-choose"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('why-choose');
            }}
          >
            Why Choose
          </a>
          <a
            href="#process"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('process');
            }}
          >
            Process
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
          </a>
          <a
            href="#contact"
            className="ts-quote-btn"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
