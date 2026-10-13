const drivesData = [
  { emoji: "🎯", title: "Our Mission", color: "#7c3aed", bg: "#f5f3ff", description: "To create a platform where knowledge flows freely and every voice can be heard, inspiring meaningful conversations and personal growth." },
  { emoji: "❤️", title: "Our Passion", color: "#e11d48", bg: "#fff1f2", description: "We believe in the power of storytelling and the impact of shared experiences to connect people across cultures and backgrounds." },
  { emoji: "🌍", title: "Our Community", color: "#0891b2", bg: "#f0f9ff", description: "Building a diverse, inclusive community of writers and readers who support each other's journey of learning and discovery." },
  { emoji: "💡", title: "Our Vision", color: "#d97706", bg: "#fffbeb", description: "To become the go-to destination for quality content that educates, entertains, and empowers people to make positive changes." },
];

const Drives = () => (
  <section style={{ padding: "100px 24px", background: "linear-gradient(180deg, #fafafa 0%, #f5f3ff 100%)" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span style={{ display: "inline-block", padding: "6px 18px", borderRadius: 50, background: "rgba(124,58,237,0.08)", color: "#7c3aed", fontSize: 13, fontWeight: 700, marginBottom: 16 }}>What Drives Us</span>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#111827", letterSpacing: "-1px" }}>
          Our Core{" "}
          <span style={{ background: "linear-gradient(135deg, #7c3aed, #c026d3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Values</span>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
        {drivesData.map((item, i) => (
          <div key={i} style={{
            padding: "36px 30px", borderRadius: 24,
            background: "#fff", border: "1px solid #f0f0f5",
            boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
            transition: "all 0.3s ease",
            animation: `fadeInUp 0.5s ease ${i * 0.1}s both`,
          }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-8px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 50px rgba(124,58,237,0.1)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.04)"; }}
          >
            <div style={{ width: 56, height: 56, borderRadius: 16, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 20 }}>
              {item.emoji}
            </div>
            <h3 style={{ fontSize: 19, fontWeight: 700, color: "#111827", marginBottom: 12 }}>{item.title}</h3>
            <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.7 }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Drives;
