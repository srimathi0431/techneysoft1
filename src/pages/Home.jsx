import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Smartphone,
  Blocks,
  Megaphone,
  Activity,
  Cpu,
  Globe2,
  ShieldCheck,
  Zap,
  Briefcase,
  Users,
  Layers,
  Headphones,
} from "lucide-react";
import "./Home.css";
import TechCore3D from "../components/TechCore3D";

/* =====================================
   SERVICES DATA
===================================== */
const serviceItems = [
  {
    title: "Software\nDevelopment",
    icon: Code2,
    tone: "violet",
  },
  {
    title: "Mobile\nApplications",
    icon: Smartphone,
    tone: "orange",
  },
  {
    title: "Blockchain\n& Web3",
    icon: Blocks,
    tone: "green",
  },
  {
    title: "Digital\nMarketing",
    icon: Megaphone,
    tone: "blue",
  },
];

/* =====================================
   TRUST DATA
===================================== */
const trustItems = [
  "Reliable",
  "Scalable",
  "Secure",
  "Global Support",
];

/* =====================================
   STATISTICS DATA
===================================== */
const statisticsData = [
  {
    icon: Briefcase,
    number: 100,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    icon: Users,
    number: 50,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: Layers,
    number: 20,
    suffix: "+",
    label: "Technologies",
  },
  {
    icon: Globe2,
    number: 5,
    suffix: "+",
    label: "Countries Served",
  },
  {
    icon: Headphones,
    number: 24,
    suffix: "/7",
    label: "Support",
  },
];

