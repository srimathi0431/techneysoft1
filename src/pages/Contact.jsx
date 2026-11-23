import React, { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  MessageCircle,
  Send,
  ArrowRight,
  Clock,
  CheckCircle2,
} from "lucide-react";
import "./Contact.css";

// =====================================
// CONTACT DETAILS
// Edit these details whenever needed
// =====================================

const contactDetails = [
  {
    icon: MapPin,
    title: "Location",
    lines: [
      "PSK COMPLEX, KVS,",
      "Rasipuram, Tamil Nadu",
    ],
    color: "purple",
    link: "https://www.google.com/maps/place/Techneysoft/@11.4501548,78.1451264,15z/data=!4m6!3m5!1s0x3babc30021b67773:0x89f16821cd6a1bdc!8m2!3d11.4437682!4d78.1495718!16s%2Fg%2F11n9v3h8s5?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@techneysoft.net"],
    color: "pink",
    link: "mailto:info@techneysoft.net",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: [
      "+91 63833 08994",
      "+91 97871 58766",
    ],
    color: "green",
    link: "https://wa.me/916383308994",
  },
  {
    icon: Globe,
    title: "Website",
    lines: ["techneysoft.net"],
    color: "purple",
    link: "https://techneysoft.net",
  },
];

const projectTypes = [
  "Website Development",
  "Software Development",
  "Mobile Application",
  "Blockchain & Web3",
  "Trading & FinTech",
  "E-Commerce",
  "Digital Marketing",
  "Other",
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // =====================================
  // SCROLL REVEAL
  // =====================================

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("contact-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = section.querySelectorAll(".contact-reveal");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // =====================================
  // FORM INPUT
  // =====================================

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // =====================================
  // FORM SUBMISSION
  // =====================================

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `New Project Enquiry - ${formData.name}`
    );

    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Project Type: ${formData.projectType}

Message:
${formData.message}
    `);

    const mailtoLink =
      `mailto:info@techneysoft.net?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <section
      className="contact-page"
      ref={sectionRef}
      id="contact"
    >
      {/* BACKGROUND */}
      <div className="contact-grid-bg"></div>
      <div className="contact-glow contact-glow-left"></div>
      <div className="contact-glow contact-glow-right"></div>

      <div className="contact-container">
        {/* =====================================
            HEADING
        ===================================== */}
        <div className="contact-heading contact-reveal">
          <span className="contact-badge">
            Get In Touch
          </span>
          <h1>
            Let's Discuss <span>Your Next Project</span>
          </h1>
          <p>
            Have an idea or requirement? We're here to help you
            build the right solution.
          </p>
        </div>

        {/* =====================================
            MAIN CONTENT
        ===================================== */}
        <div className="contact-layout">
          {/* LEFT CONTACT INFORMATION */}
          <div className="contact-info-card contact-reveal">
            <div className="contact-info-header">
              <span className="contact-info-tag">
                CONTACT INFORMATION
              </span>
              <h2>
                Let's Connect
              </h2>
              <p>
                Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="contact-details">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    className={`contact-detail contact-detail-${item.color}`}
                    key={item.title}
                    style={{
                      "--contact-delay": `${index * 100}ms`,
                    }}
                  >
                    <div className="contact-detail-icon">
                      <Icon size={21} strokeWidth={2.2} />
                    </div>
                    <div className="contact-detail-content">
                      <h3>{item.title}</h3>
                      {item.lines.map((line, i) => (
                        <p key={i}>
                          {line}
                        </p>
                      ))}
                    </div>
                    {item.link && (
                      <a
                        href={item.link}
                        className="contact-detail-link"
                        aria-label={`Open ${item.title}`}
                        target={
                          item.link.startsWith("https")
                            ? "_blank"
                            : undefined
                        }
                        rel="noreferrer"
                      >
                        <ArrowRight size={15} />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            {/* WORKING HOURS */}
            <div className="contact-working-hours">
              <div className="contact-hours-icon">
                <Clock size={17} />
              </div>
              <div>
                <h4>Working Hours</h4>
                <p>Monday – Saturday | 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTACT FORM */}
          <div className="contact-form-card contact-reveal">
            <div className="contact-form-header">
              <span className="contact-form-tag">
                START A PROJECT
              </span>
              <h2>
                Tell Us About Your Project
              </h2>
              <p>
                Fill out the form below and let's create something
                amazing together.
              </p>
            </div>

            {submitted && (
              <div className="contact-success">
                <CheckCircle2 size={17} />
                Your email application is being opened.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* NAME + EMAIL */}
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">
                    Name <span>*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-email">
                    Email <span>*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* PHONE + COMPANY */}
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-phone">
                    Phone <span>*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-company">
                    Company
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* PROJECT TYPE */}
              <div className="contact-field">
                <label htmlFor="contact-project">
                  Project Type <span>*</span>
                </label>
                <select
                  id="contact-project"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Project Type
                  </option>
                  {projectTypes.map((type) => (
                    <option value={type} key={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* MESSAGE */}
              <div className="contact-field">
                <label htmlFor="contact-message">
                  Message <span>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="contact-submit-btn"
              >
                <span>Send Message</span>
                <Send size={16} />
              </button>

              <p className="contact-form-note">
                <span>*</span> Required fields
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
