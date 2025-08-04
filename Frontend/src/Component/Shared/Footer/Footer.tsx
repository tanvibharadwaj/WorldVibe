import {
  Box,
  Grid,
  Typography,
  IconButton,
  Link,
  Divider,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  const location = useLocation();
  const hideFooterRoutes = ["/login", "/signup"];
  if (hideFooterRoutes.includes(location.pathname)) return null;

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#fff",
        color: "#444",
        p: 6,
        borderTop: "1px solid #e0e0e0",
        fontFamily: "sans-serif",
      }}
    >
      {/* Top Section */}
      <Grid container spacing={4}>
        {/* Logo and About */}
        <Grid size={{ xs: 12, sm: 7, md: 4 }}>
          <Box display="flex" alignItems="center" mb={2}>
            <Typography
              variant="h4"
              sx={{ color: "#7b53c1", fontWeight: 700, ml: 1 }}
            >
              WordVibe
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Discover the power of words. Share your stories, connect with
            readers, and build your digital presence with WordVibe.
          </Typography>
          <Box display="flex" gap={1}>
            <IconButton size="small" color="inherit">
              <FaTwitter />
            </IconButton>
            <IconButton size="small" color="inherit">
              <FaInstagram />
            </IconButton>
            <IconButton size="small" color="inherit">
              <FaLinkedin />
            </IconButton>
            <IconButton size="small" color="inherit">
              <FaPinterest />
            </IconButton>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid size={{ xs: 12, sm: 5, md: 3 }}>
          <Typography fontWeight={600} mb={1}>
            Quick Links
          </Typography>
          {["Home", "About", "Blogs", "Contact", "Write"].map((link) => (
            <Typography key={link} variant="body2" sx={{ mb: 0.8 }}>
              <Link href="#" underline="hover" color="inherit">
                {link}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Categories */}
        <Grid size={{ xs: 12, sm: 6, md: 2 }}>
          <Typography fontWeight={600} mb={1}>
            Categories
          </Typography>
          {[
            "Technology",
            "Lifestyle",
            "Business",
            "Travel",
            "Food & Health",
          ].map((item) => (
            <Typography key={item} variant="body2" sx={{ mb: 0.8 }}>
              <Link href="#" underline="hover" color="inherit">
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Support */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography fontWeight={600} mb={1}>
            Support
          </Typography>
          {[
            "Help Center",
            "Privacy Policy",
            "Terms of Service",
            "hello@wordvibe.com",
          ].map((item) => (
            <Typography key={item} variant="body2" sx={{ mb: 0.8 }}>
              <Link href="#" underline="hover" color="inherit">
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>
      </Grid>

      {/* Divider & Bottom Section */}
      <Divider sx={{ my: 4 }} />

      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        gap={2}
      >
        <Typography variant="caption" color="text.secondary">
          © 2024 WordVibe. All rights reserved.
        </Typography>
        <Box display="flex" gap={2}>
          {["Privacy", "Terms", "Cookies"].map((item) => (
            <Link
              key={item}
              href="#"
              variant="caption"
              underline="hover"
              color="text.secondary"
            >
              {item}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
