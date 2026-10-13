const About = () => (
  <div style={{ paddingTop: 68 }}>
    {/* Hero */}
    <div style={{
      background: "linear-gradient(160deg, #0f0c29, #302b63, #24243e)",
      padding: "100px 24px 80px", textAlign: "center",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: "10%", left: "10%", width: 350, height: 350, background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(60px)" }} />
      <div style={{ position: "absolute", bottom: "0%", right: "10%", width: 300, height: 300, background: "radial-gradient(circle, rgba(192,38,211,0.15) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(60px)" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
        <span style={{ display: "inline-block", padding: "6px 18px", borderRadius: 50, background: "rgba(167,139,250,0.15)", color: "#c4b5fd", fontSize: 13, fontWeight: 700, marginBottom: 24, border: "1px solid rgba(167,139,250,0.2)" }}>
          Our Story
        </span>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 68px)", fontWeight: 900, color: "#fff", marginBottom: 24, letterSpacing: "-2px", lineHeight: 1.1 }}>
          About{" "}
          <span style={{ background: "linear-gradient(135deg, #a78bfa, #f0abfc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            WordVibe
          </span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 19, lineHeight: 1.75, maxWidth: 680, margin: "0 auto" }}>
          We're more than a blogging platform — we're a community where passionate writers and curious readers come together to exchange ideas, share experiences, and grow.
        </p>
      </div>
    </div>

    {/* Story section */}
    <div style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <span style={{ display: "inline-block", padding: "6px 18px", borderRadius: 50, background: "#f5f3ff", color: "#7c3aed", fontSize: 13, fontWeight: 700, marginBottom: 20 }}>Our Story</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#111827", marginBottom: 24, lineHeight: 1.2, letterSpacing: "-1px" }}>
            Built by writers,<br />for writers
          </h2>
          <p style={{ color: "#6b7280", fontSize: 16, lineHeight: 1.8, marginBottom: 18 }}>
            WordVibe was born from a simple belief: everyone has a story worth telling. Founded in 2024, we started as a small team of content enthusiasts who wanted to create a space where quality writing could flourish.
          </p>
          <p style={{ color: "#6b7280", fontSize: 16, lineHeight: 1.8, marginBottom: 18 }}>
            What began as a passion project has grown into a thriving community of thousands of writers and readers from around the world.
          </p>
          <p style={{ color: "#6b7280", fontSize: 16, lineHeight: 1.8 }}>
            Today, WordVibe continues to evolve, staying true to our mission of fostering meaningful connections through the written word.
          </p>
        </div>
        {/* Stats grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {[
            { num: "500+", label: "Articles", color: "#7c3aed" },
            { num: "10K+", label: "Readers", color: "#c026d3" },
            { num: "200+", label: "Writers", color: "#6366f1" },
            { num: "50K+", label: "Monthly Views", color: "#0ea5e9" },
          ].map((s) => (
            <div key={s.label} style={{
              padding: "36px 24px", borderRadius: 20, textAlign: "center",
              background: "linear-gradient(135deg, #f5f3ff, #fdf4ff)",
              border: "1px solid #ede9fe",
            }}>
              <div style={{ fontSize: 40, fontWeight: 900, color: s.color, marginBottom: 8 }}>{s.num}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#6b7280" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default About;
