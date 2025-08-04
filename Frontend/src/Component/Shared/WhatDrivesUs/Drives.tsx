import { Box, Grid, Typography, Paper, Avatar } from "@mui/material";
import TargetIcon from "@mui/icons-material/CenterFocusStrong"; // mission
import FavoriteIcon from "@mui/icons-material/FavoriteBorder"; // passion
import GroupIcon from "@mui/icons-material/Groups2"; // community
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects"; // vision

const drivesData = [
  {
    title: "Our Mission",
    icon: <TargetIcon />,
    description:
      "To create a platform where knowledge flows freely and every voice can be heard, inspiring meaningful conversations and personal growth.",
  },
  {
    title: "Our Passion",
    icon: <FavoriteIcon />,
    description:
      "We believe in the power of storytelling and the impact of shared experiences to connect people across cultures and backgrounds.",
  },
  {
    title: "Our Community",
    icon: <GroupIcon />,
    description:
      "Building a diverse, inclusive community of writers and readers who support each other's journey of learning and discovery.",
  },
  {
    title: "Our Vision",
    icon: <EmojiObjectsIcon />,
    description:
      "To become the go-to destination for quality content that educates, entertains, and empowers people to make positive changes.",
  },
];

const Drives = () => {
  return (
    <Box sx={{ py: 10, px: 3, backgroundColor: "#fafafa", textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        What Drives Us
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ maxWidth: 700, mx: "auto", mb: 6, color: "#555" }}
      >
        Our core values shape everything we do and guide us in building a platform that truly
        serves our community
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {drivesData.map((item, index) => (
          <Grid size={{xs : 12, sm :6, md : 5}}  key={index}>
            <Paper
              elevation={1}
              sx={{
                mt: 5,
                p: 3,
                textAlign: "left",
                height: "90%",
                borderRadius: 2,
                backgroundColor: "#fff",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#f3e8ff",
                  color: "#a855f7",
                  mb: 2,
                  width: 40,
                  height: 40,
                }}
              >
                {item.icon}
              </Avatar>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>
                {item.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Drives;
