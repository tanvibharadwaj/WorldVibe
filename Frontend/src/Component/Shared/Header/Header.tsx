import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const hideHeaderPaths = ["/login", "/signup"];
  if (hideHeaderPaths.includes(location.pathname.toLowerCase())) return null;

  const handleLogout = () => { logout(); navigate("/"); };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blogs" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        width: "100%",
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(255,255,255,0.95)"
          : "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(124,58,237,0.12)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(124,58,237,0.08)" : "none",
        padding: "0 24px",
        height: "68px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 36, height: 36,
            background: "linear-gradient(135deg, #7c3aed, #c026d3)",
            borderRadius: 10,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, fontWeight: 800, color: "#fff",
            boxShadow: "0 4px 15px rgba(124,58,237,0.35)",
          }}>W</div>
          <span style={{
            fontSize: 22, fontWeight: 800,
            background: "linear-gradient(135deg, #7c3aed, #c026d3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.5px",
          }}>WordVibe</span>
        </Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} style={{
                padding: "8px 16px",
                borderRadius: 10,
                textDecoration: "none",
                fontSize: 15,
                fontWeight: isActive(link.to) ? 700 : 500,
                color: isActive(link.to) ? "#7c3aed" : "#374151",
                background: isActive(link.to) ? "rgba(124,58,237,0.08)" : "transparent",
                transition: "all 0.2s ease",
              }}>
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* Desktop Actions */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {isLoggedIn ? (
              <>
                <Link to="/write" style={{
                  display: "flex", alignItems: "center", gap: 6,
                  padding: "9px 18px", borderRadius: 10,
                  background: "linear-gradient(135deg, #7c3aed, #c026d3)",
                  color: "#fff", textDecoration: "none",
                  fontSize: 14, fontWeight: 600,
                  boxShadow: "0 4px 15px rgba(124,58,237,0.3)",
                  transition: "all 0.2s ease",
                }}>
                  ✏️ Write
                </Link>
                <div style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "6px 12px", borderRadius: 10,
                  background: "rgba(124,58,237,0.06)",
                }}>
                  <div style={{
                    width: 30, height: 30,
                    background: "linear-gradient(135deg, #7c3aed, #c026d3)",
                    borderRadius: "50%", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    color: "#fff", fontSize: 12, fontWeight: 700,
                  }}>
                    {user?.name[0].toUpperCase()}
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#374151" }}>
                    {user?.name.split(" ")[0]}
                  </span>
                </div>
                <button onClick={handleLogout} style={{
                  padding: "8px 16px", borderRadius: 10,
                  border: "1.5px solid #e5e7eb",
                  background: "#fff", cursor: "pointer",
                  fontSize: 14, fontWeight: 600, color: "#6b7280",
                  transition: "all 0.2s ease",
                }}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" style={{
                  padding: "8px 18px", borderRadius: 10,
                  textDecoration: "none", fontSize: 14, fontWeight: 600,
                  color: "#7c3aed", border: "1.5px solid rgba(124,58,237,0.3)",
                  transition: "all 0.2s ease",
                }}>
                  Login
                </Link>
                <Link to="/signup" style={{
                  padding: "9px 20px", borderRadius: 10,
                  textDecoration: "none", fontSize: 14, fontWeight: 600,
                  background: "linear-gradient(135deg, #7c3aed, #c026d3)",
                  color: "#fff",
                  boxShadow: "0 4px 15px rgba(124,58,237,0.3)",
                }}>
                  Get Started
                </Link>
              </>
            )}
          </div>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            width: 40, height: 40,
            background: menuOpen ? "rgba(124,58,237,0.1)" : "rgba(124,58,237,0.06)",
            border: "none", borderRadius: 10, cursor: "pointer",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 5,
          }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: "block", width: 20, height: 2,
                background: "#7c3aed", borderRadius: 2,
                transition: "all 0.3s ease",
                transform: menuOpen
                  ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                  : i === 2 ? "rotate(-45deg) translate(5px, -5px)"
                  : "scale(0)"
                  : "none",
              }} />
            ))}
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: "fixed", top: 68, left: 0, right: 0,
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(20px)",
          zIndex: 999,
          padding: "16px 20px 24px",
          borderBottom: "1px solid rgba(124,58,237,0.1)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          animation: "fadeInUp 0.2s ease",
        }}>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block", padding: "14px 16px",
                borderRadius: 12, marginBottom: 4,
                textDecoration: "none", fontSize: 16, fontWeight: 600,
                color: isActive(link.to) ? "#7c3aed" : "#374151",
                background: isActive(link.to) ? "rgba(124,58,237,0.08)" : "transparent",
              }}>
              {link.label}
            </Link>
          ))}
          <div style={{ borderTop: "1px solid #f3f4f6", marginTop: 12, paddingTop: 12 }}>
            {isLoggedIn ? (
              <>
                <Link to="/write" onClick={() => setMenuOpen(false)} style={{
                  display: "block", padding: "14px 16px", borderRadius: 12, marginBottom: 8,
                  textDecoration: "none", fontSize: 16, fontWeight: 600,
                  background: "linear-gradient(135deg, #7c3aed, #c026d3)", color: "#fff",
                  textAlign: "center",
                }}>✏️ Write a Blog</Link>
                <button onClick={() => { setMenuOpen(false); handleLogout(); }} style={{
                  width: "100%", padding: "14px 16px", borderRadius: 12,
                  border: "1.5px solid #e5e7eb", background: "#fff",
                  fontSize: 16, fontWeight: 600, color: "#ef4444", cursor: "pointer",
                }}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMenuOpen(false)} style={{
                  display: "block", padding: "14px 16px", borderRadius: 12, marginBottom: 8,
                  textDecoration: "none", fontSize: 16, fontWeight: 600,
                  border: "1.5px solid rgba(124,58,237,0.3)", color: "#7c3aed",
                  textAlign: "center",
                }}>Login</Link>
                <Link to="/signup" onClick={() => setMenuOpen(false)} style={{
                  display: "block", padding: "14px 16px", borderRadius: 12,
                  textDecoration: "none", fontSize: 16, fontWeight: 600,
                  background: "linear-gradient(135deg, #7c3aed, #c026d3)", color: "#fff",
                  textAlign: "center",
                }}>Get Started Free</Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
