'use client';

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>CareTech Innovation – The Future of Smart Healthcare</title>
        <meta
          name="description"
          content="CareTech Innovation is transforming healthcare with AI-powered portable ECG devices for real-time heart and blood pressure monitoring."
        />
        <meta
          name="keywords"
          content="AI healthcare, portable ECG, medical technology, heart monitoring, blood pressure device, CareTech Innovation, smart health"
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
              {[
                "Home",
                "Features",
                "Device",
                "Preorder",
                "Mission",
                "Contact",
              ].map((s) => (
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
            "linear-gradient(180deg,#07131f 0%, #0b243b 100%)",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Redefining Heart Health</h1>
          <p className="lead mb-4">
            AI-powered portable ECG and blood pressure monitoring—accessible,
            accurate, and intelligent.
          </p>
          <div>
            <a href="#preorder" className="btn btn-teal me-2">
              Preorder Now
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
          <h2 className="fw-bold mb-4">Key Innovations</h2>
          <div className="row g-4">
            {[
              {
                title: "AI ECG Analysis",
                text: "Get instant AI-driven ECG and heart rhythm analysis with clinical precision.",
              },
              {
                title: "Integrated Monitoring",
                text: "Monitor heart rate, blood pressure, and stress levels seamlessly from one device.",
              },
              {
                title: "Smart Health Sync",
                text: "Connect to your mobile app for real-time data tracking, reports, and cloud storage.",
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
                alt="AI Portable ECG Device"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold mb-3 text-teal">Meet the Future of ECG</h2>
              <p className="text-muted">
                Compact, intelligent, and clinically accurate. Our AI-powered ECG
                device brings hospital-grade cardiac diagnostics to your
                fingertips — without the wires or wait.
              </p>
              <ul className="text-muted">
                <li>Up to 48 hours continuous tracking</li>
                <li>Seamless Bluetooth data sync</li>
                <li>Instant AI report generation</li>
              </ul>
              <a href="#preorder" className="btn btn-teal mt-3">
                Preorder Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PREORDER */}
      <section id="preorder" className="py-5 bg-dark text-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-3 text-teal">
            Preorder the Next Evolution in Health Technology
          </h2>
          <p className="lead mx-auto" style={{ maxWidth: 700 }}>
            Be among the first to experience the new wave of personal
            healthcare. Join hundreds of early adopters eagerly awaiting this
            breakthrough device designed to make ECG and health monitoring
            effortless, intelligent, and accessible.
          </p>
          <a href="#contact" className="btn btn-light mt-3 fw-bold">
            Join the Waitlist
          </a>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Our Vision</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: 700 }}>
            At CareTech Innovation, we aim to bridge the gap between medical
            science and everyday convenience. Our mission is to empower
            individuals with cutting-edge AI tools that make healthcare more
            proactive, data-driven, and life-enhancing.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3 text-teal">Get in Touch</h2>
          <p className="text-muted mb-4">
            Have questions or want to partner with us? Let’s connect.
          </p>
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