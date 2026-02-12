export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg,#0f172a,#1e293b)",
          paddingTop: "120px",
          paddingBottom: "60px"
        }}
      >
        <div className="container text-center">

          {/* CAROUSEL */}
          <div
            id="heroCarousel"
            className="carousel slide carousel-fade mx-auto"
            data-bs-ride="carousel"
            data-bs-interval="1000"
            data-bs-pause="false"
            style={{
              maxWidth: "1100px",
              borderRadius: "25px",
              overflow: "hidden",
              boxShadow: "0 40px 90px rgba(0,0,0,0.7)",
              background: "#000"
            }}
          >
            <div className="carousel-inner">

              {[
                "comprehensiveitsolution.webp",
                "empoweringyourbusinessthroughit.webp",
                "manageditservices.webp",
                "optimizeyouritinfrastructure.webp",
                "secureyouritenvironment.webp"
              ].map((img, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      height: "600px",
                      background: "#000"
                    }}
                  >
                    <img
                      src={`https://assets.core360it.com/${img}`}
                      alt="Core360IT Slide"
                      style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain"
                      }}
                    />
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* TEXT BELOW SLIDER */}
          <div className="mt-5 text-white">
            <h2 className="fw-bold">
              Strategic IT. Global Reach. 360° Coverage.
            </h2>

            <p className="lead mt-3 opacity-75">
              Enterprise IT consulting, cloud solutions and cybersecurity expertise.
            </p>

            <a href="#services" className="btn btn-success btn-lg mt-3">
              Explore Services
            </a>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-5 text-center text-white"
        style={{ background: "#111827" }}
      >
        <div className="container">
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
        className="py-5 text-center text-white"
        style={{ background: "#0f172a" }}
      >
        <div className="container">
          <h2>Contact Core360IT</h2>

          <p className="mt-4 fs-5">
            📧 support@core360it.com
          </p>

          <p className="fs-5">
            📞 +230 5251 9002
          </p>

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
    </>
  );
}
