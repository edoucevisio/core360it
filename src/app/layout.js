import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Core360IT | Strategic IT. Global Reach.",
  description:
    "Enterprise IT consulting, cloud solutions and cybersecurity services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Bootstrap CSS CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>

      <body style={{ backgroundColor: "#111827" }}>

        {/* ================= NAVBAR ================= */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
          <div className="container">

            <a className="navbar-brand d-flex align-items-center" href="#">
              <img
                src="https://assets.core360it.com/core360ilogo.png"
                alt="Core360IT Logo"
                height="40"
                style={{
                  borderRadius: "12px",
                  padding: "4px",
                  background: "white",
                  marginRight: "10px"
                }}
              />
              <span className="fw-bold">Core360IT</span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>

          </div>
        </nav>

        {children}

        {/* ================= FOOTER ================= */}
        <footer className="bg-dark text-white text-center py-4 mt-5">
          © {new Date().getFullYear()} Core360IT. All rights reserved.
        </footer>

        {/* Bootstrap JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* Force carousel autoplay (Next.js safe) */}
        <Script id="carousel-init" strategy="afterInteractive">
{`
document.addEventListener("DOMContentLoaded", function () {
  const carouselElement = document.querySelector("#heroCarousel");
  if (carouselElement && typeof bootstrap !== "undefined") {
    new bootstrap.Carousel(carouselElement, {
      interval: 2500,
      ride: "carousel",
      pause: false,
      wrap: true
    });
  }
});
`}
        </Script>

      </body>
    </html>
  );
}
