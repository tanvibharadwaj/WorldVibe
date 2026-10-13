import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { blogsApi } from "../../../services/api";
import { useAuth } from "../../../context/AuthContext";

const CATEGORIES = ["Technology", "Lifestyle", "Business", "Health", "Education", "Finance", "Travel", "Other"];

const WriteBlog = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const [form, setForm] = useState({ title: "", summary: "", content: "", category: "Technology", coverImage: "", featured: false });
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  if (!isLoggedIn) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 24, background: "linear-gradient(160deg, #0f0c29, #302b63)", paddingTop: 68 }}>
        <div style={{ fontSize: 64 }}>🔒</div>
        <h2 style={{ color: "#fff", fontSize: 28, fontWeight: 800, textAlign: "center" }}>Login to Write</h2>
        <p style={{ color: "rgba(255,255,255,0.6)", textAlign: "center", maxWidth: 360 }}>You need an account to share your stories with the world.</p>
        <div style={{ display: "flex", gap: 14 }}>
          <Link to="/login" style={{ padding: "14px 32px", borderRadius: 14, background: "linear-gradient(135deg, #7c3aed, #c026d3)", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 16 }}>Login</Link>
          <Link to="/signup" style={{ padding: "14px 32px", borderRadius: 14, background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.2)", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 16 }}>Sign Up</Link>
        </div>
      </div>
    );
  }

  const wordCount = form.content.trim().split(/\s+/).filter(Boolean).length;
  const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  const addTag = () => {
    const t = tagInput.trim();
    if (t && !tags.includes(t) && tags.length < 5) { setTags(p => [...p, t]); setTagInput(""); }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.summary || !form.content) { setError("Title, summary, and content are required."); return; }
    setError(""); setLoading(true);
    try {
      const res = await blogsApi.create({ ...form, tags, readTime });
      setSuccess(`"${res.blog.title}" published!`);
      setTimeout(() => navigate("/blog"), 1800);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to publish.");
    } finally { setLoading(false); }
  };

  const inputStyle = { width: "100%", padding: "14px 18px", borderRadius: 12, border: "1.5px solid #e5e7eb", fontSize: 15, outline: "none", boxSizing: "border-box" as const, fontFamily: "inherit", background: "#fafafa", transition: "all 0.2s" };

  return (
    <div style={{ paddingTop: 68, background: "#fafafa", minHeight: "100vh", paddingBottom: 80 }}>
      {/* Header bar */}
      <div style={{ background: "#fff", borderBottom: "1px solid #f0f0f5", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 68, zIndex: 10, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
        <div>
          <h1 style={{ fontSize: 20, fontWeight: 800, color: "#111827", margin: 0 }}>✏️ Write a Blog</h1>
          <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>{wordCount} words · {readTime}</p>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={() => navigate("/blog")} style={{ padding: "10px 20px", borderRadius: 10, border: "1.5px solid #e5e7eb", background: "#fff", cursor: "pointer", fontSize: 14, fontWeight: 600, color: "#6b7280" }}>Cancel</button>
          <button form="blog-form" type="submit" disabled={loading} style={{ padding: "10px 24px", borderRadius: 10, border: "none", background: loading ? "#c4b5fd" : "linear-gradient(135deg, #7c3aed, #c026d3)", color: "#fff", cursor: loading ? "not-allowed" : "pointer", fontSize: 14, fontWeight: 700, boxShadow: loading ? "none" : "0 4px 15px rgba(124,58,237,0.3)" }}>
            {loading ? "Publishing..." : "Publish →"}
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "40px auto", padding: "0 24px" }}>
        {success && <div style={{ marginBottom: 20, padding: "14px 18px", borderRadius: 12, background: "#d1fae5", color: "#065f46", fontWeight: 600 }}>✅ {success}</div>}
        {error && <div style={{ marginBottom: 20, padding: "14px 18px", borderRadius: 12, background: "#fee2e2", color: "#991b1b" }}>⚠️ {error}</div>}

        <form id="blog-form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>

          {/* Title */}
          <input
            placeholder="Your blog title..."
            value={form.title}
            onChange={(e) => setForm(p => ({ ...p, title: e.target.value }))}
            maxLength={200} required
            style={{ ...inputStyle, fontSize: 28, fontWeight: 700, border: "none", borderBottom: "2px solid #f0f0f5", borderRadius: 0, padding: "8px 0", background: "transparent", color: "#111827" }}
            onFocus={(e) => e.target.style.borderBottomColor = "#7c3aed"}
            onBlur={(e) => e.target.style.borderBottomColor = "#f0f0f5"}
          />

          {/* Summary */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "24px", border: "1px solid #f0f0f5" }}>
            <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#9ca3af", marginBottom: 10, letterSpacing: 1, textTransform: "uppercase" }}>Summary</label>
            <textarea
              placeholder="A short description for blog listings..."
              value={form.summary}
              onChange={(e) => setForm(p => ({ ...p, summary: e.target.value }))}
              maxLength={500} required rows={2}
              style={{ ...inputStyle, resize: "none", border: "none", padding: "0", background: "transparent" }}
            />
          </div>

          {/* Meta: category + featured */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "24px", border: "1px solid #f0f0f5", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#9ca3af", marginBottom: 10, letterSpacing: 1, textTransform: "uppercase" }}>Category</label>
              <select
                value={form.category}
                onChange={(e) => setForm(p => ({ ...p, category: e.target.value }))}
                style={{ ...inputStyle, cursor: "pointer" }}
                onFocus={(e) => e.target.style.borderColor = "#7c3aed"}
                onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
              >
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#9ca3af", marginBottom: 10, letterSpacing: 1, textTransform: "uppercase" }}>Featured Post?</label>
              <select
                value={form.featured ? "yes" : "no"}
                onChange={(e) => setForm(p => ({ ...p, featured: e.target.value === "yes" }))}
                style={{ ...inputStyle, cursor: "pointer" }}
                onFocus={(e) => e.target.style.borderColor = "#7c3aed"}
                onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
              >
                <option value="no">No</option>
                <option value="yes">Yes – show on homepage</option>
              </select>
            </div>
          </div>

          {/* Cover image */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "24px", border: "1px solid #f0f0f5" }}>
            <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#9ca3af", marginBottom: 10, letterSpacing: 1, textTransform: "uppercase" }}>Cover Image URL (optional)</label>
            <input
              type="url" placeholder="https://example.com/image.jpg"
              value={form.coverImage}
              onChange={(e) => setForm(p => ({ ...p, coverImage: e.target.value }))}
              style={inputStyle}
              onFocus={(e) => { e.target.style.borderColor = "#7c3aed"; e.target.style.background = "#fff"; }}
              onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; e.target.style.background = "#fafafa"; }}
            />
          </div>

          {/* Tags */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "24px", border: "1px solid #f0f0f5" }}>
            <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#9ca3af", marginBottom: 10, letterSpacing: 1, textTransform: "uppercase" }}>Tags (max 5)</label>
            <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
              <input
                placeholder="Add a tag..."
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTag(); } }}
                style={{ ...inputStyle, flex: 1 }}
                onFocus={(e) => { e.target.style.borderColor = "#7c3aed"; e.target.style.background = "#fff"; }}
                onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; e.target.style.background = "#fafafa"; }}
              />
              <button type="button" onClick={addTag} disabled={tags.length >= 5} style={{ padding: "14px 20px", borderRadius: 12, border: "none", background: "rgba(124,58,237,0.1)", color: "#7c3aed", fontWeight: 700, cursor: "pointer" }}>+ Add</button>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {tags.map(tag => (
                <span key={tag} style={{ padding: "6px 14px", borderRadius: 50, background: "#ede9fe", color: "#6d28d9", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                  {tag}
                  <button type="button" onClick={() => setTags(p => p.filter(t => t !== tag))} style={{ background: "none", border: "none", cursor: "pointer", color: "#7c3aed", fontSize: 14, padding: 0, lineHeight: 1 }}>✕</button>
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "24px", border: "1px solid #f0f0f5" }}>
            <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#9ca3af", marginBottom: 10, letterSpacing: 1, textTransform: "uppercase" }}>
              Content · {wordCount} words · {readTime}
            </label>
            <textarea
              placeholder="Write your story here... Be authentic, be detailed, be you."
              value={form.content}
              onChange={(e) => setForm(p => ({ ...p, content: e.target.value }))}
              required rows={20}
              style={{ ...inputStyle, resize: "vertical", minHeight: 400, lineHeight: 1.8, fontSize: 16, border: "none", padding: "0", background: "transparent" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteBlog;
