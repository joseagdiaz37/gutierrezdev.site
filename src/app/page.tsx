"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import WorkSection from "@/components/WorkSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Esperar un momento antes de mostrar el contenido
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#191a1c]">
      <LoadingScreen />
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation />
        <HeroSection />
        <ExpertiseSection />
        <WorkSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
