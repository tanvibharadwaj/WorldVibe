import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface Blog {
  category: string;
  featured?: boolean;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  author: string;
}

const blogData: Blog[] = [
  {
    category: "Technology",
    featured: true,
    title: "The Future of Artificial Intelligence in Everyday Life",
    summary:
      "Exploring how AI is revolutionizing the way we work, communicate, and live our daily lives. From smart homes to autonomous vehicles, discover what's next.",
    date: "March 15, 2024",
    readTime: "8 min read",
    author: "Priya Sharma",
  },
  {
    category: "Lifestyle",
    title: "Building Sustainable Habits for Long-term Success",
    summary:
      "Learn the science behind habit formation and discover practical strategies to build habits that stick. Transform your life one small step at a time.",
    date: "March 12, 2024",
    readTime: "6 min read",
    author: "Rahul Gupta",
  },
  {
    category: "Business",
    featured: true,
    title: "Remote Work Revolution: Best Practices for 2024",
    summary:
      "As remote work becomes the norm, discover the tools, techniques, and mindset shifts needed to thrive in a distributed work environment.",
    date: "March 10, 2024",
    readTime: "7 min read",
    author: "Anjali Singh",
  },
  {
    category: "Lifestyle",
    title: "Mindfulness in the Digital Age: Finding Balance",
    summary:
      "In our hyperconnected world, learn how to maintain mental clarity and emotional well-being through mindfulness practices and digital detox strategies.",
    date: "March 8, 2024",
    readTime: "5 min read",
    author: "Priya Sharma",
  },
  {
    category: "Technology",
    title: "Cryptocurrency and the Future of Finance",
    summary:
      "Understanding blockchain technology, digital currencies, and how they're reshaping the financial landscape. A beginner's guide to crypto investing.",
    date: "March 5, 2024",
    readTime: "9 min read",
    author: "Rahul Gupta",
  },
  {
    category: "Business",
    featured: true,
    title: "Entrepreneurship Lessons from Indian Startups",
    summary:
      "Insights from successful Indian entrepreneurs and the key lessons learned from building companies from the ground up in challenging markets.",
    date: "March 3, 2024",
    readTime: "6 min read",
    author: "Anjali Singh",
  },
];

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Technology":
        return "primary";
      case "Business":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <Card sx={{ height: "90%", p: 3, borderRadius: 3 }} elevation={5}>
      <CardContent>
        <Stack direction="row" spacing={3} mb={1} alignItems="center">
          <Chip
            label={blog.category}
            size="small"
            color={getCategoryColor(blog.category)}
            sx={{ fontWeight: "bold" }}
          />
          {blog.featured && (
            <Chip label="Featured" size="small" variant="outlined" />
          )}
        </Stack>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          {blog.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          gutterBottom
        >
          {blog.summary}
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center" mt={1}>
          <CalendarTodayIcon sx={{ fontSize: 14 }} />
          <Typography variant="caption">{blog.date}</Typography>
          <AccessTimeIcon sx={{ fontSize: 14, ml: 2 }} />
          <Typography variant="caption">{blog.readTime}</Typography>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          <Typography variant="body2" fontWeight="bold">
            By {blog.author}
          </Typography>
          <Button
            size="small"
            endIcon={<ArrowForwardIcon fontSize="small" />}
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#efdbff",
                transform: "translateY(-2px)",
              },
            }}
          >
            Read More
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

const Blogs: React.FC = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
      <Grid container spacing={4}>
        {blogData.map((blog, index) => (
          <Grid size={{xs :12, sm : 6, md : 4}} key={index}>
            <BlogCard blog={blog} />
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" mt={6}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 2,
            px: 4,
            py: 1,
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#e1bdfcff",
              color: "#fff",
              transform: "translateY(-2px)",
            },
          }}
        >
          Load More Articles
        </Button>
      </Box>
    </Box>
  );
};

export default Blogs;

