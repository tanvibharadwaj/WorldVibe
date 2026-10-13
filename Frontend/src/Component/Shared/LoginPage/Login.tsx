import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authApi, setToken } from "../../../services/api";
import { useAuth } from "../../../context/AuthContext";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      const res = await authApi.login({ email, password });
      setToken(res.token); login(res.token, res.user);
      localStorage.setItem("user", JSON.stringify(res.user));
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally { setLoading(false); }
  };

  return (
    <div style={{
      minHeight: "100vh", display: "flex",
      background: "linear-gradient(160deg, #0f0c29, #302b63, #24243e)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Orbs */}
      <div style={{ position: "absolute", top: "5%", left: "5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(60px)" }} />
      <div style={{ position: "absolute", bottom: "5%", right: "5%", width: 350, height: 350, background: "radial-gradient(circle, rgba(192,38,211,0.2) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(60px)" }} />

      {/* Left brand panel */}
      <div style={{
        flex: 1, display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center", padding: 60,
        position: "relative", zIndex: 1,
      }} className="hide-mobile">
        <div style={{ textAlign: "center", maxWidth: 400 }}>
          <div style={{
            width: 72, height: 72,
            background: "linear-gradient(135deg, #7c3aed, #c026d3)",
            borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 36, fontWeight: 900, color: "#fff",
            boxShadow: "0 8px 30px rgba(124,58,237,0.4)",
            margin: "0 auto 24px",
          }}>W</div>
          <h1 style={{ fontSize: 42, fontWeight: 900, color: "#fff", marginBottom: 16, letterSpacing: "-1.5px" }}>
            WordVibe
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 18, lineHeight: 1.7 }}>
            Join thousands of writers and readers sharing stories that matter.
          </p>
          <div style={{ marginTop: 48, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {["500+ Articles", "10K+ Readers", "200+ Writers"].map((s) => (
              <div key={s} style={{
                padding: "10px 20px", borderRadius: 50,
                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                color: "#c4b5fd", fontSize: 13, fontWeight: 600,
              }}>{s}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Right form */}
      <div style={{
        flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24, position: "relative", zIndex: 1,
      }}>
        <div style={{
          width: "100%", maxWidth: 460,
          background: "rgba(255,255,255,0.97)",
          borderRadius: 28, padding: "52px 48px",
          boxShadow: "0 30px 80px rgba(0,0,0,0.3)",
          animation: "fadeInUp 0.5s ease",
        }}>
          <div style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#111827", marginBottom: 8, letterSpacing: "-0.5px" }}>
              Welcome back 👋
            </h2>
            <p style={{ color: "#6b7280", fontSize: 15 }}>Sign in to continue your writing journey</p>
          </div>

          {error && (
            <div style={{ marginBottom: 20, padding: "14px 18px", borderRadius: 12, background: "#fef2f2", border: "1px solid #fecaca", color: "#dc2626", fontSize: 14 }}>
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 8 }}>Email address</label>
              <input
                type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={{
                  width: "100%", padding: "14px 18px", borderRadius: 12,
                  border: "1.5px solid #e5e7eb",
                  fontSize: 15, outline: "none", boxSizing: "border-box",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => e.target.style.borderColor = "#7c3aed"}
                onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 8 }}>Password</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPass ? "text" : "password"} required value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  style={{
                    width: "100%", padding: "14px 50px 14px 18px", borderRadius: 12,
                    border: "1.5px solid #e5e7eb",
                    fontSize: 15, outline: "none", boxSizing: "border-box",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#7c3aed"}
                  onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
                />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: 18, opacity: 0.5 }}>
                  {showPass ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <button type="submit" disabled={loading} style={{
              padding: "16px", borderRadius: 14, border: "none",
              background: loading ? "#c4b5fd" : "linear-gradient(135deg, #7c3aed, #c026d3)",
              color: "#fff", fontSize: 16, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer",
              boxShadow: loading ? "none" : "0 8px 25px rgba(124,58,237,0.35)",
              transition: "all 0.3s ease", marginTop: 4,
            }}>
              {loading ? "Signing in..." : "Sign In →"}
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: 28, fontSize: 14, color: "#6b7280" }}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "#7c3aed", fontWeight: 700, textDecoration: "none" }}>
              Create one free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
