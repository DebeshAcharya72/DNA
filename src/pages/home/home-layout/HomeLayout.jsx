import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";

const HomeLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default HomeLayout;
