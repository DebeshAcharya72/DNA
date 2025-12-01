import React from "react";
import HomeLayout from "../../home/home-layout/HomeLayout";
import HealthcareHero from "./components/HealthcareHero";
import LeadingThroughCrisis from "./components/LeadingThroughCrisis";

export default function HealthCare() {
  return (
    <HomeLayout>
      <HealthcareHero />
      <LeadingThroughCrisis />
    </HomeLayout>
  );
}
