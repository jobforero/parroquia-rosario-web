"use client";
import { useState } from "react";
import { Capilla } from "../lib/data";

// Layout Components
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";

// Section Components
import HeroSection from "../components/sections/HeroSection";
import CapillasSection from "../components/sections/CapillasSection";
import HistoriaSection from "../components/sections/HistoriaSection";
import DocumentalesSection from "../components/sections/DocumentalesSection";
import HorariosSection from "../components/sections/HorariosSection";

// Modal Component
import CapillaModal from "../components/cards/CapillaModal";

export default function ParroquiaHomepage() {
  const [selectedCapilla, setSelectedCapilla] = useState<Capilla | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <Header />
      <Navigation />
      <HeroSection />
      <CapillasSection onCapillaClick={setSelectedCapilla} />
      <HistoriaSection />
      <DocumentalesSection />
      <HorariosSection />
      <Footer />

      {selectedCapilla && (
        <CapillaModal
          capilla={selectedCapilla}
          onClose={() => setSelectedCapilla(null)}
        />
      )}
    </div>
  );
}
