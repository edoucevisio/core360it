"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const slides = [
    "comprehensiveitsolution.webp",
    "empoweringyourbusinessthroughit.webp",
    "manageditservices.webp",
    "optimizeyouritinfrastructure.webp",
    "secureyouritenvironment.webp"
  ];

  const [current, setCurrent] = useState(0);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    const counter = setInterval(() => {
      setCount((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);

    return () => {
      clearInterval(slider);
      clearInterval(counter);
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg,#0f172a,#1e293b)",
          paddingTop: "120px",
          paddingBottom: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style={{ width: "100%", maxWidth: "1200px", textAlign: "center" }}>

          {/* SLIDER */}
          <div
            style={{
              position: "relative",
              height: "600px",
              borderRadius: "30px",
              overflow: "hidden",
              boxShadow: "0 40px 90px rgba(0,0,0,0.7)",
              background: "#000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {slides.map((img, index) => (
              <img
                key={index}
                src={`https://assets.core360it.com/${img}`}
                alt="Core360IT Slide"
                style={{
                  position: "absolute",
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                  transition: "opacity 1s ease-in-out",
                  opacity: current === index ? 1 : 0
                }}
              />
            ))}
          </div>

          {/* HERO TEXT */}
          <div className="mt-5 text-white">
            <h2 className="fw-bold">
              Strategic IT. Global Reach. 360° Coverage.
            </h2>
            <p className="lead mt-3 opacity-75">
              Enterprise IT consulting, cloud architecture and cybersecurity expertise.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        style={{
          background: "#111827",
          padding: "100px 0"
        }}
      >
        <div className="container text-center text-white">
          <h2 className="mb-5">Why Choose Core360IT</h2>

          <div className="row g-4">
            {[
              {
                title: "Enterprise Expertise",
                text: "Deep technical knowledge across cloud, infrastructure and cybersecurity."
              },
              {
                title: "24/7 Proactive Monitoring",
                text: "We prevent problems before they impact your business."
              },
              {
                title: "Scalable Solutions",
                text: "Designed to grow with your organization."
              }
            ].map((item, i) => (
              <div key={i} className="col-md-4">
                <div
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "20px",
                    padding: "40px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "transform 0.3s ease"
                  }}
                  className="h-100"
                >
                  <h5>{item.title}</h5>
                  <p className="mt-3 opacity-75">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section
        style={{
          background: "linear-gradient(135deg,#0f172a,#1e293b)",
          padding: "100px 0"
        }}
      >
        <div className="container text-center text-white">
          <div className="row g-4">

            <div className="col-md-3">
              <h1 className="fw-bold text-success">{count}%</h1>
              <p className="opacity-75">Client Satisfaction</p>
            </div>

            <div className="col-md-3">
              <h1 className="fw-bold text-success">24/7</h1>
              <p className="opacity-75">Monitoring & Support</p>
            </div>

            <div className="col-md-3">
              <h1 className="fw-bold text-success">100+</h1>
              <p className="opacity-75">Projects Delivered</p>
            </div>

            <div className="col-md-3">
              <h1 className="fw-bold text-success">10+</h1>
              <p className="opacity-75">Years Experience</p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          background: "#0f172a",
          padding: "100px 0"
        }}
      >
        <div className="container text-center text-white">
          <h2>Contact Core360IT</h2>
          <p className="mt-4 fs-5">📧 support@core360it.com</p>
          <p className="fs-5">📞 +230 5251 9002</p>

          <a
            href="https://wa.me/23052519002"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success mt-4 btn-lg"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
