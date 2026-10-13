import { useState } from 'react';
import { subscribeApi } from '../../../services/api';

const Update = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubscribe = async () => {
    if (!email.trim()) return;
    setSuccess(''); setError(''); setLoading(true);
    try {
      const res = await subscribeApi.subscribe(email.trim());
      setSuccess(res.message); setEmail('');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to subscribe.');
    } finally { setLoading(false); }
  };

  return (
    <div style={{
      padding: "80px 24px",
      background: "linear-gradient(135deg, #f5f3ff, #fdf4ff)",
      borderTop: "1px solid #ede9fe",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <span style={{ fontSize: 40, display: "block", marginBottom: 16 }}>📬</span>
        <h3 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: "#111827", marginBottom: 12, letterSpacing: "-0.5px" }}>
          Stay in the Loop
        </h3>
        <p style={{ color: "#6b7280", fontSize: 16, lineHeight: 1.7, marginBottom: 36 }}>
          Subscribe for weekly curated stories and insights from the WordVibe community.
        </p>

        {success && <div style={{ marginBottom: 20, padding: "14px 20px", borderRadius: 12, background: "#d1fae5", color: "#065f46", fontSize: 14, fontWeight: 500 }}>✅ {success}</div>}
        {error && <div style={{ marginBottom: 20, padding: "14px 20px", borderRadius: 12, background: "#fee2e2", color: "#991b1b", fontSize: 14, fontWeight: 500 }}>❌ {error}</div>}

        <div style={{ display: "flex", gap: 0, borderRadius: 16, overflow: "hidden", border: "2px solid rgba(124,58,237,0.2)", background: "#fff", boxShadow: "0 8px 30px rgba(124,58,237,0.1)" }}>
          <input
            type="email" placeholder="Enter your email address"
            value={email} onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
            style={{ flex: 1, padding: "16px 20px", border: "none", outline: "none", fontSize: 15, background: "transparent", color: "#111827" }}
          />
          <button
            onClick={handleSubscribe} disabled={loading}
            style={{
              padding: "16px 32px", border: "none",
              background: loading ? "#c4b5fd" : "linear-gradient(135deg, #7c3aed, #c026d3)",
              color: "#fff", cursor: loading ? "not-allowed" : "pointer",
              fontSize: 15, fontWeight: 700, whiteSpace: "nowrap",
            }}
          >{loading ? "..." : "Subscribe →"}</button>
        </div>
        <p style={{ marginTop: 14, color: "#9ca3af", fontSize: 13 }}>No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  );
};

export default Update;
