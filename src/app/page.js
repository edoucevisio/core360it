export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="py-5 text-center bg-dark text-white">
        <div className="container">

          {/* Company Logo */}
          <img
            src="https://assets.core360it.com/core360itlarge.png"
            alt="Core360IT"
            style={{
              maxWidth: "260px",
              marginBottom: "25px"
            }}
          />

          <h1 className="display-5 fw-bold">
            Strategic IT. Global Reach. 360° Coverage.
          </h1>

          <p className="lead mt-3 opacity-75">
            Enterprise IT consulting, cloud architecture and cybersecurity solutions.
          </p>

          <a href="#services" className="btn btn-light btn-lg mt-4">
            Explore Services
          </a>

          {/* ================= PREMIUM SLIDER (UNCHANGED IMAGES) ================= */}
          <div
            id="heroCarousel"
            className="carousel carousel-fade slide mt-5 mx-auto"
            data-bs-ride="carousel"
            data-bs-interval="3500"
            style={{
              maxWidth: "850px",
              borderRadius: "30px",
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0,0,0,0.6)"
            }}
          >
            <div className="carousel-inner">

              <div className="carousel-item active">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
                  className="d-block w-100"
                  alt="IT Infrastructure"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="fw-bold">Enterprise Infrastructure</h5>
                  <p>Modern, scalable, secure architecture.</p>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  className="d-block w-100"
                  alt="Cloud Solutions"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="fw-bold">Cloud Transformation</h5>
                  <p>Scalable cloud systems built for growth.</p>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                  className="d-block w-100"
                  alt="Cybersecurity"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="fw-bold">Cybersecurity Strategy</h5>
                  <p>Enterprise-grade protection and compliance.</p>
                </div>
              </div>

            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>

          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-5 text-center bg-black text-white">
        <div className="container">
          <h2 className="mb-5">Our Services</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 rounded bg-secondary h-100">
                <h5>IT Consulting</h5>
                <p>
                  Strategic advisory aligned with business growth and digital transformation.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded bg-secondary h-100">
                <h5>Cloud Solutions</h5>
                <p>
                  Secure, scalable cloud infrastructure built for global enterprises.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded bg-secondary h-100">
                <h5>Cybersecurity</h5>
                <p>
                  Enterprise security frameworks, risk mitigation and compliance strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-5 text-center bg-dark text-white">
        <div className="container">
          <h2>Contact Core360IT</h2>
          <p className="mt-3">📧 support@core360it.com</p>
          <p>📞 +230 5251 9002</p>

          <a
            href="https://wa.me/23052519002"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success mt-3"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* ================= FLOATING WHATSAPP ================= */}
      <div
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          zIndex: 99999,
        }}
      >
        <a
          href="https://wa.me/23052519002"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#25D366",
            color: "white",
            borderRadius: "50%",
            width: "65px",
            height: "65px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "30px",
            textDecoration: "none",
            boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
          }}
        >
          💬
        </a>
      </div>
    </>
  );
}
