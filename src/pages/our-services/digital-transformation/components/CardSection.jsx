// CardSection.jsx
import React from "react";
import { Box, Typography, Card, Grid, keyframes, styled } from "@mui/material";
import { Bolt, TrendingUp, Lightbulb, SmartToy } from "@mui/icons-material";

// Brand
const BRAND_BLUE = "#00C8FF";

// Gentle pulse animation
const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 0 ${BRAND_BLUE}30; }
  70% { box-shadow: 0 0 0 12px ${BRAND_BLUE}00; }
  100% { box-shadow: 0 0 0 0 ${BRAND_BLUE}00; }
`;

// Icon container: gradient + pulse
const IconContainer = styled(Box)(({ theme }) => ({
  width: 72,
  height: 72,
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  position: "relative",
  background: `linear-gradient(135deg, ${BRAND_BLUE}, #00a0cc)`,
  boxShadow: `0 8px 24px ${BRAND_BLUE}25`,
  animation: `${pulseGlow} 4s infinite`,
  "& svg": {
    fontSize: "36px",
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
  },
}));

// Card: glass-neo hybrid
const FeatureCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(4, 3),
  borderRadius: "28px",
  background: "rgba(255, 255, 255, 0.85)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.7)",
  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.03)",
  transition: "all 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, box-shadow",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 14px 40px rgba(0, 0, 0, 0.09)",
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(16px)",
  },
}));

// Section title with underline accent
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  color: "#0C1427",
  position: "relative",
  display: "inline-block",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "64px",
    height: "4px",
    background: `linear-gradient(to right, ${BRAND_BLUE}, #00a0cc)`,
    borderRadius: "2px",
  },
}));

const CardSection = () => {
  const features = [
    {
      title: "Efficiency",
      description:
        "Streamline operations and reduce costs with intelligent automation.",
      icon: <Bolt />,
    },
    {
      title: "Scalability",
      description:
        "Grow seamlessly with cloud-native and modular architectures.",
      icon: <TrendingUp />,
    },
    {
      title: "Innovation",
      description: "Stay ahead using AI, data, and emerging technology stacks.",
      icon: <Lightbulb />,
    },
    {
      title: "Automation",
      description: "Eliminate manual work with smart, adaptive workflows.",
      icon: <SmartToy />,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 3, md: 4 },
        bgcolor: "#f5fbff",
        textAlign: "center",
      }}
    >
      {/* Beautiful Title */}
      <SectionTitle
        variant="h2"
        component="h2"
        sx={{
          mb: 3,
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          lineHeight: 1.1,
          px: 2,
        }}
      >
        What is Digital Transformation?
      </SectionTitle>

      {/* Subtitle */}
      <Typography
        variant="h6"
        sx={{
          color: "#475569",
          maxWidth: "800px",
          mx: "auto",
          mb: { xs: 6, md: 8 },
          fontWeight: 400,
          fontSize: { xs: "1rem", md: "1.15rem" },
          lineHeight: 1.7,
          px: 2,
        }}
      >
        Digital transformation integrates cutting-edge technology into every
        facet of your business — fundamentally redefining how you operate,
        compete, and deliver value.
      </Typography>

      {/* ✨ Modern Grid + Beautiful Cards */}
      <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
        {features.map((feature, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <FeatureCard elevation={0}>
              <IconContainer>{feature.icon}</IconContainer>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: 700,
                  color: "#0F172A",
                  mt: 3,
                  mb: 1.5,
                  fontSize: "1.25rem",
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#52637A",
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                  maxWidth: "260px",
                }}
              >
                {feature.description}
              </Typography>
            </FeatureCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardSection;
