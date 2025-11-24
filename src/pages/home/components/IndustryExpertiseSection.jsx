// IndustryExpertiseSection.jsx
import React from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Industry Icons (SVG)
const TelecomIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16Z" stroke="#00C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12L12 12.01" stroke="#00C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2V4" stroke="#00C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 20V22" stroke="#00C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.93 4.93L6.34 6.34" stroke="#00C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.66 17.66L19.07 19.07" stroke="#00C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12H4" stroke="#00C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 12H22" stroke="#00C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.93 19.07L6.34 17.66" stroke="#00C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.66 6.34L19.07 4.93" stroke="#00C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BankingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21" stroke="#00C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 3V21" stroke="#00C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 7H17V17H7V7Z" stroke="#00C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HealthcareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.03L12 21.35Z" stroke="#00C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Glassmorphic Card
const GlassCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  border: '1px solid rgba(0, 200, 255, 0.2)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  '&:hover': {
    transform: 'translateY(-6px) scale(1.02)',
    boxShadow: '0 16px 48px rgba(0, 200, 255, 0.15)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    border: '1px solid rgba(0, 200, 255, 0.4)',
  },
}));

// Icon Wrapper with Glow
const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#E0F7FF',
  borderRadius: '12px',
  padding: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '20px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#B3F0FF',
    boxShadow: '0 0 20px rgba(0, 200, 255, 0.4)',
    transform: 'scale(1.1)',
  },
}));

// Gradient Button
const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #00C8FF, #00A4E4)',
  color: '#FFFFFF',
  fontWeight: 600,
  fontSize: '0.875rem',
  padding: '8px 24px',
  borderRadius: '8px',
  textTransform: 'uppercase',
  boxShadow: '0 4px 12px rgba(0, 200, 255, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(45deg, #00B8F0, #0098D4)',
    boxShadow: '0 6px 16px rgba(0, 200, 255, 0.4)',
    transform: 'translateY(-2px)',
  },
}));

const IndustryExpertiseSection = () => {
  const industries = [
    {
      title: 'Telecom & Engineering',
      description: 'Innovative solutions for telecommunications and engineering sectors.',
      icon: <TelecomIcon />,
    },
    {
      title: 'Banking & Insurance',
      description: 'Secure and compliant technology solutions for financial services.',
      icon: <BankingIcon />,
    },
    {
      title: 'Healthcare',
      description: 'Advanced healthcare technology for better patient outcomes.',
      icon: <HealthcareIcon />,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: '#F8FCFF', // Ultra light blue background
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: '#00C8FF',
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '2.5rem' },
            mb: 1,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              backgroundColor: '#00C8FF',
              borderRadius: '2px',
            },
          }}
        >
          INDUSTRY EXPERTISE
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#666666',
            fontSize: { xs: '1rem', md: '1.125rem' },
            mb: 4,
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          Specialized solutions for key industries
        </Typography>

        {/* Industry Cards Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
            gap: { xs: 2, md: 3 },
          }}
        >
          {industries.map((industry, index) => (
            <GlassCard key={index}>
              <CardContent>
                <IconWrapper>{industry.icon}</IconWrapper>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    color: '#1A1A1A',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    mb: 1,
                    lineHeight: 1.3,
                  }}
                >
                  {industry.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#555555',
                    fontSize: '0.875rem',
                    mb: 2,
                    lineHeight: 1.6,
                    textAlign: 'left',
                  }}
                >
                  {industry.description}
                </Typography>
                <GradientButton>Know More</GradientButton>
              </CardContent>
            </GlassCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default IndustryExpertiseSection;