// IndustryExpertiseSection.jsx
import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  Grid,
  keyframes,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import {
  SignalCellularAlt as TelecomIcon,
  AccountBalance as BankingIcon,
  Favorite as HealthcareIcon,
} from "@mui/icons-material";

const floatIcon = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

// ---- Modern Neon Card ---- //
const IndustryCard = styled(Card)(({ theme }) => ({
  background: "rgba(255,255,255,0.85)",
  borderRadius: "22px",
  padding: "30px",
  position: "relative",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(0,0,0,0.06)",
  boxShadow:
    "0px 4px 20px rgba(0, 0, 0, 0.04), 0px 10px 40px rgba(0, 180, 216, 0.08)",
  transition: "all 0.4s ease",
  overflow: "hidden",

  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow:
      "0px 10px 30px rgba(0, 180, 216, 0.18), 0px 14px 60px rgba(0, 180, 216, 0.15)",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    top: "-40px",
    right: "-40px",
    width: "120px",
    height: "120px",
    background: "linear-gradient(135deg, #00B4D8, #0096B6)",
    borderRadius: "50%",
    opacity: 0.14,
    transition: "0.4s ease",
  },

  "&:hover::after": {
    opacity: 0.22,
    transform: "scale(1.1)",
  },
}));

// ---- Floating Icon ---- //
const IconBox = styled(Box)(({ theme }) => ({
  width: 78,
  height: 78,
  borderRadius: "20px",
  background:
    "linear-gradient(135deg, rgba(0,180,216,0.15), rgba(0,150,182,0.15))",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#00B4D8",
  marginBottom: "18px",
  animation: `${floatIcon} 3s ease-in-out infinite`,
  boxShadow: "0px 6px 16px rgba(0,180,216,0.15)",
}));

const IndustryExpertiseSection = () => {
  const industries = [
    {
      title: "Telecom & Engineering",
      description:
        "Shaping the next generation of connectivity with advanced telecom innovation.",
      icon: <TelecomIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: "Banking & Insurance",
      description:
        "Secure, scalable, regulatory-compliant digital solutions for BFSI brands.",
      icon: <BankingIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: "Healthcare",
      description:
        "AI-driven healthcare platforms for efficient diagnosis, care, and automation.",
      icon: <HealthcareIcon sx={{ fontSize: 40 }} />,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 7, md: 10 },
        backgroundColor: "#f5fbff",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            sx={{
              color: "#00B4D8",
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.8rem" },
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Industry Expertise
          </Typography>

          <Typography
            sx={{
              color: "#4b5563",
              mt: 2,
              fontSize: "1.15rem",
              maxWidth: "650px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Transforming industries with future-ready digital solutions designed
            for speed, scale, and innovation.
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={4}>
          {industries.map((industry, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <IndustryCard>
                <CardContent sx={{ textAlign: "center" }}>
                  <IconBox>{industry.icon}</IconBox>

                  <Typography
                    sx={{
                      color: "#0c1e3e",
                      fontWeight: 800,
                      fontSize: "1.4rem",
                      mb: 1.3,
                    }}
                  >
                    {industry.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#4b5563",
                      fontSize: "0.98rem",
                      lineHeight: 1.7,
                      mb: 3,
                    }}
                  >
                    {industry.description}
                  </Typography>

                  <Button
                    sx={{
                      color: "#00B4D8",
                      fontWeight: 700,
                      textTransform: "none",
                      fontSize: "0.95rem",
                      "&:hover": {
                        textDecoration: "underline",
                        background: "transparent",
                      },
                    }}
                  >
                    Explore →
                  </Button>
                </CardContent>
              </IndustryCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default IndustryExpertiseSection;
