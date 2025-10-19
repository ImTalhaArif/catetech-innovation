// app/page.tsx
import React from 'react';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>Portable ECG Holter + AI analysis</h1>
            <p className="lead">
              CareTech Innovation brings clinical-grade ECG analysis to the palm of your hand.
              Easy-to-use portable ECG Holter hardware combined with an AI mobile app that
              interprets results and explains them in plain language.
            </p>

            <div className="hero-actions">
              <a href="#device" className="btn btn-primary">Explore the Device</a>
              <a href="#ai-app" className="btn btn-outline">See AI App</a>
            </div>

            <ul className="quick-features">
              <li>24/7 Holter-capable monitoring</li>
              <li>AI-first ECG interpretation</li>
              <li>Patient-friendly reports & alerts</li>
            </ul>
          </div>

          <div className="hero-visual">
            <div className="device-mock">
              {/* placeholder visual box */}
              <div className="device-screen">Portable ECG Holter</div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="section container">
        <h2>Our Mission</h2>
        <p>
          At CareTech Innovation we believe early detection and accessible monitoring save lives.
          We design patient-first hardware and AI tools to democratize cardiac health — making
          continuous ECG monitoring affordable and simple for home use.
        </p>
      </section>

      <section id="device" className="section alt-bg">
        <div className="container device-grid">
          <div className="device-image">
            <div className="device-box">ECG Holter Device (image)</div>
          </div>
          <div className="device-copy">
            <h3>Portable ECG Holter — Clinical-grade, pocket-sized</h3>
            <p>
              Our Holter device records multi-lead ECG data securely, stores locally, and syncs
              with the mobile app. Lightweight, rechargeable, and designed for day/night use.
            </p>

            <ul className="device-points">
              <li>Continuous monitoring for up to 48+ hours</li>
              <li>Automatic data upload via Bluetooth</li>
              <li>Encrypted patient data & privacy-first design</li>
            </ul>

            <a className="btn btn-primary" href="#contact">Request a Demo</a>
          </div>
        </div>
      </section>

      <section id="ai-app" className="section container">
        <h2>AI Mobile App — Understand your ECG</h2>
        <p>
          The mobile app runs AI models to detect rhythms (sinus, bradycardia, tachycardia,
          AFib alerts, etc.) and produces an easy-to-read patient report with recommended next steps.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <h4>Automated Analysis</h4>
            <p>Instant interpretation with clear explanation tailored for patients.</p>
          </div>

          <div className="feature-card">
            <h4>Clinician Mode</h4>
            <p>Exportable ECG waveforms and PDF reports for doctor review.</p>
          </div>

          <div className="feature-card">
            <h4>Alerts & History</h4>
            <p>Push alerts for concerning rhythms and a history timeline for trends.</p>
          </div>
        </div>
      </section>

      <section id="cta" className="section cta-section">
        <div className="container cta-grid">
          <div>
            <h3>Ready to see it in action?</h3>
            <p>Request a demo, pilot program, or clinical partnership.</p>
          </div>
          <div>
            <a href="#contact" className="btn btn-primary large">Get a Demo</a>
          </div>
        </div>
      </section>

      <section id="contact" className="section container">
        <h2>Contact / Request Demo</h2>
        <p>Send us a message and we’ll get back within 48 hours.</p>

        <form id="contactForm" action="/api/contact" method="post" className="contact-form">
          <label>
            Name
            <input name="name" required />
          </label>

          <label>
            Email
            <input name="email" type="email" required />
          </label>

          <label>
            Message
            <textarea name="message" rows={5} required />
          </label>

          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </section>
    </>
  );
}