import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  styled,
  alpha,
  keyframes,
} from "@mui/material";
import { PlayArrow, Bolt, LightMode, ArrowForward } from "@mui/icons-material";

// Animations
const floatLight = keyframes`
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-15px) translateX(10px);
  }
  50% {
    transform: translateY(-5px) translateX(-10px);
  }
  75% {
    transform: translateY(10px) translateX(5px);
  }
`;

const pulseGlow = keyframes`
  0%, 100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.2;
    transform: scale(1.02);
  }
`;

const textReveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shineEffect = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

// Styled Components
const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  backgroundColor: "#f5fbff", // Your background color
  padding: theme.spacing(0, 2),

  // Animated grid background in your theme
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      linear-gradient(rgba(12, 30, 62, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(12, 30, 62, 0.02) 1px, transparent 1px)
    `,
    backgroundSize: "50px 50px",
    animation: `${pulseGlow} 10s ease-in-out infinite`,
  },
}));

const ContentWrapper = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  maxWidth: "900px !important",
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "clamp(2.5rem, 6vw, 4rem)",
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
  marginBottom: theme.spacing(4),
  position: "relative",
  color: "#0c1e3e", // Your primary text color

  // Gradient text with your theme colors
  background: "linear-gradient(90deg, #0c1e3e 0%, #00c8ff 50%, #0c1e3e 100%)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  animation: `${shineEffect} 4s linear infinite`,

  "& .line-break": {
    display: "block",
    marginTop: theme.spacing(1.5),

    "&:first-of-type": {
      animationDelay: "0.1s",
    },
    "&:last-of-type": {
      animationDelay: "0.2s",
    },
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
  lineHeight: 1.7,
  color: "#666666", // Gray for secondary text
  maxWidth: "600px",
  marginBottom: theme.spacing(6),
  animation: `${textReveal} 0.8s ease-out 0.3s both`,
}));

const CTAButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
  flexWrap: "wrap",
  animation: `${textReveal} 0.8s ease-out 0.5s both`,
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(135deg, #00c8ff 0%, #0099cc 100%)", // Your secondary color
  color: "#FFFFFF",
  padding: theme.spacing(1.5, 4),
  borderRadius: "10px",
  fontSize: "0.875rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "1px",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
    transition: "left 0.7s",
  },

  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 10px 25px rgba(0, 200, 255, 0.3)",

    "&::before": {
      left: "100%",
    },
  },

  "& .MuiButton-startIcon": {
    marginRight: theme.spacing(1),
  },
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  color: "#00c8ff", // Your secondary color
  border: `1px solid ${alpha("#00c8ff", 0.4)}`,
  padding: theme.spacing(1.5, 4),
  borderRadius: "10px",
  fontSize: "0.875rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "1px",
  backgroundColor: "transparent",
  transition: "all 0.3s ease",

  "&:hover": {
    borderColor: "#00c8ff",
    backgroundColor: alpha("#00c8ff", 0.08),
    transform: "translateY(-2px)",
  },

  "& .MuiButton-startIcon": {
    marginRight: theme.spacing(1),
  },
}));

const LightParticle = styled(Box)(({ theme, index }) => ({
  position: "absolute",
  width: "4px",
  height: "4px",
  borderRadius: "50%",
  backgroundColor: "#00c8ff", // Your secondary color
  boxShadow: `0 0 8px 1px ${alpha("#00c8ff", 0.5)}`,
  animation: `${floatLight} ${5 + (index % 4)}s ease-in-out infinite`,
  animationDelay: `${index * 0.2}s`,
  opacity: 0.3,
}));

const GlowingOrb = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  background: `radial-gradient(circle, ${alpha(
    "#00c8ff",
    0.08
  )} 0%, transparent 70%)`, // Using your theme color
  filter: "blur(30px)",
  animation: `${pulseGlow} 8s ease-in-out infinite`,

  variants: [
    {
      props: { position: "top-right" },
      style: {
        top: "-100px",
        right: "-100px",
        animationDelay: "1s",
      },
    },
    {
      props: { position: "bottom-left" },
      style: {
        bottom: "-100px",
        left: "-100px",
        animationDelay: "2s",
      },
    },
  ],
}));

const LightingIcon = styled(LightMode)(({ theme }) => ({
  position: "absolute",
  fontSize: "120px",
  color: alpha("#00c8ff", 0.08), // Your secondary color with low opacity
  animation: `${pulseGlow} 6s ease-in-out infinite`,

  variants: [
    {
      props: { position: "left" },
      style: {
        left: "5%",
        top: "30%",
        transform: "rotate(-15deg)",
      },
    },
    {
      props: { position: "right" },
      style: {
        right: "5%",
        bottom: "30%",
        transform: "rotate(15deg)",
      },
    },
  ],
}));

function HeroSection() {
  const [lightParticles, setLightParticles] = useState([]);

  useEffect(() => {
    // Generate random light particles
    const particles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setLightParticles(particles);
  }, []);

  const handleGetStarted = () => {
    console.log("Get Started clicked");
    // Implement navigation or modal
  };

  const handleWatchDemo = () => {
    console.log("Watch Demo clicked");
    // Implement video modal
  };

  return (
    <HeroContainer>
      {/* Background Elements */}
      <GlowingOrb position="top-right" />
      <GlowingOrb position="bottom-left" />

      <LightingIcon position="left" />
      <LightingIcon position="right" />

      {/* Light Particles */}
      {lightParticles.map((particle) => (
        <LightParticle
          key={particle.id}
          index={particle.id}
          sx={{
            top: particle.top,
            left: particle.left,
          }}
        />
      ))}

      {/* Content */}
      <ContentWrapper>
        <MainTitle variant="h1">
          Transform Your Space
          <span className="line-break">With Intelligent Lighting</span>
        </MainTitle>

        <Subtitle variant="h6">
          Experience the perfect fusion of innovative technology and
          sophisticated automation for the modern building environment.
        </Subtitle>

        <CTAButtons>
          <PrimaryButton
            variant="contained"
            startIcon={<Bolt />}
            onClick={handleGetStarted}
            disableRipple
          >
            GET STARTED NOW
          </PrimaryButton>

          <SecondaryButton
            variant="outlined"
            startIcon={<PlayArrow />}
            onClick={handleWatchDemo}
          >
            WATCH DEMO
          </SecondaryButton>
        </CTAButtons>

        {/* Decorative line */}
        <Box
          sx={{
            mt: 8,
            width: "120px",
            height: "3px",
            background:
              "linear-gradient(90deg, transparent, #00c8ff, transparent)",
            animation: `${pulseGlow} 3s ease-in-out infinite`,
            opacity: 0.5,
          }}
        />
      </ContentWrapper>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: alpha("#00c8ff", 0.6),
          animation: `${textReveal} 1s ease-out 1s both`,

          "& .arrow": {
            animation: `${floatLight} 2s ease-in-out infinite`,
          },
        }}
      >
        <Typography
          variant="caption"
          sx={{
            mb: 1,
            letterSpacing: "1.5px",
            color: "#666",
            fontWeight: 500,
          }}
        >
          EXPLORE
        </Typography>
        <ArrowForward
          className="arrow"
          sx={{
            transform: "rotate(90deg)",
            color: "#00c8ff",
          }}
        />
      </Box>
    </HeroContainer>
  );
}

export default HeroSection;
