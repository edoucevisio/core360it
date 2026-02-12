export default function Home() {
  return (
    <>
      {/* FULL WIDTH HERO SLIDER */}
      <section style={{ marginTop: "80px" }}>
        <div
          id="heroCarousel"
          className="carousel carousel-fade slide"
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
                  style={{
                    height: "100vh",
                    backgroundImage: `url(https://assets.core360it.com/${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative"
                  }}
                >
                  {/* DARK OVERLAY */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))"
                    }}
                  ></div>

                  {/* CENTER CONTENT */}
                  <div
                    className="d-flex flex-column justify-content-center align-items-center text-center text-white"
                    style={{
                      height: "100%",
                      position: "relative",
                      zIndex: 2
                    }}
                  >
                    <h1 className="display-4 fw-bold">
                      Core360IT
                    </h1>

                    <p className="lead mt-3">
                      Strategic IT. Global Reach. 360° Coverage.
                    </p>

                    <a
                      href="#services"
                      className="btn btn-success btn-lg mt-4"
                    >
                      Explore Services
                    </a>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-5 text-center text-white"
        style={{ background: "#0f172a" }}
      >
        <div className="container">
          <h2 className="mb-5">Our Services</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 rounded shadow" style={{ background: "#1e293b" }}>
                <h5>IT Consulting</h5>
                <p>Strategic advisory aligned with business growth.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded shadow" style={{ background: "#1e293b" }}>
                <h5>Managed IT Services</h5>
                <p>Proactive monitoring and enterprise infrastructure management.</p>
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
        style={{ background: "#111827" }}
      >
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
    </>
  );
}
