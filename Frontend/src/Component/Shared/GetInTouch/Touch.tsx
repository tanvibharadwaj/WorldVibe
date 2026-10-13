import { Link } from "react-router-dom";

const Touch = () => (
  <section style={{
    padding: "100px 24px",
    background: "linear-gradient(135deg, #0f0c29, #302b63)",
    position: "relative", overflow: "hidden",
  }}>
    <div style={{ position: "absolute", top: "-30%", left: "-5%", width: 500, height: 500, background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(60px)" }} />

    <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
      <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, color: "#fff", marginBottom: 20, letterSpacing: "-1px" }}>
        Have something to{" "}
        <span style={{ background: "linear-gradient(135deg, #a78bfa, #f0abfc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>say?</span>
      </h2>
      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, lineHeight: 1.7, marginBottom: 40 }}>
        We'd love to hear from you — questions, suggestions, or just a hello.
      </p>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <Link to="/contact" style={{
          padding: "16px 36px", borderRadius: 14, textDecoration: "none",
          background: "linear-gradient(135deg, #7c3aed, #c026d3)",
          color: "#fff", fontSize: 16, fontWeight: 700,
          boxShadow: "0 8px 25px rgba(124,58,237,0.4)",
        }}>Get in Touch →</Link>
        <a href="mailto:hello@wordvibe.com" style={{
          padding: "16px 36px", borderRadius: 14, textDecoration: "none",
          background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.2)",
          color: "#fff", fontSize: 16, fontWeight: 700,
        }}>hello@wordvibe.com</a>
      </div>
    </div>
  </section>
);

export default Touch;
