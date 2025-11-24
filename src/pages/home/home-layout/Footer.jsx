// Footer.jsx
import React from "react";
import { Container, Typography, Link, Box } from "@mui/material";
import { Call, Mail, LocationOn } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

// Keep your custom lightning bolt (since it matches your design)
const FooterLightningBoltIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 9L11 15H17L15 9H13Z" fill="#00C8FF" />
    <path
      d="M13 9L11 15H17L15 9H13Z"
      stroke="#00C8FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: "#0A0A0A",
  color: "#E0E0E0",
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(4),
  borderTop: "1px solid #222222",
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: "#CCCCCC",
  textDecoration: "none",
  fontSize: "0.95rem",
  fontWeight: 500,
  transition: "color 0.2s ease, transform 0.2s ease",
  display: "block",
  padding: "4px 0",
  "&:hover": {
    color: "#00C8FF",
    transform: "translateX(4px)",
  },
}));

const Footer = () => {
  const services = [
    "Digital Transformation",
    "Data Analytics",
    "Cloud Solutions",
    "Cyber Security",
    "AI & Machine Learning",
    "Custom Software Development",
  ];

  const quickLinks = [
    "Home",
    "About Us",
    "Our Services",
    "Industry",
    "Careers",
    "Contact Us",
  ];

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: { xs: 4, md: 5 },
            mb: 5,
          }}
        >
          {/* Contact */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "#00C8FF",
                fontWeight: 700,
                mb: 2,
                fontSize: "1.25rem",
              }}
            >
              Contact Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1.5,
                mb: 1.5,
              }}
            >
              <Call sx={{ color: "#00C8FF", fontSize: "1.1rem", mt: 0.4 }} />
              <Typography>+65-69800842</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1.5,
                mb: 1.5,
              }}
            >
              <Mail sx={{ color: "#00C8FF", fontSize: "1.1rem", mt: 0.4 }} />
              <Typography>contact@dnainfotech.com.sg</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
              <LocationOn
                sx={{ color: "#00C8FF", fontSize: "1.1rem", mt: 0.4 }}
              />
              <Typography>
                105 Cecil Street, The Octagon, Singapore - 069534
              </Typography>
            </Box>
          </Box>

          {/* Services & Quick Links remain unchanged */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "#00C8FF",
                fontWeight: 700,
                mb: 2,
                fontSize: "1.25rem",
              }}
            >
              Our Services
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {services.map((service) => (
                <FooterLink key={service} href="#">
                  {service}
                </FooterLink>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "#00C8FF",
                fontWeight: 700,
                mb: 2,
                fontSize: "1.25rem",
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {quickLinks.map((link) => (
                <FooterLink key={link} href="#">
                  {link}
                </FooterLink>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Footer Bottom */}
        <Box
          sx={{
            pt: 3,
            borderTop: "1px solid #222222",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1.5,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FooterLightningBoltIcon />
            <Typography variant="body2" sx={{ color: "#AAAAAA" }}>
              © 2025 DNA Infotech Pte. Ltd. All rights reserved.
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: "#AAAAAA" }}>
            Designed by{" "}
            <Link
              href="#"
              sx={{
                color: "#00C8FF",
                textDecoration: "none",
                fontWeight: 600,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Panthotech Solutions
            </Link>
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
