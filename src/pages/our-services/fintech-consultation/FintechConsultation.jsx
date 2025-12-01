import React from "react";
import HomeLayout from "../../home/home-layout/HomeLayout";
import FintechHero from "./components/FintechHero";
import FutureVision from "./components/FutureVision";

export default function FintechConsultation() {
  return (
    <HomeLayout>
      <FintechHero />
      <FutureVision />
    </HomeLayout>
  );
}
