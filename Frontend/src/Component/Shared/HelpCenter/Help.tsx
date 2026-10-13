const faqs = [
  { q: "Is WordVibe free to use?", a: "Yes! Creating an account and publishing blogs is completely free." },
  { q: "How do I start writing?", a: "Sign up, then click the 'Write' button in the navigation to create your first blog." },
  { q: "Can I edit or delete my blogs?", a: "Yes, you can manage all your published blogs from your profile page." },
  { q: "How do I contact support?", a: "Use the contact form above or email us at hello@wordvibe.com." },
];

const HelpCenter = () => {
  return (
    <section style={{ padding: "80px 24px", background: "linear-gradient(180deg, #fafafa, #f5f3ff)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>

        {/* FAQ */}
        <div>
          <span style={{ display: "inline-block", padding: "6px 18px", borderRadius: 50, background: "rgba(124,58,237,0.08)", color: "#7c3aed", fontSize: 13, fontWeight: 700, marginBottom: 20 }}>FAQ</span>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#111827", marginBottom: 32, letterSpacing: "-0.5px" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {faqs.map((item, i) => (
              <div key={i} style={{ padding: "24px", borderRadius: 16, background: "#fff", border: "1px solid #ede9fe", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 8, display: "flex", gap: 10 }}>
                  <span style={{ color: "#7c3aed" }}>Q.</span> {item.q}
                </div>
                <div style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.65, paddingLeft: 22 }}>
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support channels */}
        <div>
          <span style={{ display: "inline-block", padding: "6px 18px", borderRadius: 50, background: "rgba(124,58,237,0.08)", color: "#7c3aed", fontSize: 13, fontWeight: 700, marginBottom: 20 }}>Support</span>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#111827", marginBottom: 32, letterSpacing: "-0.5px" }}>
            How Can We Help?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { emoji: "💬", title: "General Inquiries", desc: "Questions about the WordVibe platform", time: "< 24 hrs" },
              { emoji: "🤝", title: "Partnerships", desc: "Collaboration and business opportunities", time: "< 48 hrs" },
              { emoji: "🔧", title: "Technical Support", desc: "Help with platform issues or bugs", time: "< 12 hrs" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 16, padding: "22px 24px", borderRadius: 16, background: "#fff", border: "1px solid #f0f0f5", alignItems: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
                <div style={{ fontSize: 28, flexShrink: 0 }}>{item.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: "#9ca3af" }}>{item.desc}</div>
                </div>
                <div style={{ padding: "4px 12px", borderRadius: 50, background: "#f0fdf4", color: "#059669", fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" }}>
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;
