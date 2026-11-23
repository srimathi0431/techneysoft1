import React, { useEffect, useRef, useState } from "react";
import {
  Layers,
  Target,
  Monitor,
  Code2,
  Palette,
  Headset,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import "./WhyChoose.css";

const reasons = [
  {
    id: 1,
    title: "Modern Technology",
    description:
      "We use modern technologies to build scalable digital solutions.",
    icon: Layers,
    color: "purple",
    tag: "Innovation",
  },
  {
    id: 2,
    title: "Business-Focused Solutions",
    description:
      "We understand business requirements before implementing the technology.",
    icon: Target,
    color: "pink",
    tag: "Business Growth",
  },
  {
    id: 3,
    title: "Responsive Experience",
    description:
      "Every website and application is designed to work across devices.",
    icon: Monitor,
    color: "blue",
    tag: "Multi-Device",
  },
  {
    id: 4,
    title: "Clean & Scalable Development",
    description:
      "Our solutions are structured for future growth and improvements.",
    icon: Code2,
    color: "violet",
    tag: "Development",
  },
  {
    id: 5,
    title: "Professional Design",
    description:
      "We focus on creating modern and user-friendly digital experiences.",
    icon: Palette,
    color: "pink",
    tag: "UI / UX",
  },
  {
    id: 6,
    title: "Long-Term Support",
    description:
      "We help businesses maintain and improve their digital products.",
    icon: Headset,
    color: "purple",
    tag: "Dedicated Support",
  },
];

export default function WhyChoose() {
  const sectionRef = useRef(null);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("why-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    const elements = section.querySelectorAll(".why-reveal");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="why-page" id="why-choose" ref={sectionRef}>
      {/* BACKGROUND EFFECTS */}
      <div className="why-bg-grid"></div>
      <div className="why-glow why-glow-one"></div>
      <div className="why-glow why-glow-two"></div>
      <div className="why-glow why-glow-three"></div>
      <div className="why-floating-orb orb-one"></div>
      <div className="why-floating-orb orb-two"></div>

      <div className="why-container">
        {/* HEADING */}
        <div className="why-heading why-reveal">
          <span className="why-badge">
            <Sparkles size={12} />
            Why Techneysoft?
          </span>
          <h1>
            Why Choose <span>Techneysoft?</span>
          </h1>
          <p>
            6 reasons why businesses trust us for their digital growth.
          </p>
          <div className="why-heading-line"></div>
        </div>

        {/* REASONS GRID */}
        <div className="why-grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isExpanded = expandedCard === reason.id;
            
            return (
              <article
                key={reason.id}
                className={`why-card why-${reason.color} why-reveal ${isExpanded ? 'expanded' : ''}`}
                style={{
                  "--card-delay": `${index * 130}ms`,
                }}
                onClick={() => handleCardClick(reason.id)}
              >
                {/* CARD TOP */}
                <div className="why-card-top">
                  <div className="why-icon">
                    <Icon size={27} strokeWidth={2.2} />
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="why-card-content">
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>

                {/* CARD FOOTER */}
                <div className="why-card-footer">
                  <span>{reason.tag}</span>
                </div>

                {/* DECORATION */}
                <div className="why-card-decoration"></div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM TRUST STRIP */}
        <div className="why-bottom why-reveal">
          <div className="why-bottom-icon">
            <ShieldCheck size={19} />
          </div>
          <p>
            Building reliable digital experiences for growing businesses.
          </p>
          <span className="why-bottom-status">
            <span></span>
            Innovation Driven
          </span>
        </div>
      </div>
    </section>
  );
}
