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
  Chip,
  Button,
} from "@mui/material";
import {
  CloudUpload,
  Bolt,
  Business,
  Transform,
  Speed,
  ModelTraining,
  TrendingUp,
  CheckCircle,
  ArrowForward,
  Storage,
  Cloud,
  Psychology,
} from "@mui/icons-material";
import { keyframes } from "@mui/system";

// Animations
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulseAnimation = keyframes`
  0%, 100% { 
    transform: scale(1); 
    opacity: 0.6;
  }
  50% { 
    transform: scale(1.05); 
    opacity: 1;
  }
`;

const BusinessStrategy = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const strategies = [
    {
      title: "Cloud Migration",
      description:
        "Seamless transition to cloud platforms with minimal downtime and maximum efficiency.",
      icon: <CloudUpload />,
      color: "#00c8ff",
      features: [
        "Zero-downtime migration",
        "Cost optimization",
        "Security compliance",
      ],
    },
    {
      title: "Accelerated Development",
      description:
        "Leverage modern DevOps practices for faster time-to-market and continuous delivery.",
      icon: <Bolt />,
      color: "#0c1e3e",
      features: [
        "CI/CD pipelines",
        "Automated testing",
        "Microservices architecture",
      ],
    },
    {
      title: "New Business Models",
      description:
        "Enable innovation through scalable infrastructure that supports evolving business needs.",
      icon: <Business />,
      color: "#00c8ff",
      features: [
        "API-driven ecosystems",
        "Scalable platforms",
        "Digital transformation",
      ],
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
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, #00c8ff08 0%, transparent 70%)",
          animation: `${floatAnimation} 20s infinite ease-in-out`,
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, #0c1e3e05 0%, transparent 70%)",
          animation: `${floatAnimation} 25s infinite ease-in-out reverse`,
          zIndex: 0,
        }}
      />

      {/* Gradient Lines */}
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

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 10 },
            animation: `${fadeInUp} 0.8s ease-out`,
          }}
        >
          <Chip
            label="Strategic Innovation"
            sx={{
              background: alpha("#00c8ff", 0.1),
              color: "#00c8ff",
              fontWeight: 600,
              px: 3,
              py: 1,
              mb: 3,
              border: `1px solid ${alpha("#00c8ff", 0.2)}`,
              fontSize: "0.875rem",
            }}
          />

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
            Business-Centric
            <Box
              component="span"
              sx={{
                color: "#00c8ff",
                display: "block",
                mt: 1,
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "120px",
                  height: "4px",
                  background:
                    "linear-gradient(90deg, transparent, #00c8ff, transparent)",
                  borderRadius: "2px",
                },
              }}
            >
              Application Strategy
            </Box>
          </Typography>
        </Box>

        {/* Main Content */}
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          sx={{ mb: { xs: 8, md: 12 } }}
        >
          {/* Legacy Infrastructure Column */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                animation: `${slideInLeft} 0.8s ease-out`,
                position: "relative",
              }}
            >
              <Card
                sx={{
                  p: { xs: 4, md: 5 },
                  background:
                    "linear-gradient(135deg, #0c1e3e 0%, #08172f 100%)",
                  borderRadius: "24px",
                  color: "white",
                  boxShadow: "0 25px 50px rgba(12, 30, 62, 0.15)",
                  position: "relative",
                  overflow: "hidden",
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(45deg, transparent 30%, #00c8ff10 100%)",
                  },
                }}
              >
                {/* Server Icon */}
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: alpha("#fff", 0.1),
                    backdropFilter: "blur(10px)",
                    borderRadius: "20px",
                    mb: 4,
                    border: `1px solid ${alpha("#fff", 0.2)}`,
                  }}
                >
                  <Storage sx={{ fontSize: 40, color: "#fff" }} />
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.75rem", md: "2.25rem" },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    mb: 2,
                    position: "relative",
                  }}
                >
                  Legacy Infrastructure
                  <Box
                    sx={{
                      width: "40px",
                      height: "3px",
                      background: "#00c8ff",
                      mt: 2,
                      borderRadius: "2px",
                    }}
                  />
                </Typography>

                <Typography
                  sx={{
                    color: alpha("#fff", 0.9),
                    fontSize: "1.05rem",
                    lineHeight: 1.6,
                    mb: 3,
                  }}
                >
                  Traditional systems with established reliability but limited
                  scalability and flexibility.
                </Typography>

                {/* Legacy Features */}
                <Stack spacing={2} sx={{ mt: 4 }}>
                  {[
                    "Monolithic Architecture",
                    "On-premise Deployment",
                    "Manual Processes",
                    "Limited Scalability",
                  ].map((feature, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: "24px",
                          height: "24px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: alpha("#fff", 0.1),
                          borderRadius: "6px",
                          flexShrink: 0,
                        }}
                      >
                        <Box
                          sx={{
                            width: "8px",
                            height: "8px",
                            background: alpha("#fff", 0.5),
                            borderRadius: "50%",
                          }}
                        />
                      </Box>
                      <Typography
                        sx={{ color: alpha("#fff", 0.9), fontSize: "0.95rem" }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Box>
          </Grid>

          {/* Transformation Arrow Column */}
          <Grid size={{ xs: 12, md: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                animation: `${pulseAnimation} 2s infinite ease-in-out`,
              }}
            >
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#fff",
                  borderRadius: "50%",
                  boxShadow: "0 15px 30px rgba(0, 200, 255, 0.2)",
                  border: `2px solid ${alpha("#00c8ff", 0.3)}`,
                }}
              >
                <Transform sx={{ fontSize: 40, color: "#00c8ff" }} />
              </Box>
            </Box>
          </Grid>

          {/* Cloud Native Services Column */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                animation: `${slideInRight} 0.8s ease-out`,
              }}
            >
              <Card
                sx={{
                  p: { xs: 4, md: 5 },
                  background:
                    "linear-gradient(135deg, #00c8ff 0%, #00a8ff 100%)",
                  borderRadius: "24px",
                  color: "white",
                  boxShadow: "0 25px 50px rgba(0, 200, 255, 0.15)",
                  position: "relative",
                  overflow: "hidden",
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(45deg, transparent 30%, #ffffff15 100%)",
                  },
                }}
              >
                {/* Cloud Icon */}
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: alpha("#fff", 0.2),
                    backdropFilter: "blur(10px)",
                    borderRadius: "20px",
                    mb: 4,
                    border: `1px solid ${alpha("#fff", 0.3)}`,
                  }}
                >
                  <Cloud sx={{ fontSize: 40, color: "#fff" }} />
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.75rem", md: "2.25rem" },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    mb: 2,
                    position: "relative",
                  }}
                >
                  Cloud Native Services
                  <Box
                    sx={{
                      width: "40px",
                      height: "3px",
                      background: "#fff",
                      mt: 2,
                      borderRadius: "2px",
                    }}
                  />
                </Typography>

                <Typography
                  sx={{
                    fontSize: "1.05rem",
                    lineHeight: 1.6,
                    mb: 3,
                  }}
                >
                  Modern, scalable solutions built for agility, innovation, and
                  business growth.
                </Typography>

                {/* Cloud Features */}
                <Stack spacing={2} sx={{ mt: 4 }}>
                  {[
                    "Microservices Architecture",
                    "Auto-scaling Infrastructure",
                    "Serverless Computing",
                    "Continuous Deployment",
                  ].map((feature, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: "24px",
                          height: "24px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: alpha("#fff", 0.3),
                          borderRadius: "6px",
                          flexShrink: 0,
                        }}
                      >
                        <CheckCircle sx={{ fontSize: 16, color: "#fff" }} />
                      </Box>
                      <Typography sx={{ fontSize: "0.95rem" }}>
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Box>
          </Grid>
        </Grid>

        {/* Strategy Description */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 8 },
            animation: `${fadeInUp} 0.8s ease-out 0.4s both`,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: 600,
              color: "#0c1e3e",
              lineHeight: 1.4,
              maxWidth: "800px",
              mx: "auto",
              mb: 3,
            }}
          >
            Our strategic approach transforms your infrastructure into agile,
            scalable cloud-native solutions that drive business innovation.
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
              mt: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <TrendingUp sx={{ color: "#00c8ff", fontSize: 24 }} />
              <Typography sx={{ color: "#0c1e3e", fontWeight: 500 }}>
                40% Faster Time-to-Market
              </Typography>
            </Box>
            <Box
              sx={{
                width: "1px",
                height: "20px",
                background: alpha("#0c1e3e", 0.2),
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Psychology sx={{ color: "#00c8ff", fontSize: 24 }} />
              <Typography sx={{ color: "#0c1e3e", fontWeight: 500 }}>
                60% Reduction in Operational Costs
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Strategy Cards Grid */}
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          sx={{ mb: { xs: 6, md: 8 } }}
        >
          {strategies.map((strategy, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  background: "white",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: `1px solid ${alpha("#0c1e3e", 0.1)}`,
                  boxShadow: "0 15px 30px rgba(12, 30, 62, 0.08)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  animation: `${fadeInUp} 0.8s ease-out ${index * 0.2}s both`,
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 25px 50px rgba(12, 30, 62, 0.12)",
                    "& .strategy-icon": {
                      transform: "scale(1.1)",
                      background: `${strategy.color}20`,
                    },
                  },
                }}
              >
                <Box sx={{ p: { xs: 4, md: 5 } }}>
                  {/* Icon */}
                  <Box
                    className="strategy-icon"
                    sx={{
                      width: "70px",
                      height: "70px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: alpha(strategy.color, 0.1),
                      borderRadius: "18px",
                      mb: 3,
                      color: strategy.color,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {React.cloneElement(strategy.icon, {
                      sx: { fontSize: 32 },
                    })}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: "1.5rem", md: "1.75rem" },
                      fontWeight: 700,
                      color: "#0c1e3e",
                      lineHeight: 1.2,
                      mb: 2,
                    }}
                  >
                    {strategy.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      color: alpha("#0c1e3e", 0.8),
                      lineHeight: 1.6,
                      mb: 3,
                      fontSize: "1rem",
                    }}
                  >
                    {strategy.description}
                  </Typography>

                  {/* Features */}
                  <Stack spacing={1.5}>
                    {strategy.features.map((feature, featureIndex) => (
                      <Box
                        key={featureIndex}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: "20px",
                            height: "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: alpha(strategy.color, 0.1),
                            borderRadius: "4px",
                            flexShrink: 0,
                          }}
                        >
                          <Box
                            sx={{
                              width: "6px",
                              height: "6px",
                              background: strategy.color,
                              borderRadius: "50%",
                            }}
                          />
                        </Box>
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
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box
          sx={{
            textAlign: "center",
            animation: `${fadeInUp} 0.8s ease-out 0.6s both`,
          }}
        >
          <Paper
            sx={{
              p: { xs: 4, md: 6 },
              background:
                "linear-gradient(135deg, #0c1e3e05 0%, #00c8ff08 100%)",
              borderRadius: "24px",
              border: `1px solid ${alpha("#00c8ff", 0.2)}`,
              backdropFilter: "blur(10px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "linear-gradient(90deg, #00c8ff, #0c1e3e)",
              }}
            />

            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: 700,
                color: "#0c1e3e",
                lineHeight: 1.3,
                mb: 3,
              }}
            >
              Ready to Transform Your Infrastructure?
            </Typography>

            <Typography
              sx={{
                color: alpha("#0c1e3e", 0.8),
                fontSize: "1.125rem",
                lineHeight: 1.6,
                maxWidth: "600px",
                mx: "auto",
                mb: 4,
              }}
            >
              Let's discuss how our business-centric application strategy can
              accelerate your digital transformation journey.
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(135deg, #0c1e3e 0%, #08172f 100%)",
                color: "white",
                px: 6,
                py: 1.5,
                borderRadius: "12px",
                fontSize: "1.125rem",
                fontWeight: 600,
                boxShadow: "0 10px 30px rgba(12, 30, 62, 0.2)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #08172f 0%, #0c1e3e 100%)",
                  transform: "translateY(-3px)",
                  boxShadow: "0 15px 40px rgba(12, 30, 62, 0.3)",
                },
                transition: "all 0.3s ease",
              }}
              endIcon={<ArrowForward />}
            >
              Start Your Transformation
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default BusinessStrategy;
