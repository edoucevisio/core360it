import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Core360IT | Strategic IT Solutions",
  description:
    "Enterprise IT consulting, cloud solutions and cybersecurity services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>

      <body style={{ background: "linear-gradient(135deg,#0f172a,#1e293b)" }}>

        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-3">
          <div className="container">

            <a className="navbar-brand d-flex align-items-center" href="#">
              <img
                src="https://assets.core360it.com/core360ilogo.png"
                alt="Core360IT Logo"
                height="38"
                style={{
                  borderRadius: "10px",
                  padding: "3px",
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
                  <a className="nav-link text-light" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#contact">Contact</a>
                </li>
              </ul>
            </div>

          </div>
        </nav>

        {children}

        {/* FOOTER */}
        <footer className="text-center text-light py-4 mt-5" style={{background:"#0f172a"}}>
          © {new Date().getFullYear()} Core360IT. All rights reserved.
        </footer>

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* Fast 1-second Carousel */}
        <Script id="carousel-init" strategy="afterInteractive">
{`
document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector("#heroCarousel");
  if (el && typeof bootstrap !== "undefined") {
    new bootstrap.Carousel(el, {
      interval: 1000,
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
