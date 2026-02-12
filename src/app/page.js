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

          {/* SLIDER */}
          <div
            id="heroCarousel"
            className="carousel carousel-fade slide mx-auto"
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

          {/* TEXT BELOW */}
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
    </>
  );
}
