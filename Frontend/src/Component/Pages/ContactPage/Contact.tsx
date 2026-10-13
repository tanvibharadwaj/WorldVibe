import { useState } from "react";
import { contactApi } from "../../../services/api";

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(""); setError(""); setLoading(true);
    try {
      const res = await contactApi.send(form);
      setSuccess(res.message);
      setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to send message.");
    } finally { setLoading(false); }
  };

  const inputStyle = {
    width: "100%", padding: "14px 18px", borderRadius: 12,
    border: "1.5px solid #e5e7eb", fontSize: 15,
    outline: "none", boxSizing: "border-box" as const,
    fontFamily: "inherit", background: "#fafafa",
    transition: "border-color 0.2s, background 0.2s",
  };

  const labelStyle = { display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 8 } as const;

  return (
    <div style={{ paddingTop: 68 }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(160deg, #0f0c29, #302b63, #24243e)", padding: "80px 24px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", left: "15%", width: 300, height: 300, background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(50px)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <span style={{ display: "inline-block", padding: "6px 18px", borderRadius: 50, background: "rgba(167,139,250,0.15)", color: "#c4b5fd", fontSize: 13, fontWeight: 700, marginBottom: 20, border: "1px solid rgba(167,139,250,0.2)" }}>Contact Us</span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 900, color: "#fff", marginBottom: 16, letterSpacing: "-1.5px" }}>
            Let's Start a{" "}
            <span style={{ background: "linear-gradient(135deg, #a78bfa, #f0abfc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Conversation</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, maxWidth: 500, margin: "0 auto" }}>
            Have questions or suggestions? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>

          {/* Form */}
          <div style={{ background: "#fff", borderRadius: 24, padding: "48px", border: "1px solid #f0f0f5", boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "#111827", marginBottom: 8 }}>Send a Message</h2>
            <p style={{ color: "#6b7280", fontSize: 15, marginBottom: 32 }}>Fill in the form and we'll reply within 24 hours.</p>

            {success && <div style={{ marginBottom: 20, padding: "14px 18px", borderRadius: 12, background: "#d1fae5", color: "#065f46", fontSize: 14, fontWeight: 500 }}>✅ {success}</div>}
            {error && <div style={{ marginBottom: 20, padding: "14px 18px", borderRadius: 12, background: "#fee2e2", color: "#991b1b", fontSize: 14 }}>⚠️ {error}</div>}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={labelStyle}>First Name</label>
                  <input style={inputStyle} name="firstName" value={form.firstName} onChange={handleChange} placeholder="John" required
                    onFocus={(e) => { e.target.style.borderColor = "#7c3aed"; e.target.style.background = "#fff"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; e.target.style.background = "#fafafa"; }} />
                </div>
                <div>
                  <label style={labelStyle}>Last Name</label>
                  <input style={inputStyle} name="lastName" value={form.lastName} onChange={handleChange} placeholder="Doe" required
                    onFocus={(e) => { e.target.style.borderColor = "#7c3aed"; e.target.style.background = "#fff"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; e.target.style.background = "#fafafa"; }} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input style={inputStyle} type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required
                  onFocus={(e) => { e.target.style.borderColor = "#7c3aed"; e.target.style.background = "#fff"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; e.target.style.background = "#fafafa"; }} />
              </div>
              <div>
                <label style={labelStyle}>Subject</label>
                <input style={inputStyle} name="subject" value={form.subject} onChange={handleChange} placeholder="How can we help?" required
                  onFocus={(e) => { e.target.style.borderColor = "#7c3aed"; e.target.style.background = "#fff"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; e.target.style.background = "#fafafa"; }} />
              </div>
              <div>
                <label style={labelStyle}>Message</label>
                <textarea style={{ ...inputStyle, resize: "vertical", minHeight: 140 }} name="message" value={form.message} onChange={handleChange} placeholder="Tell us more..." required
                  onFocus={(e) => { e.target.style.borderColor = "#7c3aed"; e.target.style.background = "#fff"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; e.target.style.background = "#fafafa"; }} />
              </div>
              <button type="submit" disabled={loading} style={{
                padding: "16px", borderRadius: 14, border: "none",
                background: loading ? "#c4b5fd" : "linear-gradient(135deg, #7c3aed, #c026d3)",
                color: "#fff", fontSize: 16, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer",
                boxShadow: loading ? "none" : "0 8px 25px rgba(124,58,237,0.35)",
              }}>{loading ? "Sending..." : "Send Message →"}</button>
            </form>
          </div>

          {/* Info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { emoji: "📧", title: "Email Us", sub: "Get in touch via email", detail: "hello@wordvibe.com", color: "#7c3aed", bg: "#f5f3ff" },
              { emoji: "📞", title: "Call Us", sub: "Speak with our team", detail: "+1 (555) 123-4567", color: "#0891b2", bg: "#f0f9ff" },
              { emoji: "📍", title: "Visit Us", sub: "Our headquarters", detail: "San Francisco, CA", color: "#059669", bg: "#f0fdf4" },
              { emoji: "🕐", title: "Office Hours", sub: "Monday – Friday", detail: "9:00 AM – 6:00 PM PST", color: "#d97706", bg: "#fffbeb" },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 20,
                padding: "24px 28px", borderRadius: 20,
                border: "1px solid #f0f0f5", background: "#fff",
                boxShadow: "0 2px 16px rgba(0,0,0,0.03)",
                transition: "all 0.3s ease",
                animation: `fadeInUp 0.5s ease ${i * 0.1}s both`,
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateX(6px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.03)"; }}
              >
                <div style={{ width: 52, height: 52, borderRadius: 14, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                  {item.emoji}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 2 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: "#9ca3af", marginBottom: 4 }}>{item.sub}</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: item.color }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
