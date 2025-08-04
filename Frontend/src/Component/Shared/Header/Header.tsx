import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // 👈 useLocation added

const Header: React.FC = () => {
  const location = useLocation();

  // 👇 hide header on /login or /signup
  const hideHeaderPaths = ["/login", "/signup"];
  if (hideHeaderPaths.includes(location.pathname)) {
    return null;
  }

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    navbar: {
      background: "linear-gradient(90deg, #633ac2ff, #9531c0ff)",
      color: "white",
      padding: "12px 36px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "fixed" as const, // ← changed from sticky
      top: 0,
      left: 0,
      right: 0,
      width: "100%",
      boxSizing: "border-box" as const,
      margin: 0,
      zIndex: 1000,
      backdropFilter: "blur(8px)", // optional: glass-like effect
      WebkitBackdropFilter: "blur(8px)",
    },

    logo: {
      fontSize: "38px",
      fontWeight: "bold",
      background: "linear-gradient(90deg, #b388ff, #e1bee7)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textDecoration: "none",
    },
    hamburger: {
      fontSize: "28px",
      color: "white",
      background: "rgba(255, 255, 255, 0.3)",
      border: "none",
      borderRadius: "6px",
      padding: "6px 12px",
      cursor: "pointer",
    },
    menuBox: {
      position: "absolute" as const,
      top: "60px",
      right: "16px",
      background: "white",
      borderRadius: "12px",
      boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column" as const,
      padding: "12px",
      zIndex: 999,
      width: "140px",
    },
    menuItem: {
      background: "#f0f0f0",
      border: "none",
      borderRadius: "8px",
      padding: "10px",
      margin: "4px 0",
      textAlign: "center" as const,
      textDecoration: "none",
      fontWeight: 600,
      color: "#333",
      transition: "background 0.3s",
    },
    loginBtn: {
      background: "linear-gradient(90deg, #8e24aa , #d500f9)", // 👈 Hover pe
      color: "#fff",
      fontWeight: 600,
      padding: "12px",
      fontSize: "16px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
    loginBtnHover: {
      Bacground: "linear-gradient(90deg, #b388ff , #e1bee7)",
    },
    menuDesktop: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
    },
    menuLink: {
      color: "white",
      textDecoration: "none",
      fontWeight: 600,
    },
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/blog", label: "Blogs" },
  ];

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>
        WordVibe
      </Link>

      {isMobile ? (
        <>
          <button
            style={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          {menuOpen && (
            <div style={styles.menuBox}>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={styles.menuItem}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/login"
                style={{ ...styles.menuItem, ...styles.loginBtn }}
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          )}
        </>
      ) : (
        <div style={styles.menuDesktop}>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} style={styles.menuLink}>
              {link.label}
            </Link>
          ))}
          <Link
            to="/login"
            style={{
              ...styles.menuLink,
              background: "#fff",
              color: "#9531c0ff",
              padding: "8px 14px",
              borderRadius: "6px",
            }}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
