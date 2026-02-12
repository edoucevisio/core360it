export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="text-center text-white py-5">
        <div className="container">

          <h1 className="display-4 fw-bold">
            Strategic IT. Global Reach. 360° Coverage.
          </h1>

          <p className="lead mt-3 opacity-75">
            Enterprise IT consulting, cloud architecture and cybersecurity solutions.
          </p>

          <a href="#services" className="btn btn-outline-light btn-lg mt-4">
            Explore Services
          </a>

          {/* SLIDER */}
          <div
            id="heroCarousel"
            className="carousel carousel-fade slide mt-5 mx-auto"
            style={{
              maxWidth: "850px",
              borderRadius: "25px",
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0,0,0,0.7)"
            }}
          >
            <div className="carousel-inner">

              <div className="carousel-item active">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
                  className="d-block w-100"
                  alt="Infrastructure"
                />
              </div>

              <div className="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  className="d-block w-100"
                  alt="Cloud"
                />
              </div>

              <div className="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                  className="d-block w-100"
                  alt="Security"
                />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-5 text-center text-white" style={{background:"#111827"}}>
        <div className="container">
          <h2 className="mb-5">Our Services</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 rounded shadow" style={{background:"#1e293b"}}>
                <h5>IT Consulting</h5>
                <p>Strategic advisory aligned with business growth.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded shadow" style={{background:"#1e293b"}}>
                <h5>Cloud Solutions</h5>
                <p>Secure and scalable cloud infrastructure.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded shadow" style={{background:"#1e293b"}}>
                <h5>Cybersecurity</h5>
                <p>Enterprise protection and compliance frameworks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-5 text-center text-white" style={{background:"#0f172a"}}>
        <div className="container">
          <h2>Contact Core360IT</h2>
          <p className="mt-3">support@core360it.com</p>
          <p>+230 5251 9002</p>

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

      {/* FLOATING WHATSAPP */}
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
            width: "60px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            textDecoration: "none",
            boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
          }}
        >
          💬
        </a>
      </div>
    </>
  );
}
