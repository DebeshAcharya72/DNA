// TechnologyAreasSection.jsx
import React from "react";
import { Box, Typography, Card, Grid, styled, keyframes } from "@mui/material";
import { MobileFriendly, Brush, AutoAwesomeMotion } from "@mui/icons-material";

const BG_COLOR = "#f5fbff";
const MAIN_TEXT = "#0C1E3E";
const ACCENT = "#00C8FF";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
`;

const GlassCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(4),
  borderRadius: "20px",
  background: "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.7)",
  boxShadow: "0 6px 24px rgba(0, 0, 0, 0.04)",
  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.08)",
  },
  animation: `${float} 6s ease-in-out infinite`,
}));

const IconContainer = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: `${ACCENT}10`,
  color: ACCENT,
  fontSize: "2rem",
  mb: 2,
}));

export default function TechnologyAreasSection() {
  const areas = [
    {
      icon: <MobileFriendly />,
      title: "Mobile Technologies",
      subtitle: "iOS & Android development",
    },
    {
      icon: <Brush />,
      title: "UX/UI Design",
      subtitle: "User-centered interfaces",
    },
    {
      icon: <AutoAwesomeMotion />,
      title: "Robotic Process Automation",
      subtitle: "Automate repetitive tasks",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        bgcolor: BG_COLOR,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: 800,
          color: MAIN_TEXT,
          mb: 2,
          fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.4rem" },
          lineHeight: 1.1,
        }}
      >
        Our Technology Focus
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: "#5E6B82",
          maxWidth: "768px",
          mx: "auto",
          mb: { xs: 6, md: 8 },
          fontSize: { xs: "1rem", md: "1.1rem" },
          lineHeight: 1.6,
          px: 1,
        }}
      >
        We bring the best of capabilities and talent to define the customer
        experience journey and support the new normal with powerful front end
        and backend technologies.
      </Typography>

      <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
        {areas.map((area, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <GlassCard elevation={0}>
              <IconContainer>{area.icon}</IconContainer>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 700,
                  color: MAIN_TEXT,
                  mb: 1,
                  fontSize: "1.3rem",
                }}
              >
                {area.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#6B7280",
                  fontSize: "0.95rem",
                }}
              >
                {area.subtitle}
              </Typography>
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
