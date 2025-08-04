import  { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const categories = ["All", "Technology", "Lifestyle", "Business"];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: 5,
        mt: 8,
        mb: 4,
        textAlign: "center",
        background: "#fff",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
        sx={{
          display: "inline-block",
        }}
      >
        Our{" "}
        <Box component="span" sx={{ color: "#8f10d4ff" }}>
          Blog
        </Box>
      </Typography>

      {/* Subheading */}
      <Typography
        variant="body1"
        color="text.secondary"
        maxWidth="900px"
        mx="auto"
        mt={1}
        mb={5}
        p={3}
      >
        Discover insights, stories, and knowledge across technology, lifestyle,
        and business. <br />
        Stay updated with the latest trends and expert perspectives.
      </Typography>

      {/* Search Input */}
      <Box maxWidth="500px" mx="auto">
        <TextField
          fullWidth
          size="medium"
          placeholder="Search articles..."
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            backgroundColor: "#f9f9f9",
            borderRadius: 15,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="disabled" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Category Tabs */}
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        flexWrap="wrap"
        mt={5} // 👈 Proper margin between search and buttons
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "contained" : "outlined"}
            onClick={() => setActiveCategory(category)}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              fontWeight: 500,
              fontSize: "0.95rem",
              backgroundColor:
                activeCategory === category ? "#c965ff" : "#fff",
              color: activeCategory === category ? "#fff" : "#000",
              borderColor: "#ddd",
              "&:hover": {
                backgroundColor:
                  activeCategory === category ? "#ab5cd2ff" : "#f3f3f3",
              },
            }}
          >
            {category}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default BlogPage;
