import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  styled,
  alpha,
} from "@mui/material";
import { ArrowForward, CheckCircle } from "@mui/icons-material";

const MinimalSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#f5fbff",
  padding: theme.spacing(8, 0),
}));

const ContentColumn = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const VisualColumn = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(4),

  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "0",
    right: "0",
    height: "1px",
    background: `linear-gradient(90deg, transparent, ${alpha(
      "#00c8ff",
      0.3
    )}, transparent)`,
  },
}));

const ConnectionVisual = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),

  "& .port": {
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    border: `2px solid ${alpha("#00c8ff", 0.3)}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#00c8ff",
  },

  "& .arrow": {
    color: "#00c8ff",
    animation: "pulse 2s ease-in-out infinite",
  },

  "@keyframes pulse": {
    "0%, 100%": { opacity: 0.5 },
    "50%": { opacity: 1 },
  },
}));

function ProductHeroSection() {
  return (
    <MinimalSection>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Content */}
          <Grid item xs={12}>
            <ContentColumn>
              <Typography
                variant="h2"
                sx={{
                  color: "#0c1e3e",
                  fontWeight: 700,
                  fontSize: "2.5rem",
                  lineHeight: 1.2,
                  mb: 3,
                }}
              >
                The Ultimate PoE to USB-C Converter
              </Typography>

              <Typography
                sx={{
                  color: "#666",
                  fontSize: "1.125rem",
                  lineHeight: 1.7,
                  mb: 4,
                }}
              >
                Deliver power and data through a single cable – remove adapters,
                simplify installation, and upgrade reliability instantly.
              </Typography>

              <Box sx={{ mb: 4 }}>
                {[
                  "Universal compatibility with major tablets",
                  "Reliable long-range delivery up to 100 meters",
                  "Industrial-grade performance and durability",
                ].map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <CheckCircle sx={{ color: "#00c8ff", fontSize: "20px" }} />
                    <Typography sx={{ color: "#666" }}>{feature}</Typography>
                  </Box>
                ))}
              </Box>

              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                sx={{
                  backgroundColor: "#00c8ff",
                  color: "#ffffff",
                  px: 4,
                  py: 1.5,
                  borderRadius: "8px",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#0099cc",
                  },
                }}
              >
                LEARN MORE
              </Button>
            </ContentColumn>
          </Grid>
        </Grid>
      </Container>
    </MinimalSection>
  );
}

export default ProductHeroSection;
