import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Link,
  Menu,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// ------------------ STYLES ------------------

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.7)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
  borderBottom: "1px solid rgba(255,255,255,0.3)",
}));

const LightningBoltIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="#00C8FF"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 2L3 14H11L9 22L19 10H11L13 2Z" />
  </svg>
);

// ------------------ MAIN HEADER COMPONENT ------------------

const Header = ({ aboutRef }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenServices = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseServices = () => {
    setAnchorEl(null);
  };

  // Dropdown menu items
  const servicesList = [
    "Digital Transformation",
    "Data Analytics",
    "Cloud Solutions",
    "Cyber Security",
    "AI & Machine Learning",
    "Custom Software Development",
  ];

  return (
    <StyledAppBar elevation={0} position="sticky">
      <Toolbar
        sx={{
          justifyContent: "space-between",
          paddingX: { xs: 2, md: 4 },
          minHeight: { xs: 56, md: 64 },
        }}
      >
        {/* Logo Section */}
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

        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 1.5, sm: 2.4, md: 3 },
            alignItems: "center",
          }}
        >
          {/* Home */}
          <Link
            href="/"
            sx={{
              color: "#00C8FF",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            Home
          </Link>

          {/* About */}
          <Typography
            onClick={() => {
              aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
            }}
            sx={{
              color: "#333",
              textDecoration: "none",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: { xs: "0.875rem", sm: "1rem" },
              "&:hover": { color: "#00C8FF" },
            }}
          >
            About Us
          </Typography>

          {/* OUR SERVICES dropdown */}
          <Typography
            onClick={handleOpenServices}
            sx={{
              color: "#333333",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: { xs: "0.875rem", sm: "1rem" },
              "&:hover": { color: "#00C8FF" },
            }}
          >
            Our Services
          </Typography>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseServices}
            PaperProps={{
              sx: {
                mt: 1,
                borderRadius: 2,
                minWidth: 250,
                background: "rgba(255, 255, 255, 0.95)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                backdropFilter: "blur(8px)",
              },
            }}
          >
            {servicesList.map((service, index) => (
              <MenuItem
                key={index}
                sx={{
                  fontWeight: 500,
                  paddingY: 1,
                  "&:hover": {
                    backgroundColor: "rgba(0,200,255,0.1)",
                    color: "#00C8FF",
                  },
                }}
                onClick={handleCloseServices}
              >
                {service}
              </MenuItem>
            ))}
          </Menu>

          {/* Industry */}
          <Link
            href="#"
            sx={{
              color: "#333",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: { xs: "0.875rem", sm: "1rem" },
              "&:hover": { color: "#00C8FF" },
            }}
          >
            Industry
          </Link>

          {/* Careers */}
          <Link
            href="#"
            sx={{
              color: "#333",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: { xs: "0.875rem", sm: "1rem" },
              "&:hover": { color: "#00C8FF" },
            }}
          >
            Careers
          </Link>

          {/* Contact */}
          <Link
            href="/contact-us"
            sx={{
              color: "#333",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: { xs: "0.875rem", sm: "1rem" },
              "&:hover": { color: "#00C8FF" },
            }}
          >
            Contact Us
          </Link>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
