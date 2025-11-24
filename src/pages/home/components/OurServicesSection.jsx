// OurServicesSection.jsx (Ultra Attractive Version)
import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Service Icons (SVG with subtle glow on hover)
const DigitalTransformationIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      stroke="#00C8FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DataAnalyticsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 14H7V10H3V14Z" fill="#00C8FF" />
    <path d="M9 18H13V6H9V18Z" fill="#00C8FF" />
    <path d="M15 20H19V4H15V20Z" fill="#00C8FF" />
  </svg>
);

const CloudSolutionsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 10C18.5 10 18.98 10.1 19.43 10.28C20.28 10.64 20.96 11.32 21.32 12.17C21.5 12.62 21.6 13.1 21.6 13.6C21.6 15.4 20.2 16.8 18.4 16.8H17.2C16.8 16.8 16.4 16.6 16.2 16.2C15.8 15.4 15.6 14.6 15.6 13.8C15.6 12.8 16 11.8 16.6 11C17.2 10.2 18 10 18 10Z"
      stroke="#00C8FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 14C12 16 10 18 8 18C6 18 4 16 4 14C4 12 6 10 8 10C10 10 12 12 12 14Z"
      stroke="#00C8FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CyberSecurityIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      stroke="#00C8FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12L12 12.01"
      stroke="#00C8FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AIMachineLearningIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18Z"
      stroke="#00C8FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12L12 12.01"
      stroke="#00C8FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CustomSoftwareIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 8L6 12L10 16"
      stroke="#00C8FF"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M14 16L18 12L14 8"
      stroke="#00C8FF"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Glassmorphic Card
const GlassCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  backdropFilter: "blur(10px)",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  border: "1px solid rgba(0, 200, 255, 0.2)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  "&:hover": {
    transform: "translateY(-6px) scale(1.02)",
    boxShadow: "0 16px 48px rgba(0, 200, 255, 0.15)",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    border: "1px solid rgba(0, 200, 255, 0.4)",
  },
}));

// Icon Wrapper with Glow
const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#E0F7FF",
  borderRadius: "12px",
  padding: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "20px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#B3F0FF",
    boxShadow: "0 0 20px rgba(0, 200, 255, 0.4)",
    transform: "scale(1.1)",
  },
}));

// Gradient Button
const GradientButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #00C8FF, #00A4E4)",
  color: "#FFFFFF",
  fontWeight: 600,
  fontSize: "0.875rem",
  padding: "8px 24px",
  borderRadius: "8px",
  textTransform: "uppercase",
  boxShadow: "0 4px 12px rgba(0, 200, 255, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "linear-gradient(45deg, #00B8F0, #0098D4)",
    boxShadow: "0 6px 16px rgba(0, 200, 255, 0.4)",
    transform: "translateY(-2px)",
  },
}));

const OurServicesSection = () => {
  const services = [
    {
      title: "Digital Transformation",
      description:
        "Transform your business with cutting-edge digital solutions that drive growth and innovation.",
      icon: <DigitalTransformationIcon />,
    },
    {
      title: "Data Analytics",
      description:
        "Unlock insights from your data with advanced analytics and business intelligence solutions.",
      icon: <DataAnalyticsIcon />,
    },
    {
      title: "Cloud Solutions",
      description:
        "Migrate, manage, and optimize your cloud infrastructure for maximum efficiency.",
      icon: <CloudSolutionsIcon />,
    },
    {
      title: "Cyber Security",
      description:
        "Protect your digital assets with comprehensive security solutions and compliance.",
      icon: <CyberSecurityIcon />,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Leverage artificial intelligence to automate processes and enhance decision-making.",
      icon: <AIMachineLearningIcon />,
    },
    {
      title: "Custom Software Development",
      description:
        "Build tailored software solutions that perfectly fit your business needs.",
      icon: <CustomSoftwareIcon />,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: "#F8FCFF", // Ultra light blue background
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: "#00C8FF",
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.5rem" },
            mb: 1,
            textTransform: "uppercase",
            letterSpacing: "1px",
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "60px",
              height: "4px",
              backgroundColor: "#00C8FF",
              borderRadius: "2px",
            },
          }}
        >
          OUR SERVICES
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666666",
            fontSize: { xs: "1rem", md: "1.125rem" },
            mb: 4,
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          Comprehensive technology solutions tailored to your needs
        </Typography>

        {/* Services Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          {services.map((service, index) => (
            <GlassCard key={index}>
              <CardContent>
                <IconWrapper>{service.icon}</IconWrapper>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    color: "#1A1A1A",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    mb: 1,
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#555555",
                    fontSize: "0.875rem",
                    mb: 2,
                    lineHeight: 1.6,
                    textAlign: "left",
                  }}
                >
                  {service.description}
                </Typography>
                <GradientButton>Know More</GradientButton>
              </CardContent>
            </GlassCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default OurServicesSection;
