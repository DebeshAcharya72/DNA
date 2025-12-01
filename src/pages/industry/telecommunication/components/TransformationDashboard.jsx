import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  Stack,
  Divider,
} from "@mui/material";
import {
  Bolt as BoltIcon,
  Devices as DevicesIcon,
  Cloud as CloudIcon,
  Analytics as AnalyticsIcon,
  Memory as MemoryIcon,
  TrendingUp as TrendingUpIcon,
} from "@mui/icons-material";

const TransformationDashboard = () => {
  // Clean, minimal color palette
  const COLORS = {
    background: "#ffffff",
    primaryText: "#111827",
    secondaryText: "#6b7280",
    accent: "#3b82f6",
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
    border: "#e5e7eb",
  };

  // Challenges data
  const challenges = [
    "Rapid technological evolution",
    "Increasing market complexity",
    "Demand for innovation acceleration",
  ];

  // Solutions data
  const solutions = [
    {
      id: 1,
      value: "56",
      title: "Ultra-fast connectivity",
      description: "with low latency for mission-critical applications",
      icon: <BoltIcon sx={{ fontSize: 24 }} />,
      color: COLORS.accent,
    },
    {
      id: 2,
      value: "IoT",
      title: "Seamless device integration",
      description: "and real-time data collection across networks",
      icon: <DevicesIcon sx={{ fontSize: 24 }} />,
      color: COLORS.success,
    },
    {
      id: 3,
      value: "Cloud",
      title: "Scalable infrastructure",
      description: "with enterprise-grade security and reliability",
      icon: <CloudIcon sx={{ fontSize: 24 }} />,
      color: COLORS.warning,
    },
    {
      id: 4,
      value: "AI",
      title: "Intelligent automation",
      description: "and predictive analytics for business optimization",
      icon: <AnalyticsIcon sx={{ fontSize: 24 }} />,
      color: COLORS.error,
    },
    {
      id: 5,
      value: "Edge",
      title: "Edge Computing",
      description:
        "Distributed processing for reduced latency and enhanced performance",
      icon: <MemoryIcon sx={{ fontSize: 24 }} />,
      color: "#8b5cf6",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Main Header */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
            fontWeight: 700,
            color: COLORS.primaryText,
            letterSpacing: "-0.025em",
            mb: 2,
          }}
        >
          INDUSTRY TRANSFORMATION
        </Typography>
        <Divider
          sx={{
            width: 80,
            height: 4,
            backgroundColor: COLORS.accent,
            mx: "auto",
            mb: 4,
          }}
        />
      </Box>

      <Grid container spacing={6}>
        {/* Left Column - Challenges */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ position: "sticky", top: 24 }}>
            {/* Challenges Section */}
            <Box sx={{ mb: 6 }}>
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: COLORS.primaryText,
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: 4,
                    height: 20,
                    backgroundColor: COLORS.accent,
                    borderRadius: 1,
                  }}
                />
                The Challenge
              </Typography>

              <Stack spacing={2}>
                {challenges.map((challenge, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      p: 2,
                      backgroundColor: `${COLORS.accent}08`,
                      borderRadius: 1.5,
                      borderLeft: `3px solid ${COLORS.accent}`,
                    }}
                  >
                    <Box
                      sx={{
                        minWidth: 20,
                        height: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: COLORS.accent,
                        borderRadius: "50%",
                        color: "white",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                      }}
                    >
                      {index + 1}
                    </Box>
                    <Typography
                      sx={{
                        color: COLORS.primaryText,
                        fontWeight: 500,
                        fontSize: "0.95rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {challenge}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* Velocity Indicator */}
            <Box sx={{ mt: 4 }}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: COLORS.primaryText,
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <TrendingUpIcon sx={{ fontSize: 20, color: COLORS.success }} />
                Velocity indicator
              </Typography>

              <Card
                elevation={0}
                sx={{
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 2,
                  backgroundColor: "white",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      sx={{ fontSize: "0.875rem", color: COLORS.secondaryText }}
                    >
                      Current velocity
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: COLORS.success,
                      }}
                    >
                      +42% YoY
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: "100%",
                      height: 6,
                      backgroundColor: `${COLORS.border}`,
                      borderRadius: 3,
                      overflow: "hidden",
                      mb: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: "75%",
                        height: "100%",
                        background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.success})`,
                        borderRadius: 3,
                      }}
                    />
                  </Box>

                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      sx={{ fontSize: "0.75rem", color: COLORS.secondaryText }}
                    >
                      Low
                    </Typography>
                    <Typography
                      sx={{ fontSize: "0.75rem", color: COLORS.secondaryText }}
                    >
                      Medium
                    </Typography>
                    <Typography
                      sx={{ fontSize: "0.75rem", color: COLORS.secondaryText }}
                    >
                      High
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: COLORS.primaryText,
                      }}
                    >
                      Maximum
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Grid>

        {/* Right Column - Solutions */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontSize: "1.25rem",
                fontWeight: 600,
                color: COLORS.primaryText,
                mb: 4,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 4,
                  height: 20,
                  backgroundColor: COLORS.success,
                  borderRadius: 1,
                }}
              />
              Our Solution
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {solutions.map((solution) => (
              <Grid key={solution.id} size={{ xs: 12, sm: 6 }}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 2,
                    backgroundColor: "white",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                      borderColor: solution.color,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    {/* Value and Icon */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "2.5rem",
                          fontWeight: 700,
                          color: solution.color,
                          lineHeight: 1,
                        }}
                      >
                        {solution.value}
                      </Typography>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: `${solution.color}10`,
                          borderRadius: "50%",
                          color: solution.color,
                        }}
                      >
                        {solution.icon}
                      </Box>
                    </Box>

                    {/* Title and Description */}
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: COLORS.primaryText,
                          mb: 1,
                          lineHeight: 1.3,
                        }}
                      >
                        {solution.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.9rem",
                          color: COLORS.secondaryText,
                          lineHeight: 1.5,
                        }}
                      >
                        {solution.description}
                      </Typography>
                    </Box>

                    {/* Progress Indicator */}
                    <Box sx={{ mt: 3 }}>
                      <Box
                        sx={{
                          width: "100%",
                          height: 2,
                          backgroundColor: `${solution.color}20`,
                          borderRadius: 1,
                          overflow: "hidden",
                        }}
                      >
                        <Box
                          sx={{
                            width: "80%",
                            height: "100%",
                            backgroundColor: solution.color,
                          }}
                        />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Additional Info */}
          <Box
            sx={{
              mt: 6,
              p: 3,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 2,
              backgroundColor: `${COLORS.accent}05`,
            }}
          >
            <Typography
              sx={{
                fontSize: "0.9rem",
                color: COLORS.secondaryText,
                textAlign: "center",
                lineHeight: 1.6,
              }}
            >
              A comprehensive suite of technologies working in harmony to drive
              digital transformation and create sustainable competitive
              advantage in today's rapidly evolving business landscape.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TransformationDashboard;
