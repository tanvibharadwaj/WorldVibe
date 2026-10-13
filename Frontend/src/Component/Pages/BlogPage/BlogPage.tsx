import { useState } from "react";
import Blogs from "../../Shared/Blogs/Blogs";
import Update from "../../Shared/StayUpdate/Update";

const categories = ["All", "Technology", "Lifestyle", "Business", "Health", "Education", "Finance"];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => setSearchTerm(searchInput.trim());

  return (
    <div style={{ paddingTop: 68, background: "#fafafa", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{
        background: "linear-gradient(160deg, #0f0c29, #302b63, #24243e)",
        padding: "80px 24px 60px", textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "0%", left: "20%", width: 300, height: 300, background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", top: "20%", right: "10%", width: 250, height: 250, background: "radial-gradient(circle, rgba(192,38,211,0.15) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(40px)" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <span style={{
            display: "inline-block", padding: "6px 18px", borderRadius: 50,
            background: "rgba(167,139,250,0.15)", color: "#c4b5fd",
            fontSize: 13, fontWeight: 700, marginBottom: 20,
            border: "1px solid rgba(167,139,250,0.2)",
          }}>Discover & Read</span>

          <h1 style={{
            fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 900,
            color: "#fff", marginBottom: 16, letterSpacing: "-1.5px",
          }}>
            Explore Our{" "}
            <span style={{ background: "linear-gradient(135deg, #a78bfa, #f0abfc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Blog
            </span>
          </h1>

          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7 }}>
            Insights, stories, and knowledge across technology, lifestyle, and business.
          </p>

          {/* Search bar */}
          <div style={{ display: "flex", maxWidth: 560, margin: "0 auto", gap: 0 }}>
            <div style={{ position: "relative", flex: 1 }}>
              <span style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", fontSize: 18, opacity: 0.5 }}>🔍</span>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                style={{
                  width: "100%", padding: "16px 20px 16px 50px",
                  borderRadius: "14px 0 0 14px",
                  border: "none", background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)", color: "#fff", fontSize: 15,
                  outline: "none", boxSizing: "border-box",
                  borderRight: "1px solid rgba(255,255,255,0.1)",
                }}
              />
            </div>
            <button
              onClick={handleSearch}
              style={{
                padding: "16px 28px", borderRadius: "0 14px 14px 0",
                background: "linear-gradient(135deg, #7c3aed, #c026d3)",
                color: "#fff", border: "none", cursor: "pointer",
                fontSize: 15, fontWeight: 700, whiteSpace: "nowrap",
              }}
            >Search</button>
          </div>
        </div>
      </div>

      {/* Category pills */}
      <div style={{
        background: "#fff", borderBottom: "1px solid #f0f0f5",
        padding: "20px 24px", position: "sticky", top: 68, zIndex: 10,
        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 10, overflowX: "auto", paddingBottom: 4 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 20px", borderRadius: 50, border: "none",
                whiteSpace: "nowrap", cursor: "pointer",
                fontSize: 14, fontWeight: 600,
                background: activeCategory === cat ? "linear-gradient(135deg, #7c3aed, #c026d3)" : "#f5f3ff",
                color: activeCategory === cat ? "#fff" : "#6d28d9",
                boxShadow: activeCategory === cat ? "0 4px 15px rgba(124,58,237,0.3)" : "none",
                transition: "all 0.25s ease",
                transform: activeCategory === cat ? "scale(1.05)" : "scale(1)",
              }}
            >{cat}</button>
          ))}
        </div>
      </div>

      {/* Results header */}
      <div style={{ maxWidth: 1200, margin: "32px auto 0", padding: "0 24px" }}>
        {(searchTerm || activeCategory !== "All") && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <p style={{ color: "#6b7280", fontSize: 15 }}>
              {searchTerm ? `Results for "${searchTerm}"` : `Category: ${activeCategory}`}
            </p>
            <button
              onClick={() => { setSearchTerm(""); setSearchInput(""); setActiveCategory("All"); }}
              style={{ background: "none", border: "none", color: "#7c3aed", cursor: "pointer", fontSize: 14, fontWeight: 600 }}
            >Clear filters ✕</button>
          </div>
        )}
      </div>

      <Blogs filters={{ category: activeCategory, search: searchTerm }} />
      <Update />
    </div>
  );
};

export default BlogPage;
