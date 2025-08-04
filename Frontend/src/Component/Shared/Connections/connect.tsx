import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";

const options = [
  {
    title: "Live Chat",
    description: "Get instant help through our live chat support",
    icon: <ChatBubbleOutlineIcon sx={{ fontSize: 40, color: "#c084fc" }} />,
    button: "Start Chat",
  },
  {
    title: "Community Forum",
    description: "Join discussions with other WordVibe users",
    icon: <GroupOutlinedIcon sx={{ fontSize: 40, color: "#c084fc" }} />,
    button: "Join Forum",
  },
  {
    title: "Help Center",
    description: "Browse our comprehensive help documentation",
    icon: <HeadphonesOutlinedIcon sx={{ fontSize: 40, color: "#c084fc" }} />,
    button: "Get Help",
  },
];

const Connect = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        align="center"
        color="#a855f7"
        gutterBottom
      >
        Other Ways to Connect
      </Typography>

      <Grid container spacing={4} mt={5} justifyContent="center">
        {options.map((option, index) => (
          <Grid size={{xs : 12, sm : 6, md : 4}}  key={index}>
            <Stack spacing={2} alignItems="center">
              {option.icon}
              <Typography variant="h6" fontWeight="bold">
                {option.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
              >
                {option.description}
              </Typography>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  maxWidth: 250,
                  transition: "all 0.3s ease",
                  '&:hover': {
                    backgroundColor: "#f3e8ff",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {option.button}
              </Button>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Connect;
