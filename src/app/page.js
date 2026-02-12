export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="py-5 text-center text-white bg-dark">
        <div className="container">

          {/* Rounded Large Logo */}
          <img
            src="https://assets.core360it.com/core360itlarge.png"
            alt="Core360IT"
            style={{
              maxWidth: "240px",
              marginBottom: "30px",
              borderRadius: "25px",
              padding: "10px",
              background: "white",
              boxShadow: "0 15px 50px rgba(0,0,0,0.6)"
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

          {/* ================= DYNAMIC ROUNDED SLIDER ================= */}
          <div
            id="heroCarousel"
            className="carousel carousel-fade slide mt-5 mx-auto"
            style={{
              maxWidth: "850px",
              borderRadius: "30px",
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0,0,0,0.7)"
            }}
          >
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
      <section id="services" className="py-5 text-center bg-black text-white">
        <div className="container">
          <h2 className="mb-5">Our Services</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 rounded bg-secondary h-100 shadow">
                <h5>IT Consulting</h5>
                <p>
                  Strategic advisory aligned with busi
