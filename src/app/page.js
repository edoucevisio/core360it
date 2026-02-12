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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO */}
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

          {/* TEXT */}
          <div className="mt-5 text-white">
            <h2 className="fw-bold">
              Strategic IT. Global Reach. 360° Coverage.
            </h2>

            <p className="lead mt-3 opacity-75">
              Enterprise IT consulting, cloud solutions and cybersecurity expertise.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("services")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="btn btn-success btn-lg mt-3"
            >
              Explore Services
            </button>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          background: "#111827",
          padding: "120px 0",
          scrollMarginTop: "120px"
        }}
      >
        <div className="container text-center text-white">
          <h2 className="mb-5">Our Services</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 rounded shadow" style={{ background: "#1e293b" }}>
                <h5>IT Consulting</h5>
                <p>Strategic advisory aligned with business transformation.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded shadow" style={{ background: "#1e293b" }}>
                <h5>Managed IT Services</h5>
                <p>Proactive monitoring and cloud infrastructure management.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded shadow" style={{ background: "#1e293b" }}>
                <h5>Cybersecurity</h5>
                <p>Advanced protection and compliance frameworks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          background: "#0f172a",
          padding: "120px 0",
          scrollMarginTop: "120px"
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
