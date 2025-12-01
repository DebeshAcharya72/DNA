import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Card,
  CardContent,
  useMediaQuery,
  Divider,
} from "@mui/material";
import {
  Science as ScienceIcon,
  HealthAndSafety as HealthIcon,
  Biotech as BiotechIcon,
  MedicalServices as MedicalIcon,
  Handshake as HandshakeIcon, // Changed from PartnerExchange
  TrendingUp as TrendingIcon,
} from "@mui/icons-material";

const LeadingThroughCrisis = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // YOUR COLOR THEME
  const COLORS = {
    background: "#f5fbff",
    primaryText: "#0c1e3e",
    secondary: "#00c8ff",
    accent: "#ff4d8d",
    success: "#00d27a",
    border: "#e0f2ff",
    mutedText: "#5a7a9a",
  };

  const focusAreas = [
    {
      icon: <ScienceIcon />,
      title: "Research & Development",
      description: "Cutting-edge medical research and innovation",
    },
    {
      icon: <BiotechIcon />,
      title: "Biotechnology",
      description: "Advanced biotech solutions and applications",
    },
    {
      icon: <MedicalIcon />,
      title: "Medical Technology",
      description: "State-of-the-art healthcare equipment",
    },
    {
      icon: <HandshakeIcon />, // Changed from PartnerIcon to HandshakeIcon
      title: "Vendor Partnerships",
      description: "Collaborations with industry leaders",
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: COLORS.background }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          {/* Main Tagline */}
          <Typography
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
              fontWeight: 800,
              lineHeight: 1,
              color: COLORS.primaryText,
              letterSpacing: "-0.02em",
              mb: 1,
            }}
          >
            LIFESCIENCES
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" },
              fontWeight: 700,
              lineHeight: 1.2,
              color: COLORS.secondary,
              mb: 1,
              letterSpacing: "-0.01em",
            }}
          >
            DNA INFOTECH
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.125rem", md: "1.5rem" },
              fontWeight: 600,
              color: COLORS.mutedText,
              mb: 4,
            }}
          >
            THE POWER PARTNER
          </Typography>

          {/* Divider */}
          <Divider
            sx={{
              width: 80,
              height: 4,
              backgroundColor: COLORS.secondary,
              mx: "auto",
              mb: 6,
              borderRadius: 2,
            }}
          />

          {/* Section Title */}
          <Typography
            sx={{
              fontSize: { xs: "1.75rem", md: "2.5rem", lg: "3rem" },
              fontWeight: 800,
              lineHeight: 1.1,
              color: COLORS.primaryText,
              mb: 4,
            }}
          >
            HealthCare & Lifesciences
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Left Column - Content */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ position: "sticky", top: 24 }}>
              <Stack spacing={4}>
                {/* First Paragraph */}
                <Typography
                  sx={{
                    fontSize: { xs: "1.125rem", md: "1.25rem" },
                    lineHeight: 1.7,
                    color: COLORS.mutedText,
                  }}
                >
                  Healthcare and Life Sciences is witnessing an unprecedented
                  level of focus for the first time in its history. With the
                  world pandemic crisis on COVID-19, the sector has been a
                  priority for all governments across the globe.
                </Typography>

                {/* DNA Infotech Focus */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: COLORS.primaryText,
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <TrendingIcon
                      sx={{ color: COLORS.secondary, fontSize: 20 }}
                    />
                    DNA Infotech Focus
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.125rem",
                      lineHeight: 1.7,
                      color: COLORS.mutedText,
                      mb: 2,
                    }}
                  >
                    DNA Infotech focusses on Healthcare and Lifesciences
                    initiatives and delivers on various domains in this
                    industry. With the partnership with some of the industry
                    leading product vendors, we are part of the transformation
                    this industry is undergoing currently.
                  </Typography>
                </Box>

                {/* Research & Neutrality */}
                <Box
                  sx={{
                    p: 3,
                    backgroundColor: `${COLORS.secondary}08`,
                    borderRadius: 2,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: COLORS.primaryText,
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <HealthIcon
                      sx={{ color: COLORS.secondary, fontSize: 20 }}
                    />
                    Platform-Neutral Approach
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      lineHeight: 1.7,
                      color: COLORS.mutedText,
                    }}
                  >
                    We conduct research aimed at new advancements in smart
                    technologies to provide state-of-the-art maintenance and
                    upgrade paths. We have no exclusive ties to products or
                    software vendors, and can remain platform- and product
                    neutral, focusing exclusively on the needs of our clients.
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>

          {/* Right Column - Focus Areas */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ mb: 4 }}>
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: COLORS.primaryText,
                  mb: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: 4,
                    height: 24,
                    backgroundColor: COLORS.secondary,
                    borderRadius: 1,
                  }}
                />
                Our Focus Areas
              </Typography>
            </Box>

            <Stack spacing={3}>
              {focusAreas.map((area, index) => (
                <Card
                  key={index}
                  elevation={0}
                  sx={{
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 2,
                    backgroundColor: "#FFFFFF",
                    transition: "all 0.3s ease",
                    overflow: "hidden",
                    position: "relative",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: COLORS.secondary,
                      boxShadow: `0 8px 32px ${COLORS.secondary}20`,
                      "&:before": {
                        width: "100%",
                      },
                    },
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "4px",
                      height: "100%",
                      backgroundColor: COLORS.secondary,
                      transition: "width 0.3s ease",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, pl: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: `${COLORS.secondary}10`,
                          borderRadius: "50%",
                          color: COLORS.secondary,
                          flexShrink: 0,
                          "& svg": {
                            fontSize: 28,
                          },
                        }}
                      >
                        {area.icon}
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "1.125rem",
                            fontWeight: 600,
                            color: COLORS.primaryText,
                            mb: 0.5,
                          }}
                        >
                          {area.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.875rem",
                            color: COLORS.mutedText,
                            lineHeight: 1.5,
                          }}
                        >
                          {area.description}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Stack>

            {/* Partnership Stats */}
            <Box
              sx={{
                mt: 6,
                p: 3,
                backgroundColor: "#FFFFFF",
                borderRadius: 2,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: COLORS.primaryText,
                  mb: 3,
                  textAlign: "center",
                }}
              >
                Industry Impact
              </Typography>

              <Grid container spacing={2}>
                {[
                  { value: "50+", label: "Vendor Partners" },
                  { value: "100+", label: "Research Projects" },
                  { value: "24/7", label: "Support Coverage" },
                  { value: "99.9%", label: "Compliance Rate" },
                ].map((stat, index) => (
                  <Grid key={index} size={{ xs: 6 }}>
                    <Box
                      sx={{
                        textAlign: "center",
                        p: 2,
                        backgroundColor: `${COLORS.secondary}08`,
                        borderRadius: 2,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: `${COLORS.secondary}12`,
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          color: COLORS.secondary,
                          lineHeight: 1,
                          mb: 0.5,
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          color: COLORS.mutedText,
                          fontWeight: 500,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>

        {/* Transformation Statement */}
        <Box
          sx={{
            mt: 8,
            p: { xs: 4, md: 6 },
            backgroundColor: "#FFFFFF",
            borderRadius: 3,
            border: `1px solid ${COLORS.border}`,
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(45deg, ${COLORS.secondary}08, ${COLORS.background})`,
              opacity: 0.5,
            }}
          />
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: 700,
                color: COLORS.primaryText,
                mb: 3,
              }}
            >
              Driving the Future of Healthcare Innovation
            </Typography>
            <Typography
              sx={{
                fontSize: "1.125rem",
                color: COLORS.mutedText,
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Partnering with healthcare providers, research institutions, and
              technology vendors to create sustainable, innovative solutions
              that transform patient care and medical research.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LeadingThroughCrisis;
