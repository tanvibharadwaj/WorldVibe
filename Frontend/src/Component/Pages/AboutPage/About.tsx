import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 20,
        px: 2,
        background: "linear-gradient(to bottom, #fff, #faf5ff)",
        minHeight: "80vh",
      }}
    >
      {/* About WordVibe Heading */}
      <Typography variant="h3" fontWeight="bold">
        About{" "}
        <Box
          component="span"
          sx={{
            background: "linear-gradient(90deg, #5d1c9eff, #a74eb5ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          WordVibe
        </Box>
      </Typography>

      <Typography
        variant="h6"
        sx={{
          mt: 4,
          maxWidth: "700px",
          margin: "auto",
          color: "#4b5563",
        }}
      >
        We're more than just a blogging platform. We're a community of passionate writers,
        thoughtful readers, and curious minds who believe in the power of sharing knowledge
        and experiences to make the world a better place.
      </Typography>

      {/* Our Story Section */}
      <Box sx={{ mt: 10, px: 2 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Our Story
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: "800px",
            margin: "auto",
            color: "#4b5563",
            mb: 3,
          }}
        >
          WordVibe was born from a simple belief: everyone has a story worth telling. Founded
          in 2024, we started as a small team of content enthusiasts who wanted to create a
          space where quality writing could flourish without barriers.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: "800px",
            margin: "auto",
            color: "#4b5563",
            mb: 3,
          }}
        >
          What began as a passion project has grown into a thriving community of thousands of
          writers and readers from around the world. We've published hundreds of articles
          covering everything from technology and business to lifestyle and personal
          development.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: "800px",
            margin: "auto",
            color: "#4b5563",
          }}
        >
          Today, WordVibe continues to evolve, always staying true to our core mission of
          fostering meaningful connections through the written word. We're not just building a
          platform; we're nurturing a community where ideas can grow and flourish.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
