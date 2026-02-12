export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="text-center text-white d-flex align-items-center hero-gradient"
        style={{ minHeight: "100vh" }}
      >
        <div className="container">
          <h1 className="display-3 fw-bold">Core360IT</h1>
          <p className="lead mt-3">
            Strategic IT. Global Reach. 360° Coverage.
          </p>
          <p className="mt-3">
            Enterprise IT consulting, cloud solutions and cybersecurity services.
          </p>
          <a href="#services" className="btn btn-light btn-lg mt-4">
            Explore Services
          </a>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-5 hero-gradient text-white">
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
                  Secure, scalable cloud architecture for modern enterprises.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="glass-card p-4 h-100">
                <h5>Cybersecurity</h5>
                <p>
                  Risk mitigation, compliance, and enterprise-grade security solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-5 bg-light text-dark">
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p className="mt-3">
            Email: support@core360it.com
          </p>
          <p>Phone: +230 5251 9002</p>
        </div>
      </section>

      {/* WHATSAPP FLOAT BUTTON */}
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
