'use client';

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>CareTech Innovation</title>
        <meta
          name="description"
          content="Revolutionizing Healthcare with AI and Portable ECG Technology"
        />
      </Head>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold text-teal" href="#">
            CareTech Innovation
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {["Home", "Features", "Device", "Mission", "Contact"].map((s) => (
                <li className="nav-item" key={s}>
                  <a className="nav-link" href={`#${s.toLowerCase()}`}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="vh-100 d-flex flex-column justify-content-center align-items-center text-center text-white"
        style={{
          background:
            "linear-gradient(180deg,#081330 0%, #071827 100%)",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Revolutionizing Healthcare</h1>
          <p className="lead mb-4">
            AI-powered portable ECG technology for every home.
          </p>
          <div>
            <a href="#device" className="btn btn-teal me-2">
              Explore Device
            </a>
            <a href="#contact" className="btn btn-outline-teal">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Core Features</h2>
          <div className="row g-4">
            {[
              {
                title: "AI ECG Analysis",
                text: "Instant AI-driven ECG report interpretation for clear understanding.",
              },
              {
                title: "Accessibility",
                text: "Portable and easy to use at home with real-time monitoring.",
              },
              {
                title: "Clinical Accuracy",
                text: "Precision and reliability comparable to hospital-grade equipment.",
              },
            ].map((f, i) => (
              <div className="col-md-4" key={i}>
                <div className="card border-0 shadow h-100">
                  <div className="card-body">
                    <h5 className="card-title text-teal fw-bold">
                      {f.title}
                    </h5>
                    <p className="card-text text-muted">{f.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVICE */}
      <section id="device" className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-6 text-center">
              <img
                src="/ecg-device.png"
                alt="Portable ECG Device"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold mb-3">The Portable ECG Device</h2>
              <p className="text-muted">
                Designed to make cardiac monitoring effortless. Capture your ECG
                anytime, anywhere, and let our AI-powered app analyze it for
                instant insights into your heart health.
              </p>
              <ul>
                <li>48+ hours continuous recording</li>
                <li>Bluetooth sync to mobile app</li>
                <li>Encrypted & privacy-first</li>
              </ul>
              <a href="#contact" className="btn btn-teal mt-3">
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Our Mission</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: 700 }}>
            At CareTech Innovation, our mission is to bridge the gap between
            medical technology and accessibility. We empower individuals with
            tools that make health monitoring simple, accurate, and available to
            everyone.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Get in Touch</h2>
          <form
            className="mx-auto"
            style={{ maxWidth: 600 }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent (frontend only)");
            }}
          >
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Your Email"
              required
            />
            <textarea
              className="form-control mb-3"
              placeholder="Message"
              rows={4}
              required
            ></textarea>
            <button className="btn btn-teal w-100">Send Message</button>
          </form>
        </div>
      </section>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/923313460527"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
      >
        💬
      </a>

      {/* FOOTER */}
      <footer className="bg-dark text-light text-center py-3">
        © {new Date().getFullYear()} CareTech Innovation. All rights reserved.
      </footer>

      {/* INLINE STYLE */}
      <style jsx>{`
        .btn-teal {
          background-color: #14b8a6;
          color: #fff;
          font-weight: 600;
        }
        .btn-teal:hover {
          background-color: #119c8f;
          color: #fff;
        }
        .btn-outline-teal {
          border: 2px solid #14b8a6;
          color: #14b8a6;
          font-weight: 600;
        }
        .btn-outline-teal:hover {
          background-color: #14b8a6;
          color: #fff;
        }
        .text-teal {
          color: #14b8a6 !important;
        }
        .whatsapp-btn {
          position: fixed;
          left: 20px;
          bottom: 20px;
          background: #25d366;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          text-decoration: none;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
          z-index: 1000;
        }
      `}</style>
    </>
  );
}