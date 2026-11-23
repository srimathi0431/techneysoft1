import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Technologies from "./pages/Technologies";
import WhyChoose from "./pages/WhyChoose";
import Process from "./pages/Process";
import Projects from "./pages/Projects";
import PricingTerms from "./pages/PricingTerms";
import Contact from "./pages/Contact";
import "./App.css";
import "./animations/animations.css";

function ScrollReveal() {
  useEffect(() => {
    // More aggressive threshold for mobile
    const isMobile = window.innerWidth <= 700;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-reveal");
          }
          // Keep the class - don't remove it to maintain continuous animations
        });
      },
      {
        threshold: isMobile ? 0.01 : 0.05, // Lower threshold for mobile
        rootMargin: isMobile ? "0px 0px -20px 0px" : "0px 0px -50px 0px", // Less margin for mobile
      }
    );

    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-jump, .reveal-fade"
    );
    
    // Immediately show elements that are already in viewport on page load
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        element.classList.add("show-reveal");
      }
      
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

function WhatsAppButton() {
  useEffect(() => {
    // Create button element
    const button = document.createElement('a');
    button.id = 'whatsapp-floating-button';
    button.href = 'https://wa.me/919787158766';
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.title = 'Chat with us on WhatsApp';
    button.setAttribute('aria-label', 'Chat with us on WhatsApp');
    
    // Professional WhatsApp SVG Icon
    button.innerHTML = `
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.164 0 0 7.164 0 16C0 18.788 0.812 21.388 2.216 23.612L0.184 31.816L8.596 29.82C10.756 31.128 13.292 31.868 16 31.868C24.836 31.868 32 24.704 32 15.868C32 7.032 24.836 0 16 0Z" fill="white"/>
        <path d="M25.372 22.536C25.012 23.66 23.22 24.62 22.236 24.828C21.524 24.98 20.604 25.096 16.892 23.556C12.148 21.596 9.196 16.596 8.956 16.268C8.728 15.94 7.036 13.7 7.036 11.384C7.036 9.068 8.268 7.932 8.7 7.488C9.132 7.044 9.644 6.932 9.98 6.932C10.316 6.932 10.652 6.936 10.948 6.948C11.26 6.96 11.676 6.816 12.084 7.86C12.492 8.904 13.468 11.22 13.58 11.448C13.692 11.676 13.772 11.948 13.628 12.276C13.484 12.604 13.396 12.796 13.156 13.08C12.916 13.364 12.66 13.588 12.42 13.896C12.196 14.164 11.948 14.448 12.228 14.924C12.508 15.4 13.46 16.94 14.876 18.18C16.708 19.772 18.22 20.268 18.732 20.496C19.244 20.724 19.596 20.684 19.876 20.372C20.156 20.06 21.1 18.98 21.42 18.504C21.74 18.028 22.06 18.108 22.524 18.268C22.988 18.428 25.3 19.572 25.812 19.828C26.324 20.084 26.66 20.212 26.772 20.428C26.884 20.644 26.884 21.412 25.372 22.536Z" fill="#25D366"/>
      </svg>
    `;
    
    // Apply styles
    Object.assign(button.style, {
      position: 'fixed',
      right: '24px',
      bottom: '24px',
      width: '56px',
      height: '56px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      background: '#25d366',
      boxShadow: '0 2px 12px rgba(37, 211, 102, 0.3)',
      cursor: 'pointer',
      zIndex: '9999',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      textDecoration: 'none',
    });
    
    // Add hover effect
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px)';
      button.style.boxShadow = '0 4px 16px rgba(37, 211, 102, 0.4)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = '0 2px 12px rgba(37, 211, 102, 0.3)';
    });
    
    // Add active effect
    button.addEventListener('mousedown', () => {
      button.style.transform = 'translateY(-2px) scale(0.96)';
    });
    
    button.addEventListener('mouseup', () => {
      button.style.transform = 'translateY(-2px) scale(1)';
    });
    
    // Append to body
    document.body.appendChild(button);
    
    // Cleanup
    return () => {
      const btn = document.getElementById('whatsapp-floating-button');
      if (btn) btn.remove();
    };
  }, []);

  return null;
}

function App() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <Technologies />
        <WhyChoose />
        <Process />
        <Projects />
        <PricingTerms />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
