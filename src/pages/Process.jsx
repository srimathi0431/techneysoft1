import React, { useEffect, useRef } from "react";
import {
  Search,
  ClipboardList,
  Pencil,
  Code2,
  FlaskConical,
  Rocket,
} from "lucide-react";
import "./Process.css";

const processSteps = [
  {
    id: "01",
    title: "Discover",
    subtitle: "Understand your",
    description: "business and requirements.",
    icon: Search,
    color: "purple",
  },
  {
    id: "02",
    title: "Plan",
    subtitle: "Define the",
    description: "structure, features and technology.",
    icon: ClipboardList,
    color: "purple",
  },
  {
    id: "03",
    title: "Design",
    subtitle: "Create a",
    description: "modern user experience.",
    icon: Pencil,
    color: "blue",
  },
  {
    id: "04",
    title: "Develop",
    subtitle: "Build the",
    description: "website / application.",
    icon: Code2,
    color: "blue",
  },
  {
    id: "05",
    title: "Test",
    subtitle: "Check performance,",
    description: "responsiveness and functionality.",
    icon: FlaskConical,
    color: "purple",
  },
  {
    id: "06",
    title: "Launch",
    subtitle: "Deploy and",
    description: "support the final product.",
    icon: Rocket,
    color: "purple",
  },
];

export default function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("process-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    const elements = section.querySelectorAll(".process-reveal");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="process-page" id="process" ref={sectionRef}>
      {/* BACKGROUND EFFECTS */}
      <div className="process-grid-bg"></div>
      <div className="process-glow process-glow-left"></div>
      <div className="process-glow process-glow-right"></div>
      <div className="process-wave process-wave-top"></div>
      <div className="process-wave process-wave-bottom"></div>

      <div className="process-container">
        {/* HEADING */}
        <div className="process-heading process-reveal">
          <span className="process-badge">
            Our Process
          </span>
          <h1>
            How We Turn Your Ideas Into Reality
          </h1>
          <p>
            A simple and effective process to deliver high-quality
            digital solutions.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="process-timeline">
          {/* CONNECTING LINE */}
          <div className="process-track">
            <div className="process-track-fill"></div>
          </div>

          {/* PROCESS ITEMS */}
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                className={`process-step process-${step.color} process-reveal`}
                key={step.id}
                style={{
                  "--step-delay": `${index * 160}ms`,
                }}
              >
                {/* ICON */}
                <div className="process-icon-wrapper">
                  <div className="process-icon-ring"></div>
                  <div className="process-icon">
                    <Icon
                      size={25}
                      strokeWidth={2.2}
                    />
                  </div>
                  <span className="process-step-number">
                    {step.id}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="process-content">
                  <h3>{step.title}</h3>
                  <p>
                    {step.subtitle}
                    <br />
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM MESSAGE */}
        <div className="process-bottom process-reveal">
          <span className="process-bottom-line"></span>
          <p>
            From your first idea to the final product.
          </p>
          <span className="process-bottom-line"></span>
        </div>
      </div>
    </section>
  );
}
