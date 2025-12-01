import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  styled,
  alpha,
  keyframes,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

// Animations
const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
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

const gradientFlow = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

// Styled Components
const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  backgroundColor: "#f5fbff",
  padding: theme.spacing(0, 2),

  // Animated background elements
  "&::before": {
    content: '""',
    position: "absolute",
    top: "10%",
    right: "5%",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: `radial-gradient(circle, ${alpha(
      "#00c8ff",
      0.08
    )} 0%, transparent 70%)`,
    animation: `${floatAnimation} 8s ease-in-out infinite`,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "20%",
    left: "5%",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: `radial-gradient(circle, ${alpha(
      "#0c1e3e",
      0.05
    )} 0%, transparent 70%)`,
    animation: `${floatAnimation} 10s ease-in-out infinite 1s`,
  },
}));

const ContentWrapper = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  maxWidth: "900px !important",
  animation: `${fadeInUp} 1s ease-out`,
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
  marginBottom: theme.spacing(3),
  background: "linear-gradient(135deg, #0c1e3e 0%, #00c8ff 50%, #0c1e3e 100%)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  animation: `${gradientFlow} 6s ease-in-out infinite`,

  [theme.breakpoints.up("md")]: {
    fontSize: "4.5rem",
  },
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
  lineHeight: 1.7,
  color: "#666",
  maxWidth: "600px",
  margin: "0 auto",
  marginBottom: theme.spacing(5),
  opacity: 0.9,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(135deg, #00c8ff 0%, #0099cc 100%)",
  color: "white",
  padding: theme.spacing(1.5, 4),
  borderRadius: "50px",
  fontSize: "1.1rem",
  fontWeight: 600,
  textTransform: "none",
  boxShadow: "0 8px 32px rgba(0, 200, 255, 0.25)",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  position: "relative",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
    transition: "left 0.7s",
  },

  "&:hover": {
    transform: "translateY(-4px) scale(1.05)",
    boxShadow: "0 16px 48px rgba(0, 200, 255, 0.35)",

    "&::before": {
      left: "100%",
    },
  },

  "& .MuiButton-endIcon": {
    transition: "transform 0.3s ease",
  },

  "&:hover .MuiButton-endIcon": {
    transform: "translateX(4px)",
  },
}));

const FloatingElement = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: 1,
  borderRadius: "50%",
  background: `radial-gradient(circle, ${alpha(
    "#00c8ff",
    0.1
  )} 0%, transparent 70%)`,
  animation: `${floatAnimation} 15s ease-in-out infinite`,

  variants: [
    {
      props: { size: "small" },
      style: {
        width: "60px",
        height: "60px",
        top: "20%",
        left: "10%",
      },
    },
    {
      props: { size: "medium" },
      style: {
        width: "100px",
        height: "100px",
        bottom: "30%",
        right: "15%",
        animationDelay: "2s",
      },
    },
    {
      props: { size: "large" },
      style: {
        width: "150px",
        height: "150px",
        top: "60%",
        left: "20%",
        animationDelay: "4s",
      },
    },
  ],
}));

const DecorativeLine = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "20%",
  left: "50%",
  transform: "translateX(-50%)",
  width: "2px",
  height: "60px",
  background: "linear-gradient(to bottom, transparent, #00c8ff, transparent)",
  opacity: 0.6,
}));

function HeroSection() {
  const handleGetInTouch = () => {
    // Add your get in touch logic here
    console.log("Get in Touch clicked");
    // For example, scroll to contact form
    // const contactSection = document.getElementById('contact');
    // contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroContainer>
      {/* Background Floating Elements */}
      <FloatingElement size="small" />
      <FloatingElement size="medium" />
      <FloatingElement size="large" />

      {/* Content */}
      <ContentWrapper>
        <MainHeading variant="h1" component="h1">
          Let's Build Something
          <br />
          Amazing Together
        </MainHeading>

        <SubHeading variant="h6" component="p">
          We're here to help you transform your ideas into reality. Reach out
          for support, partnerships, or general inquiries.
        </SubHeading>

        <StyledButton
          variant="contained"
          size="large"
          endIcon={<ArrowForward />}
          onClick={handleGetInTouch}
          disableRipple
        >
          Get in Touch
        </StyledButton>

        <DecorativeLine />
      </ContentWrapper>

      {/* Animated Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 25% 25%, ${alpha(
              "#00c8ff",
              0.03
            )} 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, ${alpha(
              "#00c8ff",
              0.03
            )} 2px, transparent 2px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />
    </HeroContainer>
  );
}

export default HeroSection;
