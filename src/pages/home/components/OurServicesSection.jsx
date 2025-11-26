// OurServicesSection.jsx
import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import {
  Transform as DigitalTransformationIcon,
  BarChart as DataAnalyticsIcon,
  Cloud as CloudInfrastructureIcon,
  Security as CyberSecurityIcon,
  AutoAwesome as AISolutionsIcon,
  Code as ApplicationServicesIcon,
} from "@mui/icons-material";

const OurServicesSection = () => {
  const services = [
    {
      title: "Digital Transformation",
      description:
        "Transform your business with cutting-edge digital solutions that drive growth and innovation.",
      icon: <DigitalTransformationIcon sx={{ fontSize: 28 }} />,
    },
    {
      title: "Data Analytics",
      description:
        "Unlock insights from your data with advanced analytics and business intelligence solutions.",
      icon: <DataAnalyticsIcon sx={{ fontSize: 28 }} />,
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Migrate, manage, and optimize your cloud infrastructure for maximum efficiency and scalability.",
      icon: <CloudInfrastructureIcon sx={{ fontSize: 28 }} />,
    },
    {
      title: "Cyber Security",
      description:
        "Protect your digital assets with comprehensive security solutions and compliance protocols.",
      icon: <CyberSecurityIcon sx={{ fontSize: 28 }} />,
    },
    {
      title: "AI Solutions",
      description:
        "Leverage artificial intelligence to automate processes and enhance decision-making.",
      icon: <AISolutionsIcon sx={{ fontSize: 28 }} />,
    },
    {
      title: "Application Services",
      description:
        "Build, maintain, and modernize enterprise-grade applications tailored to your needs.",
      icon: <ApplicationServicesIcon sx={{ fontSize: 28 }} />,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#f5fbff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Top Badge - "Our Expertise" (light mode) */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            px: 2.5,
            py: 1,
            borderRadius: "50px",
            backgroundColor: "rgba(0, 180, 216, 0.1)",
            border: "1px solid rgba(0, 180, 216, 0.2)",
            color: "#0077b6",
            fontSize: "0.95rem",
            fontWeight: 600,
            mb: 4,
            mx: "auto",
          }}
        >
          Our Expertise
        </Box>

        {/* Section Title */}
        <Typography
          variant="h2"
          sx={{
            color: "#0c1e3e", // Dark navy for readability
            fontWeight: 800,
            fontSize: { xs: "2.2rem", md: "2.8rem" },
            textAlign: "center",
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          Our Services
        </Typography>

        <Typography
          sx={{
            color: "#4b5563", // Muted dark gray
            fontSize: "1.1rem",
            textAlign: "center",
            mb: 6,
            maxWidth: "600px",
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          Comprehensive technology solutions tailored to your business needs
        </Typography>

        {/* Services Grid */}
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
                  transition: "all 0.3s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 10px 30px rgba(0, 180, 216, 0.12)",
                    borderColor: "#cceeff",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  {/* Icon Container */}
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "14px",
                      backgroundColor: "rgba(0, 180, 216, 0.1)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 2.5,
                      color: "#00B4D8",
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      color: "#0c1e3e",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      mb: 1.5,
                      lineHeight: 1.3,
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#4b5563",
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      mb: 2.5,
                      flex: 1,
                    }}
                  >
                    {service.description}
                  </Typography>

                  {/* "Learn more" link */}
                  <Button
                    sx={{
                      color: "#00B4D8",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      textTransform: "none",
                      justifyContent: "flex-start",
                      p: 0,
                      minWidth: "auto",
                      "&:hover": {
                        color: "#0096b6",
                        backgroundColor: "transparent",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Learn more →
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurServicesSection;
