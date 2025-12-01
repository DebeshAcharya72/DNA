import React from "react";
import GeometricTelecomHero from "./components/GeometricTelecomHero";
import HomeLayout from "../../home/home-layout/HomeLayout";
import TransformationDashboard from "./components/TransformationDashboard";
import BusinessTransformationPillars from "./components/BusinessTransformationPillars";

export default function Telecommunication() {
  return (
    <HomeLayout>
      <GeometricTelecomHero />
      <TransformationDashboard />
      <BusinessTransformationPillars />
    </HomeLayout>
  );
}
