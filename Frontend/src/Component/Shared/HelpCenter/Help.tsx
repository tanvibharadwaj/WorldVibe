import { Box, Typography, Stack, Paper, Button, Grid } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";

const HelpCenter = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }}}>
      <Grid container spacing={4}>
        <Grid size={{xs : 12, md : 6}} ></Grid>{" "}
        {/* Right side left intentionally blank */}
        <Grid size={{xs : 12, md : 6}} p={5}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            What can we help you with?
          </Typography>

          <Stack spacing={4} mt={4}>
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <ChatBubbleOutlineIcon sx={{ color: "#c084fc" }} />
              <Box>
                <Typography fontWeight="bold">General Inquiries</Typography>
                <Typography variant="body2" color="text.secondary">
                  Questions about WordVibe platform
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="flex-start">
              <GroupOutlinedIcon sx={{ color: "#c084fc" }} />
              <Box>
                <Typography fontWeight="bold">Partnerships</Typography>
                <Typography variant="body2" color="text.secondary">
                  Collaboration opportunities
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="flex-start">
              <HeadphonesOutlinedIcon sx={{ color: "#c084fc" }} />
              <Box>
                <Typography fontWeight="bold">Technical Support</Typography>
                <Typography variant="body2" color="text.secondary">
                  Help with platform issues
                </Typography>
              </Box>
            </Stack>
          </Stack>

          <Paper
            elevation={0}
            sx={{
              mt: 6,
              p: 3,
              backgroundColor: "#f9edfeff",
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Frequently Asked Questions
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Looking for quick answers? Check out our FAQ section for common
              questions about WordVibe.
            </Typography>
            <Button
                
              fullWidth
              sx={{
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#c178c2ff",
                  color: "#7f147bff",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Visit FAQ Center
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HelpCenter;
