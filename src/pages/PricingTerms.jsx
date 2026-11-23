import React from "react";
import "./PricingTerms.css";
import {
  CheckCircle2,
  Sparkles,
  Clock,
  HeadphonesIcon,
  FileCheck,
  Shield,
  Zap,
} from "lucide-react";

const serviceCommitments = [
  {
    icon: Clock,
    title: "On-Time Project Delivery",
    description: "We ensure project completion and delivery within the mutually agreed timeline and project milestones.",
  },
  {
    icon: HeadphonesIcon,
    title: "One-Year Technical Support",
    description: "Receive dedicated technical assistance for one year from the official project handover date.",
  },
  {
    icon: FileCheck,
    title: "Monthly Website Maintenance",
    description: "One scheduled maintenance service every month to ensure optimal website performance, functionality, and reliability.",
  },
  {
    icon: CheckCircle2,
    title: "Bug Fixes & Technical Corrections",
    description: "We identify and resolve technical errors and issues affecting the existing website functionality.",
  },
  {
    icon: Shield,
    title: "Minor Enhancement Requests",
    description: "Clients must submit eligible minor change requests within three days of project delivery.",
  },
  {
    icon: Zap,
    title: "Timely Change Implementation",
    description: "Approved minor modifications will be completed within three working days of request confirmation.",
  },
];

const termsConditions = [
  "Project delivery follows the mutually agreed timeline.",
  "One year of service support is included from the delivery date.",
  "One website checkup is provided every month.",
  "Required corrections must be communicated within 3 days.",
  "Eligible minor modifications will be completed within 3 working days.",
  "New features and major redesigns are not included in regular maintenance.",
  "Domain, hosting, premium plugins and third-party subscription charges are separate unless included in the agreed package.",
  "Customers must provide required content and approvals on time.",
  "Additional work outside the agreed scope may involve additional charges.",
];

export default function PricingTerms() {
  return (
    <section className="pricing-terms-page" id="pricing-terms">
      {/* Animated Background Orbs */}
      <div className="pt-orb pt-orb-1"></div>
      <div className="pt-orb pt-orb-2"></div>
      <div className="pt-orb pt-orb-3"></div>

      {/* Hero Section */}
      <div className="pt-hero reveal">
        <div className="pt-hero-badge">
          <Sparkles size={16} />
          <span>Service Terms</span>
        </div>
        <h1 className="pt-hero-title">
          <span className="pt-highlight">Pricing & Terms</span>
        </h1>
        <p className="pt-hero-desc">
          Clear service commitments and transparent terms for your peace of mind.
        </p>
      </div>

      {/* Service Commitments */}
      <div className="pt-commitments-section">
        <div className="pt-section-header reveal">
          <h2>Our Service Commitments</h2>
          <p>What you can expect from our services</p>
        </div>

        <div className="pt-commitments-grid">
          {serviceCommitments.map((commitment, index) => {
            const Icon = commitment.icon;
            return (
              <div key={index} className="pt-commitment-card reveal-scale">
                <div className="pt-commitment-icon">
                  <Icon size={22} />
                </div>
                <div className="pt-commitment-content">
                  <h4>{commitment.title}</h4>
                  <p>{commitment.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="pt-terms-section">
        <div className="pt-section-header reveal">
          <h2>Terms & Conditions</h2>
          <p>Please review our service terms and conditions</p>
        </div>

        <div className="pt-terms-container reveal">
          <div className="pt-terms-list">
            {termsConditions.map((term, index) => (
              <div key={index} className="pt-term-item reveal">
                <span className="pt-term-number">{String(index + 1).padStart(2, "0")}</span>
                <p>{term}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
