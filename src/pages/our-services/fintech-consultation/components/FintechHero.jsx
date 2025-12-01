import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Stack,
  useTheme,
  useMediaQuery,
  alpha,
} from "@mui/material";
import {
  AccountBalance,
  CurrencyExchange,
  Security,
  AutoGraph,
  ArrowForward,
} from "@mui/icons-material";
import { keyframes } from "@mui/system";

// Animations
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulseAnimation = keyframes`
  0%, 100% { 
    box-shadow: 0 0 0 0 rgba(0, 200, 255, 0.4);
  }
  70% { 
    box-shadow: 0 0 0 10px rgba(0, 200, 255, 0);
  }
  100% { 
    box-shadow: 0 0 0 0 rgba(0, 200, 255, 0);
  }
`;

const FintechHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f5fbff",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 0 },
      }}
    >
      {/* Minimal Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {/* Abstract geometric shapes */}
        <Box
          sx={{
            position: "absolute",
            top: "15%",
            right: "10%",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, #00c8ff05 0%, transparent 70%)",
            animation: `${floatAnimation} 20s infinite ease-in-out`,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: "20%",
            left: "5%",
            width: "200px",
            height: "200px",
            background:
              "radial-gradient(circle, #0c1e3e03 0%, transparent 70%)",
            animation: `${floatAnimation} 15s infinite ease-in-out reverse`,
          }}
        />
      </Box>

      {/* Subtle Grid Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(rgba(12, 30, 62, 0.02) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(12, 30, 62, 0.02) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          opacity: 0.3,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Content Column */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={4} sx={{ animation: `${fadeInUp} 0.8s ease-out` }}>
              {/* Badge */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: "4px",
                    height: "24px",
                    background: "#00c8ff",
                    borderRadius: "2px",
                  }}
                />
                <Typography
                  variant="overline"
                  sx={{
                    color: "#00c8ff",
                    fontWeight: 700,
                    letterSpacing: 3,
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                  }}
                >
                  Fintech Consultation
                </Typography>
              </Box>

              {/* Company Name */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "3rem", md: "4.5rem" },
                  fontWeight: 600,
                  color: "#0c1e3e",
                  lineHeight: 1.1,
                  letterSpacing: "-1px",
                }}
              >
                DNA INFOTECH
              </Typography>

              {/* Tagline */}
              <Box sx={{ position: "relative" }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    fontWeight: 600,
                    color: "#0c1e3e",
                    lineHeight: 1.2,
                    mb: 2,
                    position: "relative",
                    display: "inline-block",
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      left: "-24px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "16px",
                      height: "16px",
                      background: "#00c8ff",
                      borderRadius: "50%",
                      animation: `${pulseAnimation} 2s infinite`,
                    },
                  }}
                >
                  THE POWER PARTNER
                </Typography>
              </Box>

              {/* Description */}
              <Typography
                variant="h5"
                sx={{
                  color: alpha("#0c1e3e", 0.8),
                  fontWeight: 400,
                  lineHeight: 1.6,
                  fontSize: { xs: "1.125rem", md: "1.5rem" },
                  maxWidth: "600px",
                }}
              >
                Pioneering the digital financial frontier with cutting-edge
                blockchain, cryptocurrency, and RPA solutions.
              </Typography>

              {/* CTA Button */}
              <Box sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: "#0c1e3e",
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: 600,
                    px: 6,
                    py: 1.5,
                    borderRadius: "8px",
                    minWidth: "280px",
                    "&:hover": {
                      background: "#08172f",
                      transform: "translateY(-2px)",
                      boxShadow: "0 10px 20px rgba(12, 30, 62, 0.2)",
                    },
                    transition: "all 0.3s ease",
                  }}
                  endIcon={<ArrowForward />}
                >
                  EXPLORE OUR FINTECH SOLUTIONS
                </Button>
              </Box>

              {/* Tech Stack Badges */}
              <Stack
                direction="row"
                spacing={2}
                sx={{ mt: 6, flexWrap: "wrap" }}
              >
                {[
                  {
                    label: "Blockchain",
                    icon: <Security sx={{ fontSize: 20 }} />,
                  },
                  {
                    label: "Cryptocurrency",
                    icon: <CurrencyExchange sx={{ fontSize: 20 }} />,
                  },
                  {
                    label: "RPA Solutions",
                    icon: <AutoGraph sx={{ fontSize: 20 }} />,
                  },
                ].map((tech, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      px: 3,
                      py: 1.5,
                      background: "white",
                      border: `1px solid ${alpha("#0c1e3e", 0.1)}`,
                      borderRadius: "8px",
                      boxShadow: "0 2px 8px rgba(12, 30, 62, 0.05)",
                      animation: `${fadeInUp} 0.8s ease-out ${
                        0.3 + index * 0.1
                      }s both`,
                    }}
                  >
                    <Box sx={{ color: "#00c8ff" }}>{tech.icon}</Box>
                    <Typography
                      sx={{
                        color: "#0c1e3e",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                      }}
                    >
                      {tech.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Right Visualization Column */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: "relative",
                height: { xs: "400px", md: "500px" },
                animation: `${fadeInUp} 0.8s ease-out 0.2s both`,
              }}
            >
              {/* Central Circle */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "140px",
                  height: "140px",
                  border: `2px solid ${alpha("#00c8ff", 0.3)}`,
                  borderRadius: "50%",
                  animation: `${floatAnimation} 8s infinite ease-in-out`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100px",
                    height: "100px",
                    border: `1px solid ${alpha("#0c1e3e", 0.1)}`,
                    borderRadius: "50%",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "60px",
                    height: "60px",
                    background: "#00c8ff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    zIndex: 2,
                  }}
                >
                  <AccountBalance sx={{ fontSize: 30 }} />
                </Box>
              </Box>

              {/* Top Icon */}
              <Box
                sx={{
                  position: "absolute",
                  top: "20%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "60px",
                  background: "white",
                  border: `1px solid ${alpha("#0c1e3e", 0.1)}`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(12, 30, 62, 0.1)",
                  animation: `${floatAnimation} 4s infinite ease-in-out`,
                  animationDelay: "0s",
                  zIndex: 3,
                }}
              >
                <Security sx={{ fontSize: 28, color: "#00c8ff" }} />
              </Box>

              {/* Right Icon */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "10%",
                  transform: "translateY(-50%)",
                  width: "60px",
                  height: "60px",
                  background: "white",
                  border: `1px solid ${alpha("#0c1e3e", 0.1)}`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(12, 30, 62, 0.1)",
                  animation: `${floatAnimation} 4s infinite ease-in-out`,
                  animationDelay: "1s",
                  zIndex: 3,
                }}
              >
                <CurrencyExchange sx={{ fontSize: 28, color: "#0c1e3e" }} />
              </Box>

              {/* Bottom Icon */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "20%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "60px",
                  background: "white",
                  border: `1px solid ${alpha("#0c1e3e", 0.1)}`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(12, 30, 62, 0.1)",
                  animation: `${floatAnimation} 4s infinite ease-in-out`,
                  animationDelay: "2s",
                  zIndex: 3,
                }}
              >
                <AutoGraph sx={{ fontSize: 28, color: "#00c8ff" }} />
              </Box>

              {/* Left Icon */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "10%",
                  transform: "translateY(-50%)",
                  width: "60px",
                  height: "60px",
                  background: "white",
                  border: `1px solid ${alpha("#0c1e3e", 0.1)}`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(12, 30, 62, 0.1)",
                  animation: `${floatAnimation} 4s infinite ease-in-out`,
                  animationDelay: "3s",
                  zIndex: 3,
                }}
              >
                <AccountBalance sx={{ fontSize: 28, color: "#0c1e3e" }} />
              </Box>

              {/* Connecting Lines */}
              <svg
                width="100%"
                height="100%"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  pointerEvents: "none",
                }}
              >
                <defs>
                  <linearGradient
                    id="line-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#00c8ff" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#00c8ff" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* Line to Top Icon */}
                <line
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="20%"
                  stroke="url(#line-gradient)"
                  strokeWidth="1.5"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="100"
                    to="0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </line>

                {/* Line to Right Icon */}
                <line
                  x1="50%"
                  y1="50%"
                  x2="90%"
                  y2="50%"
                  stroke="url(#line-gradient)"
                  strokeWidth="1.5"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="100"
                    to="0"
                    dur="3s"
                    repeatCount="indefinite"
                    begin="0.5s"
                  />
                </line>

                {/* Line to Bottom Icon */}
                <line
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="80%"
                  stroke="url(#line-gradient)"
                  strokeWidth="1.5"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="100"
                    to="0"
                    dur="3s"
                    repeatCount="indefinite"
                    begin="1s"
                  />
                </line>

                {/* Line to Left Icon */}
                <line
                  x1="50%"
                  y1="50%"
                  x2="10%"
                  y2="50%"
                  stroke="url(#line-gradient)"
                  strokeWidth="1.5"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="100"
                    to="0"
                    dur="3s"
                    repeatCount="indefinite"
                    begin="1.5s"
                  />
                </line>

                {/* Outer Circle */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="30%"
                  fill="none"
                  stroke="rgba(0, 200, 255, 0.08)"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                />
              </svg>

              {/* Floating Data Points */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
                const positions = [
                  { top: "25%", left: "60%" },
                  { top: "40%", left: "75%" },
                  { top: "60%", left: "70%" },
                  { top: "70%", left: "45%" },
                  { top: "55%", left: "25%" },
                  { top: "35%", left: "30%" },
                  { top: "20%", left: "40%" },
                  { top: "45%", left: "55%" },
                ];

                return (
                  <Box
                    key={i}
                    sx={{
                      position: "absolute",
                      width: "6px",
                      height: "6px",
                      background: alpha("#00c8ff", Math.random() * 0.3 + 0.1),
                      borderRadius: "50%",
                      top: positions[i - 1].top,
                      left: positions[i - 1].left,
                      animation: `${floatAnimation} ${
                        Math.random() * 10 + 5
                      }s infinite ease-in-out`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  />
                );
              })}
            </Box>
          </Grid>
        </Grid>

        {/* Scroll Indicator */}
        <Box
          sx={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            animation: `${fadeInUp} 0.8s ease-out 1s both`,
          }}
        >
          <Box
            sx={{
              width: "1px",
              height: "60px",
              background: "linear-gradient(to bottom, #00c8ff, transparent)",
              mx: "auto",
            }}
          />
          <Typography
            variant="caption"
            sx={{
              color: alpha("#0c1e3e", 0.5),
              mt: 1,
              textTransform: "uppercase",
              letterSpacing: 2,
              fontSize: "0.7rem",
            }}
          >
            Scroll to discover
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FintechHero;
