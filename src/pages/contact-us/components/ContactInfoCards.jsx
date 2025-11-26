// ContactInfoCards.jsx
import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Call, Mail, LocationOn } from "@mui/icons-material";

const InfoCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  backdropFilter: "blur(10px)",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  border: "1px solid rgba(0, 200, 255, 0.2)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 40px rgba(0, 200, 255, 0.1)",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#E0F7FF",
  borderRadius: "12px",
  padding: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "16px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#B3F0FF",
    boxShadow: "0 0 20px rgba(0, 200, 255, 0.4)",
  },
}));

const ContactInfoCards = () => {
  const info = [
    {
      icon: <Call sx={{ color: "#00C8FF", fontSize: "24px" }} />,
      title: "PHONE",
      value: "+65-69800842",
    },
    {
      icon: <Mail sx={{ color: "#00C8FF", fontSize: "24px" }} />,
      title: "EMAIL",
      value: "contact@dnainfotech.com.sg",
    },
    {
      icon: <LocationOn sx={{ color: "#00C8FF", fontSize: "24px" }} />,
      title: "ADDRESS",
      value: "105 Cecil Street, The Octagon, Singapore - 069534",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: "#F8FCFF",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: "#00C8FF",
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.5rem" },
            mb: 1,
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          DNA Infotech Pte. Ltd.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
            gap: { xs: 2, md: 3 },
            mt: 4,
          }}
        >
          {info.map((item, index) => (
            <InfoCard key={index}>
              <CardContent>
                <IconWrapper>{item.icon}</IconWrapper>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666666",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    mb: 1,
                    textTransform: "uppercase",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#1A1A1A",
                    fontWeight: 600,
                    fontSize: "1rem",
                    lineHeight: 1.4,
                  }}
                >
                  {item.value}
                </Typography>
              </CardContent>
            </InfoCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ContactInfoCards;
