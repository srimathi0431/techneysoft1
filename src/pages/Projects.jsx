import React, { useEffect, useRef, useState } from "react";
import {
  Coins,
  Building2,
  Landmark,
  Users,
  Package,
  Network,
  Gem,
  Wheat,
  Trophy,
  Layers,
  HandCoins,
  CreditCard,
  ShoppingCart,
  Hotel,
  GraduationCap,
  Hospital,
  Receipt,
  Shield,
  Heart,
  Wrench,
  Zap,
  Headphones,
  DollarSign,
} from "lucide-react";
import "./Projects.css";

const softwareApps = [
  {
    id: 1,
    title: "Micro Finance Software",
    icon: Coins,
    color: "#6366f1",
    features: ["Loan Management", "EMI Tracking", "Customer Management"],
  },
  {
    id: 2,
    title: "Nidhi Software",
    icon: Building2,
    color: "#8b5cf6",
    features: ["Member Management", "Deposit Management", "Loan Processing"],
  },
  {
    id: 3,
    title: "NBFC Software",
    icon: Landmark,
    color: "#ec4899",
    features: ["Loan Management", "Payment Tracking", "Financial Reports"],
  },
  {
    id: 4,
    title: "Credit Cooperative Society Software",
    icon: Users,
    color: "#f59e0b",
    features: ["Member Accounts", "Loan Processing", "Transaction Reports"],
  },
  {
    id: 5,
    title: "Producer Company Software",
    icon: Package,
    color: "#10b981",
    features: ["Member Management", "Purchase & Sales", "Accounting"],
  },
  {
    id: 6,
    title: "Core Banking Software",
    icon: Landmark,
    color: "#06b6d4",
    features: ["Account Management", "Fund Transfers", "Banking Reports"],
  },
  {
    id: 7,
    title: "MLM Software",
    icon: Network,
    color: "#ef4444",
    features: ["Network Management", "Commission Tracking", "Payout Management"],
  },
  {
    id: 8,
    title: "Gold Loan Software",
    icon: Gem,
    color: "#fbbf24",
    features: ["Gold Valuation", "Loan Management", "Interest Calculation"],
  },
  {
    id: 9,
    title: "PACS Software",
    icon: Wheat,
    color: "#84cc16",
    features: ["Member Records", "Loan Management", "Collection Tracking"],
  },
  {
    id: 10,
    title: "Kuri Software",
    icon: Trophy,
    color: "#a855f7",
    features: ["Subscriber Management", "Installment Tracking", "Auction Management"],
  },
  {
    id: 11,
    title: "SKUS Software",
    icon: Layers,
    color: "#14b8a6",
    features: ["Member Management", "Sales Tracking", "Stock Management"],
  },
  {
    id: 12,
    title: "Sahakari Software",
    icon: HandCoins,
    color: "#f97316",
    features: ["Society Management", "Member Accounts", "Financial Reports"],
  },
  {
    id: 13,
    title: "Chit Fund Software",
    icon: CreditCard,
    color: "#d946ef",
    features: ["Chit Management", "Auction Processing", "Payment Tracking"],
  },
  {
    id: 14,
    title: "Bank Software",
    icon: Landmark,
    color: "#0ea5e9",
    features: ["Account Management", "Transactions", "Customer Records"],
  },
  {
    id: 15,
    title: "E-Commerce Software",
    icon: ShoppingCart,
    color: "#8b5cf6",
    features: ["Product Management", "Order Processing", "Payment Integration"],
  },
  {
    id: 16,
    title: "Hotel Booking Software",
    icon: Hotel,
    color: "#ec4899",
    features: ["Room Management", "Online Reservations", "Booking Tracking"],
  },
  {
    id: 17,
    title: "Education Software",
    icon: GraduationCap,
    color: "#6366f1",
    features: ["Student Management", "Attendance Tracking", "Fee Management"],
  },
  {
    id: 18,
    title: "Hospital Management Software",
    icon: Hospital,
    color: "#10b981",
    features: ["Patient Records", "Appointment Booking", "Billing Management"],
  },
  {
    id: 19,
    title: "Billing Software",
    icon: Receipt,
    color: "#f59e0b",
    features: ["Invoice Generation", "Payment Tracking", "Sales Reports"],
  },
  {
    id: 20,
    title: "Security Manpower Software",
    icon: Shield,
    color: "#ef4444",
    features: ["Staff Management", "Duty Scheduling", "Attendance Tracking"],
  },
];

const benefits = [
  { icon: Wrench, label: "Custom Development", color: "#8b5cf6" },
  { icon: Shield, label: "Scalable & Secure", color: "#ef4444" },
  { icon: Zap, label: "Fast Delivery", color: "#f59e0b" },
  { icon: Headphones, label: "Ongoing Support", color: "#06b6d4" },
  { icon: DollarSign, label: "Budget-Friendly", color: "#10b981" },
];

export default function Projects() {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef(null);

  // Continuous auto-scroll
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || isPaused) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (!isDragging) {
        scrollPosition += scrollSpeed;
        carousel.scrollLeft = scrollPosition;

        // Reset when reaching end for seamless loop
        if (scrollPosition >= carousel.scrollWidth / 2) {
          scrollPosition = 0;
          carousel.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging, isPaused]);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="projects-page" id="projects">
      <div className="projects-container">
        {/* HEADING SECTION */}
        <div className="projects-heading">
          <h1>
            20+ Software <span className="gradient-text">Applications We Build</span>
          </h1>
          <p className="projects-subtitle">
            Powerful, reliable and customized software solutions designed to simplify business operations across industries.
          </p>
          
          <div className="pricing-badge">
            <div className="badge-icon">
              <Heart size={16} fill="currentColor" />
            </div>
            <div className="badge-content">
              <strong>Budget-Friendly Pricing</strong>
              <span>High-Quality, Scalable & Custom-Built Solutions at a Cost-Effective Price</span>
            </div>
          </div>
        </div>

        {/* SOFTWARE CAROUSEL - 20 CARDS */}
        <div
          className="projects-carousel-container"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            handleMouseUp();
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          <div className="projects-carousel-track">
            {/* Duplicate software apps twice for seamless infinite scroll */}
            {[...softwareApps, ...softwareApps].map((app, index) => {
              const Icon = app.icon;
              return (
                <div
                  key={`${app.id}-${index}`}
                  className="project-service-card"
                  style={{ "--service-color": app.color }}
                >
                  <div className="project-service-icon-wrapper">
                    <div className="project-service-icon">
                      <Icon size={24} strokeWidth={2} />
                    </div>
                  </div>
                  <h3>{app.title}</h3>
                  <ul className="project-service-features">
                    {app.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* BENEFITS BAR */}
        <div className="benefits-bar">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="benefit-item">
                <div className="benefit-icon" style={{ color: benefit.color }}>
                  <Icon size={18} strokeWidth={2.5} />
                </div>
                <span>{benefit.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
