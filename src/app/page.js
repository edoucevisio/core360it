export default function Home() {
  return (
    <>
      {/* HERO */}
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
        </div>
      </section>

      {/* SERVICES */}
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

      {/* CTA SECTION */}
      <section className="py-5 text-center">
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

      {/* WHATSAPP FLOAT */}
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
