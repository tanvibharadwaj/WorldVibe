const options = [
  { emoji: "💬", title: "Live Chat", desc: "Get instant help from our support team in real time.", btn: "Start Chat", color: "#7c3aed", bg: "#f5f3ff" },
  { emoji: "👥", title: "Community Forum", desc: "Join discussions and connect with other WordVibe users.", btn: "Join Forum", color: "#0891b2", bg: "#f0f9ff" },
  { emoji: "📚", title: "Help Docs", desc: "Browse comprehensive documentation and tutorials.", btn: "View Docs", color: "#059669", bg: "#f0fdf4" },
];

const Connect = () => (
  <section style={{ padding: "80px 24px", background: "#fff" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
      <h2 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 800, color: "#111827", marginBottom: 16, letterSpacing: "-0.5px" }}>
        Other Ways to{" "}
        <span style={{ background: "linear-gradient(135deg, #7c3aed, #c026d3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Connect</span>
      </h2>
      <p style={{ color: "#6b7280", fontSize: 16, marginBottom: 56 }}>Multiple ways to get the support you need.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
        {options.map((opt, i) => (
          <div key={i} style={{
            padding: "40px 32px", borderRadius: 24, textAlign: "center",
            border: "1px solid #f0f0f5", background: "#fafafa",
            transition: "all 0.3s ease",
            animation: `fadeInUp 0.5s ease ${i * 0.1}s both`,
          }}
            onMouseEnter={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.transform = "translateY(-8px)"; d.style.boxShadow = "0 20px 50px rgba(0,0,0,0.08)"; d.style.background = "#fff"; d.style.borderColor = "rgba(124,58,237,0.2)"; }}
            onMouseLeave={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.transform = "translateY(0)"; d.style.boxShadow = "none"; d.style.background = "#fafafa"; d.style.borderColor = "#f0f0f5"; }}
          >
            <div style={{ width: 72, height: 72, borderRadius: 20, background: opt.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, margin: "0 auto 20px" }}>{opt.emoji}</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111827", marginBottom: 10 }}>{opt.title}</h3>
            <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.65, marginBottom: 28 }}>{opt.desc}</p>
            <button style={{
              padding: "12px 28px", borderRadius: 12,
              background: "transparent", border: `2px solid ${opt.color}`,
              color: opt.color, fontSize: 14, fontWeight: 700, cursor: "pointer",
              transition: "all 0.2s",
            }}
              onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = opt.color; b.style.color = "#fff"; }}
              onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "transparent"; b.style.color = opt.color; }}
            >{opt.btn}</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Connect;
