import React from "react";
import { Box, Typography, Container, Grid, alpha } from "@mui/material";

const MinimalTestingPhilosophy = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 8, md: 12 }}>
          {/* Left Column - Philosophy */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              {/* Our Philosophy */}
              <Box sx={{ mb: 8 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2.5rem", md: "3rem" },
                    fontWeight: 300,
                    color: "#0c1e3e",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    mb: 4,
                  }}
                >
                  Our Philosophy
                </Typography>

                <Typography
                  sx={{
                    fontSize: "1.25rem",
                    color: alpha("#0c1e3e", 0.7),
                    lineHeight: 1.6,
                    mb: 4,
                    fontWeight: 300,
                  }}
                >
                  Quality assurance is not just a phase—it's the foundation of
                  successful software delivery.
                </Typography>

                <Typography
                  sx={{
                    fontSize: "1.125rem",
                    color: alpha("#0c1e3e", 0.6),
                    lineHeight: 1.6,
                  }}
                >
                  We believe in proactive testing that catches issues before
                  they impact your users, ensuring reliability and performance
                  at every stage of development.
                </Typography>
              </Box>

              {/* Partnership Approach */}
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "1.75rem",
                    fontWeight: 300,
                    color: "#0c1e3e",
                    mb: 4,
                    position: "relative",
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: -12,
                      width: "40px",
                      height: "1px",
                      background: alpha("#0c1e3e", 0.2),
                    },
                  }}
                >
                  Partnership Approach
                </Typography>

                <Typography
                  sx={{
                    fontSize: "1.125rem",
                    color: alpha("#0c1e3e", 0.6),
                    lineHeight: 1.6,
                  }}
                >
                  We don't just test your software—we become your strategic
                  testing partner. Our collaborative approach ensures we
                  understand your business goals and deliver testing solutions
                  that align with your vision and accelerate your success.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Column - Testing Categories */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ pl: { md: 8 } }}>
              {/* Automation Testing */}
              <Box sx={{ mb: 8 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: "4px",
                      height: "40px",
                      background: "#00c8ff",
                      mr: 3,
                    }}
                  />
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: 400,
                      color: "#0c1e3e",
                    }}
                  >
                    Automation Testing
                  </Typography>
                </Box>

                <Box sx={{ pl: 7 }}>
                  {["Selenium", "Cypress", "Playwright", "API Testing"].map(
                    (item) => (
                      <Box
                        key={item}
                        sx={{
                          mb: 3,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: "24px",
                            height: "24px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 2,
                          }}
                        >
                          <Box
                            sx={{
                              width: "6px",
                              height: "6px",
                              background: "#00c8ff",
                              borderRadius: "50%",
                            }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "1.125rem",
                            color: alpha("#0c1e3e", 0.7),
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    )
                  )}
                </Box>
              </Box>

              {/* Manual Testing */}
              <Box sx={{ mb: 8 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: "4px",
                      height: "40px",
                      background: "#0c1e3e",
                      mr: 3,
                    }}
                  />
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: 400,
                      color: "#0c1e3e",
                    }}
                  >
                    Manual Testing
                  </Typography>
                </Box>

                <Box sx={{ pl: 7 }}>
                  {[
                    "Functional Testing",
                    "Usability Testing",
                    "Regression Testing",
                    "Exploratory Testing",
                  ].map((item) => (
                    <Box
                      key={item}
                      sx={{
                        mb: 3,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "24px",
                          height: "24px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mr: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: "6px",
                            height: "6px",
                            background: "#0c1e3e",
                            borderRadius: "50%",
                          }}
                        />
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "1.125rem",
                          color: alpha("#0c1e3e", 0.7),
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Industry Testing */}
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: "4px",
                      height: "40px",
                      background: "#00c8ff",
                      mr: 3,
                    }}
                  />
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: 400,
                      color: "#0c1e3e",
                    }}
                  >
                    Industry Testing
                  </Typography>
                </Box>

                <Box sx={{ pl: 7 }}>
                  {["Healthcare", "Finance", "E-commerce", "Telecom"].map(
                    (item) => (
                      <Box
                        key={item}
                        sx={{
                          mb: 3,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: "24px",
                            height: "24px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 2,
                          }}
                        >
                          <Box
                            sx={{
                              width: "6px",
                              height: "6px",
                              background: "#00c8ff",
                              borderRadius: "50%",
                            }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "1.125rem",
                            color: alpha("#0c1e3e", 0.7),
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    )
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MinimalTestingPhilosophy;
