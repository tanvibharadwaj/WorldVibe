import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link as MuiLink,
  Paper,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../../assets/login-img.webp"; // Replace with your actual illustration

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/write");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          width: "100%",
          maxWidth: 960,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left Image */}
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "flex" },
            backgroundImage: `url(${loginImg})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "#fff",
          }}
        />

        {/* Right Form */}
        <Box
          sx={{
            flex: 1,
            background: "linear-gradient(135deg, #c084fc, #a855f7)",
            color: "#fff",
            px: { xs: 4, sm: 6 },
            py: { xs: 6, sm: 8 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
          >
            Login to Your Account
          </Typography>
          <Typography textAlign="center" sx={{ mb: 4, opacity: 0.85 }}>
            Welcome back to WordVibe – please login to continue
          </Typography>

          <Box component="form" onSubmit={handleLogin} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              placeholder="Email"
              type="email"
              variant="outlined"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                sx: { borderRadius: 2, backgroundColor: "#fff" },
              }}
            />
            <TextField
              placeholder="Password"
              type="password"
              variant="outlined"
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                sx: { borderRadius: 2, backgroundColor: "#fff" },
              }}
            />

            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 1,
                py: 1.4,
                fontWeight: 600,
                borderRadius: 2,
                background: "linear-gradient(to right, #ab2cb7ff, #9333ea)",
                color: "#fff",
                "&:hover": {
                  background: "linear-gradient(to right, #581c87, #ae22ceff)",
                },
              }}
            >
              Login
            </Button>
          </Box>

          <Typography textAlign="center" sx={{ mt: 4, fontSize: 14 }}>
            Don't have an account?{" "}
            <MuiLink
              component={Link}
              to="/signup"
              sx={{ color: "#fff", fontWeight: 600, textDecoration: "underline" }}
            >
              Sign up now
            </MuiLink>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
