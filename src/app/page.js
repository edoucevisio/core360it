export default function Home() {
  return (
    <main style={{
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
    </main>
  );
}
