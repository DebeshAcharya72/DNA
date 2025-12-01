// Header.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Link,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";

// ------------------ STYLES ------------------

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
  borderBottom: "1px solid rgba(0,0,0,0.05)",
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

// Service name to route mapping
const serviceRoutes = {
  "Digital Transformation": "/digital-transformation",
  "Data Analytics": "/data-analytics",
  "Cloud Solutions": "/cloud-solutions",
  "Cyber Security": "/cyber-security",
  "AI & Machine Learning": "/ai-ml",
  "Custom Software Development": "/custom-software",
  "Application Services": "/application-services",
  "Infrastructure Management": "/infrastructure-management",
  "Fintech Consultation": "/fintech-consultation",
  "Testing Services": "/testing-services",
};

// Industry name to route mapping
const industryRoutes = {
  TELECOMMUNICATION: "/industries/telecommunication",
  BANKING: "/industries/banking",
  HEALTHCARE: "/industries/healthcare",
};

// Only the services you want linked
const linkedServices = new Set([
  "Digital Transformation",
  "Data Analytics",
  "Application Services",
  "Infrastructure Management",
  "Fintech Consultation",
  "Testing Services",
]);

// Full dropdown list
const servicesList = [
  "Digital Transformation",
  "Data Analytics",
  "Application Services",
  "Infrastructure Management",
  "Fintech Consultation",
  "Testing Services",
];

// Industry dropdown list
const industryList = ["TELECOMMUNICATION", "BANKING", "HEALTHCARE"];

// ------------------ MAIN HEADER COMPONENT ------------------

