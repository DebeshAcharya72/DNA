import React from "react";
import InfrastructureHero from "./InfrastructureHero";
import HomeLayout from "./../../home/home-layout/HomeLayout";
import InfrastructureManagementCard from "./InfrastructureManagementCard";
import BusinessStrategy from "./BusinessStrategy";

export default function InfrastructureManagement() {
  return (
    <HomeLayout>
      <InfrastructureHero />
      <InfrastructureManagementCard />
      <BusinessStrategy />
    </HomeLayout>
  );
}
