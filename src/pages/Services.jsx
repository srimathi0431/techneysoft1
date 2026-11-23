import React, { useEffect, useRef, useState } from "react";
import {
  Building2,
  Code2,
  Smartphone,
  Globe,
  Megaphone,
  Facebook,
  Instagram,
  Youtube,
  Search,
  ArrowUpRight,
  X,
  CheckCircle2,
} from "lucide-react";
import "./Services.css";

const services = [
  {
    id: 1,
    title: "Company Registration",
    subtitle: "BUSINESS SETUP",
    description:
      "Professional company registration and business setup solutions to help establish your business legally and efficiently.",
    icon: Building2,
    color: "#8B45F7",
    features: [
      "Company Registration",
      "Business Documentation",
      "Business Setup Assistance",
      "Registration Support",
    ],
    technologies: ["Legal", "Compliance", "Setup", "Support"],
  },
  {
    id: 2,
    title: "Software Development",
    subtitle: "CUSTOM SOLUTIONS",
    description:
      "Build powerful custom software tailored to your business needs. From enterprise applications to automation tools, we develop scalable solutions that drive efficiency and growth.",
    icon: Code2,
    color: "#287BFF",
    features: [
      "Custom Software",
      "Web Applications",
      "Business Automation",
      "Software Maintenance",
    ],
    technologies: ["React", "Node.js", "Python", "AWS", "Docker"],
  },
  {
    id: 3,
    title: "Mobile Application",
    subtitle: "iOS & ANDROID",
    description:
      "Modern mobile applications with smooth performance and intuitive user experiences for both iOS and Android platforms.",
    icon: Smartphone,
    color: "#00D9FF",
    features: [
      "Android Applications",
      "iOS Applications",
      "React Native Development",
      "App Maintenance",
    ],
    technologies: ["React Native", "Swift", "Kotlin", "Firebase"],
  },
  {
    id: 4,
    title: "Website Development",
    subtitle: "WEB SOLUTIONS",
    description:
      "Responsive and modern websites built to strengthen your online business presence and drive customer engagement.",
    icon: Globe,
    color: "#4169E1",
    features: [
      "Business Websites",
      "E-Commerce Websites",
      "Landing Pages",
      "Web Applications",
    ],
    technologies: ["React", "Vue", "WordPress", "Shopify"],
  },
  {
    id: 5,
    title: "Digital Marketing",
    subtitle: "BRAND GROWTH",
    description:
      "Digital marketing strategies that help businesses increase visibility, reach target audiences, and boost conversions.",
    icon: Megaphone,
    color: "#E83EAA",
    features: [
      "Marketing Strategy",
      "Brand Promotion",
      "Campaign Management",
      "Online Advertising",
    ],
    technologies: ["SEO", "SEM", "Analytics", "Ads"],
  },
  {
    id: 6,
    title: "Facebook Promotion",
    subtitle: "SOCIAL MEDIA",
    description:
      "Reach your target audience through professional Facebook marketing campaigns with precise targeting and optimization.",
    icon: Facebook,
    color: "#1877F2",
    features: [
      "Facebook Ads",
      "Audience Targeting",
      "Campaign Management",
      "Performance Tracking",
    ],
    technologies: ["Meta Ads", "Pixel", "Analytics", "CRM"],
  },
  {
    id: 7,
    title: "Instagram Promotion",
    subtitle: "SOCIAL MEDIA",
    description:
      "Build your brand identity and audience through strategic Instagram marketing and engaging content creation.",
    icon: Instagram,
    color: "#D946EF",
    features: [
      "Instagram Ads",
      "Brand Promotion",
      "Content Strategy",
      "Audience Growth",
    ],
    technologies: ["Instagram Ads", "Stories", "Reels", "Influencer"],
  },
  {
    id: 8,
    title: "YouTube Marketing",
    subtitle: "VIDEO PROMOTION",
    description:
      "Promote your brand and products through strategic YouTube marketing campaigns and video content optimization.",
    icon: Youtube,
    color: "#FF3030",
    features: [
      "YouTube Advertising",
      "Video Promotion",
      "Channel Growth",
      "Campaign Tracking",
    ],
    technologies: ["YouTube Ads", "Video SEO", "Analytics"],
  },
  {
    id: 9,
    title: "Google Ads",
    subtitle: "PAID ADVERTISING",
    description:
      "Reach potential customers with targeted Google advertising solutions that deliver measurable ROI and business growth.",
    icon: Search,
    color: "#13A66B",
    features: [
      "Search Ads",
      "Display Advertising",
      "Campaign Optimization",
      "Performance Reports",
    ],
    technologies: ["Google Ads", "PPC", "Analytics", "Remarketing"],
  },
  {
    id: 10,
    title: "Search Engine Optimization",
    subtitle: "SEO SOLUTIONS",
    description:
      "Improve website visibility and organic search presence with comprehensive SEO strategies that boost rankings.",
    icon: Search,
    color: "#159B69",
    features: [
      "On-Page SEO",
      "Technical SEO",
      "Keyword Research",
      "SEO Optimization",
    ],
    technologies: ["SEO Tools", "Analytics", "Schema", "Optimization"],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState(null);
  const [paused, setPaused] = useState(false);
  const startX = useRef(null);

  const next = () => {
    setActive((prev) => (prev + 1) % services.length);
  };

  const previous = () => {
    setActive((prev) => (prev - 1 + services.length) % services.length);
  };

  // Automatic rotation
  useEffect(() => {
    if (paused || selected) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [paused, selected]);

  // Calculate positions
  const getPosition = (index) => {
    let diff = index - active;
    if (diff > services.length / 2) diff -= services.length;
    if (diff < -services.length / 2) diff += services.length;
    return diff;
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : previous();
    }
    startX.current = null;
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    startX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (startX.current === null) return;
    const diff = startX.current - e.clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : previous();
    }
    startX.current = null;
  };

  return (
    <section className="services-section" id="services">
      {/* HEADING */}
      <div className="services-header">
        <span className="services-badge">OUR SERVICES</span>
        <h2 className="services-title">
          Complete Digital & <span className="gradient-text">Business Solutions</span>
        </h2>
        <p className="services-description">
          From company registration to software development, we help businesses build, grow and succeed digitally.
        </p>
      </div>

      {/* CAROUSEL */}
      <div
        className="services-carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {services.map((service, index) => {
          const position = getPosition(index);
          if (Math.abs(position) > 2) return null;

          const Icon = service.icon;
          const isActive = position === 0;

          return (
            <div
              key={service.id}
              className={`service-card ${isActive ? 'active' : ''} ${Math.abs(position) === 1 ? 'side' : ''} ${Math.abs(position) === 2 ? 'far' : ''}`}
              style={{ '--position': position, '--card-color': service.color }}
              onClick={() => !isActive && setActive(index)}
            >
              <div className="card-icon">
                <Icon size={34} strokeWidth={2.2} />
              </div>

              <h3 className="card-title">{service.title}</h3>
              <span className="card-subtitle">{service.subtitle}</span>
              <p className="card-description">{service.description}</p>

              <div className="card-section">
                <h4 className="section-title">WHAT WE OFFER</h4>
                <div className="card-features">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <CheckCircle2 size={14} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-section">
                <h4 className="section-title">TECHNOLOGIES</h4>
                <div className="tech-badges">
                  {service.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL */}
      {selected && (
        <div className="service-modal-overlay" onClick={() => setSelected(null)}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>
              <X size={20} />
            </button>
            <div className="modal-icon">
              {React.createElement(selected.icon, { size: 38 })}
            </div>
            <h2>{selected.title}</h2>
            <p>{selected.description}</p>
            <h4>What We Offer</h4>
            <div className="modal-features">
              {selected.features.map((feature, idx) => (
                <div key={idx}>
                  <CheckCircle2 size={16} />
                  {feature}
                </div>
              ))}
            </div>
            <button
              className="modal-action"
              onClick={() => {
                setSelected(null);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get a Quote <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
