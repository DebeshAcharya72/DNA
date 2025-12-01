import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { ArrowRightAlt as ArrowIcon } from "@mui/icons-material";

const BankingHeroBanner = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a192f 0%, #112240 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        pt: { xs: 8, md: 0 },
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Floating Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "float 8s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-30px)" },
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "float 10s ease-in-out infinite 1s",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(30px)" },
          },
        }}
      />

      {/* Grid Pattern Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ position: "relative", zIndex: 2 }}>
          {/* Badge */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 0.5,
              mb: { xs: 4, md: 6 },
              borderRadius: 2,
              backgroundColor: "rgba(37, 99, 235, 0.1)",
              border: "1px solid rgba(37, 99, 235, 0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#2563eb",
              }}
            />
            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#2563eb",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
              }}
            >
              BANKING & INSURANCE
            </Typography>
          </Box>

          {/* Main Headline */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", md: "5rem", lg: "6rem" },
              fontWeight: 800,
              lineHeight: 1,
              color: "transparent",
              background: "linear-gradient(to right, #ffffff 0%, #a5b4fc 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              mb: { xs: 2, md: 3 },
              letterSpacing: "-0.03em",
            }}
          >
            DNA INFOTECH
          </Typography>

          {/* Sub Headline */}
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "3.5rem", lg: "4rem" },
              fontWeight: 700,
              lineHeight: 1.1,
              color: "rgba(255, 255, 255, 0.9)",
              mb: { xs: 3, md: 4 },
              letterSpacing: "-0.02em",
            }}
          >
            THE POWER PARTNER
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontSize: { xs: "1.125rem", md: "1.5rem" },
              fontWeight: 400,
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: "600px",
              mb: { xs: 4, md: 6 },
            }}
          >
            Driving Fintech Transformation through innovative technology
            solutions
          </Typography>

          {/* CTA Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems={{ xs: "stretch", sm: "center" }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowIcon />}
              sx={{
                px: 4,
                py: 1.5,
                backgroundColor: "#2563eb",
                color: "white",
                fontWeight: 600,
                fontSize: "1rem",
                borderRadius: 2,
                textTransform: "none",
                boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)",
                "&:hover": {
                  backgroundColor: "#1d4ed8",
                  transform: "translateY(-2px)",
                  boxShadow: "0 15px 40px rgba(37, 99, 235, 0.4)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Explore Solutions
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderColor: "rgba(255, 255, 255, 0.3)",
                color: "white",
                fontWeight: 600,
                fontSize: "1rem",
                borderRadius: 2,
                textTransform: "none",
                "&:hover": {
                  borderColor: "#2563eb",
                  backgroundColor: "rgba(37, 99, 235, 0.1)",
                },
                transition: "all 0.3s ease",
              }}
            >
              View Case Studies
            </Button>
          </Stack>

          {/* Stats Bar */}
          <Box
            sx={{
              mt: { xs: 8, md: 12 },
              pt: { xs: 4, md: 6 },
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <Grid container spacing={3}>
              {[
                { value: "100+", label: "Enterprise Clients" },
                { value: "24/7", label: "Support Coverage" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "10+", label: "Years Experience" },
              ].map((stat, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "2rem", md: "2.5rem" },
                        fontWeight: 700,
                        color: "#2563eb",
                        lineHeight: 1,
                        mb: 0.5,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                        color: "rgba(255, 255, 255, 0.6)",
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: "0.75rem",
            color: "rgba(255, 255, 255, 0.5)",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </Typography>
        <Box
          sx={{
            width: 1,
            height: 40,
            position: "relative",
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "100%",
              background:
                "linear-gradient(to bottom, transparent, #2563eb, transparent)",
              animation: "scrollDown 2s ease-in-out infinite",
              "@keyframes scrollDown": {
                "0%": { transform: "translateY(-100%)" },
                "100%": { transform: "translateY(100%)" },
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

// Import Grid component
import { Grid } from "@mui/material";

export default BankingHeroBanner;
