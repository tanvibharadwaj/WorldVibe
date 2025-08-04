import { Box, Typography, Button } from "@mui/material";

const SubscribeSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        textAlign: "center",
        backgroundColor: "#fdf7ff", // soft purple-pink background
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ color: "#1a1a1a" }}
      >
        Join Our Community
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        maxWidth="600px"
        mx="auto"
        mb={4}
      >
        Get the latest articles delivered to your inbox and be part of our
        growing community of readers and writers.
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#cc66ff",
          textTransform: "none",
          borderRadius: 2,
          px: 4,
          py: 1.5,
          fontWeight: 600,
          fontSize: "1rem",
          "&:hover": {
            backgroundColor: "#b347e6",
          },
        }}
      >
        Subscribe Now
      </Button>
    </Box>
  );
};

export default SubscribeSection;
