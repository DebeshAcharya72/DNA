import React from "react";
import HomeLayout from "./../../home/home-layout/HomeLayout";
import HeroSection from "./components/HeroSection";
import TechnologyAreasSection from "./components/TechnologyAreasSection";
import ProductHeroSection from "./components/ProductHeroSection";

export default function ApplicationServices() {
  return (
    <HomeLayout>
      <HeroSection />
      <TechnologyAreasSection />
      <ProductHeroSection />
    </HomeLayout>
  );
}
