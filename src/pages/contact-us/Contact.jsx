import React from "react";
import HomeLayout from "../home/home-layout/HomeLayout";
import HeroSection from "./components/HeroSection";
import ContactInfoCards from "./components/ContactInfoCards";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  return (
    <HomeLayout>
      <HeroSection />
      <ContactInfoCards />
      <ContactForm />
    </HomeLayout>
  );
}
