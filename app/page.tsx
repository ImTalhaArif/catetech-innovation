"use client";

// pages/index.tsx
import Head from "next/head";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    // ensure smooth scroll in browsers that respect it
    try {
      document.documentElement.style.scrollBehavior = "smooth";
    } catch {}
  }, []);

  return (
    <>
      <Head>
        <title>CareTech Innovation</title>
        <meta name="description" content="Revolutionizing Healthcare with AI and Portable ECG Technology" />
        <meta name="keywords" content="CareTech, ECG, AI Healthcare, Portable ECG, Medical Innovation, Cardiac AI" />
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      {/* NAVBAR */}
      <header style={S.navbar}>
        <div style={S.navInner}>
          <div style={S.brand}>CareTech Innovation</div>
          <nav style={S.navlinks}>
            <a href="#home" style={S.a}>Home</a>
            <a href="#features" style={S.a}>Features</a>
            <a href="#device" style={S.a}>Device</a>
            <a href="#mission" style={S.a}>Mission</a>
            <a href="#contact" style={S.a}>Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" style={S.hero}>
        <div style={S.heroOverlay} />
        <div style={S.ecgContainer}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={S.ecgSvg}>
            <polyline
              points="0,60 80,60 92,40 120,100 160,20 200,60 240,60 280,60 320,20 360,60 420,60 480,60 520,30 560,60 640,60 700,60 760,10 820,60 880,60 940,60 1000,50 1060,60 1120,60 1200,60"
              fill="none"
              stroke="#14B8A6"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ filter: "drop-shadow(0 6px 12px rgba(20,184,166,0.12))" }}
            />
          </svg>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} style={S.heroInner}>
          <h1 style={S.heroTitle}>Revolutionizing Healthcare</h1>
          <p style={S.heroSubtitle}>AI-powered portable ECG technology for every home.</p>

          <div style={S.heroCtas}>
            <a href="#device" style={S.ctaPrimary}>Explore Device</a>
            <a href="#contact" style={S.ctaOutline}>Contact Us</a>
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section id="features" style={S.sectionLight}>
        <div style={S.container}>
          <h2 style={S.sectionTitle}>Core Features</h2>

          <div style={S.featuresGrid}>
            {[
              { title: "AI ECG Analysis", text: "Instant AI-driven ECG report interpretation for clear understanding." },
              { title: "Accessibility", text: "Portable and easy to use at home with real-time monitoring." },
              { title: "Clinical Accuracy", text: "Precision and reliability comparable to hospital-grade equipment." }
            ].map((f, i) => (
              <motion.article key={i} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 200 }} style={S.featureCard}>
                <h3 style={S.featureH}>{f.title}</h3>
                <p style={S.featureP}>{f.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* DEVICE */}
      <section id="device" style={S.section}>
        <div style={S.containerRow}>
          <div style={S.deviceLeft}>
            <img src="/ecg-device.png" alt="Portable ECG Device" style={S.deviceImg} />
          </div>
          <div style={S.deviceRight}>
            <h2 style={S.sectionTitle}>The Portable ECG Device</h2>
            <p style={S.sectionDesc}>
              Designed to make cardiac monitoring effortless. Capture your ECG anytime, anywhere, and let our AI-powered app analyze it for instant insights into your heart health.
            </p>
            <ul style={S.specs}>
              <li>48+ hours continuous recording</li>
              <li>Bluetooth sync to mobile app</li>
              <li>Encrypted & privacy-first</li>
            </ul>
            <a href="#contact" style={S.ctaPrimary}>Request Demo</a>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" style={S.sectionLight}>
        <div style={S.container}>
          <h2 style={S.sectionTitle}>Our Mission</h2>
          <p style={S.sectionDesc}>
            At CareTech Innovation, our mission is to bridge the gap between medical technology and accessibility. We empower individuals with tools that make health monitoring simple, accurate, and available to everyone.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={S.section}>
        <div style={S.container}>
          <h2 style={S.sectionTitle}>Get in Touch</h2>
          <form style={S.form} onSubmit={(e) => { e.preventDefault(); alert("Form submitted (frontend only)."); }}>
            <input style={S.input} name="name" placeholder="Your name" required />
            <input style={S.input} name="email" placeholder="Your email" type="email" required />
            <textarea style={S.textarea} name="message" placeholder="Message" required />
            <button type="submit" style={S.ctaPrimary}>Send Message</button>
          </form>
        </div>
      </section>

      {/* WhatsApp Bubble */}
      <a href="https://wa.me/923313460527" target="_blank" rel="noreferrer" style={S.whatsapp}>💬</a>

      {/* FOOTER */}
      <footer style={S.footer}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "1rem" }}>
          © {new Date().getFullYear()} CareTech Innovation. All rights reserved.
        </div>
      </footer>
    </>
  );
}

