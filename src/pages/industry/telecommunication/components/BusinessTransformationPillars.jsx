import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  Stack,
} from "@mui/material";
import {
  People as PeopleIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  TrendingUp as TrendingUpIcon,
  ArrowUpward as ArrowUpwardIcon,
} from "@mui/icons-material";

const BusinessTransformationPillars = () => {
  // Color palette
  const COLORS = {
    background: "#F9FAFB",
    cardBackground: "#FFFFFF",
    primaryText: "#1F2937",
    secondaryText: "#6B7280",
    divider: "#E5E7EB",
    blue: "#3B82F6",
    green: "#10B981",
    purple: "#8B5CF6",
    red: "#EF4444",
  };

  // Pillars data
  const pillars = [
    {
      id: 1,
      title: "Customer Engagement",
      percentage: "87%",
      description:
        "Enhanced customer satisfaction through personalized telecom solutions",
      icon: <PeopleIcon sx={{ fontSize: 28 }} />,
      color: COLORS.blue,
      trend: "+12%",
      metricLabel: "Satisfaction Rate",
    },
    {
      id: 2,
      title: "Operational Efficiency",
      percentage: "64%",
      description:
        "Streamlined processes reducing operational costs and improving throughput",
      icon: <SpeedIcon sx={{ fontSize: 28 }} />,
      color: COLORS.green,
      trend: "+28%",
      metricLabel: "Efficiency Gain",
    },
    {
      id: 3,
      title: "Risk & Compliance",
      percentage: "100%",
      description:
        "Full regulatory compliance with proactive risk management systems",
      icon: <SecurityIcon sx={{ fontSize: 28 }} />,
      color: COLORS.purple,
      trend: "Perfect",
      metricLabel: "Compliance Score",
    },
    {
      id: 4,
      title: "Revenue Growth",
      percentage: "2.3x",
      description:
        "Accelerated revenue streams through innovative engineering solutions",
      icon: <TrendingUpIcon sx={{ fontSize: 28 }} />,
      color: COLORS.red,
      trend: "+156%",
      metricLabel: "Growth Multiplier",
    },
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 8,
        backgroundColor: COLORS.background,
        minHeight: "100vh",
      }}
    >
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          sx={{
            fontSize: { xs: "2.5rem", md: "3rem", lg: "3.5rem" },
            fontWeight: 800,
            letterSpacing: "-0.02em",
            mb: 2,
            background: "linear-gradient(135deg, #1E293B 0%, #3B82F6 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          BUSINESS TRANSFORMATION PILLARS
        </Typography>
        <Typography
          sx={{
            color: COLORS.secondaryText,
            fontSize: "1.1rem",
            maxWidth: "600px",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Four essential pillars driving digital transformation and sustainable
          growth
        </Typography>
      </Box>

      {/* Pillars Grid */}
      <Grid container spacing={4}>
        {pillars.map((pillar, index) => (
          <Grid key={pillar.id} size={{ xs: 12, sm: 6 }}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                border: `1px solid ${COLORS.divider}`,
                borderRadius: 3,
                backgroundColor: COLORS.cardBackground,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: `0 20px 40px -15px ${pillar.color}30`,
                  borderColor: pillar.color,
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "4px",
                  height: "100%",
                  backgroundColor: pillar.color,
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                {/* Header with Icon and Percentage */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: 4,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        backgroundColor: `${pillar.color}15`,
                        color: pillar.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {pillar.icon}
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: COLORS.primaryText,
                          fontSize: "1.25rem",
                          mb: 0.5,
                        }}
                      >
                        {pillar.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: COLORS.secondaryText,
                          fontWeight: 500,
                          fontSize: "0.8rem",
                        }}
                      >
                        {pillar.metricLabel}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Percentage Badge */}
                  <Box
                    sx={{
                      position: "relative",
                      width: 100,
                      height: 100,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* Background Circle */}
                    <Box
                      sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        backgroundColor: `${pillar.color}10`,
                      }}
                    />

                    {/* Percentage Circle */}
                    <Box
                      sx={{
                        position: "absolute",
                        width: "90%",
                        height: "90%",
                        borderRadius: "50%",
                        border: `6px solid ${pillar.color}30`,
                        borderTopColor: pillar.color,
                        borderRightColor: pillar.color,
                        transform: `rotate(${pillar.id * 45}deg)`,
                        transition: "transform 0.6s ease",
                      }}
                    />

                    {/* Percentage Text */}
                    <Box sx={{ position: "relative", zIndex: 1 }}>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: "2.5rem",
                          color: pillar.color,
                          lineHeight: 1,
                          textAlign: "center",
                        }}
                      >
                        {pillar.percentage}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Description */}
                <Typography
                  sx={{
                    color: COLORS.secondaryText,
                    lineHeight: 1.7,
                    fontSize: "1rem",
                    mb: 3,
                  }}
                >
                  {pillar.description}
                </Typography>

                {/* Trend Indicator */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    pt: 2,
                    borderTop: `1px solid ${COLORS.divider}`,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <ArrowUpwardIcon
                      sx={{
                        fontSize: 16,
                        color: pillar.color,
                      }}
                    />
                    <Typography
                      sx={{
                        color: pillar.color,
                        fontWeight: 600,
                        fontSize: "0.9rem",
                      }}
                    >
                      {pillar.trend}
                    </Typography>
                    <Typography
                      sx={{
                        color: COLORS.secondaryText,
                        ml: 1,
                        fontSize: "0.8rem",
                      }}
                    >
                      from last quarter
                    </Typography>
                  </Box>

                  {/* Progress Bar */}
                  <Box sx={{ width: 80 }}>
                    <Box
                      sx={{
                        width: "100%",
                        height: 4,
                        backgroundColor: `${pillar.color}20`,
                        borderRadius: 2,
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          width: `${pillar.id === 3 ? 100 : pillar.id * 25}%`,
                          height: "100%",
                          backgroundColor: pillar.color,
                          borderRadius: 2,
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BusinessTransformationPillars;
