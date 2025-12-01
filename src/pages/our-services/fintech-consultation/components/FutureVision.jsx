import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  Stack,
  useTheme,
  useMediaQuery,
  alpha,
} from "@mui/material";
import {
  AccessTime, // Years in Fintech icon
  Groups, // Clients Served icon
  AccountBalance,
  CurrencyExchange,
  Security,
  AutoGraph,
  RocketLaunch,
  TrendingUp,
} from "@mui/icons-material";
import { keyframes } from "@mui/system";

// Animations
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
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

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const FutureVision = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const fintechSolutions = [
    {
      title: "Blockchain",
      description:
        "Decentralized applications, blockchain platforms, secure mobile wallets",
      icon: <Security />,
      color: "#00c8ff",
      delay: 0.2,
    },
    {
      title: "Cryptocurrency",
      description:
        "Digital currency solutions, trading platforms, secure wallets",
      icon: <CurrencyExchange />,
      color: "#0c1e3e",
      delay: 0.4,
    },
    {
      title: "RPA",
      description: "Robotic Process Automation for financial workflows",
      icon: <AutoGraph />,
      color: "#00c8ff",
      delay: 0.6,
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
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #00c8ff40, transparent)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #00c8ff40, transparent)",
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
            variant="overline"
            sx={{
              color: "#00c8ff",
              fontWeight: 700,
              letterSpacing: 3,
              fontSize: "0.8rem",
              textTransform: "uppercase",
              mb: 2,
              display: "block",
            }}
          >
            Future Innovation
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
            Bringing Closer
            <Box
              component="span"
              sx={{
                color: "#00c8ff",
                display: "block",
                mt: 1,
              }}
            >
              the Future
            </Box>
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: alpha("#0c1e3e", 0.8),
              fontWeight: 400,
              lineHeight: 1.6,
              fontSize: { xs: "1.125rem", md: "1.25rem" },
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            DNA Infotech partners with Fintech clients working in the present to
            bring closer the future new ways of working leveraging the Fintech
            solutions.
          </Typography>
        </Box>

        {/* Timeline Section */}
        <Grid container spacing={3} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              sx={{
                p: 4,
                background: "linear-gradient(145deg, #0c1e3e 0%, #142950 100%)",
                border: "1px solid rgba(0, 200, 255, 0.2)",
                borderRadius: "20px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(12, 30, 62, 0.2)",
                animation: `${fadeInUp} 0.8s ease-out`,
              }}
            >
              {/* Glow effect */}
              <Box
                sx={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
                  width: "150px",
                  height: "150px",
                  background:
                    "radial-gradient(circle, rgba(12,30,62,0.4) 0%, transparent 70%)",
                  borderRadius: "50%",
                }}
              />

              <Typography
                variant="overline"
                sx={{
                  color: "#00c8ff",
                  fontWeight: 700,
                  letterSpacing: 2,
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: "8px",
                    height: "8px",
                    background: "#00c8ff",
                    borderRadius: "50%",
                  }}
                />
                THE PRESENT
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: "#fff",
                  mb: 2,
                  fontSize: { xs: "1.75rem", md: "2rem" },
                  position: "relative",
                }}
              >
                Legacy Systems
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.7)",
                    mt: 0.5,
                  }}
                >
                  Traditional Infrastructure
                </Box>
              </Typography>

              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
              >
                <Box
                  sx={{
                    width: "40px",
                    height: "2px",
                    background: "#00c8ff",
                  }}
                />
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "0.9rem",
                  }}
                >
                  Established Financial Ecosystems
                </Typography>
              </Box>

              <Stack direction="row" spacing={2}>
                {["Traditional Banking", "Manual Processes", "Legacy Tech"].map(
                  (item, i) => (
                    <Box
                      key={i}
                      sx={{
                        px: 2,
                        py: 0.5,
                        background: "rgba(0, 200, 255, 0.1)",
                        border: "1px solid rgba(0, 200, 255, 0.2)",
                        borderRadius: "20px",
                        color: "#fff",
                        fontSize: "0.75rem",
                      }}
                    >
                      {item}
                    </Box>
                  )
                )}
              </Stack>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 2 }}>
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Box
                sx={{
                  width: "60px",
                  height: "60px",
                  mx: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg, #0c1e3e 0%, #00c8ff 100%)",
                  borderRadius: "50%",
                  position: "relative",
                  animation: `${floatAnimation} 3s infinite ease-in-out`,
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    top: "-4px",
                    left: "-4px",
                    right: "-4px",
                    bottom: "-4px",
                    background:
                      "linear-gradient(135deg, #0c1e3e 0%, #00c8ff 100%)",
                    borderRadius: "50%",
                    opacity: 0.4,
                    animation: `${pulseAnimation} 2s infinite`,
                  },
                }}
              >
                <TrendingUp sx={{ color: "#fff", fontSize: 24 }} />
              </Box>
              <Typography
                sx={{
                  mt: 2,
                  color: "#0c1e3e",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                }}
              >
                Evolving
                <br />→
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              sx={{
                p: 4,
                background: "linear-gradient(145deg, #00c8ff 0%, #0099cc 100%)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "20px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0, 200, 255, 0.2)",
                animation: `${fadeInUp} 0.8s ease-out 0.2s both`,
              }}
            >
              {/* Glow effect */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-50px",
                  left: "-50px",
                  width: "150px",
                  height: "150px",
                  background:
                    "radial-gradient(circle, rgba(0,200,255,0.4) 0%, transparent 70%)",
                  borderRadius: "50%",
                }}
              />

              <Typography
                variant="overline"
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  letterSpacing: 2,
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <RocketLaunch sx={{ fontSize: 14 }} />
                THE FUTURE
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: "#fff",
                  mb: 2,
                  fontSize: { xs: "1.75rem", md: "2rem" },
                }}
              >
                Next-Gen Fintech
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.9)",
                    mt: 0.5,
                  }}
                >
                  Digital Transformation
                </Box>
              </Typography>

              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
              >
                <Box
                  sx={{
                    width: "40px",
                    height: "2px",
                    background: "#fff",
                  }}
                />
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.95)",
                    fontSize: "0.9rem",
                  }}
                >
                  Innovative Financial Solutions
                </Typography>
              </Box>

              <Stack direction="row" spacing={2} flexWrap="wrap" gap={1}>
                {["AI & ML", "Blockchain", "DeFi", "RPA", "Web 3.0"].map(
                  (item, i) => (
                    <Box
                      key={i}
                      sx={{
                        px: 2,
                        py: 0.5,
                        background: "rgba(255, 255, 255, 0.2)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        borderRadius: "20px",
                        color: "#fff",
                        fontSize: "0.75rem",
                      }}
                    >
                      {item}
                    </Box>
                  )
                )}
              </Stack>
            </Card>
          </Grid>
        </Grid>

        {/* Fintech Solutions Grid */}
        <Box
          sx={{
            animation: `${fadeInUp} 0.8s ease-out 0.6s both`,
            mt: 5,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              fontWeight: 700,
              color: "#0c1e3e",
              textAlign: "center",
              mb: 6,
            }}
          >
            Our Fintech Solutions
          </Typography>

          <Grid container spacing={3} sx={{ mb: { xs: 8, md: 10 } }}>
            {fintechSolutions.map((solution, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    background:
                      "linear-gradient(145deg, #ffffff 0%, #f8fbff 100%)",
                    border: `1px solid ${alpha(solution.color, 0.15)}`,
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 12px 32px rgba(12, 30, 62, 0.08)",
                    transition:
                      "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)",
                    animation: `${fadeInUp} 0.8s ease-out ${solution.delay}s both`,
                    position: "relative",
                    "&:hover": {
                      transform: "translateY(-12px) scale(1.02)",
                      boxShadow: `0 24px 48px ${alpha(solution.color, 0.15)}`,
                      borderColor: alpha(solution.color, 0.4),
                      "& .solution-glow": {
                        opacity: 1,
                      },
                      "& .solution-icon": {
                        transform: "scale(1.1) rotate(5deg)",
                      },
                    },
                  }}
                >
                  {/* Background Glow Effect */}
                  <Box
                    className="solution-glow"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "150px",
                      background: `radial-gradient(ellipse at center, ${alpha(
                        solution.color,
                        0.1
                      )} 0%, transparent 70%)`,
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                    }}
                  />

                  {/* Corner Accent */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "80px",
                      height: "80px",
                      background: `linear-gradient(135deg, ${alpha(
                        solution.color,
                        0.1
                      )} 0%, transparent 50%)`,
                      borderBottomLeftRadius: "24px",
                    }}
                  />

                  <Box sx={{ p: 4, position: "relative", zIndex: 1 }}>
                    {/* Icon Container */}
                    <Box
                      className="solution-icon"
                      sx={{
                        width: "80px",
                        height: "80px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `linear-gradient(135deg, ${alpha(
                          solution.color,
                          0.1
                        )} 0%, ${alpha(solution.color, 0.05)} 100%)`,
                        borderRadius: "20px",
                        mb: 3,
                        color: solution.color,
                        border: `1px solid ${alpha(solution.color, 0.2)}`,
                        transition: "transform 0.4s ease",
                        position: "relative",
                        "&:after": {
                          content: '""',
                          position: "absolute",
                          inset: "-3px",
                          background: `linear-gradient(135deg, ${solution.color} 0%, transparent 50%)`,
                          borderRadius: "22px",
                          opacity: 0.3,
                          zIndex: -1,
                        },
                      }}
                    >
                      {React.cloneElement(solution.icon, {
                        sx: {
                          fontSize: 36,
                          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                        },
                      })}
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "1.75rem",
                        fontWeight: 800,
                        color: "#0c1e3e",
                        lineHeight: 1.2,
                        mb: 2,
                        position: "relative",
                        "&:after": {
                          content: '""',
                          position: "absolute",
                          bottom: -8,
                          left: 0,
                          width: "40px",
                          height: "3px",
                          background: solution.color,
                          borderRadius: "2px",
                          transition: "width 0.3s ease",
                        },
                        "&:hover:after": {
                          width: "60px",
                        },
                      }}
                    >
                      {solution.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        color: alpha("#0c1e3e", 0.8),
                        lineHeight: 1.6,
                        fontSize: "1rem",
                        mb: 3,
                        minHeight: "80px",
                      }}
                    >
                      {solution.description}
                    </Typography>

                    {/* Tech Tags */}
                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                      {solution.title === "Blockchain" &&
                        ["Smart Contracts", "DApps", "DeFi", "NFTs"].map(
                          (tag, i) => (
                            <Box
                              key={i}
                              sx={{
                                px: 2,
                                py: 0.75,
                                background: alpha(solution.color, 0.08),
                                border: `1px solid ${alpha(
                                  solution.color,
                                  0.2
                                )}`,
                                borderRadius: "20px",
                                color: solution.color,
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                letterSpacing: "0.3px",
                                transition: "all 0.2s ease",
                                "&:hover": {
                                  background: alpha(solution.color, 0.15),
                                  transform: "translateY(-1px)",
                                },
                              }}
                            >
                              {tag}
                            </Box>
                          )
                        )}
                      {solution.title === "Cryptocurrency" &&
                        [
                          "Crypto Wallets",
                          "Trading APIs",
                          "Exchange",
                          "Tokenization",
                        ].map((tag, i) => (
                          <Box
                            key={i}
                            sx={{
                              px: 2,
                              py: 0.75,
                              background: alpha(solution.color, 0.08),
                              border: `1px solid ${alpha(solution.color, 0.2)}`,
                              borderRadius: "20px",
                              color: solution.color,
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              letterSpacing: "0.3px",
                              transition: "all 0.2s ease",
                              "&:hover": {
                                background: alpha(solution.color, 0.15),
                                transform: "translateY(-1px)",
                              },
                            }}
                          >
                            {tag}
                          </Box>
                        ))}
                      {solution.title === "RPA" &&
                        [
                          "Workflow Automation",
                          "AI Bots",
                          "Process Mining",
                          "OCR",
                        ].map((tag, i) => (
                          <Box
                            key={i}
                            sx={{
                              px: 2,
                              py: 0.75,
                              background: alpha(solution.color, 0.08),
                              border: `1px solid ${alpha(solution.color, 0.2)}`,
                              borderRadius: "20px",
                              color: solution.color,
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              letterSpacing: "0.3px",
                              transition: "all 0.2s ease",
                              "&:hover": {
                                background: alpha(solution.color, 0.15),
                                transform: "translateY(-1px)",
                              },
                            }}
                          >
                            {tag}
                          </Box>
                        ))}
                    </Stack>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Stats Section - Enhanced Design */}
          <Box
            sx={{
              animation: `${fadeInUp} 0.8s ease-out 0.8s both`,
            }}
          >
            <Card
              sx={{
                p: { xs: 4, md: 6 },
                background: "linear-gradient(145deg, #0c1e3e 0%, #142950 100%)",
                border: "1px solid rgba(0, 200, 255, 0.2)",
                borderRadius: "32px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 24px 64px rgba(12, 30, 62, 0.3)",
              }}
            >
              {/* Background Pattern */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `radial-gradient(circle at 20% 80%, ${alpha(
                    "#00c8ff",
                    0.05
                  )} 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${alpha(
                    "#00c8ff",
                    0.05
                  )} 0%, transparent 50%)`,
                }}
              />

              {/* Floating Elements */}
              {[1, 2, 3, 4].map((i) => (
                <Box
                  key={i}
                  sx={{
                    position: "absolute",
                    width: "60px",
                    height: "60px",
                    background: `radial-gradient(circle, ${alpha(
                      "#00c8ff",
                      0.1
                    )} 0%, transparent 70%)`,
                    borderRadius: "50%",
                    top: `${20 + Math.random() * 60}%`,
                    left: `${10 + Math.random() * 80}%`,
                    animation: `${floatAnimation} ${
                      6 + Math.random() * 4
                    }s infinite ease-in-out`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: "#fff",
                  textAlign: "center",
                  mb: 1,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  position: "relative",
                }}
              >
                Our Impact in Numbers
              </Typography>

              <Typography
                sx={{
                  color: alpha("#fff", 0.8),
                  textAlign: "center",
                  mb: 6,
                  maxWidth: "600px",
                  mx: "auto",
                  fontSize: "1.125rem",
                  position: "relative",
                }}
              >
                Driving innovation and delivering exceptional results in the
                fintech industry
              </Typography>

              <Grid container spacing={3}>
                {[
                  {
                    label: "Years in Fintech",
                    value: "8+",
                    color: "#00c8ff",
                    icon: <AccessTime fontSize="large" />,
                  },
                  {
                    label: "Clients Served",
                    value: "50+",
                    color: "#4ade80",
                    icon: <Groups fontSize="large" />,
                  },
                  {
                    label: "Projects Delivered",
                    value: "200+",
                    color: "#f59e0b",
                    icon: <RocketLaunch fontSize="large" />,
                  },
                  {
                    label: "Innovation Rate",
                    value: "95%",
                    color: "#ef4444",
                    icon: <AutoGraph fontSize="large" />,
                  },
                ].map((stat, index) => (
                  <Grid size={{ xs: 6, md: 3 }} key={index}>
                    <Box
                      sx={{
                        textAlign: "center",
                        p: 3,
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "20px",
                        transition: "all 0.3s ease",
                        position: "relative",
                        overflow: "hidden",
                        "&:hover": {
                          background: "rgba(255, 255, 255, 0.08)",
                          transform: "translateY(-4px)",
                          borderColor: alpha(stat.color, 0.3),
                          "& .stat-glow": {
                            opacity: 0.6,
                          },
                        },
                      }}
                    >
                      {/* Hover Glow Effect */}
                      <Box
                        className="stat-glow"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `radial-gradient(circle at center, ${alpha(
                            stat.color,
                            0.2
                          )} 0%, transparent 70%)`,
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                        }}
                      />

                      {/* Icon */}
                      <Box
                        sx={{
                          color: stat.color,
                          mb: 2,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          animation: `${floatAnimation} 3s infinite ease-in-out`,
                          animationDelay: `${index * 0.2}s`,
                          "& .MuiSvgIcon-root": {
                            fontSize: { xs: "2rem", md: "2.5rem" },
                            filter: `drop-shadow(0 0 10px ${alpha(
                              stat.color,
                              0.4
                            )})`,
                          },
                        }}
                      >
                        {stat.icon}
                      </Box>

                      {/* Value */}
                      <Typography
                        variant="h2"
                        sx={{
                          fontWeight: 900,
                          color: stat.color,
                          lineHeight: 1,
                          mb: 1,
                          fontSize: { xs: "2.5rem", md: "3.5rem" },
                          textShadow: `0 0 20px ${alpha(stat.color, 0.3)}`,
                          position: "relative",
                        }}
                      >
                        {stat.value}
                      </Typography>

                      {/* Label */}
                      <Typography
                        sx={{
                          color: alpha("#fff", 0.9),
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          letterSpacing: "0.5px",
                        }}
                      >
                        {stat.label}
                      </Typography>

                      {/* Animated Underline */}
                      <Box
                        sx={{
                          width: "40px",
                          height: "3px",
                          background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`,
                          mx: "auto",
                          mt: 2,
                          borderRadius: "2px",
                          animation: `${slideIn} 1.5s infinite alternate`,
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Bottom Text */}
              <Box sx={{ textAlign: "center", mt: 6, position: "relative" }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    px: 4,
                    py: 1.5,
                    background: "rgba(0, 200, 255, 0.1)",
                    border: "1px solid rgba(0, 200, 255, 0.3)",
                    borderRadius: "50px",
                    color: "#00c8ff",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    letterSpacing: "1px",
                    animation: `${pulseAnimation} 2s infinite`,
                  }}
                >
                  <TrendingUp sx={{ fontSize: "1rem" }} />
                  CONTINUOUSLY GROWING
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FutureVision;
