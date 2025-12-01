import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  styled,
  alpha,
  keyframes,
} from "@mui/material";
import {
  Analytics,
  TrendingUp,
  Dashboard,
  DataObject,
  CheckCircle,
} from "@mui/icons-material";

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`;

// Styled Components
const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#f5fbff",
  padding: theme.spacing(8, 0),
  position: "relative",
  overflow: "hidden",

  // Background elements
  "&::before": {
    content: '""',
    position: "absolute",
    top: "10%",
    right: "5%",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: `radial-gradient(circle, ${alpha(
      "#00c8ff",
      0.05
    )} 0%, transparent 70%)`,
    animation: `${float} 15s ease-in-out infinite`,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "10%",
    left: "5%",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: `radial-gradient(circle, ${alpha(
      "#0c1e3e",
      0.03
    )} 0%, transparent 70%)`,
    animation: `${float} 20s ease-in-out infinite 2s`,
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "clamp(2rem, 4vw, 3rem)",
  color: "#0c1e3e",
  textAlign: "center",
  marginBottom: theme.spacing(2),
  position: "relative",
  display: "inline-block",

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "60px",
    height: "4px",
    background: "linear-gradient(90deg, #00c8ff, #0099cc)",
    borderRadius: "2px",
  },
}));

const FocusCard = styled(Card)(({ theme }) => ({
  backgroundColor: "white",
  border: `1px solid ${alpha("#00c8ff", 0.1)}`,
  borderRadius: "16px",
  padding: theme.spacing(3),
  height: "100%",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  position: "relative",
  overflow: "hidden",

  // Card hover effect
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 20px 40px rgba(0, 200, 255, 0.15)",
    borderColor: alpha("#00c8ff", 0.3),

    "& .card-icon": {
      transform: "scale(1.1)",
      color: "#00c8ff",
    },

    "& .card-title": {
      color: "#00c8ff",
    },
  },

  // Card corner accent
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "4px",
    height: "100%",
    background: "linear-gradient(to bottom, #00c8ff, transparent)",
    borderTopLeftRadius: "16px",
    borderBottomLeftRadius: "16px",
  },
}));

const CardIconWrapper = styled(Box)(({ theme }) => ({
  width: "60px",
  height: "60px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
  backgroundColor: alpha("#00c8ff", 0.1),
  color: "#00c8ff",
  transition: "all 0.3s ease",
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.25rem",
  color: "#0c1e3e",
  marginBottom: theme.spacing(1.5),
  transition: "color 0.3s ease",
}));

const ListItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  marginBottom: theme.spacing(1.5),

  "& .check-icon": {
    color: "#00c8ff",
    marginRight: theme.spacing(1.5),
    marginTop: "2px",
    flexShrink: 0,
    animation: `${pulse} 2s ease-in-out infinite`,
  },

  "& .list-text": {
    color: "#666",
    fontSize: "1rem",
    lineHeight: 1.6,
  },
}));

const DescriptionBox = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  border: `1px solid ${alpha("#00c8ff", 0.1)}`,
  borderRadius: "16px",
  padding: theme.spacing(4),
  marginTop: theme.spacing(6),
  position: "relative",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "linear-gradient(90deg, #00c8ff, #0099cc)",
  },
}));

const DecorativeDot = styled(Box)(({ theme }) => ({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: "#00c8ff",
  display: "inline-block",
  margin: theme.spacing(0, 0.5),
  animation: `${pulse} 2s ease-in-out infinite`,
}));

function RightCard() {
  const focusItems = [
    {
      icon: <Analytics sx={{ fontSize: 32 }} />,
      title: "Business Intelligence",
      items: [
        "Real-time dashboards",
        "KPI monitoring",
        "Performance analytics",
        "Strategic reporting",
      ],
    },
    {
      icon: <TrendingUp sx={{ fontSize: 32 }} />,
      title: "Predictive Analytics",
      items: [
        "Machine learning models",
        "Forecasting algorithms",
        "Risk assessment",
        "Trend analysis",
      ],
    },
    {
      icon: <Dashboard sx={{ fontSize: 32 }} />,
      title: "Data Visualization",
      items: [
        "Interactive dashboards",
        "Custom charts & graphs",
        "Real-time data display",
        "User-friendly interfaces",
      ],
    },
    {
      icon: <DataObject sx={{ fontSize: 32 }} />,
      title: "Big Data Management",
      items: [
        "Data processing pipelines",
        "Cloud infrastructure",
        "Data warehousing",
        "Scalable architecture",
      ],
    },
  ];

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <SectionTitle variant="h2" component="h2">
            Focus Areas
          </SectionTitle>
          <Typography
            variant="h6"
            sx={{
              color: "#666",
              maxWidth: "600px",
              margin: "0 auto",
              mt: 3,
              fontSize: "1.125rem",
              lineHeight: 1.7,
            }}
          >
            Specialized solutions that transform your data into actionable
            insights
          </Typography>
        </Box>

        {/* Focus Cards Grid */}
        <Grid container spacing={4}>
          {focusItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FocusCard elevation={0}>
                <CardIconWrapper className="card-icon">
                  {item.icon}
                </CardIconWrapper>

                <CardTitle className="card-title" variant="h6">
                  {item.title}
                </CardTitle>

                <Box>
                  {item.items.map((listItem, itemIndex) => (
                    <ListItem key={itemIndex}>
                      <CheckCircle className="check-icon" fontSize="small" />
                      <Typography className="list-text">{listItem}</Typography>
                    </ListItem>
                  ))}
                </Box>
              </FocusCard>
            </Grid>
          ))}
        </Grid>

        {/* Description Section */}
        <DescriptionBox>
          <Typography
            variant="h5"
            sx={{
              color: "#0c1e3e",
              fontWeight: 600,
              mb: 3,
              textAlign: "center",
              fontSize: "1.5rem",
            }}
          >
            Powered by Expert Technocrats
          </Typography>

          <Typography
            sx={{
              color: "#666",
              fontSize: "1.125rem",
              lineHeight: 1.8,
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Our team of certified data scientists and engineers ensure that your
            data analytics initiatives deliver{" "}
            <Box component="span" sx={{ color: "#00c8ff", fontWeight: 600 }}>
              measurable results
            </Box>{" "}
            and{" "}
            <Box component="span" sx={{ color: "#00c8ff", fontWeight: 600 }}>
              sustainable value
            </Box>
            . We combine cutting-edge technology with deep industry expertise to
            drive your business forward.
          </Typography>

          {/* Stats or additional info */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 4,
              pt: 3,
              borderTop: `1px solid ${alpha("#00c8ff", 0.1)}`,
            }}
          >
            <Typography
              sx={{
                color: "#0c1e3e",
                fontSize: "0.875rem",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
              }}
            >
              <DecorativeDot />
              <Box component="span" sx={{ mx: 1 }}>
                Industry-leading solutions
              </Box>
              <DecorativeDot />
              <Box component="span" sx={{ mx: 1 }}>
                Proven methodologies
              </Box>
              <DecorativeDot />
              <Box component="span" sx={{ mx: 1 }}>
                Continuous innovation
              </Box>
            </Typography>
          </Box>
        </DescriptionBox>
      </Container>

      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 30%, ${alpha(
              "#00c8ff",
              0.03
            )} 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, ${alpha(
              "#00c8ff",
              0.03
            )} 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          opacity: 0.6,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </SectionContainer>
  );
}

export default RightCard;
