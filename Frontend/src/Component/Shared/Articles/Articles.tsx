import {
  Box,
  Grid,
  Typography,
  Chip,
  Button,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const articles = [
  {
    tag: "Technology",
    time: "5 min read",
    title: "The Future of Technology in 2024",
    description:
      "Exploring the latest trends and innovations that will shape our digital landscape.",
  },
  {
    tag: "Lifestyle",
    time: "7 min read",
    title: "Building Better Habits for Success",
    description:
      "Simple strategies to develop habits that lead to personal and professional growth.",
  },
  {
    tag: "Business",
    time: "6 min read",
    title: "The Art of Modern Business Strategy",
    description:
      "How successful companies are adapting to the changing business environment.",
  },
  {
    tag: "Health",
    time: "4 min read",
    title: "Mindful Living: A Daily Practice",
    description:
      "Discover how mindfulness can improve mental health and overall well-being.",
  },
  {
    tag: "Education",
    time: "5 min read",
    title: "Top Learning Resources in 2025",
    description:
      "Explore the best platforms and tools for self-paced and structured learning.",
  },
  {
    tag: "Finance",
    time: "6 min read",
    title: "Smart Investing for Beginners",
    description:
      "A beginner-friendly guide to building wealth through smart investment habits.",
  },
];

const Articles = () => {
  const navigate = useNavigate();

  const handleReadMore = (tag: string) => {
    navigate(`/blogs?tag=${encodeURIComponent(tag)}`);
  };

  return (
    <Box sx={{ py: 6, px: 2, backgroundColor: "#f8f8fb", textAlign: "center" , pb: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Featured Articles
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" mb={5}>
        Discover our most popular and recent articles across various topics
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {articles.map((item, index) => (
          <Grid size={{sm : 10, md : 5, lg : 3.5 }} key={index}>
            <Paper
              elevation={4}
              sx={{
                m: 2,
                p: 3,
                height: "70%",
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "left",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Chip
                  label={item.tag}
                  sx={{
                    backgroundColor: "#e6d5ff",
                    color: "#7b53c1",
                    fontWeight: 600,
                    fontSize: "0.75rem",
                  }}
                />
                <Typography variant="caption" color="text.secondary">
                  {item.time}
                </Typography>
              </Box>

              <Typography
                variant="h6"
                fontWeight={600}
                mb={1}
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.4,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                mb={3}
                sx={{ fontSize: "0.9rem" }}
              >
                {item.description}
              </Typography>

              <Button
                variant="contained"
                size="small"
                onClick={() => handleReadMore(item.tag)}
                sx={{
                  alignSelf: "flex-start",
                  backgroundColor: "#e7e4ecff",
                  textTransform: "none",
                  fontWeight: 500,
                  color: "#7b53c1",
                  "&:hover": {
                    backgroundColor: "#927ac4ff",
                    color: "#fff",
                  },
                }}
              >
                Read More →
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Articles;
