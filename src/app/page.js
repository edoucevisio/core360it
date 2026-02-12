export default function Home() {
  return (
    <>
      <section className="text-center text-white d-flex align-items-center"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0F172A, #2563EB)"
        }}
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

      <section id="services" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-5">Our Services</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">IT Consulting</h5>
                  <p className="card-text">
                    Strategic advisory aligned with business growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">Cloud Solutions</h5>
                  <p className="card-text">
                    Secure, scalable cloud infrastructure design.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">Cybersecurity</h5>
                  <p className="card-text">
                    Enterprise security and risk mitigation solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
