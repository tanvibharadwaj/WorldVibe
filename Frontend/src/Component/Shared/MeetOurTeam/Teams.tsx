const teamMembers = [
  { initials: "PP", name: "Praveen Pandey", title: "Founder & CEO", description: "With over 10 years in digital publishing, Praveen leads our vision of democratizing content creation.", gradient: "linear-gradient(135deg, #7c3aed, #c026d3)" },
  { initials: "PY", name: "Piyush Pandey", title: "Chief Technology Officer", description: "Full-stack architect building the infrastructure that powers millions of stories every month.", gradient: "linear-gradient(135deg, #0891b2, #6366f1)" },
  { initials: "VM", name: "Varsha Mishra", title: "Community Manager", description: "Passionate about building connections and fostering meaningful discussions within our community.", gradient: "linear-gradient(135deg, #d97706, #e11d48)" },
];

const Teams = () => (
  <section style={{ padding: "100px 24px", background: "#fff" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span style={{ display: "inline-block", padding: "6px 18px", borderRadius: 50, background: "rgba(124,58,237,0.08)", color: "#7c3aed", fontSize: 13, fontWeight: 700, marginBottom: 16 }}>The Team</span>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#111827", letterSpacing: "-1px" }}>
          Meet the People Behind{" "}
          <span style={{ background: "linear-gradient(135deg, #7c3aed, #c026d3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>WordVibe</span>
        </h2>
        <p style={{ color: "#6b7280", fontSize: 16, maxWidth: 500, margin: "16px auto 0", lineHeight: 1.7 }}>
          The passionate individuals who work tirelessly to make this platform amazing.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 28 }}>
        {teamMembers.map((m, i) => (
          <div key={i} style={{
            borderRadius: 24, overflow: "hidden",
            border: "1px solid #f0f0f5",
            boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
            transition: "all 0.3s ease",
            animation: `fadeInUp 0.5s ease ${i * 0.15}s both`,
          }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-8px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 24px 60px rgba(124,58,237,0.12)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.05)"; }}
          >
            {/* Gradient top */}
            <div style={{ height: 8, background: m.gradient }} />
            <div style={{ padding: "36px 32px", textAlign: "center" }}>
              <div style={{
                width: 80, height: 80, borderRadius: "50%",
                background: m.gradient, margin: "0 auto 20px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 26, fontWeight: 800, color: "#fff",
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              }}>{m.initials}</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111827", marginBottom: 6 }}>{m.name}</h3>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#7c3aed", marginBottom: 16, letterSpacing: 0.5 }}>{m.title}</p>
              <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7 }}>{m.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Teams;
