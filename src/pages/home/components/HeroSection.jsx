// HeroSection.jsx
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import bg from "./../../../assets/images/image1.jpg";

// Down Arrow Icon
const DownArrowIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 16L18 10H6L12 16Z" fill="#00C8FF" />
  </svg>
);

const StyledHero = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    zIndex: 1,
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1.5),
}));

const HeroSection = () => {
  return (
    <StyledHero>
      <Container maxWidth="lg">
        <HeroContent>
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "3.2rem" },
              fontWeight: 800,
              color: "#0A0A0A",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Bringing Data to the Forefront of
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 900,
              color: "#00C8FF",
              lineHeight: 1.1,
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '"|"',
                position: "absolute",
                right: "-14px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#00C8FF",
                animation: "blink 1s infinite",
              },
              "@keyframes blink": {
                "0%": { opacity: 1 },
                "50%": { opacity: 0 },
                "100%": { opacity: 1 },
              },
            }}
          >
            Strategy
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              color: "#464646",
              fontWeight: 500,
            }}
          >
            The Power Partner
          </Typography>

          {/* Modern Button */}
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(45deg, #00C8FF, #00A4E4)",
              boxShadow: "0px 5px 20px rgba(0, 200, 255, 0.35)",
              padding: "12px 38px",
              fontWeight: 700,
              fontSize: "1rem",
              borderRadius: "10px",
              textTransform: "none",
              transition: "0.3s",
              "&:hover": {
                background: "linear-gradient(45deg, #00B8F0, #0098D4)",
                boxShadow: "0px 8px 24px rgba(0, 200, 255, 0.45)",
                transform: "translateY(-2px)",
              },
            }}
            endIcon={
              <Box sx={{ transform: "rotate(90deg)" }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8L8 12L12 16"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </Box>
            }
          >
            Learn More
          </Button>
        </HeroContent>

        {/* Scroll Down Indicator */}
        <Box
          sx={{
            position: "absolute",
            bottom: 25,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            animation: "bounce 1.5s infinite",
            "@keyframes bounce": {
              "0%, 100%": { transform: "translateX(-50%)" },
              "50%": { transform: "translateX(-50%) translateY(-8px)" },
            },
          }}
        >
          <DownArrowIcon />
        </Box>
      </Container>
    </StyledHero>
  );
};

export default HeroSection;
