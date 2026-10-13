import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authApi, setToken } from "../../../services/api";
import { useAuth } from "../../../context/AuthContext";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) { setError("Password must be at least 6 characters."); return; }
    setError(""); setLoading(true);
    try {
      const res = await authApi.register({ name, email, password });
      setToken(res.token); login(res.token, res.user);
      localStorage.setItem("user", JSON.stringify(res.user));
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Registration failed.");
    } finally { setLoading(false); }
  };

  const perks = ["Free forever account", "Write & publish blogs", "Connect with readers", "Personalized feed"];

  return (
    <div style={{
      minHeight: "100vh", display: "flex",
      background: "linear-gradient(160deg, #0f0c29, #302b63, #24243e)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: "10%", right: "5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(60px)" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 350, height: 350, background: "radial-gradient(circle, rgba(192,38,211,0.15) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(60px)" }} />

      {/* Form first on mobile, right side on desktop */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, position: "relative", zIndex: 1 }}>
        <div style={{
          width: "100%", maxWidth: 460,
          background: "rgba(255,255,255,0.97)",
          borderRadius: 28, padding: "48px",
          boxShadow: "0 30px 80px rgba(0,0,0,0.3)",
          animation: "fadeInUp 0.5s ease",
        }}>
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#111827", marginBottom: 8, letterSpacing: "-0.5px" }}>
              Create your account ✨
            </h2>
            <p style={{ color: "#6b7280", fontSize: 15 }}>Join the WordVibe community today</p>
          </div>

          {error && (
            <div style={{ marginBottom: 20, padding: "14px 18px", borderRadius: 12, background: "#fef2f2", border: "1px solid #fecaca", color: "#dc2626", fontSize: 14 }}>
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { label: "Full Name", type: "text", value: name, setter: setName, placeholder: "Your full name" },
              { label: "Email Address", type: "email", value: email, setter: setEmail, placeholder: "you@example.com" },
            ].map(({ label, type, value, setter, placeholder }) => (
              <div key={label}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 8 }}>{label}</label>
                <input
                  type={type} required value={value}
                  onChange={(e) => setter(e.target.value)}
                  placeholder={placeholder}
                  style={{
                    width: "100%", padding: "14px 18px", borderRadius: 12,
                    border: "1.5px solid #e5e7eb", fontSize: 15,
                    outline: "none", boxSizing: "border-box",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#7c3aed"}
                  onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
                />
              </div>
            ))}

            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 8 }}>Password</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPass ? "text" : "password"} required value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  style={{
                    width: "100%", padding: "14px 50px 14px 18px", borderRadius: 12,
                    border: "1.5px solid #e5e7eb", fontSize: 15,
                    outline: "none", boxSizing: "border-box",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#7c3aed"}
                  onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
                />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: 18, opacity: 0.5 }}>
                  {showPass ? "🙈" : "👁️"}
                </button>
              </div>
              {/* Password strength */}
              <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
                {[1, 2, 3].map((level) => (
                  <div key={level} style={{
                    flex: 1, height: 3, borderRadius: 2,
                    background: password.length === 0 ? "#e5e7eb" : password.length < 6 && level <= 1 ? "#ef4444" : password.length < 10 && level <= 2 ? "#f59e0b" : level <= 3 ? "#10b981" : "#e5e7eb",
                    transition: "background 0.3s",
                  }} />
                ))}
              </div>
            </div>

            <button type="submit" disabled={loading} style={{
              padding: "16px", borderRadius: 14, border: "none",
              background: loading ? "#c4b5fd" : "linear-gradient(135deg, #7c3aed, #c026d3)",
              color: "#fff", fontSize: 16, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer",
              boxShadow: loading ? "none" : "0 8px 25px rgba(124,58,237,0.35)",
              marginTop: 4,
            }}>
              {loading ? "Creating account..." : "Create Free Account →"}
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: 24, fontSize: 14, color: "#6b7280" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#7c3aed", fontWeight: 700, textDecoration: "none" }}>Sign in</Link>
          </p>
        </div>
      </div>

      {/* Right brand panel */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: 60, position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 380 }}>
          <h2 style={{ fontSize: 38, fontWeight: 900, color: "#fff", marginBottom: 16, lineHeight: 1.2, letterSpacing: "-1px" }}>
            Start your writing{" "}
            <span style={{ background: "linear-gradient(135deg, #a78bfa, #f0abfc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              journey today
            </span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
            Everything you need to share your stories with the world.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {perks.map((perk) => (
              <div key={perk} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: "rgba(124,58,237,0.3)", border: "1px solid rgba(124,58,237,0.5)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, flexShrink: 0,
                }}>✓</div>
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, fontWeight: 500 }}>{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
