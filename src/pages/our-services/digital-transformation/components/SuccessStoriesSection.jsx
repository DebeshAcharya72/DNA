// SuccessStoriesSection.jsx
import React from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
  Chip,
  Button,
  styled,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const BRAND_BLUE = "#00C8FF";
const DARK_BLUE = "#08173A";
const BG_COLOR = "#f5fbff";

// Clean, simple card
const SuccessCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(4),
  borderRadius: "20px",
  background: "white",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
  },
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  bgcolor: "rgba(0, 200, 255, 0.12)",
  color: BRAND_BLUE,
  fontWeight: 600,
  fontSize: "0.78rem",
  borderRadius: "16px",
  height: "28px",
  "& .MuiChip-label": {
    px: 1.5,
  },
}));

const MetricItem = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  py: 1.5,
  "&:not(:last-child)": {
    borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
  },
}));

const CaseStudyButton = styled(Button)(({ theme }) => ({
  marginTop: 3,
  color: BRAND_BLUE,
  textTransform: "none",
  fontWeight: 600,
  fontSize: "0.95rem",
  py: 1.2,
  px: 2.5,
  borderRadius: "12px",
  background: "white",
  border: `1.5px solid ${BRAND_BLUE}`,
  transition: "all 0.2s ease",
  "&:hover": {
    bgcolor: "rgba(0, 200, 255, 0.08)",
  },
}));

const SuccessStoriesSection = () => {
  const stories = [
    {
      category: "Enterprise Software",
      title: "TechCorp Global",
      subtitle: "Legacy system modernization",
      metrics: [
        { label: "Cost Reduction", value: "35%", highlight: true },
        { label: "Time Saved", value: "50%", highlight: true },
        { label: "User Adoption", value: "95%", highlight: true },
      ],
      buttonLabel: "View Full Case Study",
    },
    {
      category: "Financial Services",
      title: "FinanceHub",
      subtitle: "Digital banking platform",
      metrics: [
        { label: "User Growth", value: "300%", highlight: true },
        { label: "Transaction Speed", value: "5x faster", highlight: true },
        { label: "Customer Satisfaction", value: "4.8/5", highlight: true },
      ],
      buttonLabel: "View Full Case Study",
    },
    {
      category: "E-commerce",
      title: "RetailEdge",
      subtitle: "Omnichannel transformation",
      metrics: [
        { label: "Revenue Growth", value: "60%", highlight: true },
        { label: "Online Sales", value: "200%", highlight: true },
        { label: "Customer Retention", value: "85%", highlight: true },
      ],
      buttonLabel: "View Full Case Study",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 3, md: 4 },
        textAlign: "center",
        bgcolor: BG_COLOR,
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: 800,
          color: DARK_BLUE,
          mb: 2,
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          lineHeight: 1.1,
          position: "relative",
          display: "inline-block",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-12px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80px",
            height: "4px",
            background: `linear-gradient(to right, ${BRAND_BLUE}, #00a0cc)`,
            borderRadius: "2px",
          },
        }}
      >
        Success Stories
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: "#6B7280",
          maxWidth: "600px",
          mx: "auto",
          mb: { xs: 6, md: 8 },
          fontSize: { xs: "1rem", md: "1.15rem" },
          lineHeight: 1.6,
          px: 1,
        }}
      >
        Real transformations, measurable results
      </Typography>

      <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
        {stories.map((story, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <SuccessCard elevation={0}>
              <CategoryChip label={story.category} />

              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 700,
                  color: DARK_BLUE,
                  mt: 2,
                  mb: 0.5,
                  fontSize: "1.35rem",
                  lineHeight: 1.3,
                }}
              >
                {story.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#6B7280",
                  fontSize: "0.95rem",
                  mb: 3,
                }}
              >
                {story.subtitle}
              </Typography>

              <Box sx={{ flexGrow: 1 }}>
                {story.metrics.map((metric, idx) => (
                  <MetricItem key={idx}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#6B7280",
                        fontSize: "0.95rem",
                      }}
                    >
                      {metric.label}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 700,
                        color: DARK_BLUE,
                        fontSize: "1.15rem",
                      }}
                    >
                      {metric.value}
                    </Typography>
                  </MetricItem>
                ))}
              </Box>

              <CaseStudyButton startIcon={<OpenInNewIcon />} variant="outlined">
                {story.buttonLabel}
              </CaseStudyButton>
            </SuccessCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SuccessStoriesSection;
