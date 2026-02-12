export const metadata = {
  title: "Core360IT | Strategic IT. Global Reach.",
  description: "Enterprise IT consulting, cloud solutions and cybersecurity services."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin:0, fontFamily:"Arial, sans-serif"}}>
        
        <nav style={{
          background:"#0F172A",
          padding:"15px 30px",
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          color:"white"
        }}>
          <div style={{fontWeight:"bold", fontSize:"1.2rem"}}>
            Core360IT
          </div>

          <div style={{display:"flex", gap:"25px"}}>
            <a href="#" style={{color:"white", textDecoration:"none"}}>Home</a>
            <a href="#services" style={{color:"white", textDecoration:"none"}}>Services</a>
            <a href="#contact" style={{color:"white", textDecoration:"none"}}>Contact</a>
          </div>
        </nav>

        {children}

        <footer style={{
          background:"#0F172A",
          color:"white",
          padding:"30px",
          textAlign:"center"
        }}>
          © {new Date().getFullYear()} Core360IT. All rights reserved.
        </footer>

      </body>
    </html>
  );
}
