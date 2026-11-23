import React from "react";
import {
  Users,
  Layers3,
  Headset,
  ArrowRight,
  Sparkles,
  Code2,
} from "lucide-react";
import "./About.css";

const About = () => {
  return (
    <section className="about-page" id="about">
      <div className="about-bg-glow about-glow-animated"></div>
      <div className="about-bg-grid"></div>

      <div className="about-container">
        {/* ABOUT HERO */}
        <div className="about-hero">
          {/* LEFT CONTENT */}
          <div className="about-content reveal-left">
            <div className="about-badge about-badge-animated">
              <Sparkles size={13} />
              About Techneysoft
            </div>
            <h1 className="about-heading-animated">
              We Build <span className="about-blue">Digital</span>
              <br />
              <span className="about-purple">
                Solutions That Move
              </span>
              <br />
              Businesses <span className="about-blue">Forward</span>
            </h1>
            <p className="about-description about-text-reveal" style={{ animationDelay: '0.2s' }}>
              Techneysoft delivers cutting-edge IT solutions, crafting modern web applications, 
              custom software, and blockchain-powered digital products that drive business growth 
              and digital transformation.
            </p>
            <p className="about-description about-text-reveal" style={{ animationDelay: '0.3s' }}>
              We merge advanced technology, creative design, and deep business insight to build 
              scalable, secure, and future-ready solutions that create measurable impact and 
              lasting value for our clients worldwide.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="about-visual reveal-right">
            <div className="about-image-container">
              <img 
                src="/image/ts.png" 
                alt="Techneysoft Technology" 
                className="about-office-image about-image-float"
              />
              <div className="about-floating-card floating-code about-float-card-animated" style={{ animationDelay: '0.5s' }}>
                <Code2 size={17} />
                <span>Innovation</span>
              </div>
              <div className="about-floating-card floating-tech about-float-card-animated" style={{ animationDelay: '0.7s' }}>
                <Sparkles size={17} />
                <span>Excellence</span>
              </div>
            </div>
          </div>
        </div>

        {/* TRUST BADGES - HORIZONTAL */}
        <div className="about-trust-badges">
          <div className="about-trust-item">
            <div className="about-trust-icon">
              <Users size={20} />
            </div>
            <span>Trusted</span>
          </div>
          <div className="about-trust-divider"></div>
          <div className="about-trust-item">
            <div className="about-trust-icon">
              <Layers3 size={20} />
            </div>
            <span>On Time</span>
          </div>
          <div className="about-trust-divider"></div>
          <div className="about-trust-item">
            <div className="about-trust-icon">
              <Headset size={20} />
            </div>
            <span>Secure</span>
          </div>
          <div className="about-trust-divider"></div>
          <div className="about-trust-item">
            <div className="about-trust-icon">
              <Sparkles size={20} />
            </div>
            <span>Excellence</span>
          </div>
        </div>

        {/* LEARN MORE */}
        <div className="about-action reveal">
          <a href="/#services" className="about-learn-btn about-btn-animated">
            Learn More
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
