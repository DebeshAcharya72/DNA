// CareersSection.jsx
import React from "react";
import { Box, Typography, Container, Button, useTheme } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import WorkIcon from "@mui/icons-material/Work"; // Material UI icon

// Font family preference: Inter with Nunito fallback
const fontFamily = '"Inter", "Nunito", sans-serif';

// Floating pulse animation for icon
const floatPulse = keyframes`
  0% { transform: translateY(0px); opacity: 0.9; }
  50% { transform: translateY(-8px); opacity: 1; }
  100% { transform: translateY(0px); opacity: 0.9; }
`;

// Gradient Button (enhanced with glass-morphism feel)
const GradientButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #00C8FF, #00A4E4)",
  color: "#FFFFFF",
  fontWeight: 700,
  fontFamily,
  fontSize: "1rem",
  padding: "14px 36px",
  borderRadius: "16px",
  textTransform: "none", // More modern than uppercase
  boxShadow: "0 6px 24px rgba(0, 164, 228, 0.35)",
  transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
  backdropFilter: "blur(4px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  "&:hover": {
    background: "linear-gradient(45deg, #00B8F0, #0098D4)",
    boxShadow: "0 10px 30px rgba(0, 164, 228, 0.45)",
    transform: "translateY(-3px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  "&:active": {
    transform: "translateY(0)",
  },
}));

// Animated heading with underline + icon
const SectionTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  mb: 4,
  position: "relative",
}));

const AnimatedHeading = styled(Typography)(({ theme }) => ({
  fontFamily,
  color: "#00A4E4",
  fontWeight: 800,
  fontSize: { xs: "2.5rem", md: "3.5rem" },
  mb: 1.5,
  lineHeight: 1.1,
  background: "linear-gradient(90deg, #00A4E4, #00C8FF)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textTransform: "uppercase",
  letterSpacing: "1.2px",
}));

const UnderlineBar = styled("span")(({ theme }) => ({
  height: "4px",
  width: "80px",
  background: "linear-gradient(90deg, #00C8FF, #00A4E4)",
  borderRadius: "2px",
  marginBottom: "24px",
  animation: `${floatPulse} 3s ease-in-out infinite`,
}));

const CareersSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        bgcolor: "#f5fbff", // Your preferred background
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          // Subtle radial gradient overlay for depth
          content: '""',
          position: "absolute",
          top: "-50%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,194,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Icon with floating animation */}
        <Box
          sx={{
            mb: 3,
            animation: `${floatPulse} 4s ease-in-out infinite`,
          }}
        >
          <WorkIcon
            sx={{
              fontSize: { xs: "2.8rem", md: "3.5rem" },
              color: "#00A4E4",
              filter: "drop-shadow(0 4px 12px rgba(0,164,228,0.2))",
            }}
          />
        </Box>

        <SectionTitle>
          <AnimatedHeading variant="h1" component="h1">
            Careers
          </AnimatedHeading>
          <UnderlineBar />
        </SectionTitle>

        <Typography
          variant="h6"
          component="p"
          sx={{
            fontFamily,
            color: "#4A5568",
            fontSize: { xs: "1.05rem", md: "1.25rem" },
            mb: 5,
            maxWidth: "620px",
            mx: "auto",
            lineHeight: 1.7,
            fontWeight: 500,
          }}
        >
          Join our team at <strong>DNA Infotech</strong>—where passion meets
          innovation in hospitality and tech.
        </Typography>

        <GradientButton>Explore Open Roles</GradientButton>
      </Container>
    </Box>
  );
};

export default CareersSection;
