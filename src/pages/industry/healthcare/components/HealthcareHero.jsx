import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  useMediaQuery,
} from "@mui/material";
import {
  LocalHospital as HospitalIcon,
  Healing as HealingIcon,
  Biotech as BiotechIcon,
  ArrowForward as ArrowIcon,
  Science as ScienceIcon,
  HealthAndSafety as HealthIcon,
} from "@mui/icons-material";

const HealthcareHero = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // YOUR COLOR THEME
  const COLORS = {
    background: "#f5fbff",
    primaryText: "#0c1e3e",
    secondary: "#00c8ff",
    accent: "#ff4d8d",
    success: "#00d27a",
    border: "#e0f2ff",
    mutedText: "#5a7a9a",
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: COLORS.background,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Subtle Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 10% 20%, ${COLORS.secondary}05 0%, transparent 30%),
            radial-gradient(circle at 90% 80%, ${COLORS.accent}05 0%, transparent 30%)
          `,
        }}
      />

      {/* Floating Healthcare Icons */}
      {[HospitalIcon, HealingIcon, BiotechIcon, ScienceIcon, HealthIcon].map(
        (Icon, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              color: `${COLORS.secondary}15`,
              fontSize: isMobile ? "3rem" : "4rem",
              animation: `floatIcon ${
                8 + index * 2
              }s ease-in-out infinite ${index}s`,
              left: `${10 + index * 18}%`,
              top: `${15 + (index % 3) * 25}%`,
              "@keyframes floatIcon": {
                "0%, 100%": {
                  transform: "translate(0, 0) rotate(0deg)",
                  opacity: 0.1,
                },
                "50%": {
                  transform: "translate(15px, -15px) rotate(10deg)",
                  opacity: 0.2,
                },
              },
            }}
          >
            <Icon fontSize="inherit" />
          </Box>
        )
      )}

      {/* DNA Helix Pattern */}
      <Box
        sx={{
          position: "absolute",
          right: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          width: isMobile ? 150 : 300,
          height: isMobile ? 200 : 400,
          opacity: 0.03,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                ${COLORS.primaryText} 10px,
                ${COLORS.primaryText} 20px
              )
            `,
            borderRadius: "50%",
          }}
        />
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ position: "relative", zIndex: 2 }}>
          {/* Healthcare Badge */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              px: 3,
              py: 1,
              mb: { xs: 4, md: 6 },
              borderRadius: 2,
              backgroundColor: `${COLORS.secondary}10`,
              border: `1px solid ${COLORS.secondary}30`,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: COLORS.secondary,
                animation: "pulse 2s ease-in-out infinite",
                "@keyframes pulse": {
                  "0%, 100%": { opacity: 1 },
                  "50%": { opacity: 0.5 },
                },
              }}
            />
            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: COLORS.secondary,
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              Healthcare & Life Sciences
            </Typography>
          </Box>

          {/* Main Headline */}
          <Typography
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem", lg: "4.5rem" },
              fontWeight: 800,
              lineHeight: 1.1,
              color: COLORS.primaryText,
              mb: { xs: 1, md: 2 },
              letterSpacing: "-0.02em",
            }}
          >
            HEALTHCARE & LIFESCIENCES
          </Typography>

          {/* Sub Headline */}
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "2.5rem", lg: "3rem" },
              fontWeight: 700,
              lineHeight: 1.2,
              color: COLORS.secondary,
              mb: { xs: 2, md: 3 },
              letterSpacing: "-0.01em",
            }}
          >
            DNA INFOTECH - THE POWER PARTNER
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontSize: { xs: "1.125rem", md: "1.25rem" },
              fontWeight: 400,
              lineHeight: 1.6,
              color: COLORS.mutedText,
              maxWidth: "600px",
              mb: { xs: 4, md: 6 },
            }}
          >
            Transforming Healthcare Through Innovation and Cutting-Edge
            Technology Solutions
          </Typography>

          {/* CTA Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems={{ xs: "stretch", sm: "center" }}
            mb={{ xs: 6, md: 8 }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowIcon />}
              sx={{
                px: 4,
                py: 1.5,
                backgroundColor: COLORS.secondary,
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "1rem",
                borderRadius: 2,
                textTransform: "none",
                boxShadow: `0 4px 20px ${COLORS.secondary}40`,
                "&:hover": {
                  backgroundColor: COLORS.primaryText,
                  transform: "translateY(-2px)",
                  boxShadow: `0 8px 30px ${COLORS.secondary}60`,
                },
                transition: "all 0.3s ease",
              }}
            >
              Explore Healthcare Solutions
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderColor: `${COLORS.secondary}60`,
                color: COLORS.secondary,
                fontWeight: 600,
                fontSize: "1rem",
                borderRadius: 2,
                textTransform: "none",
                "&:hover": {
                  borderColor: COLORS.primaryText,
                  backgroundColor: `${COLORS.secondary}10`,
                  color: COLORS.primaryText,
                },
                transition: "all 0.3s ease",
              }}
            >
              View Medical Innovations
            </Button>
          </Stack>

          {/* Healthcare Stats */}
          <Grid container spacing={2} sx={{ maxWidth: "800px" }}>
            {[
              {
                value: "24/7",
                label: "Medical Support",
                icon: <HealthIcon />,
              },
              {
                value: "99.9%",
                label: "System Uptime",
                icon: <BiotechIcon />,
              },
              {
                value: "100+",
                label: "Healthcare Partners",
                icon: <HospitalIcon />,
              },
              {
                value: "HIPAA",
                label: "Compliant",
                icon: <HealingIcon />,
              },
            ].map((stat, index) => (
              <Grid key={index} size={{ xs: 6, sm: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    p: 2.5,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 2,
                    border: `1px solid ${COLORS.border}`,
                    boxShadow: "0 2px 8px rgba(12, 30, 62, 0.04)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 24px rgba(12, 30, 62, 0.08)",
                      borderColor: COLORS.secondary,
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: "50%",
                      backgroundColor: `${COLORS.secondary}10`,
                      color: COLORS.secondary,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "1.25rem", md: "1.5rem" },
                        fontWeight: 700,
                        color: COLORS.primaryText,
                        lineHeight: 1,
                        mb: 0.5,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        color: COLORS.mutedText,
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HealthcareHero;
