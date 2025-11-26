// HowWeWorkSection.jsx
import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Lightbulb as DiscoveryIcon,
  AutoAwesome as PlanningIcon,
  Build as DevelopmentIcon,
  Rocket as LaunchIcon,
} from "@mui/icons-material";

// Light Glass Card for Process Steps
const LightProcessCard = styled(Card)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "16px",
  border: "1px solid #e2e8f0",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
  transition: "all 0.35s ease",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(3),
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 8px 32px rgba(0, 180, 216, 0.12)",
    border: "1px solid #cceeff",
  },
}));

// Step Number Badge (light mode)
const StepBadge = styled(Box)(({ theme }) => ({
  width: 20,
  height: 20,
  borderRadius: "50%",
  backgroundColor: "#00B4D8",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "0.75rem",
  fontWeight: 700,
  position: "absolute",
  top: 0,
  right: 0,
  boxShadow: "0 0 8px rgba(0, 180, 216, 0.4)",
  animation: "pulse 3s infinite",
}));

const HowWeWorkSection = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery",
      description: "Understanding your vision and requirements",
      icon: <DiscoveryIcon sx={{ fontSize: 32 }} />,
    },
    {
      number: 2,
      title: "Planning",
      description: "Strategic roadmap and architecture design",
      icon: <PlanningIcon sx={{ fontSize: 32 }} />,
    },
    {
      number: 3,
      title: "Development",
      description: "Agile development with continuous feedback",
      icon: <DevelopmentIcon sx={{ fontSize: 32 }} />,
    },
    {
      number: 4,
      title: "Launch",
      description: "Seamless deployment and ongoing support",
      icon: <LaunchIcon sx={{ fontSize: 32 }} />,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#f5fbff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(0,180,216,0.05) 2px, transparent 2px), radial-gradient(circle at 90% 80%, rgba(0,180,216,0.03) 2px, transparent 2px)",
          backgroundSize: "50px 50px",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Top Badge - "Our Process" */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            px: 2.5,
            py: 1,
            borderRadius: "50px",
            backgroundColor: "rgba(0, 180, 216, 0.1)",
            border: "1px solid rgba(0, 180, 216, 0.2)",
            color: "#0077b6",
            fontSize: "0.95rem",
            fontWeight: 600,
            mb: 4,
            mx: "auto",
          }}
        >
          Our Process
        </Box>

        {/* Section Title */}
        <Typography
          variant="h2"
          sx={{
            color: "#0c1e3e", // Dark navy for readability
            fontWeight: 800,
            fontSize: { xs: "2.2rem", md: "2.8rem" },
            textAlign: "center",
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          How We Work
        </Typography>

        <Typography
          sx={{
            color: "#4b5563", // Muted dark gray
            fontSize: "1.1rem",
            textAlign: "center",
            mb: 6,
            maxWidth: "600px",
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          A proven methodology for delivering exceptional results
        </Typography>

        {/* Process Grid - 4 columns */}
        <Grid container spacing={3}>
          {steps.map((step, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <LightProcessCard>
                <Box
                  sx={{
                    position: "relative",
                    width: 60,
                    height: 60,
                    borderRadius: "35px",
                    backgroundColor: "rgba(0, 180, 216, 0.1)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 2,
                    color: "#00B4D8",
                  }}
                >
                  <StepBadge>{step.number}</StepBadge>
                  {step.icon}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    color: "#0c1e3e",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    mb: 1,
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#4b5563",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    textAlign: "center",
                  }}
                >
                  {step.description}
                </Typography>
              </LightProcessCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowWeWorkSection;
