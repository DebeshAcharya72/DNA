// Header.jsx
import React from "react";
import { AppBar, Toolbar, Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const LightningBoltIcon = () => (
  <svg
    width="24"
    height="24"
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

// Fixed, glassmorphic header
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  backdropFilter: "blur(10px)",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
  zIndex: 1300,
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
  },
}));

const Header = () => {
  return (
    <StyledAppBar elevation={0}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          paddingX: { xs: 2, md: 4 },
          minHeight: { xs: 56, md: 64 },
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
          <LightningBoltIcon />
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                color: "#1A1A1A",
                fontSize: { xs: "1.1rem", sm: "1.3rem" },
                letterSpacing: "-0.5px",
              }}
            >
              DNA Infotech
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#00C8FF",
                fontWeight: 600,
                fontSize: { xs: "0.75rem", sm: "0.85rem" },
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              The Power Partner
            </Typography>
          </Box>
        </Box>

        {/* Navigation — Modern, no Grid */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 1.5, sm: 2, md: 2.5 },
            alignItems: "center",
          }}
        >
          {[
            "Home",
            "About Us",
            "Our Services",
            "Industry",
            "Careers",
            "Contact Us",
          ].map((item) => (
            <Link
              key={item}
              href="#"
              sx={{
                color: item === "Home" ? "#00C8FF" : "#333333",
                textDecoration: "none",
                fontWeight: item === "Home" ? 700 : 600,
                fontSize: { xs: "0.875rem", sm: "1rem" },
                transition: "color 0.2s ease, transform 0.2s ease",
                "&:hover": {
                  color: "#00C8FF",
                  transform: "scale(1.05)",
                },
              }}
            >
              {item}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
