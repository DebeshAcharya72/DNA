// HeroSection.jsx
import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  Container,
  keyframes,
} from "@mui/material";
import {
  TrendingUp as TrendingUpIcon,
  WorkspacePremium as AwardIcon,
  People as GroupIcon,
  TrackChanges as TargetIcon,
} from "@mui/icons-material";

// Smooth, unique floating animations with phase offset
const float1 = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const float2 = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
`;

const float3 = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
`;

const float4 = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`;

// Each card gets unique height, speed, and easing
const configs = [
  {
    keyframes: float1,
    duration: "6s",
    easing: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
  },
  {
    keyframes: float2,
    duration: "7s",
    easing: "cubic-bezier(0.42, 0, 0.58, 1)",
  },
  {
    keyframes: float3,
    duration: "5.5s",
    easing: "cubic-bezier(0.77, 0, 0.18, 1)",
  },
  {
    keyframes: float4,
    duration: "6.5s",
    easing: "cubic-bezier(0.5, 0.1, 0.5, 0.9)",
  },
];

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5fbff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        px: 2,
        fontFamily: '"Nunito", sans-serif',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 6 }}>
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
                fontWeight: 700,
                mb: 3,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "#00B4D8",
                  mr: 1.2,
                }}
              />
              Trusted by 50+ Global Clients
            </Box>

            <Typography
              sx={{
                fontSize: { xs: "2.5rem", sm: "3rem", md: "4.4rem" },
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#0c1e3e",
                mb: 2,
                letterSpacing: "0.5px",
              }}
            >
              Transforming <br />
              <Box component="span" sx={{ color: "#00B4D8" }}>
                Businesses
              </Box>{" "}
              With Technology
            </Typography>

            <Typography
              sx={{
                color: "#4b5563",
                fontSize: "1.15rem",
                maxWidth: "540px",
                lineHeight: 1.7,
                mb: 4,
                fontWeight: 400,
              }}
            >
              Your power partner for digital transformation, cloud solutions,
              and cutting-edge software development.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                sx={{
                  px: 4.5,
                  py: 1.5,
                  borderRadius: "50px",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  textTransform: "none",
                  backgroundColor: "#00B4D8",
                  color: "white",
                  boxShadow: "0 4px 16px rgba(0, 180, 216, 0.3)",
                  "&:hover": {
                    backgroundColor: "#0096b6",
                    boxShadow: "0 6px 20px rgba(0, 180, 216, 0.4)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Get a Quote →
              </Button>

              <Button
                variant="outlined"
                sx={{
                  px: 4.5,
                  py: 1.5,
                  borderRadius: "50px",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  textTransform: "none",
                  borderWidth: "2px",
                  borderColor: "#00B4D8",
                  color: "#00B4D8",
                  "&:hover": {
                    borderColor: "#0096b6",
                    color: "#0096b6",
                    backgroundColor: "rgba(0, 180, 216, 0.06)",
                  },
                }}
              >
                View Services
              </Button>
            </Box>
          </Grid>

          {/* Right Stats Panel */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "20px",
                p: 3.5,
                boxShadow: "0 6px 24px rgba(0, 0, 0, 0.06)",
                border: "1px solid #e2e8f0",
              }}
            >
              <Grid container spacing={2.5}>
                <Grid size={{ xs: 6 }}>
                  <AnimatedStatCard
                    icon={
                      <TrendingUpIcon sx={{ fontSize: 30, color: "#00B4D8" }} />
                    }
                    value="98%"
                    label="Client Satisfaction"
                    config={configs[0]}
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <AnimatedStatCard
                    icon={<AwardIcon sx={{ fontSize: 30, color: "#00B4D8" }} />}
                    value="200+"
                    label="Projects Done"
                    config={configs[1]}
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <AnimatedStatCard
                    icon={<GroupIcon sx={{ fontSize: 30, color: "#00B4D8" }} />}
                    value="100+"
                    label="Team Members"
                    config={configs[2]}
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <AnimatedStatCard
                    icon={
                      <TargetIcon sx={{ fontSize: 30, color: "#00B4D8" }} />
                    }
                    value="10+"
                    label="Years Experience"
                    config={configs[3]}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const AnimatedStatCard = ({ icon, value, label, config }) => (
  <Card
    sx={{
      backgroundColor: "#f8fdff",
      borderRadius: "16px",
      height: "100%",
      minHeight: 130,
      border: "1px solid #e0f7fa",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "#0c1e3e",
      // Smooth animation with unique config
      animation: `${config.keyframes} ${config.duration} ${config.easing} infinite`,
      transformStyle: "preserve-3d", // smoother GPU rendering
      backfaceVisibility: "hidden",
      willChange: "transform",
      transition: "all 0.35s cubic-bezier(0.2, 0.8, 0.4, 1)",
      "&:hover": {
        animationPlayState: "paused",
        transform: "translateY(-8px)",
        backgroundColor: "#ffffff",
        boxShadow: "0 10px 24px rgba(0, 180, 216, 0.18)",
        borderColor: "#a0e7ff",
      },
    }}
  >
    {icon}
    <Typography
      sx={{
        fontSize: "1.7rem",
        fontWeight: 800,
        mt: 1,
        mb: 0.5,
        color: "#0077b6",
      }}
    >
      {value}
    </Typography>
    <Typography
      sx={{
        fontSize: "0.875rem",
        fontWeight: 600,
        color: "#4b5563",
      }}
    >
      {label}
    </Typography>
  </Card>
);

export default HeroSection;
