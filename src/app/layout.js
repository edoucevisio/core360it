import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Core360IT | Enterprise IT Solutions",
  description:
    "Comprehensive IT solutions, managed services and cybersecurity expertise.",
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

      <body style={{ margin: 0 }}>

        {/* NAVBAR */}
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          style={{
            background: "rgba(15,23,42,0.85)",
            backdropFilter: "blur(10px)"
          }}
        >
          <div className="container">

            <a className="navbar-brand d-flex align-items-center" href="#">
              <img
                src="https://assets.core360it.com/core360ilogo.png"
                alt="Core360IT"
                height="38"
                style={{
                  borderRadius: "8px",
                  marginRight: "10px",
                  background: "white",
                  padding: "4px"
                }}
              />
              <span className="fw-bold">Core360IT</span>
            </a>

            <div className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link text-light" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link text-light" href="#services">Services</a></li>
                <li className="nav-item"><a className="nav-link text-light" href="#contact">Contact</a></li>
              </ul>
            </div>

          </div>
        </nav>

        {children}

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* 1 SECOND AUTO SLIDE */}
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
