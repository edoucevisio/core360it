export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero-section">
        <div className="container">
          <h1 className="display-2 fw-bold">Core360IT</h1>
          <p className="lead mt-4">
            Strategic IT. Global Reach. 360° Coverage.
          </p>
          <p className="mt-3 opacity-75">
            Enterprise IT consulting, cloud architecture and cybersecurity solutions.
          </p>

          <a href="#services" className="btn btn-light btn-lg mt-4">
            Explore Services
          </a>

          {/* CENTERED SLIDER */}
          <div
            id="heroCarousel"
            className="carousel slide hero-slider"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">

              <div className="carousel-item active">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
                  className="d-block w-100"
                  alt="IT Infrastructure"
                />
              </div>

              <div className="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  className="d-block w-100"
                  alt="Cloud Solutions"
                />
              </div>

              <div className="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                  className="d-block w-100"
                  alt="Cybersecurity"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-5">
        <div className="container text-center">
          <h2 className="mb-5">Our Services</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="glass-card p-4 h-100">
                <h5>IT Consulting</h5>
                <p>
                  Strategic advisory aligned with business growth and digital transformation.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="glass-card p-4 h-100">
                <h5>Cloud Solutions</h5>
                <p>
                  Secure, scalable cloud infrastructure built for global enterprises.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="glass-card p-4 h-100">
                <h5>Cybersecurity</h5>
                <p>
                  Enterprise security frameworks, risk mitigation and compliance strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="mb-5">Why Choose Core360IT</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="glass-card p-4 h-100">
                <h5>Strategic Vision</h5>
                <p>
                  We align IT infrastructure with long-term business growth and operational efficiency.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="glass-card p-4 h-100">
                <h5>Enterprise Security</h5>
                <p>
                  Built with compliance, resilience and cybersecurity best practices at the core.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="glass-card p-4 h-100">
                <h5>Global Scalability</h5>
                <p>
                  Cloud-ready architecture designed to scale across regions and industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-5 text-center cta-section">
        <div className="container">
          <h2>Ready to Transform Your IT Strategy?</h2>
          <p className="mt-3 opacity-75">
            Let’s build scalable, secure and future-proof technology solutions.
          </p>
          <a href="#contact" className="btn btn-outline-light btn-lg mt-3">
            Schedule Consultation
          </a>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-5 text-center">
        <div className="container">
          <h2>Contact Core360IT</h2>
          <p className="mt-3">Email: support@core360it.com</p>
          <p>Phone: +230 5251 9002</p>
        </div>
      </section>

      {/* ================= WHATSAPP FLOAT ================= */}
      <a
        href="https://wa.me/23052519002"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>
    </>
  );
}
