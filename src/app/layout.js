import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Core360IT | Enterprise IT Solutions",
  description:
    "Strategic IT consulting, managed services and cybersecurity solutions.",
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

      <body style={{ background: "#0f172a" }}>

        {/* NAVBAR */}
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          style={{
            background: "rgba(15,23,42,0.95)",
            backdropFilter: "blur(10px)"
          }}
        >
          <div className="container">

            <a className="navbar-brand d-flex align-items-center" href="#">
              <img
                src="https://assets.core360it.com/core360ilogo.png"
                alt="Core360IT"
                height="40"
                style={{
                  borderRadius: "8px",
                  background: "white",
                  padding: "4px",
                  marginRight: "10px"
                }}
              />
              <span className="fw-bold">Core360IT</span>
            </a>

            <div className="collapse navbar-collapse justify-content-end">
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

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/23052519002"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 999,
          }}
        >
          <img
            src="https://assets.core360it.com/whatsapp.webp"
            alt="WhatsApp"
            width="55"
            style={{
              borderRadius: "50%",
              boxShadow: "0 10px 30px rgba(0,0,0,0.6)"
            }}
          />
        </a>

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
