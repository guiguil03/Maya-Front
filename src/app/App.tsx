import React from 'react';
import Navigation from './components/sections/Navigation';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FAQSection from './components/sections/FAQSection';
import CTASection from './components/sections/CTASection';
import Footer from './components/sections/Footer';
import PricingSection from './components/sections/PricingSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
