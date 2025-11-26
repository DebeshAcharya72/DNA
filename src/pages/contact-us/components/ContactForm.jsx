// ContactForm.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledFormCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  backdropFilter: "blur(10px)",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  border: "1px solid rgba(0, 200, 255, 0.2)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 40px rgba(0, 200, 255, 0.1)",
  },
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #00C8FF, #00A4E4)",
  color: "#FFFFFF",
  fontWeight: 600,
  fontSize: "1rem",
  padding: "12px 24px",
  borderRadius: "8px",
  textTransform: "none",
  boxShadow: "0 4px 12px rgba(0, 200, 255, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "linear-gradient(45deg, #00B8F0, #0098D4)",
    boxShadow: "0 6px 16px rgba(0, 200, 255, 0.4)",
    transform: "translateY(-2px)",
  },
}));

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (In real app, connect to backend)");
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: "#FFFFFF",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
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
          GET IN TOUCH
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666666",
            fontSize: { xs: "0.95rem", md: "1.1rem" },
            mb: 4,
            maxWidth: "600px",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          You are one click away to explore an exciting and mutually rewarding
          engagement with DNA Infotech. Please let us have your details to have
          a non-obligatory discussion.
        </Typography>

        <StyledFormCard>
          <CardContent>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField
                label="NAME *"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    "&:hover fieldset": { borderColor: "#00C8FF" },
                    "&.Mui-focused fieldset": { borderColor: "#00C8FF" },
                  },
                }}
              />
              <TextField
                label="EMAIL *"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    "&:hover fieldset": { borderColor: "#00C8FF" },
                    "&.Mui-focused fieldset": { borderColor: "#00C8FF" },
                  },
                }}
              />
              <TextField
                label="CONTACT NO"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    "&:hover fieldset": { borderColor: "#00C8FF" },
                    "&.Mui-focused fieldset": { borderColor: "#00C8FF" },
                  },
                }}
              />
              <TextField
                label="MESSAGE *"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    "&:hover fieldset": { borderColor: "#00C8FF" },
                    "&.Mui-focused fieldset": { borderColor: "#00C8FF" },
                  },
                }}
              />
              <GradientButton type="submit" fullWidth>
                Send Message
              </GradientButton>
            </Box>
          </CardContent>
        </StyledFormCard>
      </Container>
    </Box>
  );
};

export default ContactForm;
