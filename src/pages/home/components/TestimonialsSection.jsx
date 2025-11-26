// TestimonialsSection.jsx
import React, { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import StarIcon from "@mui/icons-material/Star";

// Mock images
const customer1 =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80";
const customer2 =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80";
const customer3 =
  "https://images.unsplash.com/photo-1580480717610-32d175445220?auto=format&fit=crop&w=200&h=200&q=80";
const customer4 =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80";

// Enhanced Testimonial Card
const TestimonialCard = styled(Card)(({ theme }) => ({
  background: "white",
  borderRadius: "24px",
  padding: "36px",
  boxShadow: "0 10px 32px rgba(0, 0, 0, 0.06)",
  border: "1px solid #eef4f9",
  width: "100%",
  maxWidth: "420px",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",
  flex: "0 0 auto",
  margin: "0 16px",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "320px",
    padding: "28px 20px",
  },
}));

// Decorative Shapes (subtle blue)
const ShapeLeft = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "-30px",
  top: "15%",
  width: "80px",
  height: "320px",
  borderRadius: "50px",
  background: "rgba(0, 180, 216, 0.12)",
  zIndex: 0,
}));

const ShapeRight = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "-15px",
  top: "30%",
  width: "60px",
  height: "280px",
  borderRadius: "50px",
  background: "rgba(0, 180, 216, 0.08)",
  zIndex: 0,
}));

// Scrollable Container
const ScrollableContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  overflowX: "scroll",
  scrollSnapType: "x mandatory",
  WebkitOverflowScrolling: "touch",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  gap: "24px",
  padding: "12px 0",
  scrollBehavior: "smooth",
  position: "relative",
}));

const TestimonialsSection = () => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Kate Rogers",
      title: "Graphic Designer",
      quote:
        "I needed a refund for tickets to an event that was changed last minute. I experienced great customer service and the issue was resolved in a timely manner. Thanks to agent Sandra!",
      rating: 5,
      image: customer1,
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "CTO, TechCorp",
      quote:
        "The team delivered a scalable cloud solution that reduced our costs by 40%. Their technical expertise is top-notch.",
      rating: 5,
      image: customer2,
    },
    {
      id: 3,
      name: "Sarah Williams",
      title: "Head of IT, FinanceHub",
      quote:
        "Outstanding support during our digital transformation. They understood our needs and exceeded expectations.",
      rating: 5,
      image: customer3,
    },
    {
      id: 4,
      name: "David Kumar",
      title: "VP Engineering",
      quote:
        "Highly professional, responsive, and innovative. A true partner in our success journey.",
      rating: 5,
      image: customer4,
    },
  ];

  // Clone first card for infinite effect
  const extendedTestimonials = [...testimonials, testimonials[0]];

  useEffect(() => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const cardWidth = 420; // Match maxWidth
    const gap = 24;
    const totalWidth = cardWidth + gap;

    let currentIndex = 0;

    const autoScroll = () => {
      currentIndex++;
      const targetScroll = currentIndex * totalWidth;

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });

      // Reset to 0 after last clone (index 4 → 0)
      if (currentIndex >= testimonials.length) {
        setTimeout(() => {
          container.scrollTo({
            left: 0,
            behavior: "auto", // Instant jump back
          });
          currentIndex = 0;
        }, 500); // Wait for scroll to finish
      }
    };

    intervalRef.current = setInterval(autoScroll, 5000); // Scroll every 5 seconds

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#f5fbff",
        fontFamily: '"Nunito", sans-serif',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              px: 2.5,
              py: 1,
              borderRadius: "50px",
              backgroundColor: "rgba(0, 180, 216, 0.1)",
              border: "1px solid rgba(0, 180, 216, 0.2)",
              color: "#0077b6",
              fontSize: "0.95rem",
              fontWeight: 600,
              mb: 2,
            }}
          >
            Testimonials
          </Box>

          <Typography
            variant="h2"
            sx={{
              color: "#0c1e3e",
              fontWeight: 800,
              fontSize: { xs: "2.2rem", md: "2.6rem" },
              mb: 1,
            }}
          >
            Client Feedback
          </Typography>

          <Typography
            sx={{
              color: "#4b5563",
              fontSize: "1.1rem",
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Don't just take our word for it
          </Typography>
        </Box>

        {/* Scrollable Testimonials */}
        <ScrollableContainer ref={scrollRef}>
          {extendedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`}>
              <ShapeLeft />
              <ShapeRight />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  zIndex: 2,
                }}
              >
                {/* Avatar */}
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    border: "4px solid white",
                    boxShadow: "0 6px 16px rgba(0, 180, 216, 0.15)",
                    mb: 3,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>

                {/* Name & Title */}
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#0c1e3e",
                    mb: 1,
                    textAlign: "center",
                  }}
                >
                  {testimonial.name}{" "}
                  <span
                    style={{
                      color: "#4b5563",
                      fontWeight: 500,
                      fontSize: "16px",
                    }}
                  >
                    – {testimonial.title}
                  </span>
                </Typography>

                {/* Star Rating */}
                <Box sx={{ display: "flex", mb: 2 }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      sx={{ color: "#FFD700", fontSize: "20px" }}
                    />
                  ))}
                </Box>

                {/* Quote */}
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#4b5563",
                    lineHeight: 1.7,
                    textAlign: "center",
                  }}
                >
                  “{testimonial.quote}”
                </Typography>
              </Box>
            </TestimonialCard>
          ))}
        </ScrollableContainer>

        {/* Scroll Hint */}
        <Box
          sx={{
            textAlign: "center",
            mt: 2,
            color: "#4b5563",
            fontSize: "0.875rem",
          }}
        >
          <span>Auto-scrolling — Swipe to pause</span>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
