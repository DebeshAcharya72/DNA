import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your pages
import Home from "./pages/home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
