import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";
import bgImage from "../../../assets/Signup-bg.jpg";

const Signup: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        p: 2,
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      {/* Form */}
      <Paper
        elevation={6}
        sx={{
          zIndex: 2,
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(12px)",
          borderRadius: 4,
          p: 4,
          width: "100%",
          maxWidth: 420,
          textAlign: "center",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ color: "#fff", mb: 3 }}
        >
          Create an Account
        </Typography>

        <Box
          component="form"
          noValidate
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            variant="outlined"
            placeholder="Name"
            required
            fullWidth
            InputProps={{ sx: { borderRadius: 2, backgroundColor: "#fff" } }}
          />
          <TextField
            variant="outlined"
            placeholder="Email"
            type="email"
            required
            fullWidth
            InputProps={{ sx: { borderRadius: 2, backgroundColor: "#fff" } }}
          />
          <TextField
            variant="outlined"
            placeholder="Password"
            type="password"
            required
            fullWidth
            InputProps={{ sx: { borderRadius: 2, backgroundColor: "#fff" } }}
          />
          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 1,
              py: 1.5,
              fontWeight: 600,
              color: "#fff",
              borderRadius: 2,
              background: "linear-gradient(90deg, #633ac2, #9531c0)",
              "&:hover": {
                background: "linear-gradient(90deg, #5a31b0, #872eb3)",
              },
            }}
          >
            Sign Up
          </Button>
        </Box>

        <Typography sx={{ mt: 3, fontSize: 14, color: "#fff" }}>
          Already have an account?
          <MuiLink
            component={Link}
            to="/login"
            sx={{
              color: "#e1bee7",
              fontWeight: 600,
              textDecoration: "underline",
              ml: 1,
            }}
          >
            Log In
          </MuiLink>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Signup;
