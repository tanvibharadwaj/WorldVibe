import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogsApi, type Blog } from "../../../services/api";

const categoryColors: Record<string, { bg: string; text: string }> = {
  Technology: { bg: "#ede9fe", text: "#6d28d9" },
  Lifestyle:  { bg: "#fce7f3", text: "#9d174d" },
  Business:   { bg: "#d1fae5", text: "#065f46" },
  Health:     { bg: "#fee2e2", text: "#991b1b" },
  Education:  { bg: "#dbeafe", text: "#1e40af" },
  Finance:    { bg: "#fef9c3", text: "#854d0e" },
  Travel:     { bg: "#e0f2fe", text: "#0369a1" },
  Other:      { bg: "#f3f4f6", text: "#374151" },
};

const ArticleCard = ({ item, index }: { item: Blog; index: number }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const colors = categoryColors[item.category] || categoryColors.Other;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/blog?category=${encodeURIComponent(item.category)}`)}
      style={{
        background: "#fff",
        borderRadius: 20,
        padding: "28px",
        border: "1px solid",
        borderColor: hovered ? "rgba(124,58,237,0.3)" : "#f0f0f5",
        boxShadow: hovered ? "0 20px 60px rgba(124,58,237,0.12)" : "0 2px 20px rgba(0,0,0,0.04)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        display: "flex", flexDirection: "column", gap: 14,
        animation: `fadeInUp 0.5s ease ${index * 0.1}s both`,
      }}
    >
      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{
          padding: "5px 14px", borderRadius: 50,
          background: colors.bg, color: colors.text,
          fontSize: 12, fontWeight: 700,
        }}>{item.category}</span>
        <span style={{ fontSize: 12, color: "#9ca3af", fontWeight: 500 }}>{item.readTime}</span>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: 17, fontWeight: 700, color: "#111827",
        lineHeight: 1.4, margin: 0,
        background: hovered ? "linear-gradient(135deg, #7c3aed, #c026d3)" : "none",
        WebkitBackgroundClip: hovered ? "text" : "initial",
        WebkitTextFillColor: hovered ? "transparent" : "#111827",
        transition: "all 0.3s ease",
      }}>{item.title}</h3>

      {/* Summary */}
      <p style={{
        fontSize: 14, color: "#6b7280", lineHeight: 1.6, margin: 0,
        display: "-webkit-box", WebkitBoxOrient: "vertical",
        WebkitLineClamp: 2, overflow: "hidden",
      }}>{item.summary}</p>

      {/* Footer */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
        <span style={{ fontSize: 13, color: "#9ca3af" }}>By {item.authorName}</span>
        <span style={{
          fontSize: 13, fontWeight: 600,
          color: hovered ? "#7c3aed" : "#9ca3af",
          transition: "all 0.3s",
          display: "flex", alignItems: "center", gap: 4,
        }}>Read More →</span>
      </div>
    </div>
  );
};

const Articles = () => {
  const [articles, setArticles] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    blogsApi.getAll({ limit: 6 })
      .then((res) => setArticles(res.blogs))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section style={{ padding: "100px 24px", background: "linear-gradient(180deg, #fafafa 0%, #f5f3ff 100%)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{
            display: "inline-block", padding: "6px 18px", borderRadius: 50,
            background: "rgba(124,58,237,0.08)", color: "#7c3aed",
            fontSize: 13, fontWeight: 700, marginBottom: 16, letterSpacing: 1,
            textTransform: "uppercase",
          }}>Featured Articles</span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800,
            color: "#111827", marginBottom: 16, letterSpacing: "-1px",
          }}>
            Stories Worth{" "}
            <span style={{
              background: "linear-gradient(135deg, #7c3aed, #c026d3)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Reading</span>
          </h2>
          <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Hand-picked articles across technology, lifestyle, and business from our top writers.
          </p>
        </div>

        {/* Grid */}
        {loading ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
            {[...Array(6)].map((_, i) => (
              <div key={i} style={{
                height: 240, borderRadius: 20,
                background: "linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite",
              }} />
            ))}
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
            {articles.map((item, i) => <ArticleCard key={item._id} item={item} index={i} />)}
          </div>
        )}
      </div>
    </section>
  );
};

export default Articles;
