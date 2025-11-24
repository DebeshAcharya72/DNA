// AboutUsSection.jsx
import React from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  Card,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import image2 from "../../../assets/images/image2.jpg";

// Code Icon
const CodeIcon = () => (
  <svg
    width="40"
    height="40"
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

const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
  },
}));

const CircleWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 80,
  height: 80,
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  boxShadow: "0 4px 20px rgba(0, 200, 255, 0.3)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1) rotate(8deg)",
  },
}));

const GlassOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(3),
  backdropFilter: "blur(12px)",
  backgroundColor: "rgba(255, 255, 255, 0.25)",
  borderTop: "1px solid rgba(255, 255, 255, 0.4)",
  textAlign: "center",
}));

const AboutUsSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: "#F5FBFF",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        {/* Main layout: CSS Grid (no legacy Grid component) */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
          }}
        >
          {/* Text Content — Left */}
          <Stack spacing={{ xs: 2, md: 3 }}>
            <Typography
              variant="h2"
              sx={{
                color: "#00C8FF",
                fontWeight: 700,
                fontSize: { xs: "1.875rem", md: "2.25rem" },
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              ABOUT US
            </Typography>

            <Typography sx={{ color: "#2D2D2D", lineHeight: 1.7 }}>
              DNA Infotech is a <strong>Singapore-based</strong> technology
              consulting and solutions company specializing in{" "}
              <strong>Digital Transformation</strong>,{" "}
              <strong>Data Analytics</strong>, and{" "}
              <strong>Cloud Solutions</strong>.
            </Typography>

            <Typography sx={{ color: "#2D2D2D", lineHeight: 1.7 }}>
              We partner with organizations across <strong>Telecom</strong>,{" "}
              <strong>Banking</strong>, <strong>Insurance</strong>, and{" "}
              <strong>Healthcare</strong> industries to deliver innovative
              solutions that drive business value.
            </Typography>

            <Typography
              sx={{
                color: "#00C8FF",
                fontWeight: 600,
                fontStyle: "italic",
                fontSize: { xs: "1rem", md: "1.125rem" },
              }}
            >
              Experience + Expertise + Vision = Success
            </Typography>

            <Typography sx={{ color: "#2D2D2D", lineHeight: 1.7 }}>
              Our team of expert technocrats combines deep industry knowledge
              with cutting-edge technology to help you navigate the digital
              landscape and achieve your strategic objectives.
            </Typography>
          </Stack>

          {/* Visual Card — Right */}
          <Box>
            <StyledCard>
              <Box
                component="img"
                src={image2}
                alt="Innovation background"
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  filter: "brightness(0.9)",
                }}
              />

              {/* Centered Icon */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                }}
              >
                <CircleWrapper>
                  <CodeIcon />
                </CircleWrapper>
              </Box>

              {/* Bottom Glass Overlay */}
              <GlassOverlay>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  Powered by Innovation
                </Typography>
              </GlassOverlay>
            </StyledCard>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUsSection;
