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
  Alert,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Send,
  Person,
  Email,
  Phone,
  Message,
  CheckCircle,
  CloudUpload,
} from "@mui/icons-material";

// Styled Components
const StyledFormCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  backgroundColor: "#ffffff",
  border: "1px solid rgba(0, 200, 255, 0.1)",
  boxShadow: "0 4px 20px rgba(12, 30, 62, 0.08)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    boxShadow: "0 8px 32px rgba(0, 200, 255, 0.12)",
  },
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(135deg, #00C8FF 0%, #0099cc 100%)",
  color: "#FFFFFF",
  fontWeight: 600,
  fontSize: "1rem",
  padding: "14px 32px",
  borderRadius: "10px",
  textTransform: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "linear-gradient(135deg, #0099cc 0%, #0077aa 100%)",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 20px rgba(0, 200, 255, 0.3)",
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#f8fdff",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#f0fbff",
    },
    "&:hover fieldset": {
      borderColor: "#00C8FF !important",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00C8FF !important",
      borderWidth: "2px !important",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#0c1e3e",
    fontWeight: 500,
    "&.Mui-focused": {
      color: "#00C8FF",
    },
  },
}));

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    message: "",
    file: null,
  });

  const [fileName, setFileName] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size must be less than 2MB");
        return;
      }
      setFormData({ ...formData, file });
      setFileName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Show success
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);

    // Reset form
    setFormData({
      name: "",
      email: "",
      contactNo: "",
      message: "",
      file: null,
    });
    setFileName("");
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "#f5fbff",
        position: "relative",
      }}
    >
      <Container maxWidth="md">
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
            Get in Touch
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              fontSize: { xs: "1rem", md: "1.125rem" },
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            You are one click away from exploring an exciting and mutually
            rewarding engagement with DNA Infotech.
          </Typography>
        </Box>

        {success && (
          <Alert
            icon={<CheckCircle />}
            severity="success"
            sx={{
              mb: 4,
              borderRadius: "10px",
              backgroundColor: "rgba(76, 175, 80, 0.1)",
              border: "1px solid rgba(76, 175, 80, 0.2)",
              "& .MuiAlert-message": {
                color: "#0c1e3e",
                fontWeight: 500,
              },
            }}
          >
            Message sent successfully! We'll get back to you soon.
          </Alert>
        )}

        <StyledFormCard>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              <StyledTextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person sx={{ color: "#00C8FF" }} />
                    </InputAdornment>
                  ),
                }}
              />

              <StyledTextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: "#00C8FF" }} />
                    </InputAdornment>
                  ),
                }}
              />

              <StyledTextField
                label="Contact Number"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone sx={{ color: "#00C8FF" }} />
                    </InputAdornment>
                  ),
                }}
              />

              <StyledTextField
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ mt: 1 }}>
                      <Message sx={{ color: "#00C8FF" }} />
                    </InputAdornment>
                  ),
                }}
              />

              {/* File Upload Section */}
              <Box sx={{ mb: 1 }}>
                <input
                  type="file"
                  id="file-upload"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.txt"
                />
                <label htmlFor="file-upload">
                  <Button
                    component="span"
                    startIcon={<CloudUpload />}
                    sx={{
                      color: "#00C8FF",
                      border: "1px dashed #00C8FF",
                      borderRadius: "10px",
                      px: 3,
                      py: 1.5,
                      width: "100%",
                      textTransform: "none",
                      backgroundColor: "rgba(0, 200, 255, 0.05)",
                      "&:hover": {
                        backgroundColor: "rgba(0, 200, 255, 0.1)",
                        borderColor: "#0099cc",
                      },
                    }}
                  >
                    {fileName
                      ? `Uploaded: ${fileName}`
                      : "Upload CV/Resume (Max 2MB)"}
                  </Button>
                </label>
              </Box>

              <GradientButton
                type="submit"
                fullWidth
                size="large"
                endIcon={<Send />}
              >
                Send Message
              </GradientButton>

              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  textAlign: "center",
                  color: "#999",
                  mt: 1,
                }}
              >
                We'll respond within 24 hours
              </Typography>
            </Box>
          </CardContent>
        </StyledFormCard>
      </Container>
    </Box>
  );
};

export default ContactForm;
