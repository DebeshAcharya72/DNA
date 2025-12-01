import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  Stack,
  Chip,
  useMediaQuery,
  useTheme,
  alpha,
} from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import StorageIcon from "@mui/icons-material/Storage";
import SettingsIcon from "@mui/icons-material/Settings";
import SecurityIcon from "@mui/icons-material/Security";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
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

const InfrastructureHero = () => {
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
        py: { xs: 8, md: 4 },
      }}
    >
      {/* Background Elements - Minimalistic */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {/* Abstract geometric shapes */}
        <Box
          sx={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${alpha(
              "#00c8ff",
              0.03
            )} 0%, transparent 70%)`,
            top: "-200px",
            right: "-200px",
            animation: `${floatAnimation} 20s infinite ease-in-out`,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${alpha(
              "#0c1e3e",
              0.02
            )} 0%, transparent 70%)`,
            bottom: "-150px",
            left: "-150px",
            animation: `${floatAnimation} 15s infinite ease-in-out reverse`,
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left Content Column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3} sx={{ animation: `${fadeInUp} 0.8s ease-out` }}>
              {/* Badge */}
              <Chip
                icon={<CloudIcon sx={{ fontSize: 16 }} />}
                label="Infrastructure Solutions"
                sx={{
                  background: alpha("#00c8ff", 0.1),
                  color: "#00c8ff",
                  fontWeight: 600,
                  px: 1,
                  py: 2,
                  width: "fit-content",
                  border: `1px solid ${alpha("#00c8ff", 0.2)}`,
                  "& .MuiChip-icon": {
                    color: "#00c8ff",
                  },
                }}
              />

              {/* Main Title */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: "#0c1e3e",
                  letterSpacing: "-0.5px",
                }}
              >
                Infrastructure
                <br />
                <Box
                  component="span"
                  sx={{
                    color: "#00c8ff",
                    position: "relative",
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      bottom: "-4px",
                      left: 0,
                      width: "100%",
                      height: "4px",
                      background:
                        "linear-gradient(90deg, #00c8ff, transparent)",
                      borderRadius: "2px",
                    },
                  }}
                >
                  Management
                </Box>
              </Typography>

              {/* Subtitle */}
              <Typography
                variant="h6"
                sx={{
                  color: "#0c1e3e",
                  opacity: 0.8,
                  fontWeight: 400,
                  lineHeight: 1.6,
                  fontSize: { xs: "1.125rem", md: "1.25rem" },
                }}
              >
                Bringing vast experience in solving client's infrastructure
                issues with cutting-edge cloud solutions and seamless digital
                transformation.
              </Typography>

              {/* Key Features */}
              <Stack spacing={2} sx={{ mt: 2 }}>
                {[
                  "Cloud Migration & Optimization",
                  "24/7 Infrastructure Monitoring",
                  "Scalable Architecture Design",
                  "Security & Compliance Management",
                ].map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      animation: `${fadeInUp} 0.8s ease-out ${
                        index * 0.1
                      }s both`,
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: "#00c8ff",
                        fontSize: 20,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        color: "#0c1e3e",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              {/* CTA Buttons */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mt: 4 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: "#0c1e3e",
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(12, 30, 62, 0.15)",
                    "&:hover": {
                      background: "#0a1832",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px rgba(12, 30, 62, 0.2)",
                    },
                    transition: "all 0.3s ease",
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Get in Touch
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: alpha("#0c1e3e", 0.3),
                    color: "#0c1e3e",
                    fontSize: "1rem",
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    borderRadius: "8px",
                    "&:hover": {
                      borderColor: "#00c8ff",
                      background: alpha("#00c8ff", 0.05),
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  View Case Studies
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {/* Right Visualization Column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                height: { xs: "400px", md: "500px" },
              }}
            >
              {/* Main Card with Minimal Server Visualization */}
              <Card
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: { xs: "280px", md: "320px" },
                  height: { xs: "320px", md: "360px" },
                  background: "white",
                  borderRadius: "20px",
                  boxShadow: "0 20px 40px rgba(12, 30, 62, 0.1)",
                  border: `1px solid ${alpha("#0c1e3e", 0.1)}`,
                  overflow: "hidden",
                  animation: `${floatAnimation} 6s infinite ease-in-out`,
                }}
              >
                {/* Server Rack Minimal Design */}
                <Box sx={{ p: 3 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#0c1e3e",
                      fontWeight: 600,
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <StorageIcon sx={{ fontSize: 20, color: "#00c8ff" }} />
                    Server Cluster
                  </Typography>

                  {/* Server Rack Visualization */}
                  <Stack spacing={1.5}>
                    {[1, 2, 3, 4, 5, 6].map((row) => (
                      <Box
                        key={row}
                        sx={{
                          height: "8px",
                          background: alpha("#0c1e3e", 0.1),
                          borderRadius: "4px",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            height: "100%",
                            width: `${Math.random() * 60 + 40}%`,
                            background:
                              "linear-gradient(90deg, #00c8ff, #00a8ff)",
                            borderRadius: "4px",
                            animation: `${floatAnimation} ${
                              Math.random() * 3 + 2
                            }s infinite ease-in-out`,
                            animationDelay: `${Math.random() * 2}s`,
                          }}
                        />
                      </Box>
                    ))}
                  </Stack>

                  {/* Status Indicators */}
                  <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid size={{ xs: 6 }}>
                      <Stack spacing={0.5}>
                        <Typography
                          variant="caption"
                          sx={{ color: "#0c1e3e", opacity: 0.6 }}
                        >
                          CPU Usage
                        </Typography>
                        <Box
                          sx={{
                            height: "6px",
                            background: alpha("#0c1e3e", 0.1),
                            borderRadius: "3px",
                            overflow: "hidden",
                          }}
                        >
                          <Box
                            sx={{
                              height: "100%",
                              width: "75%",
                              background:
                                "linear-gradient(90deg, #00c8ff, #00a8ff)",
                              borderRadius: "3px",
                            }}
                          />
                        </Box>
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                      <Stack spacing={0.5}>
                        <Typography
                          variant="caption"
                          sx={{ color: "#0c1e3e", opacity: 0.6 }}
                        >
                          Memory
                        </Typography>
                        <Box
                          sx={{
                            height: "6px",
                            background: alpha("#0c1e3e", 0.1),
                            borderRadius: "3px",
                            overflow: "hidden",
                          }}
                        >
                          <Box
                            sx={{
                              height: "100%",
                              width: "60%",
                              background:
                                "linear-gradient(90deg, #00c8ff, #00a8ff)",
                              borderRadius: "3px",
                            }}
                          />
                        </Box>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
              </Card>

              {/* Floating Service Icons - Minimal */}
              {[
                {
                  icon: <CloudIcon />,
                  color: "#00c8ff",
                  delay: 0,
                  label: "Cloud",
                  top: "10%",
                  right: "10%",
                },
                {
                  icon: <SecurityIcon />,
                  color: "#00c8ff",
                  delay: 1,
                  label: "Security",
                  top: "20%",
                  left: "5%",
                },
                {
                  icon: <SettingsIcon />,
                  color: "#0c1e3e",
                  delay: 2,
                  label: "Setup",
                  bottom: "20%",
                  right: "5%",
                },
                {
                  icon: <StorageIcon />,
                  color: "#0c1e3e",
                  delay: 3,
                  label: "Storage",
                  bottom: "10%",
                  left: "10%",
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "absolute",
                    [item.top ? "top" : "bottom"]: item.top || item.bottom,
                    [item.left ? "left" : "right"]: item.left || item.right,
                    animation: `${floatAnimation} 4s infinite ease-in-out`,
                    animationDelay: `${item.delay}s`,
                  }}
                >
                  <Card
                    sx={{
                      width: "70px",
                      height: "70px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "white",
                      border: `1px solid ${alpha("#0c1e3e", 0.1)}`,
                      borderRadius: "12px",
                      boxShadow: "0 8px 20px rgba(12, 30, 62, 0.1)",
                      p: 1,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 12px 24px rgba(12, 30, 62, 0.15)",
                      },
                    }}
                  >
                    <Box sx={{ color: item.color, mb: 0.5 }}>
                      {React.cloneElement(item.icon, { fontSize: "small" })}
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#0c1e3e",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Card>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InfrastructureHero;
