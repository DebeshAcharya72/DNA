import React from "react";
import HeroSection from "./components/HeroSection";
import HomeLayout from "./home-layout/HomeLayout";
import AboutUsSection from "./components/AboutUsSection";
import OurServicesSection from "./components/OurServicesSection";
import IndustryExpertiseSection from "./components/IndustryExpertiseSection";
import CareersSection from "./components/CareersSection";

export default function Home() {
  return (
    <HomeLayout>
      <HeroSection />
      <AboutUsSection />
      <OurServicesSection />
      <IndustryExpertiseSection />
      <CareersSection />
    </HomeLayout>
  );
}
