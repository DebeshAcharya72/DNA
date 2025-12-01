import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  useMediaQuery,
  Card,
  CardContent,
} from "@mui/material";
import {
  TrendingUp as TrendingUpIcon,
  Shield as ShieldIcon,
  Speed as SpeedIcon,
  ShowChart as ChartIcon,
  RocketLaunch as RocketIcon,
} from "@mui/icons-material";

const FintechTransformation = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const transformations = [
    {
      id: 1,
      title: "Technology as competitive advantage",
      metric: "+40% Efficiency",
      icon: <TrendingUpIcon />,
      color: "#2563EB",
      description: "Leverage cutting-edge technology to outperform competitors",
    },
    {
      id: 2,
      title: "Digital client service models",
      metric: "+65% Satisfaction",
      icon: <SpeedIcon />,
      color: "#10B981",
      description: "Modern digital interfaces for enhanced customer experience",
    },
    {
      id: 3,
      title: "Control framework upgrades",
      metric: "+99.9% Security",
      icon: <ShieldIcon />,
      color: "#8B5CF6",
      description: "Advanced security protocols and compliance frameworks",
    },
    {
      id: 4,
      title: "Productivity improvements",
      metric: "+35% ROI",
      icon: <ChartIcon />,
      color: "#F59E0B",
      description: "Streamlined processes for maximum return on investment",
    },
    {
      id: 5,
      title: "Iterative development approach",
      metric: "-50% Time-to-Market",
      icon: <RocketIcon />,
      color: "#EF4444",
      description: "Agile methodologies for faster product delivery",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "40%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(37, 99, 235, 0.03) 0%, transparent 100%)",
          clipPath: "polygon(100% 0, 0 0, 100% 100%)",
        }}
      />

      <Container maxWidth="lg">
        {/* Header Section */}
        <Box
          sx={{
            mb: { xs: 6, md: 8 },
            maxWidth: "800px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "0.875rem", md: "1rem" },
              fontWeight: 600,
              color: "#2563EB",
              textTransform: "uppercase",
              letterSpacing: "2px",
              mb: 2,
            }}
          >
            Fintech Transformation
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#111827",
              mb: 3,
              letterSpacing: "-0.02em",
            }}
          >
            Driving Innovation in Financial Services
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.125rem", md: "1.25rem" },
              lineHeight: 1.7,
              color: "#6B7280",
              maxWidth: "600px",
            }}
          >
            We partner with financial institutions to drive digital innovation
            and operational excellence through cutting-edge technology
            solutions.
          </Typography>
        </Box>

        {/* Transformation Metrics Grid */}
        <Grid container spacing={3}>
          {transformations.map((item, index) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  border: "1px solid #F3F4F6",
                  borderRadius: 2,
                  backgroundColor: "#FFFFFF",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "visible",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: item.color,
                    boxShadow: `0 20px 40px -15px ${item.color}20`,
                    "& .metric-badge": {
                      transform: "scale(1.05)",
                    },
                  },
                }}
              >
                {/* Floating Metric Badge */}
                <Box
                  className="metric-badge"
                  sx={{
                    position: "absolute",
                    top: -20,
                    right: 20,
                    px: 2.5,
                    py: 1,
                    backgroundColor: item.color,
                    color: "white",
                    borderRadius: 20,
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    boxShadow: `0 10px 20px ${item.color}40`,
                    transition: "transform 0.3s ease",
                  }}
                >
                  {item.metric}
                </Box>

                <CardContent sx={{ p: 3 }}>
                  {/* Icon Container */}
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: `${item.color}10`,
                      borderRadius: "50%",
                      color: item.color,
                      mb: 3,
                      "& svg": {
                        fontSize: 28,
                      },
                    }}
                  >
                    {item.icon}
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "#111827",
                      mb: 1.5,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      color: "#6B7280",
                      mb: 3,
                    }}
                  >
                    {item.description}
                  </Typography>

                  {/* Progress Indicator */}
                  <Box sx={{ mt: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 0.5,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "#111827",
                        }}
                      >
                        Impact Level
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: item.color,
                        }}
                      >
                        {index + 1}/5
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: 4,
                        backgroundColor: "#F3F4F6",
                        borderRadius: 2,
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          width: `${(index + 1) * 20}%`,
                          height: "100%",
                          backgroundColor: item.color,
                          borderRadius: 2,
                        }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FintechTransformation;
