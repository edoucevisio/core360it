export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg,#0f172a,#1e293b)",
          paddingTop: "100px",
          paddingBottom: "60px"
        }}
      >
        <div className="container text-center">

          {/* CENTERED SLIDER */}
          <div
            id="heroCarousel"
            className="carousel carousel-fade slide mx-auto"
            style={{
              maxWidth: "1000px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0,0,0,0.7)"
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
                    style={{
                      height: "550px",
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
                        background: "rgba(0,0,0,0.45)"
                      }}
                    ></div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* TEXT BELOW SLIDER (CLEAN) */}
          <div className="mt-5 text-white">
            <h2 className="fw-bold">
              Strategic IT. Global Reach. 360° Coverage.
            </h2>

            <p className="lead mt-3 opacity-75">
              Enterprise IT consulting, cloud architecture and cybersecurity solutions.
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
    </>
  );
}
