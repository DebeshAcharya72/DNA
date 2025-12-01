import React from "react";
import { Box, Typography, Container } from "@mui/material";

const GeometricTelecomHero = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#0c1e3e",
        position: "relative",
      }}
    >
      {/* Geometric Shapes */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "300px",
          height: "300px",
          borderLeft: "1px solid rgba(0,200,255,0.1)",
          borderBottom: "1px solid rgba(0,200,255,0.1)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "200px",
          height: "200px",
          borderRight: "1px solid rgba(0,200,255,0.1)",
          borderTop: "1px solid rgba(0,200,255,0.1)",
        }}
      />

      <Container maxWidth="lg">
        <Box>
          {/* Top Line */}
          <Box sx={{ mb: 1 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                fontWeight: 300,
                color: "#ffffff",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              TELECOM &
            </Typography>
          </Box>

          {/* Main Title */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "4rem", sm: "6rem", md: "8rem" },
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                lineHeight: 0.8,
                position: "relative",
                display: "inline-block",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  background: "linear-gradient(90deg, #00c8ff, transparent)",
                },
              }}
            >
              ENGINEERING
            </Typography>
          </Box>

          {/* Company Name */}
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                fontWeight: 500,
                color: "#00c8ff",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
              }}
            >
              DNA INFO TECH
            </Typography>
          </Box>

          {/* Tagline */}
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
                fontWeight: 300,
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              THE POWER PARTNER
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default GeometricTelecomHero;
