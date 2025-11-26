// AboutUsSection.jsx
import React from "react";
import { Box, Typography, Container, Card, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

// Optional: Import your image
import aboutImage from "../../../assets/images/image2.jpg";

// Light Glass Card for Image
const LightImageCard = styled(Card)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "20px",
  border: "1px solid #e2e8f0",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
  overflow: "hidden",
  height: "100%",
  transition: "all 0.4s ease",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0 12px 32px rgba(0, 180, 216, 0.12)",
    border: "1px solid #cceeff",
  },
}));

// Light Stats Card
const LightStatCard = styled(Card)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
  padding: theme.spacing(2),
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 6px 16px rgba(0, 180, 216, 0.1)",
    border: "1px solid #cceeff",
  },
}));

const AboutUsSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#f5fbff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Left Side — Image Card */}
          <Grid size={{ xs: 12, md: 6 }}>
            <LightImageCard>
              <Box
                component="img"
                src={aboutImage}
                alt="About DNA Infotech"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: "brightness(1) saturate(1)",
                }}
              />
            </LightImageCard>
          </Grid>

          {/* Right Side — Text + Stats */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              {/* Badge */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  px: 2,
                  py: 0.7,
                  borderRadius: "50px",
                  backgroundColor: "rgba(0, 180, 216, 0.1)",
                  border: "1px solid rgba(0, 180, 216, 0.2)",
                  color: "#0077b6",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  mb: 3,
                }}
              >
                About Us
              </Box>

              {/* Title */}
              <Typography
                variant="h2"
                sx={{
                  color: "#0c1e3e", // Dark navy for readability
                  fontWeight: 800,
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                Building Tomorrow's Technology Today
              </Typography>

              {/* Body Text */}
              <Typography
                sx={{
                  color: "#4b5563", // Muted dark gray
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                DNA Infotech is a leading technology solutions provider,
                specializing in digital transformation, cloud infrastructure,
                and enterprise software development.
              </Typography>

              <Typography
                sx={{
                  color: "#4b5563",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                With over a decade of experience and a team of 100+ skilled
                professionals, we deliver innovative solutions that drive
                business growth and operational excellence.
              </Typography>

              {/* Equation */}
              <Typography
                sx={{
                  color: "#00B4D8",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  mb: 4,
                }}
              >
                Experience + Expertise + Vision = Success
              </Typography>

              {/* Stats Grid */}
              <Grid container spacing={2}>
                <Grid size={{ xs: 6 }}>
                  <LightStatCard>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#00B4D8",
                        fontWeight: 800,
                        fontSize: "1.5rem",
                        mb: 0.5,
                      }}
                    >
                      10+
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#64748b",
                        fontSize: "0.75rem",
                      }}
                    >
                      Years Experience
                    </Typography>
                  </LightStatCard>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <LightStatCard>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#00B4D8",
                        fontWeight: 800,
                        fontSize: "1.5rem",
                        mb: 0.5,
                      }}
                    >
                      200+
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#64748b",
                        fontSize: "0.75rem",
                      }}
                    >
                      Projects Delivered
                    </Typography>
                  </LightStatCard>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <LightStatCard>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#00B4D8",
                        fontWeight: 800,
                        fontSize: "1.5rem",
                        mb: 0.5,
                      }}
                    >
                      50+
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#64748b",
                        fontSize: "0.75rem",
                      }}
                    >
                      Global Clients
                    </Typography>
                  </LightStatCard>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <LightStatCard>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#00B4D8",
                        fontWeight: 800,
                        fontSize: "1.5rem",
                        mb: 0.5,
                      }}
                    >
                      100+
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#64748b",
                        fontSize: "0.75rem",
                      }}
                    >
                      Team Members
                    </Typography>
                  </LightStatCard>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsSection;
