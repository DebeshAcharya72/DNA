import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your pages
import Home from "./pages/home/Home";
import Contact from "./pages/contact-us/Contact";
import DigitalTransformation from "./pages/our-services/digital-transformation/DigitalTransformation";
import DataAnalytics from "./pages/our-services/data-analytics/DataAnalytics";
import ApplicationServices from "./pages/our-services/application-services/ApplicationServices";
import InfrastructureManagement from "./pages/our-services/infrastructure-management/InfrastructureManagement";
import FintechConsultation from "./pages/our-services/fintech-consultation/FintechConsultation";
import TestingServices from "./pages/our-services/testing-services/TestingServices";
import Telecommunication from "./pages/industry/telecommunication/Telecommunication";
import Banking from "./pages/industry/banking/Banking";
import HealthCare from "./pages/industry/healthcare/HealthCare";
import Career from "./pages/career/Career";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route
          path="/digital-transformation"
          element={<DigitalTransformation />}
        />
        <Route path="/data-analytics" element={<DataAnalytics />} />
        <Route path="/application-services" element={<ApplicationServices />} />
        <Route
          path="/infrastructure-management"
          element={<InfrastructureManagement />}
        />
        <Route path="/fintech-consultation" element={<FintechConsultation />} />
        <Route path="/testing-services" element={<TestingServices />} />
        <Route
          path="/industries/telecommunication"
          element={<Telecommunication />}
        />
        <Route path="/industries/banking" element={<Banking />} />
        <Route path="/industries/healthcare" element={<HealthCare />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </BrowserRouter>
  );
}
