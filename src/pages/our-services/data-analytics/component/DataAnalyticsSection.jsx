// DataAnalyticsSection.jsx
import React from "react";
import { Box, Typography, Card, Grid, styled } from "@mui/material";
import {
  Insights,
  TrendingUp,
  AutoGraph,
  Psychology,
} from "@mui/icons-material";

// Brand colors
const BG_COLOR = "#f5fbff";
const MAIN_TEXT = "#0C1E3E";
const ACCENT = "#00C8FF";

// Glass card base
const GlassCard = styled(Card)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.85)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.9)",
  borderRadius: "24px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.04)",
  color: MAIN_TEXT,
}));

const DataAnalyticsSection = () => {
  const benefits = [
    { icon: <Insights />, text: "Uncover hidden patterns and trends" },
    { icon: <TrendingUp />, text: "Predict future outcomes with AI/ML models" },
    { icon: <AutoGraph />, text: "Optimize business processes and resources" },
    { icon: <Psychology />, text: "Improve strategic decision-making" },
  ];

  return (
    <Box
      sx={{
        bgcolor: BG_COLOR,
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Grid container spacing={{ xs: 3, md: 4 }}>
        {/* Left Card: Icon + Title */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <GlassCard sx={{ width: "100%", maxWidth: 420, p: 4 }}>
              <Box
                sx={{
                  width: 110,
                  height: 110,
                  borderRadius: "20px",
                  background: `linear-gradient(135deg, ${ACCENT}20, #00a0cc15)`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 3,
                  boxShadow: `0 0 32px ${ACCENT}25`,
                }}
              >
                <Insights sx={{ fontSize: 52, color: ACCENT }} />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: ACCENT,
                  fontSize: "1.5rem",
                  mb: 1,
                  textAlign: "center",
                }}
              >
                Data Analytics
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#6B7280",
                  textAlign: "center",
                }}
              >
                Powered by DNA Infotech
              </Typography>
            </GlassCard>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid size={{ xs: 12, md: 7 }}>
          {/* Header Card */}
          <GlassCard sx={{ p: 4, mb: 4 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: ACCENT, mb: 2, fontSize: "1.8rem" }}
            >
              Data Analytics
            </Typography>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.7, color: "#5E6B82" }}
            >
              Transform raw data into actionable insights with our advanced
              analytics solutions. We leverage cutting-edge tools and
              methodologies to help you understand trends, predict outcomes, and
              make informed decisions that drive business growth.
            </Typography>
          </GlassCard>

          {/* Benefits Card */}
          <GlassCard sx={{ p: 4 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, mb: 3, fontSize: "1.6rem" }}
            >
              Key Benefits
            </Typography>
            <Box>
              {benefits.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    py: 2,
                    ...(index < benefits.length - 1 && {
                      borderBottom: "1px solid rgba(12, 30, 62, 0.08)",
                    }),
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: `${ACCENT}10`,
                      color: ACCENT,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{ color: MAIN_TEXT, fontWeight: 500 }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </GlassCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DataAnalyticsSection;
