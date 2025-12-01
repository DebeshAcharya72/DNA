import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  alpha,
  Paper,
} from "@mui/material";
import {
  CloudUpload,
  SettingsSuggest,
  SupportAgent,
  MonitorHeart,
  Build,
  Bolt,
  CheckCircle,
  Architecture,
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
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmerAnimation = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const InfrastructureManagementCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const sections = [
    {
      title: "Setup & Implementation",
      icon: <SettingsSuggest sx={{ fontSize: 32 }} />,
      features: [
        "End-to-end infrastructure setup and deployment",
        "Seamless cloud migration and hybrid solutions",
        "Automated provisioning and configuration management",
      ],
      color: "#00c8ff",
      accentColor: "#0097cc",
      iconBg: "#00c8ff1a",
    },
    {
      title: "BAU Support",
      icon: <SupportAgent sx={{ fontSize: 32 }} />,
      features: [
        "Comprehensive L1/L2/L3 technical support",
        "24/7 infrastructure monitoring and alerting",
        "Proactive maintenance and performance optimization",
      ],
      color: "#0c1e3e",
      accentColor: "#08172f",
      iconBg: "#0c1e3e1a",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "#f5fbff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "400px",
          background: "linear-gradient(135deg, #00c8ff15 0%, transparent 50%)",
          transform: "skewY(-6deg)",
          transformOrigin: "top left",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, #0c1e3e08 0%, transparent 70%)",
          animation: `${floatAnimation} 20s infinite ease-in-out`,
        }}
      />

      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 10 },
            animation: `${fadeInUp} 0.8s ease-out`,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#00c8ff",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 2,
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: "40px",
                height: "2px",
                background: "linear-gradient(90deg, transparent, #00c8ff)",
              }}
            />
            Our Infrastructure Approach
            <Box
              sx={{
                width: "40px",
                height: "2px",
                background: "linear-gradient(90deg, #00c8ff, transparent)",
              }}
            />
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 800,
              color: "#0c1e3e",
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            How We Manage Your
            <Box
              component="span"
              sx={{
                color: "#00c8ff",
                position: "relative",
                display: "block",
                mt: 1,
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80px",
                  height: "4px",
                  background:
                    "linear-gradient(90deg, transparent, #00c8ff, transparent)",
                  borderRadius: "2px",
                },
              }}
            >
              Infrastructure
            </Box>
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: alpha("#0c1e3e", 0.8),
              fontWeight: 400,
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.6,
              fontSize: { xs: "1.125rem", md: "1.25rem" },
            }}
          >
            Comprehensive infrastructure management solutions designed for
            modern businesses with cutting-edge technology and expert support
          </Typography>
        </Box>

        {/* Main Content Grid */}
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
          {sections.map((section, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  background: "white",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: `1px solid ${alpha("#0c1e3e", 0.1)}`,
                  boxShadow: "0 20px 40px rgba(12, 30, 62, 0.08)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  animation: `${fadeInUp} 0.8s ease-out ${index * 0.2}s both`,
                  position: "relative",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 30px 60px rgba(12, 30, 62, 0.12)",
                    "& .gradient-border": {
                      opacity: 1,
                      transform: "translateX(0)",
                    },
                  },
                }}
              >
                {/* Gradient Border Effect */}
                <Box
                  className="gradient-border"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: `linear-gradient(90deg, ${section.color}, ${section.accentColor})`,
                    transform: "translateX(-100%)",
                    transition: "transform 0.4s ease-out",
                    opacity: 0,
                  }}
                />

                <Box sx={{ p: { xs: 4, md: 5 } }}>
                  {/* Section Header */}
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={3}
                    sx={{ mb: 4 }}
                  >
                    <Box
                      sx={{
                        width: "70px",
                        height: "70px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: section.iconBg,
                        borderRadius: "16px",
                        color: section.color,
                        position: "relative",
                        overflow: "hidden",
                        flexShrink: 0,
                        "&:before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(45deg, ${section.color}10, ${section.accentColor}10)`,
                          animation: `${shimmerAnimation} 3s infinite`,
                        },
                      }}
                    >
                      {section.icon}
                    </Box>

                    <Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: "1.75rem", md: "2rem" },
                          fontWeight: 700,
                          color: section.color,
                          lineHeight: 1.2,
                        }}
                      >
                        {section.title}
                      </Typography>
                      <Box
                        sx={{
                          width: "40px",
                          height: "3px",
                          background: section.color,
                          mt: 1,
                          borderRadius: "2px",
                        }}
                      />
                    </Box>
                  </Stack>

                  {/* Features List */}
                  <List sx={{ px: 0 }}>
                    {section.features.map((feature, featureIndex) => (
                      <ListItem
                        key={featureIndex}
                        sx={{
                          px: 0,
                          py: 2.5,
                          borderBottom: `1px solid ${alpha("#0c1e3e", 0.05)}`,
                          "&:last-child": {
                            borderBottom: "none",
                          },
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateX(8px)",
                            "& .feature-icon": {
                              transform: "scale(1.1)",
                            },
                          },
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: "40px" }}>
                          <Box
                            className="feature-icon"
                            sx={{
                              width: "32px",
                              height: "32px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background: section.iconBg,
                              borderRadius: "8px",
                              color: section.color,
                              transition: "transform 0.3s ease",
                            }}
                          >
                            <CheckCircle sx={{ fontSize: 18 }} />
                          </Box>
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography
                              sx={{
                                color: "#0c1e3e",
                                fontWeight: 500,
                                fontSize: "1.05rem",
                                lineHeight: 1.4,
                              }}
                            >
                              {feature}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>

                  {/* Bottom Stats */}
                  <Box
                    sx={{
                      mt: 4,
                      pt: 3,
                      borderTop: `1px solid ${alpha("#0c1e3e", 0.05)}`,
                    }}
                  >
                    <Grid container spacing={2}>
                      {section.title === "Setup & Implementation" ? (
                        <>
                          <Grid size={{ xs: 4 }}>
                            <Box sx={{ textAlign: "center" }}>
                              <Typography
                                variant="h4"
                                sx={{
                                  color: section.color,
                                  fontWeight: 800,
                                  lineHeight: 1,
                                }}
                              >
                                60%
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: alpha("#0c1e3e", 0.7),
                                  textTransform: "uppercase",
                                  fontSize: "0.7rem",
                                  fontWeight: 600,
                                  letterSpacing: 0.5,
                                }}
                              >
                                Faster Setup
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid size={{ xs: 4 }}>
                            <Box sx={{ textAlign: "center" }}>
                              <Typography
                                variant="h4"
                                sx={{
                                  color: section.color,
                                  fontWeight: 800,
                                  lineHeight: 1,
                                }}
                              >
                                99.5%
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: alpha("#0c1e3e", 0.7),
                                  textTransform: "uppercase",
                                  fontSize: "0.7rem",
                                  fontWeight: 600,
                                  letterSpacing: 0.5,
                                }}
                              >
                                Success Rate
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid size={{ xs: 4 }}>
                            <Box sx={{ textAlign: "center" }}>
                              <Typography
                                variant="h4"
                                sx={{
                                  color: section.color,
                                  fontWeight: 800,
                                  lineHeight: 1,
                                }}
                              >
                                24h
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: alpha("#0c1e3e", 0.7),
                                  textTransform: "uppercase",
                                  fontSize: "0.7rem",
                                  fontWeight: 600,
                                  letterSpacing: 0.5,
                                }}
                              >
                                Avg. Deployment
                              </Typography>
                            </Box>
                          </Grid>
                        </>
                      ) : (
                        <>
                          <Grid size={{ xs: 4 }}>
                            <Box sx={{ textAlign: "center" }}>
                              <Typography
                                variant="h4"
                                sx={{
                                  color: section.color,
                                  fontWeight: 800,
                                  lineHeight: 1,
                                }}
                              >
                                24/7
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: alpha("#0c1e3e", 0.7),
                                  textTransform: "uppercase",
                                  fontSize: "0.7rem",
                                  fontWeight: 600,
                                  letterSpacing: 0.5,
                                }}
                              >
                                Support
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid size={{ xs: 4 }}>
                            <Box sx={{ textAlign: "center" }}>
                              <Typography
                                variant="h4"
                                sx={{
                                  color: section.color,
                                  fontWeight: 800,
                                  lineHeight: 1,
                                }}
                              >
                                5min
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: alpha("#0c1e3e", 0.7),
                                  textTransform: "uppercase",
                                  fontSize: "0.7rem",
                                  fontWeight: 600,
                                  letterSpacing: 0.5,
                                }}
                              >
                                Avg. Response
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid size={{ xs: 4 }}>
                            <Box sx={{ textAlign: "center" }}>
                              <Typography
                                variant="h4"
                                sx={{
                                  color: section.color,
                                  fontWeight: 800,
                                  lineHeight: 1,
                                }}
                              >
                                99.9%
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: alpha("#0c1e3e", 0.7),
                                  textTransform: "uppercase",
                                  fontSize: "0.7rem",
                                  fontWeight: 600,
                                  letterSpacing: 0.5,
                                }}
                              >
                                Uptime SLA
                              </Typography>
                            </Box>
                          </Grid>
                        </>
                      )}
                    </Grid>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Additional Info Card */}
        <Box
          sx={{
            mt: { xs: 8, md: 10 },
            animation: `${fadeInUp} 0.8s ease-out 0.4s both`,
          }}
        >
          <Paper
            sx={{
              p: { xs: 4, md: 5 },
              background: "linear-gradient(135deg, #0c1e3e 0%, #08172f 100%)",
              borderRadius: "20px",
              color: "white",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "-50%",
                right: "-50%",
                width: "300px",
                height: "300px",
                background:
                  "radial-gradient(circle, #00c8ff20 0%, transparent 70%)",
                animation: `${floatAnimation} 15s infinite ease-in-out`,
              }}
            />

            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <Stack spacing={3}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "1.75rem", md: "2.25rem" },
                      fontWeight: 700,
                      lineHeight: 1.2,
                    }}
                  >
                    Complete Infrastructure Lifecycle Management
                  </Typography>
                  <Typography
                    sx={{
                      color: alpha("#fff", 0.9),
                      fontSize: "1.1rem",
                      lineHeight: 1.6,
                    }}
                  >
                    From initial setup to ongoing support, we provide end-to-end
                    infrastructure management that ensures reliability,
                    scalability, and optimal performance for your
                    business-critical applications.
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: "100px",
                      height: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#00c8ff",
                      borderRadius: "20px",
                      animation: `${floatAnimation} 3s infinite ease-in-out`,
                      boxShadow: "0 10px 30px rgba(0, 200, 255, 0.3)",
                    }}
                  >
                    <Architecture sx={{ fontSize: 48, color: "white" }} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default InfrastructureManagementCard;
