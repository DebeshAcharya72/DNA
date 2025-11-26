// ContactSection.jsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
  Card,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// Gradient Button (refined)
const GradientButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(90deg, #00B4D8, #0096B6)",
  borderRadius: "50px",
  padding: "14px 32px",
  textTransform: "none",
  fontWeight: 700,
  fontSize: "1rem",
  color: "#fff",
  boxShadow: "0px 8px 24px rgba(0, 180, 216, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "linear-gradient(90deg, #00A4C8, #0088A8)",
    boxShadow: "0px 12px 28px rgba(0, 180, 216, 0.4)",
    transform: "translateY(-2px)",
  },
}));

// Main Card (updated)
const MainCard = styled(Card)(({ theme }) => ({
  background: "white",
  borderRadius: "24px",
  padding: "48px",
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.06)",
  border: "1px solid #eef4f9",
  [theme.breakpoints.down("md")]: {
    padding: "32px",
  },
}));

// Info Row
const InfoRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "16px",
  marginBottom: "20px",
  color: "#4b5563",
}));

const ContactSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#f5fbff",
        fontFamily: '"Nunito", sans-serif',
      }}
    >
      <Container maxWidth="lg">
        <MainCard>
          <Grid container spacing={6}>
            {/* LEFT BLOCK */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box>
                {/* Badge */}
                <Box
                  sx={{
                    background: "rgba(0, 180, 216, 0.1)",
                    color: "#0077b6",
                    display: "inline-block",
                    px: 2.5,
                    py: 1,
                    borderRadius: "50px",
                    mb: 3,
                    fontSize: "0.9rem",
                    fontWeight: 600,
                  }}
                >
                  Get in Touch
                </Box>

                <Typography
                  sx={{
                    fontSize: { xs: "2rem", md: "2.6rem" },
                    fontWeight: 800,
                    color: "#0c1e3e",
                    lineHeight: 1.2,
                    mb: 2,
                  }}
                >
                  Ready to Transform <br /> Your Business?
                </Typography>

                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#4b5563",
                    lineHeight: 1.8,
                    mb: 4,
                  }}
                >
                  Let’s discuss how we can help you achieve your technology
                  goals. Fill out the form and our team will reach out within 24
                  hours.
                </Typography>

                {/* Contact Info */}
                <InfoRow>
                  <EmailIcon sx={{ color: "#00B4D8", fontSize: 28 }} />
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#0c1e3e",
                        fontSize: "1rem",
                      }}
                    >
                      Email
                    </Typography>
                    <Typography sx={{ color: "#4b5563" }}>
                      contact@dnainfotech.com.sg
                    </Typography>
                  </Box>
                </InfoRow>

                <InfoRow>
                  <PhoneIcon sx={{ color: "#00B4D8", fontSize: 28 }} />
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#0c1e3e",
                        fontSize: "1rem",
                      }}
                    >
                      Phone
                    </Typography>
                    <Typography sx={{ color: "#4b5563" }}>
                      +65-698000842
                    </Typography>
                  </Box>
                </InfoRow>

                <InfoRow>
                  <LocationOnIcon sx={{ color: "#00B4D8", fontSize: 28 }} />
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#0c1e3e",
                        fontSize: "1rem",
                      }}
                    >
                      Location
                    </Typography>
                    <Typography sx={{ color: "#4b5563" }}>
                      105 Cecil Street, The Octagon <br />
                      Singapore 069534
                    </Typography>
                  </Box>
                </InfoRow>
              </Box>
            </Grid>

            {/* RIGHT – FORM */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box component="form" noValidate autoComplete="off">
                <Grid container spacing={3}>
                  {/* Name */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label="Name"
                      variant="outlined"
                      InputProps={{
                        sx: { borderRadius: "50px" },
                      }}
                    />
                  </Grid>

                  {/* Email */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      InputProps={{
                        sx: { borderRadius: "50px" },
                      }}
                    />
                  </Grid>

                  {/* Project Type */}
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      select
                      label="Project Type"
                      variant="outlined"
                      InputProps={{
                        sx: { borderRadius: "50px" },
                      }}
                    >
                      <MenuItem value="web">Web Development</MenuItem>
                      <MenuItem value="app">Mobile App Development</MenuItem>
                      <MenuItem value="cloud">Cloud Solutions</MenuItem>
                      <MenuItem value="ai">AI / ML Solutions</MenuItem>
                    </TextField>
                  </Grid>

                  {/* Message */}
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Message"
                      variant="outlined"
                      InputProps={{
                        sx: { borderRadius: "20px" },
                      }}
                    />
                  </Grid>

                  {/* Submit Button */}
                  <Grid size={{ xs: 12 }}>
                    <GradientButton fullWidth endIcon="→">
                      Send Message
                    </GradientButton>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </MainCard>
      </Container>
    </Box>
  );
};

export default ContactSection;