/* =====================================
   INDIVIDUAL LETTER ANIMATION
===================================== */
const AnimatedText = ({ text, className = "", delay = 0 }) => {
  const letterDelay = 0.08; // Delay between each letter (80ms)
  const totalLetters = text.length;
  const revealDuration = totalLetters * letterDelay; // Time to reveal all letters
  const holdDuration = 1.0; // Hold for 1 second when fully visible
  const totalCycleDuration = revealDuration + holdDuration; // Total cycle time

  return (
    <>
      {text.split("").map((letter, index) => {
        // Calculate delay for continuous loop
        const letterAnimationDelay = delay + (index * letterDelay);
        
        return (
          <span
            key={index}
            className={`ts-letter-animate ${className}`}
            style={{
              "--delay": `${letterAnimationDelay}s`,
              "--animation-duration": `${totalCycleDuration}s`,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        );
      })}
    </>
  );
};

/* =====================================
   MAIN HOME COMPONENT
===================================== */
export default function Home() {
  const [counts, setCounts] = useState(
    statisticsData.map(() => 0)
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  /* =====================================
     STATISTICS COUNTER ANIMATION
  ===================================== */
  useEffect(() => {
    const element = statsRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            statisticsData.forEach((stat, index) => {
              const startTime = performance.now();
              const duration = 1800;

              const animate = (currentTime) => {
                const progress = Math.min(
                  (currentTime - startTime) / duration,
                  1
                );
                const eased =
                  1 - Math.pow(1 - progress, 3);
                const value = Math.floor(
                  stat.number * eased
                );

                setCounts((previous) => {
                  const updated = [...previous];
                  updated[index] = value;
                  return updated;
                });

                if (progress < 1) {
                  requestAnimationFrame(animate);
                }
              };

              requestAnimationFrame(animate);
            });
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasAnimated]);

  /* =====================================
     JSX
  ===================================== */
  return (
    <main className="ts-home" id="home">
      {/* HERO SECTION WITH SIDE-BY-SIDE LAYOUT */}
      <section
        className="ts-hero"
        aria-labelledby="hero-title"
      >
        {/* LEFT CONTENT */}
        <div className="ts-hero-copy">
          <div className="ts-eyebrow">
            <span className="ts-eyebrow-dot" />
            Global IT & Blockchain Solutions
          </div>

          {/* MAIN HEADING */}
          <h1 id="hero-title" className="ts-hero-title">
            <span className="ts-typing-line ts-line-one">
              <AnimatedText
                text="TECHNEYSOFT"
                className="techney-letter"
              />
            </span>
            <span className="ts-typing-line ts-line-two">
              <AnimatedText
                text="YourDigitalFuture"
                className="future-letter"
                delay={0.15}
              />
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="ts-hero-description">
            Techneysoft delivers modern IT solutions,
            websites and applications designed to help
            businesses grow, connect and scale.
          </p>

          {/* BUTTONS */}
          <div className="ts-hero-actions">
            <a
              className="ts-btn ts-btn-primary"
              href="#contact"
            >
              Start Your Project
              <ArrowRight size={17} />
            </a>
            <a
              className="ts-btn ts-btn-outline"
              href="#services"
            >
              Explore Solutions
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* TRUST INDICATORS */}
          <div className="ts-trust-row">
            {trustItems.map((item) => (
              <span key={item}>
                <CheckCircle2 size={14} />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT 3D TECH CORE SCENE */}
        <div className="ts-tech-core-scene">
          {/* Three.js 3D Scene Background */}
          <TechCore3D />

          {/* Dashboard and Cards Container */}
          <div className="ts-tech-core-content">
            {/* MAIN DASHBOARD - Centered */}
            <div className="ts-core-dashboard">
            {/* HEADER */}
            <div className="ts-core-header">
              <div className="ts-core-brand">
                <Cpu size={17} />
                TECH CORE
              </div>
              <div className="ts-core-live">
                <i />
                LIVE
              </div>
            </div>

            {/* CONTENT */}
            <div className="ts-core-content">
              <h2>Digital ecosystem</h2>
              <p>
                Connected. Intelligent. Scalable.
              </p>
            </div>

            {/* ENERGY CORE */}
            <div className="ts-energy-core">
              <div className="ts-energy-ring-outer" />
              <div className="ts-energy-ring-inner" />
              <div className="ts-energy-center">
                <Zap size={40} strokeWidth={2.5} />
              </div>
            </div>

            {/* CORE STATISTICS */}
            <div className="ts-core-stats">
              <div>
                <Activity size={19} />
                <strong>99.9%</strong>
                <span>UPTIME</span>
              </div>
              <div>
                <Globe2 size={19} />
                <strong>24/7</strong>
                <span>MONITORING</span>
              </div>
              <div>
                <Cpu size={19} />
                <strong>GLOBAL</strong>
                <span>NETWORK</span>
              </div>
            </div>
          </div>
          </div>

          {/* FLOATING TECH CARDS */}
          <div className="ts-float-cards-grid">
            <div className="ts-float-card ts-float-top-left">
            <Code2 size={28} />
            <strong>
              Custom<br/>Development
            </strong>
          </div>

          <div className="ts-float-card ts-float-top-right">
            <ShieldCheck size={28} />
            <strong>
              Secure<br/>Systems
            </strong>
          </div>

          <div className="ts-float-card ts-float-bottom-left">
            <Smartphone size={28} />
            <strong>
              Cloud &<br/>DevOps
            </strong>
          </div>

          <div className="ts-float-card ts-float-bottom-right">
            <Blocks size={28} />
            <strong>
              Blockchain &<br/>Web3
            </strong>
          </div>
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section
        className="ts-statistics-bar"
        ref={statsRef}
      >
        {statisticsData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <React.Fragment key={index}>
              {index > 0 && (
                <div className="ts-stat-divider" />
              )}
              <div className="ts-stat-item">
                <Icon size={30} strokeWidth={2} />
                <div>
                  <strong>
                    {counts[index]}
                    {stat.suffix}
                  </strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </section>

      {/* FEATURED SERVICES */}
      <section
        className="ts-service-strip"
        id="home-services"
        aria-label="Featured services"
      >
        {serviceItems.map(
          ({ title, icon: Icon, tone }) => (
            <a
              className="ts-service-card"
              href="#contact"
              key={title}
            >
              <span className={`ts-service-icon ${tone}`}>
                <Icon size={25} strokeWidth={2.4} />
              </span>
              <strong>
                {title.split("\n").map((line, index) => (
                  <React.Fragment key={line}>
                    {index > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
              </strong>
              <span className="ts-service-arrow">
                <ArrowUpRight size={17} />
              </span>
            </a>
          )
        )}
      </section>

      {/* BOTTOM GLOW */}
      <div className="ts-bottom-glow" />
    </main>
  );
}