/* ---------------- inline style object ---------------- */
const S: { [k: string]: React.CSSProperties } = {
  // colors: deep blue #0A1F44, teal #14B8A6, soft gray #F5F7FA, white
  navbar: { position: "sticky", top: 0, zIndex: 1200, background: "#0A1F44", color: "#fff", boxShadow: "0 6px 18px rgba(0,0,0,0.18)" },
  navInner: { maxWidth: 1100, margin: "0 auto", padding: "0.9rem 1rem", display: "flex", alignItems: "center", justifyContent: "space-between" },
  brand: { fontWeight: 700, letterSpacing: 0.3 },
  navlinks: { display: "flex", gap: 18 },
  a: { color: "#fff", textDecoration: "none", fontWeight: 600 },

  hero: { minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: "linear-gradient(180deg,#081330 0%, #071827 100%)", color: "#fff", padding: "3rem 1rem" },
  heroOverlay: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,31,68,0.55), rgba(7,24,39,0.45))" },
  ecgContainer: { position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.18, display: "flex", alignItems: "center", justifyContent: "center" },
  ecgSvg: { width: "110%", height: 120, transform: "translateY(-10%)" },
  heroInner: { position: "relative", zIndex: 2, textAlign: "center", maxWidth: 920 },
  heroTitle: { fontSize: "2.6rem", margin: "0 0 0.6rem", lineHeight: 1.05 },
  heroSubtitle: { fontSize: "1.05rem", margin: "0 0 1.5rem", color: "#cfeee9", maxWidth: 780, marginInline: "0 auto 1.5rem" },
  heroCtas: { display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" },

  ctaPrimary: { display: "inline-block", background: "#14B8A6", color: "#fff", padding: "0.8rem 1.25rem", borderRadius: 8, textDecoration: "none", fontWeight: 700 },
  ctaOutline: { display: "inline-block", border: "2px solid #14B8A6", color: "#14B8A6", padding: "0.65rem 1.1rem", borderRadius: 8, textDecoration: "none", fontWeight: 700 },

  section: { padding: "4.5rem 1rem", background: "#fff", color: "#0A1F44" },
  sectionLight: { padding: "4.5rem 1rem", background: "#F5F7FA", color: "#0A1F44" },
  container: { maxWidth: 1100, margin: "0 auto" },
  containerRow: { maxWidth: 1100, margin: "0 auto", display: "flex", gap: 28, alignItems: "center", justifyContent: "center", flexWrap: "wrap" },

  sectionTitle: { fontSize: "1.6rem", marginBottom: 12 },
  sectionDesc: { color: "#324159", fontSize: "1rem", lineHeight: 1.6, maxWidth: 720 },

  featuresGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 18, marginTop: 20 },
  featureCard: { background: "#fff", borderRadius: 12, padding: 20, boxShadow: "0 8px 30px rgba(16,24,40,0.06)" },
  featureH: { color: "#0A1F44", margin: 0, marginBottom: 8 },
  featureP: { margin: 0, color: "#4b5563" },

  deviceLeft: { flex: "0 0 320px", textAlign: "center" },
  deviceImg: { width: 320, maxWidth: "92%", borderRadius: 12, boxShadow: "0 12px 40px rgba(10,31,68,0.12)" },
  deviceRight: { flex: "1 1 420px", maxWidth: 620, textAlign: "left" },
  specs: { marginTop: 14, color: "#334155", lineHeight: 1.7 },

  form: { marginTop: 18, display: "flex", flexDirection: "column", gap: 12, maxWidth: 620 },
  input: { padding: "0.85rem 1rem", borderRadius: 8, border: "1px solid rgba(10,31,68,0.08)", outline: "none", fontSize: 15 },
  textarea: { padding: "0.85rem 1rem", borderRadius: 8, border: "1px solid rgba(10,31,68,0.08)", minHeight: 120, resize: "vertical", fontSize: 15 },

  whatsapp: { position: "fixed", left: 20, bottom: 20, zIndex: 9999, width: 54, height: 54, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "#25D366", color: "#fff", textDecoration: "none", boxShadow: "0 8px 24px rgba(2,6,23,0.2)" },

  footer: { background: "#081830", color: "#cfeee9", textAlign: "center", padding: "1.25rem 0", marginTop: 18 }
};