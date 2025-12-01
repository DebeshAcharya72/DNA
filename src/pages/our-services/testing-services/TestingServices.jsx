import React from "react";
import HomeLayout from "../../home/home-layout/HomeLayout";
import MinimalTestingHero from "./components/MinimalTestingHero";
import MinimalTestingPhilosophy from "./components/MinimalTestingPhilosophy";

export default function TestingServices() {
  return (
    <HomeLayout>
      <MinimalTestingHero />
      <MinimalTestingPhilosophy />
    </HomeLayout>
  );
}
