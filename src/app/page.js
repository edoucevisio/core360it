export default function Home() {
  return (
    <>
      <section style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0F172A, #2563EB)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px"
      }}>
        <div>
          <h1 style={{fontSize: "3rem", fontWeight: "bold"}}>
            Core360IT
          </h1>
          <p style={{fontSize: "1.3rem", marginTop: "20px"}}>
            Strategic IT. Global Reach. 360° Coverage.
          </p>
          <p style={{marginTop: "15px", opacity: 0.8}}>
            Enterprise IT consulting, cloud solutions and cybersecurity services.
          </p>
        </div>
      </section>

      <section style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "#ffffff",
        color: "#0F172A"
      }}>
        <h2>Our Services</h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          marginTop: "40px"
        }}>
          <div style={{maxWidth: "250px"}}>
            <h3>IT Consulting</h3>
            <p>Strategic advisory aligned with business growth.</p>
          </div>

          <div style={{maxWidth: "250px"}}>
            <h3>Cloud Solutions</h3>
            <p>Secure, scalable cloud infrastructure design.</p>
          </div>

          <div style={{maxWidth: "250px"}}>
            <h3>Cybersecurity</h3>
            <p>Enterprise security and risk mitigation solutions.</p>
          </div>
        </div>
      </section>
    </>
  );
}
