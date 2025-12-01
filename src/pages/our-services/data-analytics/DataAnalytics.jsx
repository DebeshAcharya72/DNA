import React from "react";
import HomeLayout from "./../../home/home-layout/HomeLayout";
import DataAnalyticsSection from "./component/DataAnalyticsSection";
import RightCard from "./component/RightCard";
import MinimalDataAnalyticsHero from "./component/MinimalDataAnalyticsHero";

export default function DataAnalytics() {
  return (
    <HomeLayout>
      <MinimalDataAnalyticsHero />
      <DataAnalyticsSection />
      <RightCard />
    </HomeLayout>
  );
}
