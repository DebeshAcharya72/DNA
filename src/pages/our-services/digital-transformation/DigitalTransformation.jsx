import React, { useRef } from "react";
import HeroSection from "./components/HeroSection";
import HomeLayout from "./../../home/home-layout/HomeLayout";
import CardSection from "./components/CardSection";
import SuccessStoriesSection from "./components/SuccessStoriesSection";

export default function DigitalTransformation() {
  const aboutRef = useRef(null);
  return (
    <HomeLayout aboutRef={aboutRef}>
      <HeroSection />
      <CardSection />
      <SuccessStoriesSection />
    </HomeLayout>
  );
}
