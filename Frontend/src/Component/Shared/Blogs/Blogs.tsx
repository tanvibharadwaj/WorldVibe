import { useEffect, useState } from "react";
import { blogsApi, type Blog, type BlogFilters } from "../../../services/api";

interface BlogsProps {
  filters?: BlogFilters;
}

const categoryColors: Record<string, { bg: string; text: string; dot: string }> = {
  Technology: { bg: "#ede9fe", text: "#6d28d9", dot: "#7c3aed" },
  Lifestyle:  { bg: "#fce7f3", text: "#9d174d", dot: "#ec4899" },
  Business:   { bg: "#d1fae5", text: "#065f46", dot: "#10b981" },
  Health:     { bg: "#fee2e2", text: "#991b1b", dot: "#ef4444" },
  Education:  { bg: "#dbeafe", text: "#1e40af", dot: "#3b82f6" },
  Finance:    { bg: "#fef9c3", text: "#854d0e", dot: "#f59e0b" },
  Travel:     { bg: "#e0f2fe", text: "#0369a1", dot: "#0ea5e9" },
  Other:      { bg: "#f3f4f6", text: "#374151", dot: "#6b7280" },
};

const BlogCard = ({ blog, index }: { blog: Blog; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const colors = categoryColors[blog.category] || categoryColors.Other;
  const dateStr = new Date(blog.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid",
        borderColor: hovered ? "rgba(124,58,237,0.25)" : "#f0f0f5",
        boxShadow: hovered ? "0 24px 60px rgba(124,58,237,0.1)" : "0 2px 20px rgba(0,0,0,0.04)",
        transition: "all 0.35s ease",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        display: "flex", flexDirection: "column",
        animation: `fadeInUp 0.5s ease ${index * 0.08}s both`,
        cursor: "pointer",
      }}
    >
      {/* Color accent top bar */}
      <div style={{ height: 4, background: `linear-gradient(90deg, ${colors.dot}, ${hovered ? "#c026d3" : colors.dot}80)`, transition: "all 0.3s" }} />

      <div style={{ padding: "24px 26px", display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        {/* Tags row */}
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <span style={{ padding: "4px 12px", borderRadius: 50, background: colors.bg, color: colors.text, fontSize: 11, fontWeight: 700, letterSpacing: 0.5 }}>
            {blog.category}
          </span>
          {blog.featured && (
            <span style={{ padding: "4px 12px", borderRadius: 50, background: "linear-gradient(135deg, #fef3c7, #fde68a)", color: "#92400e", fontSize: 11, fontWeight: 700 }}>
              ⭐ Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: 18, fontWeight: 700, lineHeight: 1.4, margin: 0,
          color: hovered ? "#7c3aed" : "#111827",
          transition: "color 0.3s",
          display: "-webkit-box", WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2, overflow: "hidden",
        }}>{blog.title}</h3>

        {/* Summary */}
        <p style={{
          fontSize: 14, color: "#6b7280", lineHeight: 1.65, margin: 0,
          display: "-webkit-box", WebkitBoxOrient: "vertical",
          WebkitLineClamp: 3, overflow: "hidden",
        }}>{blog.summary}</p>

        {/* Footer */}
        <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid #f3f4f6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%",
              background: "linear-gradient(135deg, #7c3aed, #c026d3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontSize: 12, fontWeight: 700,
            }}>{blog.authorName[0]}</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>{blog.authorName}</div>
              <div style={{ fontSize: 11, color: "#9ca3af" }}>{dateStr}</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#9ca3af" }}>
            🕐 {blog.readTime}
          </div>
        </div>
      </div>
    </div>
  );
};

const Blogs = ({ filters = {} }: BlogsProps) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState("");

  const fetchBlogs = async (currentPage: number, append = false) => {
    try {
      const res = await blogsApi.getAll({ ...filters, page: currentPage, limit: 6 });
      setBlogs((prev) => (append ? [...prev, ...res.blogs] : res.blogs));
      setPages(res.pages);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to load blogs.");
    } finally { setLoading(false); setLoadingMore(false); }
  };

  useEffect(() => {
    setLoading(true); setPage(1);
    fetchBlogs(1, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.category, filters.search, filters.featured]);

  if (loading) return (
    <div style={{ padding: "40px 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            height: 280, borderRadius: 20,
            background: "linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%)",
            backgroundSize: "200% 100%", animation: "shimmer 1.5s infinite",
          }} />
        ))}
      </div>
    </div>
  );

  if (error) return (
    <div style={{ padding: "40px 24px", textAlign: "center" }}>
      <div style={{ padding: "20px 28px", borderRadius: 16, background: "#fef2f2", border: "1px solid #fecaca", color: "#ef4444", display: "inline-block" }}>
        ⚠️ {error}
      </div>
    </div>
  );

  if (blogs.length === 0) return (
    <div style={{ padding: "80px 24px", textAlign: "center" }}>
      <div style={{ fontSize: 64, marginBottom: 20 }}>✍️</div>
      <h3 style={{ fontSize: 22, fontWeight: 700, color: "#374151", marginBottom: 8 }}>No blogs yet</h3>
      <p style={{ color: "#6b7280" }}>Be the first one to share your story!</p>
    </div>
  );

  return (
    <div style={{ padding: "0 24px 60px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
          {blogs.map((blog, i) => <BlogCard key={blog._id} blog={blog} index={i} />)}
        </div>

        {page < pages && (
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button
              disabled={loadingMore}
              onClick={() => { const next = page + 1; setPage(next); setLoadingMore(true); fetchBlogs(next, true); }}
              style={{
                padding: "14px 40px", borderRadius: 14,
                border: "2px solid rgba(124,58,237,0.3)",
                background: "transparent", cursor: loadingMore ? "not-allowed" : "pointer",
                fontSize: 15, fontWeight: 700, color: "#7c3aed",
                transition: "all 0.3s",
              }}
            >
              {loadingMore ? "Loading..." : "Load More Articles"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
