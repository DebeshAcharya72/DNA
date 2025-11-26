import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your pages
import Home from "./pages/home/Home";
import Contact from "./pages/contact-us/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
