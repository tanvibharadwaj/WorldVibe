import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Stack,
  Chip,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import NearMeIcon from "@mui/icons-material/NearMe";

const Contact = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 6, mt: 5}}>
      <Box textAlign="center" mb={6}>
        <Chip
          label="Contact Us"
          color="secondary"
          sx={{ mb: 2, fontWeight: "bold" }}
        />
        <Typography variant="h4" fontWeight="bold" color="#7a06beff">
          Let's Start a Conversation
        </Typography>
        <Typography variant="body1" color="text.secondary" mt={1}>
          Have questions, suggestions, or just want to say hello? We'd love to
          hear from you.
        </Typography>
      </Box>

      <Grid container spacing={6}>
        {/* Contact Form */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ p: 5 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              <NearMeIcon sx={{ verticalAlign: "middle", mr: 1 }} /> Send us a
              Message
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Fill out the form below and we'll get back to you as soon as
              possible.
            </Typography>
            <Grid container spacing={2} mt={1}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  required
                  label="First Name"
                  defaultValue="John"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  required
                  label="Last Name"
                  defaultValue="Doe"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  required
                  label="Email Address"
                  defaultValue="john.doe@example.com"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  required
                  label="Subject"
                  defaultValue="What's this about?"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  required
                  label="Message"
                  multiline
                  rows={4}
                  defaultValue="Tell us more about your inquiry..."
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  fullWidth
                  sx={{
                    backgroundColor: "#e393efff",
                    "&:hover": {
                      backgroundColor: "#9538cbff",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
            <Typography
              variant="caption"
              color="text.secondary"
              mt={2}
              display="block"
              textAlign={"center"}
            >
              We typically respond within 24 hours during business days.
            </Typography>
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid size={{ xs: 12, md: 5 }} p={5}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Get in Touch
          </Typography>
          <Stack spacing={2}>
            {[
              {
                icon: <EmailIcon sx={{ color: "white" }} />,
                title: "Email Us",
                subtitle: "Get in touch via email",
                detail: "hello@wordvibe.com",
              },
              {
                icon: <PhoneIcon sx={{ color: "white" }} />,
                title: "Call Us",
                subtitle: "Speak with our team",
                detail: "+1 (555) 123-4567",
              },
              {
                icon: <LocationOnIcon sx={{ color: "white" }} />,
                title: "Visit Us",
                subtitle: "Our headquarters",
                detail: "San Francisco, CA",
              },
              {
                icon: <AccessTimeIcon sx={{ color: "white" }} />,
                title: "Office Hours",
                subtitle: "Monday - Friday",
                detail: "9:00 AM - 6:00 PM PST",
              },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  transition: "all 0.3s ease",
                  borderRadius: 2,
                  px: 2,
                  py: 2,
                  "&:hover": {
                    boxShadow: 3,
                    backgroundColor: "#f9f9f9",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      background: "linear-gradient(135deg, #b339f0ff, #aa52bcff)",
                      p: 1.2,
                      borderRadius: "15%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: "40px",
                      minHeight: "40px",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography fontWeight="bold" mb={0.5}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.subtitle}
                    </Typography>
                    <Typography color="secondary">{item.detail}</Typography>
                  </Box>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
