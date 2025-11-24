// CareersSection.jsx
import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// Gradient Button with Glass Effect
const GradientButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #00C8FF, #00A4E4)",
  color: "#FFFFFF",
  fontWeight: 600,
  fontSize: "1rem",
  padding: "12px 32px",
  borderRadius: "12px",
  textTransform: "uppercase",
  boxShadow: "0 6px 20px rgba(0, 200, 255, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "linear-gradient(45deg, #00B8F0, #0098D4)",
    boxShadow: "0 8px 24px rgba(0, 200, 255, 0.4)",
    transform: "translateY(-2px)",
  },
  "&:active": {
    transform: "translateY(0)",
  },
}));

// Animated Heading with Underline
const AnimatedHeading = styled(Typography)(({ theme }) => ({
  color: "#00C8FF",
  fontWeight: 700,
  fontSize: { xs: "2.25rem", md: "3rem" },
  mb: 1,
  textTransform: "uppercase",
  letterSpacing: "1px",
  position: "relative",
  display: "inline-block",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-8px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "60px",
    height: "4px",
    backgroundColor: "#00C8FF",
    borderRadius: "2px",
    animation: "pulse 2s infinite",
  },
  "@keyframes pulse": {
    "0%": { transform: "translateX(-50%) scaleX(1)" },
    "50%": { transform: "translateX(-50%) scaleX(1.2)" },
    "100%": { transform: "translateX(-50%) scaleX(1)" },
  },
}));

const CareersSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: "#F8FCFF", // Ultra light blue background
        textAlign: "center",
        // minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="md">
        {/* Main Heading */}
        <AnimatedHeading variant="h1" component="h1">
          CAREERS
        </AnimatedHeading>

        {/* Subheading */}
        <Typography
          variant="h5"
          component="p"
          sx={{
            color: "#666666",
            fontSize: { xs: "1rem", md: "1.25rem" },
            mb: 4,
            maxWidth: "600px",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Join our team of innovators and shape the future of technology
        </Typography>

        {/* CTA Button */}
        <GradientButton>Join Us</GradientButton>
      </Container>
    </Box>
  );
};

export default CareersSection;