const Header = ({ aboutRef }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorElServices, setAnchorElServices] = useState(null);
  const [anchorElIndustry, setAnchorElIndustry] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleAboutClick = () => {
    if (window.location.pathname === "/") {
      aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#about");
    }
  };

  const handleOpenServices = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleCloseServices = () => {
    setAnchorElServices(null);
  };

  const handleOpenIndustry = (event) => {
    setAnchorElIndustry(event.currentTarget);
  };

  const handleCloseIndustry = () => {
    setAnchorElIndustry(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (route) => {
    navigate(route);
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 280, pt: 2 }}>
      <List>
        {/* Home */}
        <ListItem button onClick={() => handleNavigation("/")} sx={{ py: 1.5 }}>
          <ListItemText
            primary="Home"
            primaryTypographyProps={{
              fontWeight: 600,
              color: "#00C8FF",
            }}
          />
        </ListItem>

        {/* About */}
        <ListItem button onClick={handleAboutClick} sx={{ py: 1.5 }}>
          <ListItemText
            primary="About Us"
            primaryTypographyProps={{
              fontWeight: 600,
              color: "#333",
            }}
          />
        </ListItem>

        {/* Services Dropdown in Mobile */}
        <ListItem
          sx={{
            py: 1.5,
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography sx={{ fontWeight: 600, color: "#333", mb: 1 }}>
            Our Services
          </Typography>
          <List sx={{ width: "100%", pl: 2 }}>
            {servicesList.map((service, index) => {
              const isLinked = linkedServices.has(service);
              const route = serviceRoutes[service];

              return (
                <ListItem
                  key={index}
                  button
                  onClick={() =>
                    isLinked && route ? handleNavigation(route) : null
                  }
                  sx={{ py: 0.5 }}
                >
                  <ListItemText
                    primary={service}
                    primaryTypographyProps={{
                      fontSize: "0.9rem",
                      color: isLinked ? "#333" : "#999",
                    }}
                  />
                </ListItem>
              );
            })}
          </List>
        </ListItem>

        {/* Industry Dropdown in Mobile */}
        <ListItem
          sx={{
            py: 1.5,
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography sx={{ fontWeight: 600, color: "#333", mb: 1 }}>
            Industry
          </Typography>
          <List sx={{ width: "100%", pl: 2 }}>
            {industryList.map((industry, index) => {
              const route = industryRoutes[industry];

              return (
                <ListItem
                  key={index}
                  button
                  onClick={() => (route ? handleNavigation(route) : null)}
                  sx={{ py: 0.5 }}
                >
                  <ListItemText
                    primary={industry}
                    primaryTypographyProps={{
                      fontSize: "0.9rem",
                      color: "#333",
                    }}
                  />
                </ListItem>
              );
            })}
          </List>
        </ListItem>

        {/* Careers */}
        <ListItem button sx={{ py: 1.5 }}>
          <ListItemText
            primary="Careers"
            primaryTypographyProps={{
              fontWeight: 600,
              color: "#333",
            }}
          />
        </ListItem>

        {/* Contact */}
        <ListItem
          button
          onClick={() => handleNavigation("/contact-us")}
          sx={{ py: 1.5 }}
        >
          <ListItemText
            primary="Contact Us"
            primaryTypographyProps={{
              fontWeight: 600,
              color: "#333",
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
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

          {/* Desktop Navigation Links */}
          {!isMobile ? (
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
                  "&:hover": { opacity: 0.8 },
                }}
              >
                Home
              </Link>

              {/* About */}
              <Typography
                onClick={handleAboutClick}
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

              {/* Services Dropdown Menu */}
              <Menu
                anchorEl={anchorElServices}
                open={Boolean(anchorElServices)}
                onClose={handleCloseServices}
                PaperProps={{
                  sx: {
                    mt: 1.5,
                    borderRadius: 2,
                    minWidth: 250,
                    background: "rgba(255, 255, 255, 0.98)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(0,0,0,0.05)",
                  },
                }}
              >
                {servicesList.map((service, index) => {
                  const isLinked = linkedServices.has(service);
                  const route = serviceRoutes[service];

                  return (
                    <MenuItem
                      key={index}
                      onClick={() => {
                        handleCloseServices();
                        if (isLinked && route) {
                          navigate(route);
                        }
                      }}
                      sx={{
                        fontWeight: 500,
                        paddingY: 1.2,
                        paddingX: 2,
                        color: isLinked ? "#333" : "#999",
                        "&:hover": {
                          backgroundColor: "rgba(0,200,255,0.08)",
                          color: "#00C8FF",
                        },
                      }}
                    >
                      {service}
                      {!isLinked && (
                        <Typography
                          variant="caption"
                          sx={{ ml: 1, color: "#999", fontSize: "0.75rem" }}
                        >
                          (Coming Soon)
                        </Typography>
                      )}
                    </MenuItem>
                  );
                })}
              </Menu>

              {/* INDUSTRY dropdown */}
              <Typography
                onClick={handleOpenIndustry}
                sx={{
                  color: "#333333",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  "&:hover": { color: "#00C8FF" },
                }}
              >
                Industry
              </Typography>

              {/* Industry Dropdown Menu */}
              <Menu
                anchorEl={anchorElIndustry}
                open={Boolean(anchorElIndustry)}
                onClose={handleCloseIndustry}
                PaperProps={{
                  sx: {
                    mt: 1.5,
                    borderRadius: 2,
                    minWidth: 220,
                    background: "rgba(255, 255, 255, 0.98)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(0,0,0,0.05)",
                  },
                }}
              >
                {industryList.map((industry, index) => {
                  const route = industryRoutes[industry];

                  return (
                    <MenuItem
                      key={index}
                      onClick={() => {
                        handleCloseIndustry();
                        if (route) {
                          navigate(route);
                        }
                      }}
                      sx={{
                        fontWeight: 600,
                        paddingY: 1.2,
                        paddingX: 2,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        fontSize: "0.9rem",
                        color: "#333",
                        "&:hover": {
                          backgroundColor: "rgba(0,200,255,0.08)",
                          color: "#00C8FF",
                        },
                      }}
                    >
                      {industry}
                    </MenuItem>
                  );
                })}
              </Menu>

              {/* Careers */}
              <Link
                href="/career"
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
          ) : (
            /* Mobile Menu Button */
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ color: "#333" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </StyledAppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 280,
            boxSizing: "border-box",
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(10px)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
