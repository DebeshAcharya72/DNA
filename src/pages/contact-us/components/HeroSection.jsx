// HeroSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledHero = styled(Box)(({ theme }) => ({
  position: "relative",
  height: { xs: "320px", sm: "360px", md: "440px" },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage:
    'linear-gradient(135deg, rgba(0, 200, 255, 0.08), rgba(0, 150, 255, 0.05)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&h=600&q=80")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundColor: "#f5fbff", // fallback & base
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)", // Safari support
    zIndex: 1,
    border: "1px solid rgba(0, 200, 255, 0.15)",
    borderRadius: "0",
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  maxWidth: "800px",
  px: 2,
}));

const HeroSection = () => {
  return (
    <StyledHero>
      <Container maxWidth="lg">
        <HeroContent>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontFamily: '"Nunito", sans-serif',
              color: "#0077b6",
              fontWeight: 800,
              fontSize: { xs: "2.6rem", sm: "3.2rem", md: "4.4rem" },
              lineHeight: 1.15,
              mb: 2,
              letterSpacing: "-0.5px",
              textShadow: "0 2px 6px rgba(0, 120, 182, 0.15)",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Nunito", sans-serif',
              color: "#334155",
              fontWeight: 500,
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            We’d love to hear from you. Reach out for support, partnerships, or
            general inquiries.
          </Typography>
        </HeroContent>
      </Container>
    </StyledHero>
  );
};

export default HeroSection;
