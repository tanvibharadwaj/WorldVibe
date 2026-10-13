import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();
  if (["/login", "/signup"].includes(location.pathname.toLowerCase())) return null;

  const links = {
    Platform: [
      { label: "Home", to: "/" },
      { label: "Blogs", to: "/blog" },
      { label: "Write", to: "/write" },
      { label: "About", to: "/about" },
    ],
    Support: [
      { label: "Contact", to: "/contact" },
      { label: "Help Center", to: "/contact" },
      { label: "Privacy Policy", to: "/" },
      { label: "Terms of Service", to: "/" },
    ],
  };

  return (
    <footer style={{
      background: "linear-gradient(160deg, #0f0c29, #1a1740)",
      color: "#fff", padding: "80px 24px 40px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Background orb */}
      <div style={{ position: "absolute", bottom: 0, right: "10%", width: 400, height: 400, background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Top section */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 60, marginBottom: 64, flexWrap: "wrap" }}>

          {/* Brand */}
          <div>
            <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, background: "linear-gradient(135deg, #7c3aed, #c026d3)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 20, fontWeight: 800 }}>W</div>
              <span style={{ fontSize: 24, fontWeight: 800, background: "linear-gradient(135deg, #a78bfa, #f0abfc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>WordVibe</span>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.7, maxWidth: 300, marginBottom: 28 }}>
              A modern platform for writers and readers who believe in the power of authentic storytelling.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
                { icon: <FaLinkedin />, href: "#" },
                { icon: <FaGithub />, href: "#" },
              ].map((social, i) => (
                <a key={i} href={social.href} style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.6)", fontSize: 16, textDecoration: "none",
                  transition: "all 0.2s",
                }}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 20 }}>{title}</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {items.map((item) => (
                  <Link key={item.label} to={item.to} style={{
                    color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: 15,
                    fontWeight: 500, transition: "color 0.2s",
                  }}>{item.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 32 }} />

        {/* Bottom */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 14 }}>
            © 2026 WordVibe. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link key={item} to="/" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none", fontSize: 14 }}>{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
