// ContactInfoCards.jsx
import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Call, Mail, LocationOn, ArrowForward } from "@mui/icons-material";

const InfoCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  backgroundColor: "#ffffff",
  border: "1px solid rgba(0, 200, 255, 0.1)",
  padding: theme.spacing(3),
  height: "100%",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 40px rgba(0, 200, 255, 0.15)",
    borderColor: "rgba(0, 200, 255, 0.3)",
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#f0fbff",
  borderRadius: "12px",
  padding: theme.spacing(2),
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  transition: "all 0.3s ease",
  "& svg": {
    fontSize: "28px",
  },
}));

const ContactInfoCards = () => {
  const info = [
    {
      icon: <Call sx={{ color: "#00C8FF" }} />,
      title: "Phone",
      value: "+65-69800842",
      action: "Call Now",
      link: "tel:+6569800842",
    },
    {
      icon: <Mail sx={{ color: "#00C8FF" }} />,
      title: "Email",
      value: "contact@dnainfotech.com.sg",
      action: "Send Email",
      link: "mailto:contact@dnainfotech.com.sg",
    },
    {
      icon: <LocationOn sx={{ color: "#00C8FF" }} />,
      title: "Address",
      value: "105 Cecil Street, The Octagon, Singapore - 069534",
      action: "Get Directions",
      link: "https://maps.google.com/?q=105+Cecil+Street,+The+Octagon,+Singapore+069534",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "#ffffff",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #00C8FF, transparent)",
        },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: "#0c1e3e",
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.75rem" },
              mb: 2,
              letterSpacing: "-0.5px",
            }}
          >
            DNA Infotech Pte. Ltd.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              fontSize: "1.125rem",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Reach out to us through any of these channels
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 3, md: 4 },
          }}
        >
          {info.map((item, index) => (
            <InfoCard key={index} elevation={0}>
              <CardContent
                sx={{
                  p: 0,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Box>
                  <IconWrapper>{item.icon}</IconWrapper>
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#00C8FF",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      letterSpacing: "1px",
                      mb: 1,
                      display: "block",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#0c1e3e",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      lineHeight: 1.5,
                      mb: 3,
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
                <Box sx={{ mt: "auto" }}>
                  <Button
                    component="a"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<ArrowForward />}
                    sx={{
                      color: "#00C8FF",
                      fontWeight: 600,
                      textTransform: "none",
                      px: 0,
                      "&:hover": {
                        color: "#0099cc",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {item.action}
                  </Button>
                </Box>
              </CardContent>
            </InfoCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ContactInfoCards;
