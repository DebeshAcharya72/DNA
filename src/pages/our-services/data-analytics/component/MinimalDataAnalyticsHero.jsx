import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  styled,
  alpha,
} from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";

const MinimalHero = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f5fbff",
  position: "relative",
  overflow: "hidden",
}));

const CenterContent = styled(Container)(({ theme }) => ({
  textAlign: "center",
  position: "relative",
  zIndex: 2,
}));

const HeroText = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
}));

const CompanyName = styled(Typography)(({ theme }) => ({
  fontSize: "0.875rem",
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: "#00c8ff",
  marginBottom: theme.spacing(2),
  fontWeight: 500,
}));

const PowerPartner = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "#666",
  marginBottom: theme.spacing(4),
  fontWeight: 400,
}));

const DataAnalyticsTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(3.5rem, 10vw, 7rem)",
  fontWeight: 900,
  lineHeight: 0.9,
  letterSpacing: "-0.03em",
  color: "#0c1e3e",
  marginBottom: theme.spacing(4),
  position: "relative",

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-20px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100px",
    height: "3px",
    backgroundColor: "#00c8ff",
  },
}));

const TaglineText = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  color: "#666",
  maxWidth: "500px",
  margin: "0 auto",
  marginTop: theme.spacing(8),
  lineHeight: 1.6,
  fontWeight: 300,
}));

const ExploreButton = styled(Button)(({ theme }) => ({
  color: "#00c8ff",
  border: `1px solid ${alpha("#00c8ff", 0.3)}`,
  borderRadius: 0,
  padding: theme.spacing(1.5, 4),
  fontSize: "0.875rem",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "2px",
  marginTop: theme.spacing(6),
  position: "relative",
  overflow: "hidden",
  backgroundColor: "transparent",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    backgroundColor: alpha("#00c8ff", 0.1),
    transition: "left 0.4s ease",
  },

  "&:hover": {
    backgroundColor: "transparent",
    borderColor: "#00c8ff",

    "&::before": {
      left: "0",
    },
  },

  "& .MuiButton-endIcon": {
    marginLeft: theme.spacing(1),
    transition: "transform 0.3s ease",
  },

  "&:hover .MuiButton-endIcon": {
    transform: "translateX(6px)",
  },
}));

const BackgroundLines = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,

  "& .line": {
    position: "absolute",
    backgroundColor: alpha("#00c8ff", 0.05),

    "&:nth-child(1)": {
      top: "20%",
      left: "10%",
      right: "10%",
      height: "1px",
    },
    "&:nth-child(2)": {
      top: "40%",
      left: "15%",
      right: "15%",
      height: "1px",
    },
    "&:nth-child(3)": {
      top: "60%",
      left: "20%",
      right: "20%",
      height: "1px",
    },
    "&:nth-child(4)": {
      top: "80%",
      left: "25%",
      right: "25%",
      height: "1px",
    },
  },
}));

function MinimalDataAnalyticsHero() {
  return (
    <MinimalHero>
      <BackgroundLines>
        {[1, 2, 3, 4].map((num) => (
          <Box key={num} className="line" />
        ))}
      </BackgroundLines>

      <CenterContent maxWidth="md">
        <HeroText>
          <CompanyName variant="overline">DNA INFOTECH</CompanyName>

          <PowerPartner variant="h6">THE POWER PARTNER</PowerPartner>

          <DataAnalyticsTitle variant="h1">DATA ANALYTICS</DataAnalyticsTitle>

          <TaglineText>
            Transforming Businesses with Intelligent Data Solutions
          </TaglineText>
        </HeroText>

        <ExploreButton
          variant="outlined"
          endIcon={<ArrowRightAlt />}
          onClick={() => console.log("Explore clicked")}
        >
          Explore Our Solutions
        </ExploreButton>
      </CenterContent>
    </MinimalHero>
  );
}

export default MinimalDataAnalyticsHero;
