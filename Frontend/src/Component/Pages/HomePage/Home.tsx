import React from "react";
import { Link } from "react-router-dom";
import { FaBookOpen, FaUsers, FaChartLine, FaPen, FaArrowRight } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";

const Home: React.FC = () => {
  const { isLoggedIn } = useAuth();

  const stats = [
    { icon: <FaBookOpen size={28} />, number: "500+", label: "Articles Published" },
    { icon: <FaUsers size={28} />, number: "10K+", label: "Active Readers" },
    { icon: <FaChartLine size={28} />, number: "50K+", label: "Monthly Views" },
    { icon: <FaPen size={28} />, number: "200+", label: "Active Writers" },
  ];

  return (
    <div style={{ background: "linear-gradient(160deg, #0f0c29, #302b63, #24243e)", minHeight: "100vh", paddingTop: 68, overflow: "hidden", position: "relative" }}>

      {/* Animated background orbs */}
      <div style={{ position: "absolute", top: "10%", left: "5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(40px)", animation: "float 6s ease-in-out infinite" }} />
      <div style={{ position: "absolute", top: "30%", right: "5%", width: 350, height: 350, background: "radial-gradient(circle, rgba(192,38,211,0.2) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(40px)", animation: "float 8s ease-in-out infinite reverse" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "40%", width: 300, height: 300, background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(40px)", animation: "float 7s ease-in-out infinite 1s" }} />

      {/* Hero Content */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "calc(100vh - 68px)", padding: "60px 24px 40px", textAlign: "center" }}>

        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.4)",
          borderRadius: 50, padding: "8px 20px", marginBottom: 32,
          backdropFilter: "blur(10px)",
        }}>
          <span style={{ width: 8, height: 8, background: "#a78bfa", borderRadius: "50%", display: "inline-block", animation: "pulse-ring 2s infinite" }} />
          <span style={{ color: "#c4b5fd", fontSize: 14, fontWeight: 600 }}>The Modern Blogging Platform</span>
        </div>

        {/* Heading */}
        <h1 style={{ fontSize: "clamp(40px, 7vw, 80px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24, maxWidth: 800, letterSpacing: "-2px" }}>
          <span style={{ color: "#fff" }}>Where Stories</span>
          <br />
          <span style={{
            background: "linear-gradient(135deg, #a78bfa, #f0abfc, #818cf8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>Come Alive</span>
        </h1>

        <p style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: "rgba(255,255,255,0.65)", maxWidth: 620, lineHeight: 1.7, marginBottom: 48, fontWeight: 400 }}>
          Join thousands of writers and readers on WordVibe. Create, discover, and share stories that inspire, educate, and connect people across the globe.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", marginBottom: 80 }}>
          <Link to="/blog" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "16px 36px", borderRadius: 14,
            background: "linear-gradient(135deg, #7c3aed, #c026d3)",
            color: "#fff", textDecoration: "none", fontSize: 16, fontWeight: 700,
            boxShadow: "0 8px 30px rgba(124,58,237,0.45)",
            transition: "all 0.3s ease",
          }}>
            Explore Blogs <FaArrowRight size={14} />
          </Link>
          <Link to={isLoggedIn ? "/write" : "/signup"} style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "16px 36px", borderRadius: 14,
            background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.25)",
            color: "#fff", textDecoration: "none", fontSize: 16, fontWeight: 700,
            backdropFilter: "blur(10px)",
          }}>
            Start Writing ✏️
          </Link>
        </div>

        {/* Stats */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 16, width: "100%", maxWidth: 800,
        }}>
          {stats.map((item, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 20, padding: "28px 20px",
              backdropFilter: "blur(10px)",
              transition: "all 0.3s ease",
            }}>
              <div style={{ color: "#a78bfa", marginBottom: 12, display: "flex", justifyContent: "center" }}>
                {item.icon}
              </div>
              <div style={{ fontSize: 32, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
                {item.number}
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: 60, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase" }}>Scroll to explore</span>
          <div style={{
            width: 24, height: 40, border: "2px solid rgba(255,255,255,0.2)",
            borderRadius: 12, display: "flex", justifyContent: "center", padding: 4,
          }}>
            <div style={{
              width: 4, height: 10, background: "#a78bfa",
              borderRadius: 2, animation: "float 1.5s ease-in-out infinite",
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
