import React from "react";
import BankingHeroBanner from "./components/BankingHeroBanner";
import HomeLayout from "../../home/home-layout/HomeLayout";
import FintechTransformation from "./components/FintechTransformation";

export default function Banking() {
  return (
    <HomeLayout>
      <BankingHeroBanner />
      <FintechTransformation />
    </HomeLayout>
  );
}
