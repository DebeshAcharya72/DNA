import React from "react";
import { Box, Typography, Button, Container, alpha } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

const MinimalTestingHero = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0c1e3e",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Lines */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 1px,
              #00c8ff 1px,
              #00c8ff 2px
            )
          `,
        }}
      />

      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            px: 3,
          }}
        >
          {/* DNA INFOTECH */}
          <Typography
            variant="overline"
            sx={{
              color: alpha("#ffffff", 0.6),
              fontWeight: 400,
              letterSpacing: "0.5em",
              fontSize: "0.7rem",
              mb: 8,
              display: "block",
              animation: "fadeIn 1s ease-out",
            }}
          >
            DNA INFOTECH
          </Typography>

          {/* TESTING SERVICES */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "4rem", md: "7rem" },
                fontWeight: 300,
                color: "#ffffff",
                letterSpacing: "-0.05em",
                lineHeight: 0.9,
                mb: 2,
                animation: "slideUp 0.8s ease-out 0.2s both",
              }}
            >
              TESTING
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "4rem", md: "7rem" },
                fontWeight: 300,
                color: "#ffffff",
                letterSpacing: "-0.05em",
                lineHeight: 0.9,
                animation: "slideUp 0.8s ease-out 0.4s both",
              }}
            >
              SERVICES
            </Typography>
          </Box>

          {/* THE POWER PARTNER */}
          <Typography
            variant="subtitle1"
            sx={{
              color: alpha("#ffffff", 0.8),
              fontWeight: 300,
              letterSpacing: "0.3em",
              fontSize: "0.9rem",
              mb: 10,
              animation: "fadeIn 0.8s ease-out 0.6s both",
              position: "relative",
              "&:before": {
                content: '""',
                position: "absolute",
                left: "50%",
                top: "-20px",
                transform: "translateX(-50%)",
                width: "60px",
                height: "1px",
                background: alpha("#ffffff", 0.2),
              },
            }}
          >
            THE POWER PARTNER
          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              animation: "fadeIn 0.8s ease-out 0.8s both",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                background: "#ffffff",
                color: "#0c1e3e",
                fontWeight: 400,
                px: 6,
                py: 1.2,
                borderRadius: 0,
                minWidth: "180px",
                fontSize: "0.9rem",
                letterSpacing: "0.15em",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: alpha("#ffffff", 0.95),
                  transform: "scale(1.02)",
                },
              }}
            >
              GET STARTED
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: "#ffffff",
                borderColor: alpha("#ffffff", 0.4),
                borderWidth: "1px",
                fontWeight: 400,
                px: 6,
                py: 1.2,
                borderRadius: 0,
                minWidth: "180px",
                fontSize: "0.9rem",
                letterSpacing: "0.15em",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "#ffffff",
                  color: "#ffffff",
                  transform: "scale(1.02)",
                },
              }}
            >
              LEARN MORE
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Add CSS Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  );
};

export default MinimalTestingHero;
