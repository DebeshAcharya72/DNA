import React, { useRef, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import HomeLayout from "./home-layout/HomeLayout";
import AboutUsSection from "./components/AboutUsSection";
import OurServicesSection from "./components/OurServicesSection";
import IndustryExpertiseSection from "./components/IndustryExpertiseSection";
import CareersSection from "./components/CareersSection";
import HowWeWorkSection from "./components/HowWeWorkSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const aboutRef = useRef(null);

  useEffect(() => {
    // Check if the URL ends with #about
    if (window.location.hash === "#about") {
      // Scroll after a short delay to ensure DOM is ready
      const timeoutId = setTimeout(() => {
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);

      // Optional: clean up hash from URL (keeps it clean)
      window.history.replaceState({}, document.title, window.location.pathname);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  return (
    <HomeLayout aboutRef={aboutRef}>
      <HeroSection />
      <div ref={aboutRef} id="about">
        {" "}
        {/* Added id for semantic clarity */}
        <AboutUsSection />
      </div>
      <OurServicesSection />
      <HowWeWorkSection />
      <IndustryExpertiseSection />
      <TestimonialsSection />
      <CareersSection />
      <ContactSection />
    </HomeLayout>
  );
}
