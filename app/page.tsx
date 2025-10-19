import Head from "next/head";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <Head>
        <title>CareTech Innovation</title>
        <meta
          name="description"
          content="Revolutionizing Healthcare with AI and Portable ECG Technology"
        />
        <meta
          name="keywords"
          content="CareTech, ECG, AI Healthcare, Portable ECG, Medical Innovation, Cardiac AI"
        />
        <meta property="og:title" content="CareTech Innovation" />
        <meta
          property="og:description"
          content="Revolutionizing Healthcare with AI and Portable ECG Technology"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://caretech.vercel.app/" />
        <meta property="og:image" content="/ecg-device.png" />
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navLogo}>CareTech Innovation</div>
        <div style={styles.navLinks}>
          <a href="#home" style={styles.link}>Home</a>
          <a href="#features" style={styles.link}>Features</a>
          <a href="#device" style={styles.link}>Device</a>
          <a href="#mission" style={styles.link}>Mission</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div style={styles.ecgBackground}>
          <div className="pulse"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={styles.heroContent}
        >
          <h1 style={styles.heroTitle}>Revolutionizing Healthcare</h1>
          <p style={styles.heroSubtitle}>
            AI-powered portable ECG technology for every home.
          </p>
          <div>
            <a href="#device" style={styles.primaryBtn}>Explore Device</a>
            <a href="#contact" style={styles.secondaryBtn}>Contact Us</a>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" style={styles.section}>
        <h2 style={styles.sectionTitle}>Core Features</h2>
        <div style={styles.featuresGrid}>
          {[
            {
              title: "AI ECG Analysis",
              desc: "Instant AI-driven ECG report interpretation for clear understanding.",
            },
            {
              title: "Accessibility",
              desc: "Portable and easy to use at home with real-time monitoring.",
            },
            {
              title: "Clinical Accuracy",
              desc: "Precision and reliability comparable to hospital-grade equipment.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              style={styles.featureCard}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 style={styles.featureTitle}>{f.title}</h3>
              <p style={styles.featureDesc}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Device Overview */}
      <section id="device" style={styles.sectionAlt}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={styles.deviceContainer}
        >
          <img
            src="/ecg-device.png"
            alt="Portable ECG Device"
            style={styles.deviceImg}
          />
          <div style={styles.deviceText}>
            <h2 style={styles.sectionTitle}>The Portable ECG Device</h2>
            <p style={styles.sectionDesc}>
              Designed to make cardiac monitoring effortless. Capture your ECG anytime, anywhere, and let our AI-powered app analyze it for instant insights into your heart health.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Mission */}
      <section id="mission" style={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.sectionDesc}>
            At CareTech Innovation, our mission is to bridge the gap between medical technology and accessibility. We aim to empower individuals with tools that make health monitoring simple, accurate, and available to everyone.
          </p>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>Get in Touch</h2>
        <form style={styles.form}>
          <input style={styles.input} type="text" placeholder="Your Name" required />
          <input style={styles.input} type="email" placeholder="Your Email" required />
          <textarea style={styles.textarea} placeholder="Your Message" required />
          <button type="submit" style={styles.primaryBtn}>Send Message</button>
        </form>
      </section>

      {/* WhatsApp Bubble */}
      <a
        href="https://wa.me/923313460527"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.whatsapp}
      >
        💬
      </a>

      {/* Footer */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} CareTech Innovation. All rights reserved.
      </footer>

      {/* ECG Animation Styles */}
      <style jsx>{`
        .pulse {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #14b8a6 30%, transparent 90%);
          animation: move 3s linear infinite;
        }
        @keyframes move {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
      `}</style>
    </>
  );
}

/* ---------------- Inline Styles ---------------- */
const styles: { [key: string]: React.CSSProperties } = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "#0A1F44",
    color: "#fff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  navLogo: { fontWeight: 700, fontSize: "1.2rem" },
  navLinks: { display: "flex", gap: "1.5rem" },
  link: { color: "#fff", textDecoration: "none", fontWeight: 500 },
  hero: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg, #0A1F44 0%, #081835 100%)",
    color: "#fff",
    position: "relative",
    overflow: "hidden",
  },
  ecgBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.2,
    top: 0,
    left: 0,
  },
  heroContent: { textAlign: "center", zIndex: 2, padding: "0 1rem" },
  heroTitle: { fontSize: "3rem", marginBottom: "1rem" },
  heroSubtitle: { fontSize: "1.2rem", marginBottom: "2rem" },
  primaryBtn: {
    background: "#14B8A6",
    color: "#fff",
    padding: "0.8rem 1.5rem",
    borderRadius: "6px",
    textDecoration: "none",
    marginRight: "1rem",
  },
  secondaryBtn: {
    border: "2px solid #14B8A6",
    color: "#14B8A6",
    padding: "0.8rem 1.5rem",
    borderRadius: "6px",
    textDecoration: "none",
  },
  section: {
    padding: "6rem 2rem",
    background: "#F5F7FA",
    color: "#0A1F44",
    textAlign: "center",
  },
  sectionAlt: {
    padding: "6rem 2rem",
    background: "#fff",
    color: "#0A1F44",
    textAlign: "center",
  },
  sectionTitle: { fontSize: "2rem", marginBottom: "1rem", color: "#0A1F44" },
  sectionDesc: {
    maxWidth: "700px",
    margin: "0 auto",
    fontSize: "1rem",
    lineHeight: 1.6,
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  },
  featureCard: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
  },
  featureTitle: { fontSize: "1.3rem", color: "#14B8A6", marginBottom: "1rem" },
  featureDesc: { fontSize: "1rem", color: "#555" },
  deviceContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
  },
  deviceImg: {
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
  deviceText: { maxWidth: "500px", textAlign: "left" },
  form: {
    maxWidth: "500px",
    margin: "2rem auto 0",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.8rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },
  textarea: {
    padding: "0.8rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    minHeight: "120px",
    resize: "none",
    outline: "none",
  },
  whatsapp: {
    position: "fixed",
    bottom: "25px",
    left: "25px",
    background: "#25D366",
    color: "#fff",
    fontSize: "1.5rem",
    borderRadius: "50%",
    width: "55px",
    height: "55px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    zIndex: 200,
  },
  footer: {
    textAlign: "center",
    padding: "1.5rem",
    background: "#0A1F44",
    color: "#fff",
    fontSize: "0.9rem",
  },
};