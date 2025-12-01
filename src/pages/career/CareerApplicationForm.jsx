import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  InputAdornment,
  IconButton,
  Alert,
  styled,
} from "@mui/material";
import {
  CloudUpload,
  Person,
  Email,
  Phone,
  CheckCircle,
} from "@mui/icons-material";

// Styled components
const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // background: "#f5fbff",
  padding: theme.spacing(4),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  borderRadius: 16,
  boxShadow: "0 8px 32px rgba(0, 200, 255, 0.08)",
  backgroundColor: "white",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
  },
}));

const UploadBox = styled(Box)(({ theme, hasFile }) => ({
  border: `2px dashed ${hasFile ? "#00c8ff" : "#e0e0e0"}`,
  borderRadius: 12,
  padding: theme.spacing(4),
  textAlign: "center",
  cursor: "pointer",
  transition: "all 0.3s ease",
  backgroundColor: hasFile ? "rgba(0, 200, 255, 0.05)" : "#fafafa",
  "&:hover": {
    borderColor: "#00c8ff",
    backgroundColor: "rgba(0, 200, 255, 0.02)",
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(135deg, #00c8ff 0%, #0099cc 100%)",
  color: "white",
  padding: theme.spacing(1.5),
  borderRadius: 10,
  fontWeight: 600,
  fontSize: "1rem",
  textTransform: "none",
  boxShadow: "0 4px 14px rgba(0, 200, 255, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "linear-gradient(135deg, #0099cc 0%, #0077aa 100%)",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 20px rgba(0, 200, 255, 0.4)",
  },
}));

function CareerApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cv: null,
  });

  const [fileName, setFileName] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size must be less than 2MB");
        return;
      }
      setFormData((prev) => ({ ...prev, cv: file }));
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate API call
    console.log("Form submitted:", formData);

    // Show success message
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      cv: null,
    });
    setFileName("");
  };

  return (
    <StyledContainer maxWidth="sm">
      <StyledPaper elevation={0}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              color: "#0c1e3e",
              fontWeight: 700,
              mb: 1,
              background: "linear-gradient(135deg, #0c1e3e 0%, #00c8ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Apply at DNA INFOTECH
          </Typography>
          <Typography variant="body1" sx={{ color: "#666", mb: 3 }}>
            To submit your resume, please fill in the form below or send it to{" "}
            <Box component="span" sx={{ color: "#00c8ff", fontWeight: 600 }}>
              contact@dnainfotech.com.sg
            </Box>
          </Typography>
        </Box>

        {/* Success Message */}
        {success && (
          <Alert
            icon={<CheckCircle fontSize="inherit" />}
            severity="success"
            sx={{
              mb: 3,
              borderRadius: 2,
              border: "1px solid #4caf50",
              backgroundColor: "rgba(76, 175, 80, 0.1)",
            }}
          >
            Application submitted successfully! We'll get back to you soon.
          </Alert>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#0c1e3e",
                fontWeight: 600,
                mb: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Person sx={{ fontSize: 20, color: "#00c8ff" }} />
              Name of Applicant
            </Typography>
            <TextField
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  backgroundColor: "#f8fdff",
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#00c8ff",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#00c8ff",
                    borderWidth: 2,
                  },
                },
              }}
            />
          </Box>

          {/* Email Field */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#0c1e3e",
                fontWeight: 600,
                mb: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Email sx={{ fontSize: 20, color: "#00c8ff" }} />
              Email Address
            </Typography>
            <TextField
              fullWidth
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              required
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  backgroundColor: "#f8fdff",
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#00c8ff",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#00c8ff",
                    borderWidth: 2,
                  },
                },
              }}
            />
          </Box>

          {/* Phone Field */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#0c1e3e",
                fontWeight: 600,
                mb: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Phone sx={{ fontSize: 20, color: "#00c8ff" }} />
              Contact Number
            </Typography>
            <TextField
              fullWidth
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+65 1234 5678"
              required
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  backgroundColor: "#f8fdff",
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#00c8ff",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#00c8ff",
                    borderWidth: 2,
                  },
                },
              }}
            />
          </Box>

          {/* Upload CV Section */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#0c1e3e",
                fontWeight: 600,
                mb: 1,
              }}
            >
              Upload CV
            </Typography>

            <input
              type="file"
              id="cv-upload"
              style={{ display: "none" }}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt"
            />

            <label htmlFor="cv-upload">
              <UploadBox hasFile={!!fileName}>
                <CloudUpload
                  sx={{
                    fontSize: 48,
                    color: fileName ? "#00c8ff" : "#b0b0b0",
                    mb: 2,
                  }}
                />

                {fileName ? (
                  <>
                    <Typography
                      variant="h6"
                      sx={{ color: "#0c1e3e", fontWeight: 600, mb: 1 }}
                    >
                      {fileName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
                      Click or drag to replace file
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography
                      variant="h6"
                      sx={{ color: "#0c1e3e", fontWeight: 600, mb: 1 }}
                    >
                      Upload your CV/Resume
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
                      Drag & drop or click to browse
                    </Typography>
                  </>
                )}

                <Typography
                  variant="caption"
                  sx={{
                    color: "#999",
                    display: "block",
                    backgroundColor: "rgba(0, 200, 255, 0.1)",
                    padding: "4px 12px",
                    borderRadius: 4,
                    display: "inline-block",
                  }}
                >
                  Max file size 2 MB
                </Typography>
              </UploadBox>
            </label>
          </Box>

          {/* Submit Button */}
          <SubmitButton
            fullWidth
            type="submit"
            size="large"
            endIcon={<CheckCircle />}
          >
            Submit Application
          </SubmitButton>

          {/* Note */}
          <Typography
            variant="caption"
            sx={{
              display: "block",
              textAlign: "center",
              color: "#999",
              mt: 2,
            }}
          >
            By submitting, you agree to our privacy policy and terms of service
          </Typography>
        </form>
      </StyledPaper>
    </StyledContainer>
  );
}

export default CareerApplicationForm;
