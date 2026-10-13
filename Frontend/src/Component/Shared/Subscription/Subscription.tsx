import { useState } from "react";
import { subscribeApi } from "../../../services/api";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = async () => {
    if (!email.trim()) return;
    setSuccess(""); setError(""); setLoading(true);
    try {
      const res = await subscribeApi.subscribe(email.trim());
      setSuccess(res.message); setEmail("");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to subscribe.");
    } finally { setLoading(false); }
  };

  return (
    <section style={{
      padding: "100px 24px",
      background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Orbs */}
      <div style={{ position: "absolute", top: "-50%", left: "-10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(60px)" }} />
      <div style={{ position: "absolute", bottom: "-30%", right: "-10%", width: 400, height: 400, background: "radial-gradient(circle, rgba(192,38,211,0.2) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(60px)" }} />

      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <span style={{
          display: "inline-block", padding: "6px 18px", borderRadius: 50,
          background: "rgba(167,139,250,0.15)", color: "#c4b5fd",
          fontSize: 13, fontWeight: 700, marginBottom: 24, letterSpacing: 1,
          border: "1px solid rgba(167,139,250,0.2)",
        }}>Newsletter</span>

        <h2 style={{
          fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 800,
          color: "#fff", marginBottom: 16, letterSpacing: "-1.5px", lineHeight: 1.1,
        }}>
          Never Miss a{" "}
          <span style={{
            background: "linear-gradient(135deg, #a78bfa, #f0abfc)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>Great Story</span>
        </h2>

        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, lineHeight: 1.7, marginBottom: 48 }}>
          Join our community of curious minds. Get curated articles, writing tips, and exclusive content — delivered to your inbox weekly.
        </p>

        {success && (
          <div style={{ marginBottom: 20, padding: "14px 20px", borderRadius: 12, background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", color: "#6ee7b7", fontSize: 14, fontWeight: 500 }}>
            ✅ {success}
          </div>
        )}
        {error && (
          <div style={{ marginBottom: 20, padding: "14px 20px", borderRadius: 12, background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)", color: "#fca5a5", fontSize: 14, fontWeight: 500 }}>
            ❌ {error}
          </div>
        )}

        <div style={{ display: "flex", gap: 12, maxWidth: 520, margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
            style={{
              flex: 1, minWidth: 240,
              padding: "16px 20px", borderRadius: 14,
              border: "1.5px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.08)",
              color: "#fff", fontSize: 15,
              backdropFilter: "blur(10px)",
              outline: "none",
            }}
          />
          <button
            onClick={handleSubscribe}
            disabled={loading}
            style={{
              padding: "16px 32px", borderRadius: 14,
              background: loading ? "rgba(124,58,237,0.5)" : "linear-gradient(135deg, #7c3aed, #c026d3)",
              color: "#fff", border: "none", cursor: loading ? "not-allowed" : "pointer",
              fontSize: 15, fontWeight: 700,
              boxShadow: loading ? "none" : "0 8px 25px rgba(124,58,237,0.4)",
              transition: "all 0.3s ease",
            }}
          >
            {loading ? "..." : "Subscribe Free →"}
          </button>
        </div>

        <p style={{ marginTop: 20, color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default SubscribeSection;
