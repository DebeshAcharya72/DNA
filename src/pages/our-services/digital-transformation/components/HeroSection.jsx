// HeroSection.jsx
import React from "react";
import { Box, Typography, Container, Button, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"; // Sparkle icon

// Font preference
const fontFamily = '"Inter", "Nunito", sans-serif';

// Glass Card Stack (right side)
const GlassCardStack = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "400px",
  height: "400px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-20px",
    left: "-20px",
    right: "-20px",
    bottom: "-20px",
    background:
      "linear-gradient(135deg, rgba(0,194,255,0.08), rgba(0,164,228,0.08))",
    borderRadius: "24px",
    filter: "blur(10px)",
    zIndex: -1,
  },
}));

const GlassCard = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "90%",
  height: "90%",
  backdropFilter: "blur(12px)",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  border: "1px solid rgba(0, 164, 228, 0.1)",
  borderRadius: "20px",
  boxShadow: "0 8px 32px rgba(0, 164, 228, 0.08)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  transition: "transform 0.4s ease",
  "&:hover": {
    transform: "translateY(-8px) scale(1.02)",
  },
}));

const SparkleIconWrapper = styled(Box)(({ theme }) => ({
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #00C8FF, #00A4E4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "24px",
  boxShadow: "0 4px 16px rgba(0, 164, 228, 0.2)",
}));

const HighlightText = styled(Typography)(({ theme }) => ({
  display: "inline",
  background: "linear-gradient(90deg, #00C8FF, #00A4E4)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 800,
}));

// Gradient Button
const GradientButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #00C8FF, #00A4E4)",
  color: "#FFFFFF",
  fontWeight: 600,
  fontFamily,
  fontSize: "1rem",
  padding: "12px 24px",
  borderRadius: "12px",
  textTransform: "none",
  boxShadow: "0 4px 16px rgba(0, 164, 228, 0.2)",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "linear-gradient(45deg, #00B8F0, #0098D4)",
    boxShadow: "0 6px 20px rgba(0, 164, 228, 0.3)",
    transform: "translateY(-2px)",
  },
}));

// Outline Button
const OutlineButton = styled(Button)(({ theme }) => ({
  color: "#00A4E4",
  borderColor: "#00A4E4",
  borderWidth: "2px",
  fontWeight: 600,
  fontFamily,
  fontSize: "1rem",
  padding: "12px 24px",
  borderRadius: "12px",
  textTransform: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(0, 164, 228, 0.08)",
    borderColor: "#0098D4",
    transform: "translateY(-2px)",
  },
}));

const HeroSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#f5fbff", // Your required background
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle floating glow effect */}
      <Box
        sx={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,194,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 6, md: 8 },
          px: { xs: 3, md: 6 },
        }}
      >
        {/* LEFT SIDE: TEXT CONTENT */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            maxWidth: { xs: "100%", md: "500px" },
          }}
        >
          {/* Tag */}
          <Chip
            label="Leading Digital Innovation"
            icon={<AutoAwesomeIcon fontSize="small" />}
            sx={{
              bgcolor: "rgba(0,164,228,0.1)",
              color: "#00A4E4",
              fontWeight: 600,
              mb: 3,
              fontSize: "0.875rem",
              borderRadius: "20px",
              height: "32px",
              "& .MuiChip-icon": {
                color: "#00A4E4",
              },
            }}
          />

          {/* Headline */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontFamily,
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              lineHeight: 1.2,
              mb: 2,
              color: "#1A202C",
            }}
          >
            Empower Your Business with{" "}
            <HighlightText component="span">Digital</HighlightText>{" "}
            Transformation
          </Typography>

          {/* Subtext */}
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontFamily,
              color: "#4A5568",
              fontSize: "1.1rem",
              mb: 4,
              lineHeight: 1.7,
              maxWidth: "500px",
            }}
          >
            Transform your enterprise with cutting-edge technology solutions
            that drive innovation, efficiency, and sustainable growth.
          </Typography>

          {/* CTA Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <GradientButton>Learn More →</GradientButton>
            <OutlineButton variant="outlined">
              Schedule a Consultation
            </OutlineButton>
          </Box>
        </Box>

        {/* RIGHT SIDE: GLASS CARD STACK */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: { xs: "300px", md: "400px" },
          }}
        >
          <GlassCardStack>
            {[0, 1, 2].map((i) => (
              <GlassCard
                key={i}
                sx={{
                  transform: `rotate(${i * 2}deg) translateY(${i * 8}px)`,
                  zIndex: i,
                }}
              >
                <SparkleIconWrapper>
                  <AutoAwesomeIcon
                    sx={{
                      fontSize: "40px",
                      color: "#FFFFFF",
                    }}
                  />
                </SparkleIconWrapper>
                <Box
                  sx={{
                    width: "60%",
                    height: "8px",
                    bgcolor: "rgba(0, 164, 228, 0.2)",
                    borderRadius: "4px",
                    mb: 1,
                  }}
                />
                <Box
                  sx={{
                    width: "80%",
                    height: "8px",
                    bgcolor: "rgba(0, 164, 228, 0.2)",
                    borderRadius: "4px",
                    mb: 1,
                  }}
                />
                <Box
                  sx={{
                    width: "40%",
                    height: "8px",
                    bgcolor: "rgba(0, 164, 228, 0.2)",
                    borderRadius: "4px",
                  }}
                />
              </GlassCard>
            ))}
          </GlassCardStack>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
