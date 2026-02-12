export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="text-center text-white"
        style={{
          backgroundImage:
            "url('https://assets.core360it.com/core360itbanner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "120px 20px",
        }}
      >
        <div className="container">

          <img
            src="https://assets.core360it.com/core360itlarge.png"
            alt="Core360IT"
            style={{
              maxWidth: "320px",
              marginBottom: "30px",
            }}
          />

          <h1 className="display-4 fw-bold">
            Strategic IT. Global Reach. 360° Coverage.
          </h1>

          <p className="lead mt-3">
            Enterprise IT consulting, cloud architecture and cybersecurity solutions.
          </p>

          <a href="#services" className="btn btn-light btn-lg mt-4">
            Explore Services
          </a>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-5 text-center bg-dark text-white">
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
      <section id="contact" className="py-5 text-center bg-black text-white">
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
