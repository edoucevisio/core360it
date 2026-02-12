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
          <div id="heroCarousel" className="carousel slide hero-slider" data-bs-ride="carousel">
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
                <h5>Strategic Vision
